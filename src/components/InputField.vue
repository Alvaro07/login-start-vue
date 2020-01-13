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
/**
* Input component
*/

.c-input-wrap {
  width: 100%;
}

.c-input-field {
  width: 100%;
  border: 1px solid Gainsboro;
  padding: 10px 15px;
  color: #333;
  border-radius: 3px;
}

</style>