<script lang="ts">
import { defineComponent } from 'vue'
const comp = defineComponent({
  props: {
    text: String,
    className: String,
  },
})
export default comp
</script>

<template>
  <button v-bind:class="className">
    {{ text }}
  </button>
</template>