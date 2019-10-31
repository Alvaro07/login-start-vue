<template>
  <section class="c-card">
    <h3 class="c-card__name">
      Name:
      <span>{{ user.name }}</span>
    </h3>
    <h4 class="c-card__email">
      Email:
      <span>{{ user.email }}</span>
    </h4>
    <Button @onClick="handleClick" text="Log out" />
  </section>
</template>

<script>
import firebase from "../firebase";
import { mapState } from "vuex";
import Button from "../Button";

export default {
  name: "card",
  components: {
    Button
  },
  methods: {
    handleClick() {
      firebase.logout();
      this.$store.commit("removeUser");
      this.$router.push("login");
    }
  },
  computed: mapState(["user"])
};
</script>

<style lang="scss">
@import "./styles";
</style>
