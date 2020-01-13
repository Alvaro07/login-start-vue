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
import InputField from "./InputField";
import Button from "./Button";
import Loader from "./Loader";

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
/**
* user form component
*/

.user-form {
  padding: 30px 30px 20px 30px;
  position: relative;
  background-color: white;
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  box-shadow: rgba(20, 20, 20, 0.5) 0px 1px 1px,
    rgba(20, 20, 20, 0.5) 0px 1px 1px, rgba(20, 20, 20, 0.5) 0px 2px 2px,
    rgba(20, 20, 20, 0.5) 0px 4px 4px, rgba(20, 20, 20, 0.5) 0px 8px 8px;

  &__title {
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: -0.15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;

    img {
      margin-right: 10px;
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
  }

  &__error {
    color: tomato;
    font-size: 1.4rem;
    text-align: center;
    padding-top: 10px;
  }
}

</style>