<template>
    <div id="payment-page">
      <header-comp/>
      <order-form/>
      <footer-comp/>
    </div>
  </template>
  
  <script>
  import HeaderComp from '@/components/HeaderComp.vue'
  import FooterComp from '@/components/FooterComp.vue'
  import OrderForm from '@/components/OrderForm.vue'

  
  export default {
      name: 'PaymentPage',
      components: {
          HeaderComp,
          FooterComp,
          OrderForm 
      }
  }
</script>
  
  <style>
  #payment-page #detail-title{
    width: 80%;
  }
  </style>