<template>
  <section class="user-form">
    <form>
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
        placeholder="Email"
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
        <Button v-if="type === 'login'" text="Sign in" @onClick="handleSubmit" />

        <router-link v-if="type === 'register'" to="/login">Login</router-link>
        <Button v-if="type === 'register'" text="Register" @onClick="handleSubmit" />
      </div>

      <p v-if="error.length > 0" class="user-form__error">{{ error }}</p>
      <Loader v-if="loading" />
    </form>
  </section>
</template>

<script>
import InputField from "../InputField";
import Button from "../Button";
import Loader from "../Loader";

export default {
  name: "UserForm",
  components: {
    InputField,
    Button,
    Loader
  },
  props: ["title", "description", "type", "submitForm", "error", "loading"],
  data() {
    return {
      userName: "",
      email: "",
      password: ""
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("onSubmit", {
        email: this.email,
        userName: this.userName,
        password: this.password
      });
    }
  }
};
</script>

<style lang="scss" >
@import "./styles";
</style>