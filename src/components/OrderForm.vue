<template>
  <div id="payment-title">
    <div class="container">
      <div class="row gap-4 align-items-center">
        <div class="col-lg-4">
          <img
            :src="'http://127.0.0.1:8000/storage/' + hotel.gambar"
            alt="{{ hotel.nama_hotel }}"
          />
        </div>
        <div class="col-lg-5">
          <h1 class="mb-4">{{ hotel.nama_hotel }}</h1>
          <p class="mb-4">{{ hotel.alamat }} - {{ hotel.nama_kota }}</p>
          <div class="ratings d-flex mt-4 align-items-center">
            <img src="../assets/star-icon.png" alt="star" />
            <img src="../assets/star-icon.png" alt="star" />
            <img src="../assets/star-icon.png" alt="star" />
            <img src="../assets/star-icon.png" alt="star" />
            <img src="../assets/star-icon.png" alt="star" />
            <p class="star-text">{{ hotel.rating }} Rate</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="order-details">
    <div class="container">
      <div class="row my-5">
        <div class="col-lg-7">
          <h1 class="fw-bold">Masukkan Rincian Pesanan</h1>
        </div>
        <form action="">
          <fieldset>
            <div class="col-lg-7 my-3">
              <div class="mb-3">
                <label for="Name" class="form-label fw-bold">Nama</label>
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  v-model="nama_pemesan"
                />
              </div>
            </div>
            <div class="col-lg-7 my-3">
              <div class="mb-3">
                <label for="Email" class="form-label fw-bold">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  v-model="email_pemesan"
                />
              </div>
            </div>
            <div class="col-lg-7 my-3">
              <div class="mb-3">
                <label for="Phone" class="form-label fw-bold">Telepon</label>
                <input
                  type="tel"
                  class="form-control"
                  id="Phone"
                  v-model="telp_pemesan"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="row my-5 flex-column">
        <div class="col-lg-7">
          <h1 class="fw-bold">Pilih Metode Pembayaran</h1>
        </div>
        <div class="col-lg-3 my-3">
          <div class="mb-3">
            <label for="room-type" class="form-label fw-bold">Tipe Kamar</label>
            <select id="room-type" class="form-select p-3" v-model="tipe_kamar">
              <option value="Deluxe">Deluxe</option>
              <option value="Twin">Twin</option>
              <option value="Standard Double">Standard Double</option>
            </select>
          </div>
        </div>
        <div class="col-lg-6 my-3">
          <div class="mb-3">
            <label for="room-type" class="form-label fw-bold"
              >Metode Pembayaran</label
            >
            <div class="payment d-flex align-items-start gap-5">
              <select
                id="room-type"
                class="form-select p-3"
                v-model="metode_pembayaran"
              >
                <option value="Virtual Account">Virtual Account</option>
                <option value="Transfer Manual">Transfer Manual</option>
              </select>
              <div class="payment-type d-flex align-items-start gap-5">
                <img src="../assets/mandiri-logo.png" />
                <p>
                  Mandiri Virtual Account <br />
                  <b
                    >90089181873817 <br />
                    a.n Houtel Indah</b
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <!-- <router-link to="/ConfirmationPage" class="btn btn-primary"
            >Proses Pembayaran</router-link
          > -->

          <button type="submit" class="btn btn-primary" @click="postPemesanan()">Proses Pembayaran</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "OrderForm",

  //siapkan variable penerima data dari web service atau data apapun yang ingin diwadahi
  data() {
    return {
      //sesuaikan dengan data yang ingin dipassing
      //sesuaikan tipe data untuk decalarenya
      hotel: {},
      response: {},

      //variabel
      hotel_id: this.$route.params.id,
      nama_pemesan: "",
      email_pemesan: "",
      telp_pemesan: "",
      tipe_kamar: "",
      metode_pembayaran: "",
    };
  },

  methods: {
    //fungsi untuk menjalankan hasil request web service
    setData(dataAPI) {
      //mengisikan nilai pada variabel list hotel
      this.hotel = dataAPI;
    },

    //Fungsi untuk request web services
    async getDetailHotel() {
      try {
        this.response = await axios.get(
          "http://127.0.0.1:8000/api/detail-hotel/" + this.$route.params.id
        );

        //pangil function setData dan isikan hasil request web service ke dalam parameter dataAPI yang ada di function setData
        this.setData(this.response.data.hotel);
      } catch (error) {
        console.log(error);
      }
    },

    //fungsi post pemesenanan
    async postPemesanan() {
      if (
        this.nama_pemesan == "" ||
        this.email_pemesan == "" ||
        this.telp_pemesan == "" ||
        this.tipe_kamar == "" ||
        this.metode_pembayaran == ""
      ) {
        window.alert("Isi semua data!");
      } else {
        this.response = await axios.post(
          "http://127.0.0.1:8000/api/post-pemesanan",
          {
            hotel_id: this.hotel_id,
            nama_pemesan: this.nama_pemesan,
            email_pemesan: this.email_pemesan,
            telp_pemesan: this.telp_pemesan,
            tipe_kamar: this.tipe_kamar,
            metode_pembayaran: this.metode_pembayaran,
          }
        );

        //ambill respons pada parameter success
        if(this.response.data.success == true) {
            //berpindah halaman ke halaman success
            this.$router.push({path: "/SuccessPage"});
        } else {
            window.alert(this.response.data.message);
        }
      }
    },
  },

  // function yang ingin dijalankan saat halaman dirender
  mounted() {
    this.getDetailHotel();
  },
};
</script>

<style>
#payment-title .col-lg-4 img {
  width: 100%;
  border-radius: 10px;
}

#payment-title .col-lg-5 .ratings {
  gap: 20px;
}

@media only screen and (max-width: 992px) {
  #order-details h1 {
    text-align: center;
  }
  #order-details .payment {
    flex-direction: column;
  }
  #payment-title .col-lg-5 {
    text-align: center;
    margin-top: 20px;
  }
  #payment-title .col-lg-5 .ratings {
    justify-content: center;
  }
}
</style>
