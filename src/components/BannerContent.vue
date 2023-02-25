<template>
  <div id="BannerContent">
    <!-- Banner Content -->
    <div class="banner-content">
      <div class="container">
        <div class="row" style="position: relative">
          <div class="col-lg-12">
            <img
            :src="'http://127.0.0.1:8000/storage/' + listbanner.gambar_banner"
              class="img-fluid"
              alt="banner-content"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Banner Content End-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BannerContent",

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
          "http://127.0.0.1:8000/api/list-banner/?position=Middle"
        );

        //pangil function setData dan isikan hasil request web service ke dalam parameter dataAPI yang ada di function setData
        this.setData(this.response.data.banner);

        console.log(this.response.data.banner);
      } catch (error) {
        console.log(error);
      }
    },
  },

  // function yang ingin dijalankan saat halaman dirender
  mounted() {
    this.getDataBanner();
  },
};
</script>

<style></style>
