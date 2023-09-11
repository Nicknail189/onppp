<template>
<div class="flex flex-col justify-center items-center h-screen overflow-auto">
    <NuxtLink to="/dashboard" class="rounded-full p-3 bg-white/20 hover:bg-white/50 mt-10">
      <Icon class="text-[24px]" name="uil:home" />
    </NuxtLink>
    <h2 class="text-[40px] tracking-[2px]">Statement</h2>
    <h4 class="text-[18px] font-light mb-10">Recent Transactions</h4>

    <div class="w-full md:w-6/12 p-3">
        <div v-for="state in statement" :key="state.date" class="flex justify-between items-center p-3 rounded-md bg-black/40 w-12/12 mb-2">
            <div>
                <p class="text-12px text-green-700">{{state.date}}</p>
                <h4 class="mb-2 text-[14px] font-bold">{{state.title}}</h4>
                <p class="font-thin">{{state.from}}</p>
            </div>
        <div class="text-green-800 text-[18px] font-bold p-2 rounded-md bg-white/60">{{state.amount}}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            statement:[
                {
                    date: 'Mar 28',
                    title: 'RETURN PAYMENT FEE',
                    from: 'Service Charges/Fees',
                    amount: '$28.00',
                },
                {
                    date: 'Mar 23',
                    title: 'FUND TRANSFER',
                    from: 'From chase bank',
                    amount: '$52,500.00',
                },
                {
                    date: 'Jan 17',
                    title: 'WALGREENS FORT WORTH TX',
                    from: 'From chase bank',
                    amount: '$960.00',
                },
                {
                    date: 'Jan 05',
                    title: 'WALGREENS FORT WORTH TX',
                    from: 'From chase bank',
                    amount: '$800.00',
                },
            ]
        }
    }
}
</script>
