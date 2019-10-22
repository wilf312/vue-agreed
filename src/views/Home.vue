<template>
  <div class="home">
    <ApiTest msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import ApiTest from "@/components/ApiTest.vue";

export default {
  name: "home",
  components: {
    ApiTest
  }
};
</script>
