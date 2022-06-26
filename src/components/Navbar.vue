<template>
  <nav class="navbar navbar-expand-lg bg-primary bg-opacity-10">
    <div class="container-fluid">
      <router-link to="/dashboard" class="navbar-brand" href="#">ShoeSport</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/insertbarang" class="nav-link" href="#">Insert Barang</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/history" class="nav-link" href="#">History Transaksi</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar"
};
</script>

<style scoped>

</style>
