<template>
 <div id="title-city">
    <div class="container">
      <div class="row">
          <div class="col-lg-12 text-center">
            <h5>Rekomendasi Hotel Berdasarkan Kota</h5>
          </div>
          <div class="col-lg-12 all-list">
            <a href="#">Lihat Semua</a>
          </div>
    </div>
    </div>
 </div>
</template>

<script>
export default {
    name: 'TitleCityComp'
}
</script>

<style>
@media only screen and (max-width: 768px) {
  #title-city .all-list{
    text-align: center;
    font-weight: 600;
  }
}

@media only screen and (min-width: 768px) {
  #title-city .row{
    position: relative;
  }

  #title-city .all-list{
    text-align: right;
    font-weight: 600;
    position: absolute
  }
}
</style>