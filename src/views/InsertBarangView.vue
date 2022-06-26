<template>
  <div class="container" id="uploadApp">
    <br />
    <br />

    <div class="panel panel-default shadow p-3">
      <div class="panel-heading">
        <div class="row">
          <div class="col-md-6">
            <h3 class="panel-title">Upload File</h3>
          </div>
          <div class="col-md-6" align="right">

          </div>
        </div>
      </div>
      <div class="panel-body">

        <div class="mb-3">
          <label for="nama_barang" class="form-label">Nama Barang</label>
          <input v-model="nama_barang" type="text" class="form-control" id="nama_barang">
        </div>
        <div class="mb-3">
          <label for="brand" class="form-label">Brand Barang</label>
          <input v-model="brand" type="text" class="form-control" id="brand">
        </div>
        <div class="mb-3">
          <label for="kategori" class="form-label">Kategori Barang</label>
          <input v-model="kategori" type="text" class="form-control" id="kategori">
        </div>
        <div class="mb-3">
          <label for="deskripsi" class="form-label">Deskripsi Barang</label>
          <input v-model="deskripsi" type="text" class="form-control" id="deskripsi">
        </div>
        <div class="mb-3">
          <label for="stok" class="form-label">Stok Barang</label>
          <input v-model="stok" type="number" class="form-control" id="stok">
        </div>
        <div class="mb-3">
          <label for="harga" class="form-label">Harga Barang</label>
          <input v-model="harga" type="text" class="form-control" id="harga">
        </div>

        <div class="row">
          <div class="col-md-4" align="right">
            <label>Select Image</label>
          </div>
          <div class="col-md-4">
            <input type="file" ref="file" />
          </div>
          <div class="col-md-4">
            <button type="button" @click="uploadImage" class="btn btn-primary">Upload Image</button>
          </div>
        </div>
        <br />
        <br />
        <div v-html="uploadedImage" align="center"></div>
      </div>
    </div>

    <div class="panel panel-default shadow p-5 mt-3">
      <h3>List Item</h3>

      <!--    table-->
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nama Barang</th>
          <th scope="col">Brand</th>
          <th scope="col">Kategori</th>
          <th scope="col">Stok Barang</th>
          <th scope="col">Harga Barang</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in Sepatu" :key="index">
          <th scope="row">{{index + 1}}</th>
          <td>{{ Sepatu[index].nama_barang }}</td>
          <td>{{ Sepatu[index].brand }}</td>
          <td>{{ Sepatu[index].kategori}}</td>
          <td>{{ Sepatu[index].stok}}</td>
          <td>{{ Sepatu[index].harga}}</td>
          <td><button @click="deleteItem(Sepatu[index].id_barang)" class="btn-danger">Delete</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "InsertBarang",
  data(){
    return {
      Sepatu: '',
      nama_barang:'',
      brand:'',
      kategori:'',
      deskripsi:'',
      stok:'',
      harga:'',
      file:'',
      uploadedImage:'',
      successMessage:'',
      id_barang:'',

    }
  },
  mounted() {
    this.getItem();
  },
  methods: {
    uploadImage:function(){
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('nama_barang', this.nama_barang);
      formData.append('brand', this.brand);
      formData.append('kategori', this.kategori);
      formData.append('deskripsi', this.deskripsi);
      formData.append('stok', this.stok);
      formData.append('harga', this.harga);

      axios.post('https://web-sepatu.000webhostapp.com/upload_image.php', formData, {
        header:{
          'Content-Type' : 'multipart/form-data'
        }
      }).then(function(response){
        console.log(response.data);
        if(response.data.image == '') {
          alert('Menambah Data Gagal!' + response.data.message);
          this.successMessage = '';
          this.uploadedImage = '';

        } else {
          alert('Berhasil Gan!');
          this.successMessage = response.data.message;
          let image_html = "<img src='" + response.data.image + "' class='img-thumbnail' width='200' />";
          this.uploadedImage = image_html;
          this.$refs.file.value = '';
        }
      });
    },
    getItem(){
      axios.get(`https://web-sepatu.000webhostapp.com/read.php`)
        .then((response) => {
          this.Sepatu = response.data;
          console.log(this.Sepatu)
        }).catch((error) => {
        console.log(error);
      })
    },
    deleteItem(idBarang){
      let formDataDelete = new FormData();
      formDataDelete.append('id_barang', idBarang);
      axios.post(`https://web-sepatu.000webhostapp.com/delete.php`,formDataDelete, {
        header:{
          'Content-Type' : 'multipart/form-data'
        }
      }).then(function(response) {
        console.log(response.data);
        if (response.data.message == 'Delete Data Berhasil'){
          alert('Item berhasil dihapus');
        } else {
          alert('Item gagal dihapus');
        }
      })
    }
  }

}


</script>
