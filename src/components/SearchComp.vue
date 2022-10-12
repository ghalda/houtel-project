<template>
  <div id="search">
    <div class="row">
        <div class="col-lg-12">
            <form class="d-flex justify-content-center" role="search">
              <input
                class="form-control"
                type="search"
                placeholder="Cari Hotel Impianmu..."
                aria-label="Cari Hotel Impianmu..."
              />
            </form>
          </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SearchComp'
}
</script>

<style>
@media only screen and (min-width: 992px) {
  #search .col-lg-12 {
    transform: translate(0,-50%);
  }
  #search form input {
      width: 610px;
      border-radius: 10px;
      height: 70px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  }

  #search form input[type=search] {
      background-image: url('../assets/icon-search.png');
      background-position: 20px 50%;
      background-repeat: no-repeat;
      padding: 12px 85px;
  }

  #search form input::placeholder {
      color: #CDCDCD;
  }
}

@media only screen and (max-width: 992px) {
  #search .col-lg-12 {
    transform: translate(0,-50%);
  }
  #search form input {
      width: 610px;
      border-radius: 10px;
      height: 70px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  }

  #search form input[type=search] {
      background-image: url('../assets/icon-search.png');
      background-position: 20px 50%;
      background-repeat: no-repeat;
      padding: 12px 85px;
  }

  #search form input::placeholder {
      color: #CDCDCD;
  }
}
</style>