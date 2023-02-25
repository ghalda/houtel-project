<template>
  <div id="HeroBanner">
    <!-- Hero -->
  <section id="hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 banner" :style="{ backgroundImage: 'url(http://127.0.0.1:8000/storage/' + listbanner.gambar_banner +')' }">
            <div class="text-banner">
              <h1>Nikmati Liburan Yang Di Impikan.</h1>
              <p>
                Liburan di Hotel dengan Fasilitas Nyaman Hanya ada di Houtel!
              </p>
              <button type="button" class="btn btn-primary">
                Booking Sekarang!
              </button>
            </div>
          </div>
        </div>
      </div>
  </section>
  <!-- Hero End -->
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'HeroBanner',

    //siapkan variable penerima data dari web service atau data apapun yang ingin diwadahi
  data() {
    return {
      //sesuaikan dengan data yang ingin dipassing
      //sesuaikan tipe data untuk decalarenya
      listbanner: [],
      response: {},
    };
  },

  methods: {
    //fungsi untuk menjalankan hasil request web service
    setData(dataAPI) {
      //mengisikan nilai pada variabel list hotel
      this.listbanner = dataAPI;
    },

    //Fungsi untuk request web services
    async getDataBanner() {
      try {
        this.response = await axios.get(
          "http://127.0.0.1:8000/api/list-banner/?position=Top"
          );

        //pangil function setData dan isikan hasil request web service ke dalam parameter dataAPI yang ada di function setData
        this.setData(this.response.data.banner);
      } catch (error) {
        console.log(error);
      }
    },
  },

  // function yang ingin dijalankan saat halaman dirender
  mounted() {
    this.getDataBanner();
  },
}
</script>

<style>
/* Hero */
#hero .col-lg-12,
.rec-list-city .col-lg-3 {
  position: relative;
  color: white;
  justify-content: center;
}

#hero .col-lg-12.banner {
  /* background: url(../assets/banner.png); */
  width: 100%;
  height: 395px;
  background-size: cover;
  border-radius: 10px;
}

#hero .col-lg-12.banner .text-banner{
  width: 375px;
  margin-top: 90px;
  margin-left: 53px;
}

#hero form input {
  width: 600px;
}
/* Hero End */
</style>