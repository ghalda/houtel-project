<template>
  <div id="HotelList">
    <!-- Recommendation Hotel List -->
    <div class="rec-list">
      <div class="container">
        <!-- SearchComp -->
        <div id="search">
          <div class="row">
            <div class="col-lg-12">
              <form class="d-flex justify-content-center" role="search">
                <input
                  v-model="keyword"
                  @keyup="getDataHotel"
                  class="form-control"
                  type="search"
                  placeholder="Cari Hotel Impianmu..."
                  aria-label="Cari Hotel Impianmu..."
                />
              </form>
            </div>
          </div>
        </div>

        <!-- Title -->
        <div id="title-hotel">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h5>Rekomendasi Hotel</h5>
              </div>
              <div class="col-lg-12 all-list">
                <router-link to="/ListHotel">Lihat Semua</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div
            class="col-lg-4"
            v-for="hotel in listhotel.hotel"
            :key="hotel.id"
          >
            <div class="card">
              <img
                :src="'http://127.0.0.1:8000/storage/' + hotel.gambar"
                class="hotel-img"
                alt="{{hotel.nama_hotel}}"
              />
              <div class="card-body">
                <p class="card-title">{{ hotel.nama_hotel }}</p>
                <p class="card-price">
                  Rp {{ Number(hotel.harga).toLocaleString() }}
                </p>
                <div class="card-bottom">
                  <router-link :to="'/DetailHotel/' + hotel.id" class="btn btn-primary"
                    >Pesan Sekarang!</router-link>
                  <div class="card-star">
                    <img
                      src="../assets/star-icon.png"
                      alt="star"
                      class="star-icon"
                    />
                    <p class="star-text">{{ hotel.rating }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Recommendation Hotel List End-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HotelList",

  //siapkan variable penerima data dari web service atau data apapun yang ingin diwadahi
  data() {
    return {
      //sesuaikan dengan data yang ingin dipassing
      //sesuaikan tipe data untuk decalarenya
      listhotel: [],
      response: {},

      //variabel untuk menampung keyword
      keyword: "",
    };
  },

  methods: {
    //fungsi untuk menjalankan hasil request web service
    setData(dataAPI) {
      //mengisikan nilai pada variabel list hotel
      this.listhotel = dataAPI;
    },

    //Fungsi untuk request web services
    async getDataHotel() {
      try {
        if (this.keyword == "") {
          //request data ke endpoint web service
          this.response = await axios.get(
            "http://127.0.0.1:8000/api/rekomendasi-hotel"
          );
        } else {
          this.response = await axios.get(
            "http://127.0.0.1:8000/api/search-rekomendasi-hotel/?keyword=" + this.keyword
          );
        }

        //pangil function setData dan isikan hasil request web service ke dalam parameter dataAPI yang ada di function setData
        this.setData(this.response.data);

        // console.log(this.response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  // function yang ingin dijalankan saat halaman dirender
  mounted() {
    this.getDataHotel();
  },
};
</script>

<style>
.hotel-img {
  height: 200px;
  object-fit: cover;
}

@media only screen and (max-width: 768px) {
  #title-hotel .all-list {
    text-align: center;
    font-weight: 600;
  }
}

@media only screen and (min-width: 768px) {
  #title-hotel .row {
    position: relative;
  }

  #title-hotel .all-list {
    text-align: right;
    font-weight: 600;
    position: absolute;
  }
}

@media only screen and (min-width: 992px) {
  #search .col-lg-12 {
    transform: translate(0, -50%);
  }
  #search form input {
    width: 610px;
    border-radius: 10px;
    height: 70px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  }

  #search form input[type="search"] {
    background-image: url("../assets/icon-search.png");
    background-position: 20px 50%;
    background-repeat: no-repeat;
    padding: 12px 85px;
  }

  #search form input::placeholder {
    color: #cdcdcd;
  }
}

@media only screen and (max-width: 992px) {
  #search .col-lg-12 {
    transform: translate(0, -50%);
  }
  #search form input {
    width: 610px;
    border-radius: 10px;
    height: 70px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  }

  #search form input[type="search"] {
    background-image: url("../assets/icon-search.png");
    background-position: 20px 50%;
    background-repeat: no-repeat;
    padding: 12px 85px;
  }

  #search form input::placeholder {
    color: #cdcdcd;
  }
}
</style>
