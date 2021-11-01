<template>
    <h1> Books</h1>    

    <div v-if="currentUser && (currentUser.role === 'A' || currentUser.role === 'A')">
      <button  class="addBook" @click="addOpen">Add Book</button>
    </div>
    <div class="card-container">
      <div class="card card-space" v-for="book in books" v-bind:key="book.id">
          <img src="../assets/icon-books.png" alt="Avatar" style="width:100%">
          <div class="container">
              <p><b> {{ book.title }}</b></p> 
              <p>{{ book.author }}</p> 
          </div>
         <button v-if="currentUser" class="btn icon-btn btn-primary" @click="rentBook(book.id)">Rent</button>
      </div>
    </div>  

    
   
</template>

<script>
import BookService from '../services/book.service'
import authHeader from '../services/auth-header';
import { API_URL } from '../helper'
import axios from 'axios';
import {openModal, onclose} from "jenesius-vue-modal";
import AddBookDialog from "../components/AddBookDialog.vue"

export default {
    name: 'Books',

    data() {
        return {
            books: [],
        }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  created() {
      this.getAllBooks();
  },
  methods: {
    getAllBooks() {
       BookService.getAllBooks().then(
        (response) => { 
            this.books = response.data;
        },
        (error) => {
            this.books =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
    rentBook(bookId) {
      axios.patch(API_URL + 'book/rent/book/' + bookId, {}, { headers: authHeader() }).then(()=>{
        this.$router.push('userProfile');
        this.$toast.success('Book is successfully rented!');
      }).catch(error => this.$toast.error('Oops! Something went wrong! ', error));
    },
    async addOpen() {
      const modal = await openModal(AddBookDialog);
      modal.onclose = () => {this.getAllBooks()}
    },
  }
}
</script>

<style scoped>
.card-container{
  display: flex;
  flex-direction: row; 
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 150px;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  position: initial;
  display: block;
}
.card-space{
  margin: 1em;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

img {
  border-radius: 5px 5px 0 0;
}

.container {
  padding: 2px 16px;
}

.icon-btn { 
  margin-bottom: 1em;
  padding: 5px;
  border-radius: 10px;
  background-color: rgb(219, 243, 235);
  color: #5C4033;
  text-align: center;
  font-weight: bolder;
  width: 50%;
  cursor: pointer;
  border: 3px solid #5C4033;
}

.addBook  { 
  display: flex;
  flex-direction: row;
  margin-left: 110%;
  padding: 15px;
  border-radius: 10px;
  background-color: rgb(134, 146, 212);
  color: white;
  text-align: center;
  font-weight: bolder;
  cursor: pointer;
  width: 10%;
  border: 3px solid #5C4033;
}

</style>