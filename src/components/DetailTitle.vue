<template>
<div id="detail-title">
    <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-6">
            <img src="../assets/amaris.png" alt="amaris-hotel">
          </div>
          <div class="col-lg-5">
            <h1 class="mb-4">Amaris Hotel Palembang</h1>
            <p class="mb-4">Jalan Inspektur Marzuki - Kota Palembang</p>
            <div class="ratings d-flex mt-4">
                <img src="../assets/star-icon.png" alt="star">
                <img src="../assets/star-icon.png" alt="star">
                <img src="../assets/star-icon.png" alt="star">
                <img src="../assets/star-icon.png" alt="star">
                <img src="../assets/star-icon.png" alt="star">
                <p class="star-text">4,5rb Rate</p>
            </div>
            <router-link to="/PaymentPage" class="btn btn-primary my-4">Pesan Sekarang!</router-link>
        </div>
        </div>
    </div>
</div> 
</template>

<script>
export default {
    name: 'DetailTitle'
}
</script>

<style>
    #detail-title .col-lg-6 img{
    width: 100%;
    border-radius: 10px;
    }

    #detail-title .col-lg-5 .ratings{
        gap: 20px;
    }

@media only screen and (max-width: 992px) {
    #detail-title .col-lg-5{
        text-align: center;
        margin-top: 20px;
    }
}
</style>