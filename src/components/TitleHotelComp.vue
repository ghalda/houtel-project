<template>
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
</template>

<script>
export default {
    name: 'TitleHotelComp'
}
</script>

<style>
@media only screen and (max-width: 768px) {
  #title-hotel .all-list{
    text-align: center;
    font-weight: 600;
  }
}

@media only screen and (min-width: 768px) {
  #title-hotel .row{
    position: relative;
  }

  #title-hotel .all-list{
    text-align: right;
    font-weight: 600;
    position: absolute
  }
}
</style>