<template>
  <div id="payment-title">
    <div class="container">
        <div class="row gap-4 align-items-center">
          <div class="col-lg-4">
            <img src="../assets/amaris.png" alt="amaris-hotel">
          </div>
          <div class="col-lg-5">
            <h1 class="mb-4">Amaris Hotel Palembang</h1>
            <p class="mb-4">Jalan Inspektur Marzuki - Kota Palembang</p>
            <div class="ratings d-flex mt-4 align-items-center">
                <img src="../assets/star-icon.png" alt="star">
                <img src="../assets/star-icon.png" alt="star">
                <img src="../assets/star-icon.png" alt="star">
                <img src="../assets/star-icon.png" alt="star">
                <img src="../assets/star-icon.png" alt="star">
                <p class="star-text">4,5rb Rate</p>
            </div>
        </div>
        </div>
    </div>
</div> 
</template>

<script>
export default {
    name: 'PaymentTitle'
}
</script>

<style>
#payment-title .col-lg-4 img{
  width: 100%;
  border-radius: 10px;
}

#payment-title .col-lg-5 .ratings{
  gap: 20px;
}

@media only screen and (max-width: 992px) {
    #payment-title .col-lg-5{
      text-align: center;
      margin-top: 20px;
    }
    #payment-title .col-lg-5 .ratings{
      justify-content: center;
    }
}
</style>