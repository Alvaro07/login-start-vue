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
import firebase from '@/firebase';
import { mapState, mapActions } from "vuex";
import Button from "./Button";

export default {
  name: "Card",
  components: {
    Button
  },
  methods: {
    ...mapActions(['removeUser']),
    handleClick() {
      firebase.logout();
      this.removeUser();
      this.$router.push("login");
    }
  },
  computed: mapState(["user"])
};
</script>

<style lang="scss">
/**
* Card component
*/

.c-card {
  padding: 30px 30px 20px 30px;
  position: relative;
  background-color: white;
  width: 100%;
  max-width: 460px;
  border-radius: 5px;
  box-shadow: rgba(20, 20, 20, 0.5) 0px 1px 1px,
    rgba(20, 20, 20, 0.5) 0px 1px 1px, rgba(20, 20, 20, 0.5) 0px 2px 2px,
    rgba(20, 20, 20, 0.5) 0px 4px 4px, rgba(20, 20, 20, 0.5) 0px 8px 8px;

  &__name {
    font-size: 2.2rem;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px dotted Gainsboro;
    span {
      font-weight: 700;
    }
  }

  &__email {
    font-size: 1.6rem;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px dotted Gainsboro;
    span {
      font-weight: 700;
    }
  }
}

</style>
