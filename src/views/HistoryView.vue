<template>
  <Navbar/>
  <div class="container">
    <div class="panel panel-default shadow p-5 mt-3">
      <h3>List Item</h3>
      <!--    table-->
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID Transaksi</th>
          <th scope="col">ID Barang</th>
          <th scope="col">Waktu Transaksi</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in history" :key="index">
          <th scope="row">{{index + 1}}</th>
          <td>{{ history[index].id_transaksi }}</td>
          <td>{{ history[index].id_barang }}</td>
          <td>{{ history[index].timestamp}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Navbar from "@/components/Navbar";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Historytransaksi",
  components: { Navbar },
  data(){
    return {
      history:"",

    }
  },
  mounted() {
    this.getTransaksi();
  },
  methods: {
    getTransaksi(){
      axios.get(`https://web-sepatu.000webhostapp.com/readtransaksi.php`)
      .then((response) => {
        this.history = response.data;
      })
      .catch((error) => {
        alert(error);
      })
    }
  }
}
</script>
