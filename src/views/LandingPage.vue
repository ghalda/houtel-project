<template>
  <div id="LandingPage">
    <header-comp/>
    <hero-banner/>
    <!-- <search-comp/>
    <title-hotel-comp/> -->
    <hotel-list/>
    <title-city-comp/>
    <city-list/>
    <banner-content/>
    <banner-article/>
    <footer-comp/>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import HeroBanner from '@/components/HeroBanner.vue'
import HotelList from '@/components/HotelList.vue'
import CityList from '@/components/CityList.vue'
import BannerArticle from '@/components/BannerArticle.vue'
import BannerContent from '@/components/BannerContent.vue'
import TitleCityComp from '@/components/TitleCityComp.vue'
// import TitleHotelComp from '@/components/TitleHotelComp.vue'
// import SearchComp from '@/components/SearchComp.vue'

export default {
    name: 'LandingPage',
    components: {
        HeaderComp,
        FooterComp,
        HeroBanner,
        HotelList,
        CityList,
        BannerArticle,
        BannerContent,
        TitleCityComp,
        // TitleHotelComp,
        // SearchComp
    }
}
</script>

<style>

</style>