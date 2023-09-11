<template>
  <div class="flex flex-col justify-center items-center h-screen overflow-auto">

    <NuxtLink to="/dashboard" class="rounded-full p-3 bg-white/20 hover:bg-white/50 mt-40">
      <Icon class="text-[24px]" name="uil:home" />
    </NuxtLink>

    <h2 class="text-[40px] tracking-[2px]">Transfer</h2>
    <h4 class="text-[18px] font-light mb-10">Transaction</h4>
    <br />
    <form
      @submit="submitSignin"
      class="mb-20 flex flex-col md:flex-row justify-center items-center gap-2"
    >
    <div class="flex flex-col gap-3">
    <div class="flex flex-col gap-2">
      <label for="name">Account Name</label>
      <input
        v-model="transfer.name"
        type="text"
        placeholder=""
        class="custom-input bg-black/50 backdrop-blur-md"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="number">Account Number</label>
      <input
        v-model="transfer.number"
        type="number"
        placeholder=""
        class="custom-input bg-black/50 backdrop-blur-md"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="bank">Bank Name</label>
      <input
        v-model="transfer.bank"
        type="text"
        placeholder=""
        class="custom-input bg-black/50 backdrop-blur-md"
      />
    </div>
    </div>

    <div class="flex flex-col gap-3">
    <div class="flex flex-col gap-2">
      <label for="routine">Swift/Routine Number</label>
      <input
        v-model="transfer.routine"
        type="number"
        placeholder=""
        class="appearance-none custom-input bg-black/50 backdrop-blur-md"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="transferopt">Fund Transfer Option</label>
      <select v-model="transfer.transferopt" name="" id="" class="custom-input bg-black/50 backdrop-blur-md">
        <option value="">Domestic Transfer</option>
        <option value="">International Transfer</option>
        <option value="">Local Transfer</option>
      </select>
      <!-- <input
        v-model="transfer.transferopt"
        type="text"
        placeholder=""
        class="custom-input bg-black/50 backdrop-blur-md"
      /> -->
    </div>

      <!-- <label for="username">Enter username</label>
      <input
        v-model="login.username"
        type="text"
        placeholder="username"
        class="custom-input bg-black/50 backdrop-blur-md"
      /> -->
      <br />
      <button class="login-btn" @click="submitBtn">continue</button>
    </div>
    </form>
  </div>
</template>

<script>
export default ({
    data() {
       return{
        transfer:{
            name: '',
            number: '',
            bank: '',
            routine: '',
            transferopt: '',
            // password: '',
        }
       } 
    },
    methods: {
      submitBtn(event){
      event.preventDefault()
        if (this.transfer.name.trim() === 'Name' && this.transfer.number.trim() === '1234567890') {
          this.$router.push("/confirmationPage")
        } else {
          alert('Fill in the form to continue transaction')
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
