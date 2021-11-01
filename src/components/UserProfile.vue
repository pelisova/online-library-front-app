<template>
    <h1 v-if="currentUser">{{currentUser.firstName}}, welcome to online library</h1>
    <br><br>

    <div v-if="currentUser" class="container">
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
        <div v-if="books.length > 0" class="row">
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

        <br> <br>

        <div v-if="(currentUser.role === 'L' || currentUser.role === 'A') && unverifiedUsers.length > 0" class="row">
            <h3>Users to be verified:</h3> <hr class="hr"> 

             <ul class="listrap">
                <li v-for="user in unverifiedUsers" v-bind:key="user.id">
                    <div class="listrap-toggle">
                        <span></span>
                        <img src="../assets/user.png" class="img-circle" />
                    </div>
                    <strong>{{user.firstName}} {{user.lastName}}</strong>
                    <button class="icon-verify" @click="verify(user.id)">Verify</button>
                </li> 
            </ul>
        </div> 

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
            unverifiedUsers:[],
        }
    },
    computed: {
        currentUser() { 
            return this.$store.state.auth.user;
            }
        },
    created() {
        axios.get(API_URL + 'user/history', { headers: authHeader() }).then((response)=>{
            this.books = response.data;
        }).catch(error => console.log(error));
        this.loadUnverified();
    },
    methods: {
        verify(userId) {
            axios.patch(API_URL + 'user/verify/' + userId, {}, { headers: authHeader() }).then(()=>{
                this.$router.push('userProfile');
                this.$toast.success('User successfully verified!');
                this.loadUnverified();
            }).catch(error => this.$toast.error('Oops! Something went wrong! ', error));
        },
        loadUnverified() {  
            axios.get(API_URL + 'user/getUnverifiedUsers', { headers: authHeader() }).then((response)=>{
                this.unverifiedUsers = response.data;
            }).catch(error => console.log(error));
        }
    }
}
</script>


<style scoped>

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
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
  margin-left: 5em;
  padding: 3px;
  border-radius: 10px;
  background-color: rgb(18, 181, 230);
  color: #fdffff;
  text-align: center;
  font-weight: bolder;
  cursor: pointer;
  border: 1px solid #5C4033;
  width: 10%;
}

.icon-verify { 
  margin-bottom: 1em;
  margin-left: 8em;
  padding: 3px;
  border-radius: 10px;
  background-color: rgb(81, 161, 112);
  color: #fdffff;
  text-align: center;
  font-weight: bolder;
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
            width: 7%;
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