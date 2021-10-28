<template>
    <div>
        <SignUp @sign-up = "signUp" />
    </div>
</template>

<script>
import SignUp from '../components/SignUp.vue';
import axios from 'axios';
import { server } from '../helper'
// import { $router } from '../router/index'

export default {
    name: 'Registration',
    components: {
        SignUp,
    },
    methods: {
        async signUp(user) {
            const response = await axios.post(`${server.baseURL}/user/signup`, user).catch(err => console.log(err));
            // console.log(response);
            if(response !== undefined) {
                console.log('successfuly!');
                this.$router.push('/');
                this.$toast.success('Thank you for being part of us!');
            }
            else{
                console.log('Oops! Try again');
                this.$toast.error('Your email is already in use !')
            }
            
        }
    }
}
</script>