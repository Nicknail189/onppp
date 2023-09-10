<template>
  <div class="h-auto md:p-5 w-full">
    <div
      @click="dashboard()"
      class="md:hidden fixed right-[20px] bottom-[40px] w-10 h-10 bg-black flex justify-center items-center"
    >
      <icon class="text-[30px]" name="uil:create-dashboard" />
    </div>
    <div class="flex w-12/12 h-full bg-blue-900/50">
      <div id="side-bar" class="fixed left-[-600px] md:sticky">
        <NuxtLink to="/">
          <navigation />
        </NuxtLink>
        <side-bar @close-sidebar="closedashboard()" />
      </div>

      <div class="flex flex-col w-full">
        <div class="flex flex-col md:flex-row items-start">
          <db-personal-info />
          <amount />
        </div>
        <div>
          <transactions />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },

    methods: {
      dashboard(){
        document.getElementById('side-bar').style.left = '0px'
      },
      closedashboard(){
        document.getElementById('side-bar').style.left = '-600px'
      }
    }
}
</script>