<template>
    <div id="ConformationPage">
      <header-comp/>
      <payment-title/>
      <confirm-form/>
      <footer-comp/>
    </div>
  </template>
  
  <script>
  import HeaderComp from '@/components/HeaderComp.vue'
  import FooterComp from '@/components/FooterComp.vue'
  import PaymentTitle from '@/components/PaymentTitle.vue'
  import ConfirmForm from '@/components/ConfirmForm.vue'
  
  export default {
      name: 'ConformationPage',
      components: {
          HeaderComp,
          FooterComp,
          PaymentTitle,
          ConfirmForm
      }
  }
  </script>
  
  <style>
  
  </style>