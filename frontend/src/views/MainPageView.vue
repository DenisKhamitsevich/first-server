<template>
<nav>
  <a href="/addImage"  class="add">Add Image</a>
  <a href="/"  class="add logout" @click="Logout()">Logout</a>
</nav>
  <form class="search_form" @submit.prevent="FindByCategories()">
    <input type="text" placeholder="search by categories (comma separated)" v-model="categories" class="input_field">
    <input type="submit" value="search" class="search">
  </form>

  <div v-if="isSearchActive">
    <p>Categories: {{categories}}</p>
    <input type="button" value="clear" @click="ClearSearch()" class="search">
  </div>
  <h2>Select image on the map:</h2>
  <div id="mapWrapper">
    <div id="map"></div>
    <div v-if="image">
      <img v-bind:src="'data:image/jpeg;base64,'+image.url" alt="image" class="image"/>
      <p>latitude:</p>
      <p class="value_paragraph">{{image.lat}}</p>
      <p>longitude:</p>
      <p class="value_paragraph">{{image.lng}}</p>
      <p>categories:</p>
      <li v-for="item in image.categories" class="value_paragraph">
        {{ item }}
      </li>
      <input type="button" value="Change" @click="ChangeImage()" class="search change">
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'
import YandexMap from '../mapScript'

export default {

  data() {
    return {
      isSearchActive: false,
      image: '',
      images: [],
      searchImages: [],
      categories: ''
    }
  },
  mounted() {
    this.$nextTick(function () {
      axios.get('/api/image?page='+0).then(response => {
        this.images=response.data.data
        this.CreateMap(this.images)
      }).catch((error) => {
        console.log(error.response.status)
      })


    })
  },
  methods: {
    setImage(e){
      var objectId = e.get('objectId');
        this.image=this.images.find(value => value.id===objectId)
    },
    FindByCategories(){
      axios.get('/api/image/categories?categories='+this.categories).then(response => {
        this.searchImages=response.data.data
        this.image=''
        this.isSearchActive=true
        this.CreateMap(this.searchImages)
      }).catch((error) => {
        console.log(error.response.status)
      })


    },
    CreateMap(list){
      const myNode = document.getElementById("map");
      myNode.innerHTML = '';
      ymaps.ready(() => {
        const myMap = new ymaps.Map('map', {
          center: [53.893009, 27.567444],
          zoom: 10
        });

        const objectManager = new ymaps.ObjectManager({
          clusterize: true,
        });
        objectManager.objects.options.set('preset', 'islands#greenDotIcon');
        objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
        myMap.geoObjects.add(objectManager);
        for (let i = 0; i <list.length ; i++) {
          const image = JSON.stringify({type: 'Feature', id: list[i].id, geometry: {type: 'Point',
              coordinates: [list[i].lat,list[i].lng]} })
          objectManager.add(image)
        }

        objectManager.objects.events.add(['mouseenter'], this.setImage);

      })

    },
    ChangeImage(){
      this.$router.push('/changeImage/'+this.image.id)
    },
    ClearSearch(){
      this.categories=''
      this.CreateMap(this.images)
      this.image=''
      this.isSearchActive=false
    },
    Logout(){
      VueCookies.set('token' , '', 'Thu, 01-Jan-70 00:00:01 GMT')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
#map {
  width: 600px;
  height: 400px;
  margin-left: 35%;
}

p {
  font-size: 23px;
}
li{
  font-size: 17px;
}
.add {
  color: blue;
  text-decoration: none;
}
.image{
  max-height: 400px;
  max-width: 600px;
  margin-top:20px
}
.value_paragraph{
  font-size: 17px;
  font-style: italic;
}
.search_form{
  display:flex;
  margin-left: 40%;
}
.search {
  width: 60px;
  font-size: 17px;
  height: 34px;
  padding: 5px;
  background-color: orange;
  color: white;
  border: none;
  text-decoration: none;
}

.search:hover {
  opacity: 0.5;
}

.search:active {
  transform: translateY(4px);
}
.input_field {
  height: 30px;
  width: 330px;
  border: 1px solid lightblue;
  outline: none;
  font-size: 16px;
}
.change{
  width: 70px;
  margin-top:50px;
}
.logout{
  margin-left:200px
}
</style>
