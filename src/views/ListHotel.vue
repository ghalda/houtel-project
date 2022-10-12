<template>
  <div id="ListHotel">
    <header-comp/>
    <h1 class="text-center my-5 fw-bold">Temukan Hotel <br> yang anda impikan!</h1>
    <search-comp/>
    <div class="title-box my-5">
      <p>Rekomendasi Hotel Top Palembang</p>
    </div>
    <hotel-list/>
    <hotel-list/>
    <footer-comp/>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import SearchComp from '@/components/SearchComp.vue'
import HotelList from '@/components/HotelList.vue'

export default {
    name: 'ListHotel',
    components: {
        HeaderComp,
        FooterComp,
        SearchComp,
        HotelList
    }
}
</script>

<style>
#ListHotel #search .col-lg-12 {
    transform: none;
}
#ListHotel #search form input {
    box-shadow: none;
}
#ListHotel .title-box{
  background: #B4DBFF;
  color:#39A0FF;
  text-align: center;
  padding: 20px;
  font-weight: 600;
}

#ListHotel .title-box p{
  margin:0;
}
</style>