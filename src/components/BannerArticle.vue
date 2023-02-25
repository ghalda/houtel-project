<template>
  <div id="BannerArticle">
    <!-- Article Content -->
  <section id="article-content">
      <div class="container">
        <div class="row article-content">
          <div class="col-lg-5">
            <img
            :src="'http://127.0.0.1:8000/storage/' + listbanner.gambar_banner"
              alt="banner-article"
              style="width: 100%"
            />
          </div>
          <div class="col-lg-6">
            <div class="text-article">
              <h5 style="color: #ff0000; font-weight: 600">BEST QUALITY</h5>
              <h1 style="font-weight: 600">
                Fasilitas Nyaman dan Menyenangkan
              </h1>
              <p>
                Cari Tempat Liburan dan Penginapan yang Nyaman dan Manjakan Diri
                dengan Fasilitas yang berkualitas.
              </p>
              <button type="button" class="btn btn-primary">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
<!-- Article Content End -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'BannerArticle',

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
          "http://127.0.0.1:8000/api/list-banner/?position=Bottom"
          );

        //pangil function setData dan isikan hasil request web service ke dalam parameter dataAPI yang ada di function setData
        this.setData(this.response.data.banner);
        console.log(this.response.data.banner)
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

</style>