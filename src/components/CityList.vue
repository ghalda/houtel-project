<template>
<div id="CityList">
    <!-- Recommendation Hotel Based City List -->
  <div class="rec-list-city">
      <div class="container">
        <div class="row">
          <div class="col-lg-3" v-for="kota in listkota.kota" :key="kota.id">
              <div class="img-city" :style="{ backgroundImage: 'url(http://127.0.0.1:8000/storage/' + kota.cover +')' }">
                <div class="text-banner">
                <h5>{{kota.nama_kota}}</h5>
                <p>100+ Akomodasi</p>
                </div>
              </div>
          </div>
        </div>
      </div>
  </div>
<!-- Recommendation Hotel Based City List End-->
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'CityList',

    //siapkan variable penerima data dari web service atau data apapun yang ingin diwadahi
    data(){
      return{
        //sesuaikan dengan data yang ingin dipassing
        //sesuaikan tipe data untuk decalarenya
        listkota: [],
        response: {},
      }
    },

    //siapkan function reqyest web dsb
    methods: {
      //fungsi untuk menjalankan hasil request web service
      setData(dataAPI) {
        //mengisikan nilai pada variabel list kota
        this.listkota = dataAPI;
      },

      //Fungsi untuk request web services
      async getDataKota(){
        try{
          //request data ke endpoint web service
          this.response = await axios.get('http://127.0.0.1:8000/api/list-kota');

          //panngil function setData dan isikan hasil request web service ke dalam parameter dataAPI yang ada di function setData
          this.setData(this.response.data);
        } catch(error) {
          console.log(error);
        }
      },
    },

    // function yang ingin dijalankan saat halaman dirender
    mounted(){
      this.getDataKota();
    }
}
</script>

<style>
.rec-list-city .col-lg-3 .img-city { 
  width: 100%;
  height: 382px;
  background-size: cover;
  border-radius: 10px;
}

.rec-list-city .col-lg-3  .text-banner h5{
  text-align: left;
  margin-bottom: 10px;
}

</style>