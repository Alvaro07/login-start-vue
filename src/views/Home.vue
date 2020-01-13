<template>
  <Card />
</template>

<script>
import firebase from '@/firebase';
import Card from "../components/Card";
import { mapState, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    Card
  },
  created() {
    if (!this.user.name) {
      // axios.post('/accounts:signInWithCustomToken?key=AIzaSyAE_4rAo3jQ-nIynUYWbDy1SJOdfCYWOV0')
      // .then(res => console.log(res))
      // firebase.getUser().then(data => {
      //     console.log(data)
      //     this.addUser({
      //       name: data.displayName,
      //       email: data.email
      //     })
      //   }
      // );
    }
  },
  computed: mapState(["user"]),
  methods: mapActions(['addUser'])
};
</script>
