<template>
    <div id="SuccessPage">
      <header-comp/>
      <h1>This is Success Page</h1>
      <footer-comp/>
    </div>
  </template>
  
  <script>
  import HeaderComp from '@/components/HeaderComp.vue'
  import FooterComp from '@/components/FooterComp.vue'
  
  export default {
      name: 'SuccessPage',
      components: {
          HeaderComp,
          FooterComp
      }
  }
  </script>
  
  <style>
  
  </style>