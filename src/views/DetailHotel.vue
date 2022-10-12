<template>
  <div id="DetailHotel">
    <header-comp/>
    <detail-title/>
    <description-hotel/>
    <footer-comp/>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import DetailTitle from '@/components/DetailTitle.vue'
import DescriptionHotel from '@/components/DescriptionHotel.vue'

export default {
    name: 'DetailHotel',
    components: {
        HeaderComp,
        FooterComp,
        DetailTitle,
        DescriptionHotel
    }
}
</script>

<style>

</style>