<script lang="ts">
import { defineComponent, VueElement } from 'vue';
import axios from "axios"
const comp = defineComponent({
    methods: {
        userData() {
            let data 
            fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => (data = res.json()))

            return data
        }
    },
    data () {
        return {
        user: 10
        }
    },
    async created() {
  // GET request using fetch with async/await
    const response = await fetch("http://localhost:3020/api/user/")
    
   // const data = await response;
    console.log(response.status)
    this.user = await response.json();
    }
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
        {{ user }}
    </div>
</template>
