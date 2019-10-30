<template>
  <Button text="Log Out" @onClick="handleClick" />
</template>

<script>
import firebase from "../components/firebase";
import Button from "../components/Button";

export default {
  name: "home",
  components: {
    Button
  },
  methods: {
    handleClick() {
      firebase.logout();
      this.$router.push("login");
    }
  }
};
</script>
