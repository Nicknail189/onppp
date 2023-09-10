<template>
  <div class="container w-full bg-[#006F9E] flex flex-col p-10">
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <p>(CFE) Core-Financial Exchange</p>
        <br />
        <h2 class="text-[20px] text-[#333]">Savings Account</h2>
      </div>

      <div class="md:text-right mt-5 md:mt-0">
        <p>Available funds</p>
        <h2 class="text-[38px] font-bold text-[#333]">
          $750,000.00.<span class="text-gray-400 text-[24px]">00</span>
        </h2>
      </div>
    </div>

    <div class="mt-4 flex flex-col gap-4 md:flex-row">
      <div
        @mouseenter="sent = !sent"
        @mouseleave="sent = !sent"
        class="flex items-center gap-2 cursor-pointer"
      >
        <div class="p-2 rounded-md bg-red-400/50 flex items-center gap-2">
          <icon class="text-[18px] text-red-600" name="uil:top-arrow-to-top" />
          <p v-if="sent">Sent</p>
        </div>
        <h4>$132,903.22</h4>
      </div>

      <div
        @mouseenter="received = !received"
        @mouseleave="received = !received"
        class="flex items-center gap-2 cursor-pointer"
      >
        <div class="p-2 rounded-md bg-green-400/20 flex items-center gap-2">
          <icon class="text-[18px] text-green-600" name="uil:arrow-from-top" />
          <p v-if="received">Received</p>
        </div>
        <h4>$882,903.22</h4>
      </div>

      <!-- <div
        @mouseenter="investment = !investment"
        @mouseleave="investment = !investment"
        class="flex items-center gap-2 cursor-pointer"
      >
        <div class="p-2 rounded-md bg-blue-400/20 flex items-center gap-2">
          <icon class="text-[18px] text-blue-500" name="uil:money-bill-stack" />
          <p v-if="investment">Investment</p>
        </div>
        <h4>$0.99.00</h4>
      </div> -->
    </div>

    <div class="flex flex-col md:flex-row items-center justify-between gap-2 mt-6">
      <!-- <div class="w-full p-2 rounded-md bg-white/20">
      <h2 class="text-[16px] text-[#fff] mb-3">
        Withdrawal
      </h2>
      <h3 class="p-2 text-[24px] rounded-md bg-white/20 font-bold">$5,700.00</h3>
      </div> -->

      <div class="w-full text-green-700 p-2 rounded-md bg-white/80">
      <h2 class="text-[16px] mb-3">
        Authorized charges
      </h2>
      <h3 class="p-2 text-[24px] rounded-md bg-white/50 font-bold">0.00175618</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default ({
  data() {
    return {
      sent: false,
      received: false,
      investment: false,
    }
  },
})
</script>

<style scoped>
p {
  font-size: 12px;
  color: rgb(212, 212, 212);
}

h4 {
  font-size: 18px;
}
</style>