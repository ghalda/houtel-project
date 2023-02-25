<template>
  <div id="ListHotel">
    <header-comp />
    <h1 class="text-center my-5 fw-bold">
      Temukan Hotel <br />
      yang anda impikan!
    </h1>
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
    <div class="title-box my-5">
      <p>Rekomendasi Hotel Top Palembang</p>
    </div>
    <!-- <hotel-list/> -->
    <div class="row">
      <div class="col-lg-4" v-for="hotel in listhotel.hotel" :key="hotel.id">
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
              <router-link
                :to="'/DetailHotel/' + hotel.id"
                class="btn btn-primary"
                >Pesan Sekarang!</router-link
              >
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
    <footer-comp />
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";
// import SearchComp from "@/components/SearchComp.vue";
import axios from "axios";
// import HotelList from '@/components/HotelList.vue'

export default {
  name: "ListHotel",
  components: {
    HeaderComp,
    FooterComp,
    // SearchComp,
    // HotelList
  },

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
            "http://127.0.0.1:8000/api/list-hotel"
          );
        } else {
          this.response = await axios.get(
            "http://127.0.0.1:8000/api/search-hotel/?keyword=" +
              this.keyword
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
#ListHotel #search .col-lg-12 {
  transform: none;
}
#ListHotel #search form input {
  box-shadow: none;
}
#ListHotel .title-box {
  background: #b4dbff;
  color: #39a0ff;
  text-align: center;
  padding: 20px;
  font-weight: 600;
}

#ListHotel .title-box p {
  margin: 0;
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
