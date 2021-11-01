<template>
    <h1>{{currentUser.firstName}}, welcome to online library</h1><hr class="hr">
    <br><br>

    <div class="container">
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
        <div class="row">
            <h3>History of your books:</h3> <hr class="hr"> 
            <ul class="listrap">
                <li v-for="book in books" v-bind:key="book.id">
                    <div class="listrap-toggle">
                        <span></span>
                        <img src="../assets/icon-books.png" class="img-circle" />
                    </div>
                    <strong>{{book.title}}</strong>
                    <button class="icon-btn">Preview</button>
                </li> 
            </ul>
        </div>

        <!-- <div v-if="currentUser && (currentUser.role === 'L' || currentUser.role === 'A')">
            <h3>Users to be verified:</h3> <hr class="hr"> 

            <!pokazi list membera to be verified>

             <<ul class="listrap">
                <li v-for="unverifedUser in unverifiedUsers" v-bind:key="book.id">
                    <div class="listrap-toggle">
                        <span></span>
                        <img src="../assets/icon-books.png" class="img-circle" />
                    </div>
                    <strong>{{book.title}}</strong>
                    <button class="icon-btn">Preview</button>
                </li> 
            </ul> -->
        <!-- </div> --> 

    </div>

</template>

<script>
import authHeader from '../services/auth-header';
import { API_URL } from '../helper'
import axios from 'axios';

export default {
    name: 'UserProfile',
    data() {
        return {
            books:[],
        }
    },
    computed: {
        currentUser() { 
            return this.$store.state.auth.user;
            }
        },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        }
    },
    created() {
        axios.get(API_URL + 'user/history', { headers: authHeader() }).then((response)=>{
            this.books = response.data;
        }).catch(error => console.log(error));
    },
    methods: {

    }
}
</script>


<style scoped>

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    margin-left: -30%;
    /* border: 3px solid #5C4033; */
}

.img-circle{
    width: 5em;
    height: 4em;
}

.hr{
    clear: both;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,.75),rgba(0,0,0,0));
 }   

 .icon-btn { 
  margin-bottom: 1em;
  margin-left: 8em;
  padding: 3px;
  border-radius: 10px;
  background-color: rgb(18, 181, 230);
  color: #fdffff;
  text-align: center;
  font-weight: bolder;
  width: 20%;
  cursor: pointer;
  border: 1px solid #5C4033;
}

.listrap {
            list-style-type: none;
            margin: 0;
            padding: 0;
            cursor: default;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .listrap li {
            margin: 0;
            padding: 10px;
        }

        .listrap li:hover {
            background-color: #d9edf7;
        }

        .listrap strong {
            margin-left: 20px;
        }

        .listrap .listrap-toggle {
            display: inline-block;
            width: 60px;
            height: 60px;
        }

        .listrap .listrap-toggle span {
            background-color: #428bca;
            opacity: 0.8;
            z-index: 100;
            width: 60px;
            height: 60px;
            display: none;
            position: absolute;
            border-radius: 50%;
            text-align: center;
            line-height: 60px;
            vertical-align: middle;
            color: #ffffff;
        }

        /* .listrap .listrap-toggle span:before {
            font-family: 'Glyphicons Halflings';
            content: "\e013";
        } */
     
       
</style>