<template>
  <UserForm
    title="Register with Firebase"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo diam, scelerisque a eleifend sed."
    type="register"
    :submitForm="data => handleSubmit(data)"
  />
</template>

<script>
import UserForm from "@/components/UserForm";

export default {
  name: "register",
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
