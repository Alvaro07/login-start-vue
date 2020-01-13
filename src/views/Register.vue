<template>
  <UserForm
    title="Register with Firebase"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo diam, scelerisque a eleifend sed."
    type="register"
    @onSubmit="data => handleSubmit(data)"
    :error="error"
    :loading="loading"
  />
</template>

<script>
import UserForm from "@/components/UserForm";
import firebase from '@/firebase'
import axios from '../axios-auth.js'
import { mapActions } from 'vuex'

export default {
  name: "register",
  components: {
    UserForm
  },
  data() {
    return {
      error: "",
      loading: false
    };
  },
  methods: {
    ...mapActions(['addUser']),
    handleSubmit(data) {
      this.error = "";

      if (
        data.userName.length === 0 ||
        data.password.length === 0 ||
        data.email.length === 0
      ) {
        this.error = "Complete all fields";
        return;
      }

      this.loading = true;

      firebase.userExists(data.userName).then(doc => {
        if (doc.exists) {
          this.error = "the user already exists";
        } else {
          axios.post('/signupNewUser?key=AIzaSyAE_4rAo3jQ-nIynUYWbDy1SJOdfCYWOV0', {
            email: data.email,
            password: data.password,
            returnSecureToken: true
          })
        .then(() => {
            this.addUser({ name: data.userName, email: data.email })
            this.loading = false;
            this.$router.push("/");
          })
          .catch(error => {
            this.error = error.message;
            this.loading = false;
          });
        }
      });
    }
  }
};
</script>
