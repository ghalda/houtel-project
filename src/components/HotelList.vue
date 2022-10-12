<template>
  <div id="HotelList">
    <!-- Recommendation Hotel List -->
  <div class="rec-list">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <img src="../assets/amaris.png" class="card-img-top" alt="alts" />
              <div class="card-body">
                <p class="card-title">Amaris Hotel Palembang</p>
                <p class="card-price">Rp 200.000</p>
                <div class="card-bottom">
                  <router-link to="/DetailHotel" class="btn btn-primary">Pesan Sekarang!</router-link>
                  <div class="card-star">
                    <img
                      src="../assets/star-icon.png"
                      alt="star"
                      class="star-icon"
                    />
                    <p class="star-text">4,5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <img src="../assets/arista.png" class="card-img-top" alt="alts" />
              <div class="card-body">
                <p class="card-title">Arista Hotel Palembang</p>
                <p class="card-price">Rp 200.000</p>
                <div class="card-bottom">
                  <router-link to="/DetailHotel" class="btn btn-primary">Pesan Sekarang!</router-link>
                  <div class="card-star">
                    <img
                      src="../assets/star-icon.png"
                      alt="star"
                      class="star-icon"
                    />
                    <p class="star-text">4,5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <img src="../assets/alts.png" class="card-img-top" alt="alts" />
              <div class="card-body">
                <p class="card-title">The Alts Hotel Palembang</p>
                <p class="card-price">Rp 200.000</p>
                <div class="card-bottom">
                  <router-link to="/DetailHotel" class="btn btn-primary">Pesan Sekarang!</router-link>
                  <div class="card-star">
                    <img
                      src="../assets/star-icon.png"
                      alt="star"
                      class="star-icon"
                    />
                    <p class="star-text">4,5</p>
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
export default {
    name: 'HotelList'
}
</script>

<style>

</style>