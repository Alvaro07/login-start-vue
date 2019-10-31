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
import firebase from "@/components/firebase";

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
    handleSubmit(data) {
      this.loading = true;
      this.error = "";

      firebase.userExists(data.userName).then(doc => {
        if (doc.exists) {
          firebase
            .login(doc.data().email, data.password)
            .then(() => {
              this.$store.commit("addUser", {
                name: data.userName,
                email: doc.data().email
              });
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
