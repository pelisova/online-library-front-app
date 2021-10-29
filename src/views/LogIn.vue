<template>
    <div class="scope">
    <form @submit="LogIn" class="add-form">
        <div class="form-control">
        <label>Email</label>
        <input type="text" v-model="email" name="email" placeholder="Your email" required/>
        </div>

        <div class="form-control">
        <label>Password</label>
        <input type="text" v-model="password" name="password" placeholder="Your password" required />
        </div>

        <input type="submit" value="Log In" class="btn" />
    </form>
    </div>
</template>

<script>

import axios from 'axios';
import { server } from '../helper'
import { mapMutations } from 'vuex';

export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },
    created() {
        if (this.loggedIn) {
            this.$router.push("/");
        }
    },
    methods: {
        LogIn(e) {
            e.preventDefault();

            const logUserdata = {
                email: this.email,
                password: this.password
            }

            this.email = '';
            this.password = '';

            this.logUser(logUserdata);
        },

        async logUser(user) {
            this.$store.dispatch("auth/login", user).then(
            () => {
                 this.$router.push('/');
                 this.$toast.success('You are successfuly logged in!');
            },
            (error) => {
                const message =
                    (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                    this.$toast.error('Please check your credentials! ', message);
                }
            );
        }
    }
}
</script>

<style scoped>

.scope{
    display: flex;
    flex-direction: column;
    margin-top: 5em;
    margin-bottom: 5em;
}
.add-form {
  margin: 40px;
  padding: 2em;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  color: black;
  font-weight: bolder;
  display: block;
}
.form-control input {
  width: 50%;
  height: 30px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;

}

.btn{
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

</style>