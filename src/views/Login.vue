<template>
  <UserForm
    title="Login with Firebase"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo diam, scelerisque a eleifend sed."
    type="login"
    @onSubmit="data => handleSubmit(data)"
    :error="error"
    :loading="loading"
  />
</template>

<script>
import UserForm from "@/components/UserForm";
import firebase from '@/firebase'
import { mapActions } from 'vuex'
import axios from '../axios-auth'

export default {
  name: "login",
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

      if (data.userName.length === 0 || data.password.length === 0) {
        this.error = "Complete all fields";
        return;
      }
      this.loading = true;

      firebase.userExists(data.userName).then(doc => {
        if (doc.exists) {
          firebase
            axios.post('/verifyPassword?key=AIzaSyAE_4rAo3jQ-nIynUYWbDy1SJOdfCYWOV0', {
              email: doc.data().email,
              password: data.password,
              returnSecureToken: true
            })
            .then(() => {
              this.addUser({name: data.userName, email: doc.data().email });
              this.loading = false;
              this.$router.push("/");
            })
            .catch(error => {
              this.error = error.message;
              this.loading = false;
            });
        } else {
          this.error = "The user not exists";
          this.loading = false;
        }
      });
    }
  }
};
</script>
