<template>
  <Card />
</template>

<script>
import firebase from "../components/firebase";
import Card from "../components/Card";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    Card
  },
  created() {
    if (!this.user.name) {
      firebase.getUser().then(data =>
        this.$store.commit("addUser", {
          name: data.displayName,
          email: data.email
        })
      );
    }
  },
  computed: mapState(["user"])
};
</script>
