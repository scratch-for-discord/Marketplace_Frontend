<script lang="ts">
import { defineComponent, VueElement } from 'vue';
import axios, { AxiosError } from "axios"
import type User from "../interfaces/User"
import GetUserData from '../functions/userData';
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
    <!-- <div v-if="!logged" class="login text-white text-2xl my-4 text-center">
        You are required to login in with discord to use marketplace
    </div> -->
    <div class="up grid place-items-center sm:place-items-start">

        <!-- <div class="userData border-blue-600 border-2 py-3 px-5 m-3 text-center w-1/2 "> -->
            <!-- {{ logged? user.banned? "you are banned" : "you are not banned" : null }}  -->

            <a 
            class="border-blue-600 border-2 py-3 px-5 m-2 text-center lg:w-[50%] md:w-[50%] w-[90%]  text-blue-700 
            hover:bg-blue-400 text-3xl font-bold hover:text-black transition-all duration-500"
            v-if="!logged" href='http://localhost:3020/auth/discord/login'>Login with Discord</a>
        
        <!-- </div> -->
    </div>
    
</template>
