<template>
  <div id="HeaderComp">
    <!-- Navbar Sections -->
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo-houtel.png" alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" to="/">Beranda</router-link>
            <router-link class="nav-link" to="">Tentang Kami</router-link>
            <router-link class="nav-link" to="">Tipe Kamar</router-link>
            <button type="button" class="btn btn-primary">Hubungi Kami</button>
          </div>
        </div>
      </div>
    </nav>
    <!-- Navbar Sections End -->
  </div>
</template>

<script>
export default {
    name: 'HeaderComp'
}
</script>

<style>
</style>