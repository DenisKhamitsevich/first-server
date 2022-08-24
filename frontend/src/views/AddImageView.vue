<template>
  <nav>
    <a class="back" href="/main">Back</a>
  </nav>
  <h1>Add new photo:</h1>
  <p v-if="error" class="error">Photo should be max 1280px (by height or width) and less than 2 MiB </p>
  <form @submit.prevent="SaveFile()">
    <input type="file" accept=".png, .jpeg, .jpg" @change="UploadImage()" required
    />
    <p class="info_paragraph">Select location on the map ...</p>
    <div id="map"></div>
    <p class="info_paragraph">or set it manually:</p>
    <p>latitude:</p>
    <input type="text" class="input_field" v-model="coords[0]" required>
    <p>longitude:</p>
    <input type="text" class="input_field" v-model="coords[1]" required>
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
      error: false,
      coords: [],
      uploadedImage: ''
    }
  },
  mounted() {
    this.$nextTick(function () {
      ymaps.ready(() => {
        const myMap = new ymaps.Map('map', {
          center: [53.893009, 27.567444],
          zoom: 10
        });
        myMap.events.add('click', (e) => {
          if (!myMap.balloon.isOpen()) {
            this.coords = e.get('coords');
            myMap.balloon.open(this.coords, {
              contentHeader: 'Photo was taken here!',
              contentBody:
                '<p>Coordinates: ' + [
                  this.coords[0].toPrecision(6),
                  this.coords[1].toPrecision(6)
                ]
            });
          } else {
            myMap.balloon.close();
          }
        })
      })
    })
  },
  methods: {
    UploadImage() {
      const file = document.querySelector('input[type=file]').files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        this.uploadedImage = reader.result;
      }
      reader.readAsDataURL(file);
      this.uploadedImage = reader.result;
    },
    SaveFile(){
      const user = JSON.stringify({base64Image: this.uploadedImage, lat: this.coords[0], lng: this.coords[1], categories: this.categories.split(',')})
      const customConfig = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }
      axios.post('/api/image', user, customConfig).then(response => {
        this.$router.push('/main')
      }).catch((error) => {
        if(error.response.status===400)
        this.error = true
        console.log(error.response.status)
      })

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

.error{
  font-size: 20px;
  background-color: #ff4c3d;
}
.info_paragraph {
  font-size: 25px;
}
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

.save:hover {
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
