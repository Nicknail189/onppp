<template>
  <div class="flex flex-col justify-center items-center h-auto py-10">
    <NuxtLink to="/" class="rounded-full p-3 bg-white/20 hover:bg-white/50">
      <!-- <Icon class="text-[24px]" name="uil:home" /> -->
      <div class="w-[240px] my-4 rounded-md overflow-hidden">
      <img src="/hhsfcu.jpg" alt="">
    </div>
    </NuxtLink>

    <h2 class="text-[40px] tracking-[2px]">Welcome</h2>
    <h4 class="text-[18px] font-light mb-10">Sign in/Log in</h4>
    <br />
    <form
      @submit="submitSignin"
      class="flex flex-col justify-center items-center gap-2"
    >
      <label for="username">Enter username</label>
      <input
        v-model="login.username"
        type="text"
        placeholder="username"
        class="custom-input bg-black/50 backdrop-blur-md"
      />
      <label for="password">Enter password</label>
      <input
        v-model="login.password"
        type="password"
        placeholder="*********"
        class="custom-input bg-black/50 backdrop-blur-md"
      />
      <br />
      <button class="login-btn" @click="submitBtn">sign in</button>
    </form>
  </div>
</template>

<script>
export default ({
    data() {
       return{
        login:{
            username: '',
            password: '',
        }
       } 
    },
    methods: {
      submitBtn(event){
      event.preventDefault()
        if (this.login.username.trim() === 'LouiseRandall' && this.login.password.trim() === 'Louise222') {
          this.$router.push("/questionPage")
        } else {
          alert('Incorrect Login Details')
        }
      }
    }
})
</script>


<style>
label {
  font-weight: 600;
  font-size: 12px;
  text-align: center;
}
</style>
