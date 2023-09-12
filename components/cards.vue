<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <NuxtLink to="/dashboard" class="rounded-full p-3 bg-white/20 hover:bg-white/50">
      <Icon class="text-[24px]" name="uil:home" />
    </NuxtLink>

    <h2 class="text-[40px] tracking-[2px]">Welcome Johnson,</h2>
    <h4 class="text-[18px] font-light mb-10">Card Details</h4>
    <br />
    <div>
        <img class="w-[260px]" src="/card.png" alt="">
    </div>
  </div>
</template>