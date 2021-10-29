<template>
    <div>
        <SignUp @sign-up = "signUp" />
    </div>
</template>

<script>
import SignUp from '../components/SignUp.vue';
import axios from 'axios';
import { server } from '../helper'

export default {
    name: 'Registration',
    components: {
        SignUp,
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },
    mounted() {
        if (this.loggedIn) {
            this.$router.push("/");
        }
    },
    methods: {
        async signUp(user) {
            this.$store.dispatch("auth/register", user).then(
            (data) => {
                this.$router.push('/');
                this.$toast.success('Thank you for being part of us!');
            },
            (error) => {
                const message =
                    (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                    this.$toast.error('Your email is already in use!. ', message);
                }
            );
            
        }
        
    }
}
</script>