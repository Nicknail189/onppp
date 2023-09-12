<template>
  <div class="flex flex-col justify-center items-center h-auto my-10">
    <NuxtLink to="/dashboard" class="rounded-full p-3 bg-white/20 hover:bg-white/50">
      <Icon class="text-[24px]" name="uil:home" />
    </NuxtLink>

    <h2 class="text-[40px] tracking-[2px]">Welcome Johnson,</h2>
    <h4 class="text-[18px] font-light mb-10">Account Profile</h4>
    <br />
    <div class="flex flex-col justify-center items-center">
        <div class="border-[3px] border-white rounded-md p-6 mb-10"><icon class="text-[50px]" name="uil:user" /></div>
    <div class="text-[20px] text-center">
        <p>Accont Number: <b>0054628709</b></p>
        <p>User Identification: <b>Johnson971</b></p>
        <p>Pin: <b>2000</b></p>
        <p>Swift Code: <b>10001</b></p>
        <p>Transfer Auth: <b>2000</b></p>

        <h2 class="text-[30px] font-bold mt-6">CHECKING</h2>
        <p>Available Balance: <b>$750,000.00</b></p>
        <p>Book Balance: <b>$13,000.00</b></p>

        <h2 class="text-[30px] font-bold mt-6">SAVINGS</h2>
        <p>Available Balance: <b>$13,000.00</b></p>
    </div>
    </div>
  </div>
</template>