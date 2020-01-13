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
.c-button {
  padding: 5px 15px;
  background-color: $darkYellow;
  color: white;
  font-weight: 700;
  font-size: 1.6rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover {
    background-color: $orange;
  }
}

</style>