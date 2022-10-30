<script lang="ts">
import { defineComponent, VueElement } from 'vue';
import axios, { AxiosError } from "axios"
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
        user: null
        }
    },
    async created() {
  // GET request using fetch with async/await
    let response;
        try {
            response = await axios.get("http://localhost:3020/api/user/", {
               withCredentials: true
            })
            this.user = await response.data;
        } catch (error) {
            console.log((error as AxiosError).isAxiosError)
        }
        const options = {
  method: 'GET',
credentials: "include"
};

fetch('http://localhost:3020/api/user/', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
    
    // const data = await response;
        console.log(response?.status)
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
        {{ user? user : "user is null" }}
    </div>
</template>
