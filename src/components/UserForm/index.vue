<template>
  <section class="user-form">
    <form @submit.prevent="handleSubmit({ userName, password, email })">
      <h2 class="user-form__title">
        <img src="@/assets/logo-firebase.png" width="35" alt="Firebase logo" />
        {{ title }}
      </h2>

      <p>{{ description }}</p>

      <InputField
        type="text"
        extraClass="margin-top-20"
        placeholder="User name"
        v-model="userName"
      />

      <InputField
        v-if="type === 'register'"
        type="text"
        extraClass="margin-top-10"
        placeholder="User name"
        v-model="email"
      />

      <InputField
        type="password"
        extraClass="margin-top-10"
        placeholder="Password"
        v-model="password"
      />

      <div class="user-form__footer">
        <router-link v-if="type === 'login'" to="/register">Register</router-link>
        <Button v-if="type === 'login'" text="Sign in" />

        <router-link v-if="type === 'register'" to="/login">Login</router-link>
        <Button v-if="type === 'register'" text="Register" />
      </div>
    </form>
  </section>
</template>

<script>
import InputField from "../InputField";
import Button from "../Button";

export default {
  name: "UserForm",
  components: {
    InputField,
    Button
  },
  props: ["title", "description", "type", "submitForm"],
  data() {
    return {
      userName: "",
      email: "",
      password: ""
    };
  },
  methods: {
    handleSubmit(data) {
      this.submitForm(data);
    }
  }
};
</script>

<style lang="scss" >
@import "./styles";
</style>