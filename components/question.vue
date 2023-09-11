<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <NuxtLink to="/" class="rounded-full p-3 bg-white/20 hover:bg-white/50">
      <Icon class="text-[24px]" name="uil:home" />
    </NuxtLink>

    <h2 class="text-[40px] tracking-[2px]">Security</h2>
    <h4 class="text-[18px] font-light mb-10">Question &amp; Answer</h4>
    <br />
    <form
      @submit="submitSignin"
      class="flex flex-col justify-center items-center gap-2"
    >
      <label for="email">What is your favourite color?</label>
      <input
        v-model="answer.color"
        type="text"
        placeholder="color"
        class="custom-input bg-black/50 backdrop-blur-md"
      />
      <label for="password">What is your favourite pet?</label>
      <input
        v-model="answer.pet"
        type="text"
        placeholder="pet"
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
        answer:{
            color: '',
            pet: '',
        }
       } 
    },
    methods: {
      submitBtn(event){
      event.preventDefault()
        if (this.answer.color.trim() === 'purple' && this.answer.pet.trim() === 'cat') {
          this.$router.push("/dashboard")
        } else {
          alert('Incorrect Security Details')
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
