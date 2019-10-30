<template>
  <button class="c-button">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: ["text"]
};
</script>

<style lang="scss" >
@import "./styles";
</style>