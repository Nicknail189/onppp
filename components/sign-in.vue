<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <NuxtLink to="/" class="rounded-full p-3 bg-white/20 hover:bg-white/50">
      <Icon class="text-[24px]" name="uil:home" />
    </NuxtLink>

    <h2 class="text-[40px] tracking-[2px]">Welcome</h2>
    <h4 class="text-[18px] font-light mb-10">Sign in/Log in</h4>
    <br />
    <form
      @submit="submitSignin"
      class="flex flex-col justify-center items-center gap-2"
    >
      <label for="email">Enter email</label>
      <input
        v-model="login.email"
        type="email"
        placeholder="abc@gmaii.com"
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
      <button class="login-btn" @click="submitBtn">continue</button>
    </form>
  </div>
</template>

<script>
export default ({
    data() {
       return{
        login:{
            email: '',
            password: '',
        }
       } 
    },
    methods: {
      submitBtn(event){
      event.preventDefault()
        if (this.login.email.toLowerCase().trim() === 'abc.com' && this.login.password.trim() === '123') {
          this.$router.push("/dashboard")
        } else {
          alert('Incorrect Details')
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
