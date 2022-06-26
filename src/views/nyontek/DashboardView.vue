<template>

  <div class="container">
    <div class="row align-item-center justify-content-center">
    <form class="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-12 p-1 mt-4">
      <input class="form-control form-control-lg mb-1 font-italic" type="text" v-model="search" placeholder="Nama Barang" />
    </form>
  </div>
    <!--  Catalog Item-->
    <div v-for="(item, index) in Sepatu" :key="index" class="d-inline-block card shadow mx-5">
      <div class="card-body">
        <img class="item" :src="Sepatu[index].gambar" alt="gambarBarang">
        <h5 class="card-title">
          {{Sepatu[index].nama_barang}}
        </h5>
        <router-link class="btn" to="/detailbarang">{{Sepatu[index].nama_barang}}</router-link>
        <p class="h6 card-text">Rp.{{Sepatu[index].harga}}</p>
        <p class="card-text">{{Sepatu[index].kategori}}</p>
        <button>
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  </div>

</template>
<script>
import axios from "axios";
  export default {
    name: "DashboardView",
    data:function() {
      return {
        Sepatu: "",
        search:""
      }
    },
    mounted(){
      this.getItem()
    },
    methods: {
      getItem(){
        axios.get(`https://web-sepatu.000webhostapp.com/read.php`)
          .then((response) => {
            this.Sepatu = response.data;
            console.log(this.Sepatu)
          }).catch((error) => {
          console.log(error);
        })
      }
    },
    computed: {
      // filterBarang : function () {
      //   return this.Sepatu.filter((sepatu) => {
      //     return sepatu.nama_barang.toLowerCase().split("-").join(" ").match(this.search);
      //   });
      // },
    }
  }
</script>
<style scoped>
  .item{
    height: 500px;
    width: 500px;
    object-fit: cover;
  }
</style>
