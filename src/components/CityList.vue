<template>
<div id="CityList">
    <!-- Recommendation Hotel Based City List -->
  <div class="rec-list-city">
      <div class="container">
        <div class="row">
          <div class="col-lg-3" >
              <div class="img-city" :style="{ backgroundImage: 'url(' + require('@/assets/palembang.png') + ')' }">
                <div class="text-banner">
                <h5>Kota <br> Palembang</h5>
                <p>100+ Akomodasi</p>
                </div>
              </div>
          </div>
          <div class="col-lg-3" >
              <div class="img-city" :style="{ backgroundImage: 'url(' + require('@/assets/denpasar.png') + ')' }">
                <div class="text-banner">
                <h5>Kota <br> Denpasar</h5>
                <p>100+ Akomodasi</p>
                </div>
              </div>
          </div>
          <div class="col-lg-3" >
              <div class="img-city" :style="{ backgroundImage: 'url(' + require('@/assets/jakarta.png') + ')' }">
                <div class="text-banner">
                <h5>Kota <br> Jakarta</h5>
                <p>100+ Akomodasi</p>
                </div>
              </div>
          </div>
          <div class="col-lg-3">
              <div class="img-city" :style="{ backgroundImage: 'url(' + require('@/assets/yogya.png') + ')' }">
                <div class="text-banner">
                <h5>Kota <br> Jogjakarta</h5>
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
export default {
    name: 'CityList'
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