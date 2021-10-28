<template>
    <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>First Name</label>
      <input type="text" v-model="firstName" name="firstName" placeholder="First Name" required />
    </div>

    <div class="form-control">
      <label>Last Name</label>
      <input type="text" v-model="lastName" name="lastName" placeholder="First Name" required/>
    </div>

    <div class="form-control">
      <label>Email</label>
      <input type="text" v-model="email" name="email" placeholder="Your email" required/>
    </div>

    <div class="form-control">
      <label>Password</label>
      <input type="text" v-model="password" name="password" placeholder="Your password" required />
    </div>

    <input type="submit" value="Sign Up" class="btn" />
  </form>
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()
            
            const user = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            }

            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.password = '';

            this.$emit('sign-up', user);
        }
    }
}
</script>

<style scoped>

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