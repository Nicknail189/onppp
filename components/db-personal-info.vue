<template>
  <div
    class="container h-max w-full md:w-max bg-white text-[#333] grid grid-cols-2"
  >
    <div class="body-text font-bold">
      <h4>Firstname</h4>
      <h4>Middlename</h4>
      <h4>Lastname</h4>
      <h4>Date of birth</h4>
      <h4>Address</h4>
      <br />
      <h4>Zipcode</h4>
      <h4>State</h4>
      <h4>Country</h4>
      <h4>Sex</h4>
    </div>
    <div class="body-text text-right">
      <h4>{{ personal.firstname }}</h4>
      <h4>{{ personal.middle }}</h4>
      <h4>{{ personal.lastname }}</h4>
      <h4>{{ personal.dob }}</h4>
      <h4>{{ personal.address }}</h4>
      <h4>{{ personal.zipcode }}</h4>
      <h4>{{ personal.state }}</h4>
      <h4>{{ personal.country }}</h4>
      <h4>{{ personal.sex }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      personal: {
        firstname: 'LOUISE',
        middle: 'RANDALL',
        lastname: 'JOHNSON',
        dob: '03/01/1976',
        address: '5463 CHATHAM WOODS COURT',
        zipcode: '31907',
        state: 'GA',
        country: 'U.S.A',
        sex: 'MALE',
      }
    }
  }
}
</script>

<style scoped>
h4 {
  padding: 4px 10px;
}
</style>