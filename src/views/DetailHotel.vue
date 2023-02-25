<template>
  <div id="DetailHotel">
    <header-comp/>
    <description-hotel/>
    <footer-comp/>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import DescriptionHotel from '@/components/DescriptionHotel.vue'

export default {
    name: 'DetailHotel',
    components: {
        HeaderComp,
        FooterComp,
        DescriptionHotel
    }
}
</script>

<style>

</style>