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
import firebase from "@/components/firebase";

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
          firebase
            .register(data.email, data.password, data.userName)
            .then(() => {
              this.$store.commit("addUser", {
                name: data.userName,
                email: data.email
              });
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
