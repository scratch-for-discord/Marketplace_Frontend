<script lang="ts">
import { defineComponent, VueElement } from 'vue';
import axios, { AxiosError } from "axios"
import type User from "../interfaces/User"
const comp = defineComponent({
    methods: {
        userData() {
            let data 
            fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => (data = res.json()))

            return data
        }
    },
    data ()  {
        return {
        user: {} as User,
        logged: false
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
            this.logged = true
        } catch (error) {
            this.logged = false
            console.log((error as AxiosError))
        }
  }
})
export default comp



</script>

<template>
    <div class="userData">
        {{ logged? user.banned? "you are banned" : "you are not banned" : null }} <a v-if="!logged" href='http://localhost:3020/auth/discord/login'>Login</a>
    </div>
</template>
