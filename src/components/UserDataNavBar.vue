<script lang="ts">
import { defineComponent, VueElement } from 'vue';
const comp = defineComponent({
    methods: {
        userData() {
            let data 
            fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => (data = res.json()))

            return data
        }
    }
//   data () {
//     return {
//       data: null
//     }
//   },
//   mounted () {
//     axios
//       .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//       .then(response => (this.data = response))
//   }
})
export default comp


</script>

<template>
    <div class="userData">
        {{ userData() }}
    </div>
</template>
