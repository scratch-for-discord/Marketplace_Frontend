<script lang="ts">
import { defineComponent, VueElement } from 'vue';
import axios, { AxiosError } from "axios"
import type User from "../interfaces/User"
import GetUserData from '@/functions/userData';
const comp = defineComponent({
    methods: {

    },
    data ()  {
        return {
        user: {} as User,
        logged: false
        }
    },
    async created() {
  // GET request using fetch with async/await
        // let userData = await GetUserData()
        // this.logged = !userData.err
        // this.user = userData.user
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
    <div class="userData border-green-600 border-2 py-3 px-5 m-3">
        {{ logged? user.banned? "you are banned" : "you are not banned" : null }} 

        <a 
        class="text-green-700 text-2xl font-bold hover:text-green-300 transition-all duration-300"
        v-if="!logged" href='http://localhost:3020/auth/discord/login'>Login</a>
        
    </div>
    
</template>
