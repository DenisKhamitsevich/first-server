<template>
  <nav>
    <a class="back" href="/main">Back</a>
  </nav>
  <h1>Change photo:</h1>
  <form @submit.prevent="SaveFile()">
    <img v-bind:src="'data:image/jpeg;base64,'+image.url" alt="image" class="image"/>
    <p>latitude:</p>
    <input type="text" class="input_field" v-model="image.lat" required>
    <p>longitude:</p>
    <input type="text" class="input_field" v-model="image.lng" required>
    <p>category(s) (comma separated):</p>
    <input type="text" class="input_field" v-model="categories" required>
    <p>
      <input type="submit" class="save" value="Save">
    </p>
  </form>

</template>


<script>
import axios from 'axios'
import YandexMap from '../mapScript'

export default {

  data() {
    return {
      categories: '',
      coords: [],
      image: ''
    }
  },
  mounted() {
    this.$nextTick(function () {
      axios.get('/api/image/'+this.$route.params.id).then(response => {
        this.image=response.data.data
        for (let i = 0; i <this.image.categories.length ; i++)
        {
          if(i!=0)
            this.categories+=','
          this.categories+=this.image.categories[i]
        }
      }).catch((error) => {
        console.log(error.response.status)
      })

    })
  },
  methods: {
    SaveFile(){
      const photo = JSON.stringify({base64Image: this.image.url, lat: this.image.lat, lng: this.image.lng, categories: this.categories.split(',')})
      const customConfig = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }
      axios.put('/api/image/'+this.image.id, photo, customConfig).then(response => {
        this.$router.push('/main')
      }).catch((error) => {
        if(error.response.status===400)
          this.error = true
        console.log(error.response.status)
      })

      console.log(this.categories.split(','))

    }
  }
}
</script>

<style>
.save {
  margin: 20px 0 0 0;
  width: 95px;
  font-size: 25px;
  height: 42px;
  padding: 5px;
  background-color: orange;
  border-radius: 20px;
  color: white;
  border: none;
  text-decoration: none;
}

.save :hover {
  opacity: 0.5;
}

.save:active {
  transform: translateY(4px);
}
.input_field {
  height: 30px;
  width: 200px;
  border: 1px solid lightblue;
  outline: none;
  font-size: 15px;
}
.back{
  color: blue;
  text-decoration: none;
}
</style>
