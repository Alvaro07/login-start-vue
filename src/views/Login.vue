<template>
  <UserForm
    title="Login with Firebase"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo diam, scelerisque a eleifend sed."
    type="login"
    @onSubmit="data => handleSubmit(data)"
  />
</template>

<script>
import UserForm from "@/components/UserForm";

export default {
  name: "login",
  components: {
    UserForm
  },
  methods: {
    handleSubmit(data) {
      console.log(data);
    }
  }
};
</script>
