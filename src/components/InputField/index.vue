<template>
  <div class="c-input-wrap" :class="extraClass">
    <label v-if="labelText">{{ labelText }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      class="c-input-field"
      v-model="content"
      @keyup="e => handleKeyUp(e)"
    />
  </div>
</template>

<script>
export default {
  name: "InputForm",
  props: ["extraClass", "type", "placeholder", "labelText", "value"],
  data() {
    return {
      content: this.value
    };
  },
  methods: {
    handleKeyUp(e) {
      this.$emit("input", this.content);
    }
  }
};
</script>

<style lang="scss" >
@import "./styles";
</style>