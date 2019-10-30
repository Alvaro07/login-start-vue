<template>
  <button class="c-button" @click.prevent="e => onButtonClick(e)">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: ["text"],
  methods: {
    onButtonClick(e) {
      this.$emit("onClick");
    }
  }
};
</script>

<style lang="scss" >
@import "./styles";
</style>