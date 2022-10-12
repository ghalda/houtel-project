<template>
  <div id="HeroBanner">
    <!-- Hero -->
  <section id="hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 banner">
            <div class="text-banner">
              <h1>Nikmati Liburan Yang Di Impikan.</h1>
              <p>
                Liburan di Hotel dengan Fasilitas Nyaman Hanya ada di Houtel!
              </p>
              <button type="button" class="btn btn-primary">
                Booking Sekarang!
              </button>
            </div>
          </div>
        </div>
      </div>
  </section>
  <!-- Hero End -->
  </div>
</template>

<script>
export default {
    name: 'HeroBanner'
}
</script>

<style>
/* Hero */
#hero .col-lg-12,
.rec-list-city .col-lg-3 {
  position: relative;
  color: white;
  justify-content: center;
}

#hero .col-lg-12.banner {
  background: url(../assets/banner.png);
  width: 100%;
  height: 395px;
  background-size: cover;
  border-radius: 10px;
}

#hero .col-lg-12.banner .text-banner{
  width: 375px;
  margin-top: 90px;
  margin-left: 53px;
}

#hero form input {
  width: 600px;
}
/* Hero End */
</style>