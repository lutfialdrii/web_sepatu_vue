<template>
  <Navbar/>
  <div class="container">
    <div class="card shadow m-3">
      <img :src="dataSepatu.gambar" class="card-img-top" alt="...">
      <div class="card-body">
        <h2 class="card-title text-center">{{dataSepatu.nama_barang}}</h2>
        <p class="card-text text-center mt-2">Deskripsi Item</p>
        <!--    table-->
        <table class="table shadow">
          <thead>
          <tr>
            <th class="text-center" scope="col">Brand</th>
            <th class="text-center" scope="col">Kategori</th>
            <th class="text-center" scope="col">Stok Barang</th>
            <th class="text-center" scope="col">Harga Barang</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="text-center" >{{ dataSepatu.brand }}</td>
            <td class="text-center" >{{ dataSepatu.kategori}}</td>
            <td class="text-center" >{{ dataSepatu.stok}}</td>
            <td class="text-center" >Rp. {{ dataSepatu.harga}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Navbar from "@/components/Navbar";

  export default {
    name: "DetailBarang",
    components: { Navbar },
    data() {
      return {
        // idBarang:this.$router.param()
        dataSepatu:""
      }
    },
    mounted() {
      console.log(this.$route.params.idBarang);
      this.getItem(this.$route.params.idBarang)
    },
    methods: {
      getItem(idBarang) {
        let formData = new FormData();
        formData.append('id_barang', idBarang)
        axios.post(`https://web-sepatu.000webhostapp.com/detailbarang.php`, formData, {
          header: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then((response) => {
            this.dataSepatu = response.data[0];
            console.log(this.dataSepatu)
          }).catch((error) => {
          console.log(error);
        })
      },
    }
  }
</script>
<style scoped>

</style>
