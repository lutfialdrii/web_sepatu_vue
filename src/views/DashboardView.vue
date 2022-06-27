<template>
  <Navbar/>
  <div class="container">
    <div class="row align-item-center justify-content-center">
    <form class="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-12 p-1 mt-4">
      <input class="form-control form-control-lg mb-1 font-italic" type="text" v-model="search" placeholder="Nama Barang" />
    </form>
  </div>
    <!--  Catalog Item-->
    <div v-for="(item, index) in Sepatu" :key="index" class="d-inline-block card shadow m-5">
      <div class="card-body">
        <img class="item" :src="Sepatu[index].gambar" alt="gambarBarang">
        <router-link class="card-title" :to="{name : 'detailbarang', params: {idBarang: Sepatu[index].id_barang}}">
          <p class="h5"> {{Sepatu[index].nama_barang}}</p>
        </router-link>
        <p class="h6 card-text">Rp.{{Sepatu[index].harga}}</p>
        <p class="card-text">{{Sepatu[index].kategori}}</p>
        <button @click="tambahTransaksi(Sepatu[index].id_barang)">
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>

    <div class="panel panel-default shadow p-5 mt-3">
    </div>
  </div>

</template>
<script>
import axios from "axios";
import Navbar from "@/components/Navbar";
  export default {
    name: "DashboardView",
    components: { Navbar },
    data:function() {
      return {
        Sepatu: "",
        search:"",
        totalHarga:""
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
      },
      tambahTransaksi(idBarang){
        let formTransaksi = new FormData();
        formTransaksi.append('id_barang', idBarang);

        axios.post('https://web-sepatu.000webhostapp.com/inserttransaksi.php', formTransaksi, {
          header:{
            'Content-Type' : 'multipart/form-data'
          }
        }).then(function(response){
          console.log(response.data);
          if(response.data.message == "Data Berhasil diRecord") {
            alert(response.data.message);
          } else {
            alert(response.data.message);
          }
        });


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
    height: 300px;
    width: 300px;
    object-fit: cover;
  }
</style>
