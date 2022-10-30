<script lang="ts">
import { defineComponent } from "vue";
const comp = defineComponent({
  props: {
    text: String,
    className: String,
  },
  data() {
    return {
      msg: "eeee", //access this {{ msg }}
    }
  }
});
export default comp;
</script>

<template>
  <button v-bind:class="className">
    {{ text }}
  </button>
</template>
