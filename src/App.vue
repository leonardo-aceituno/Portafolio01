<template>
  <v-app>
    <Navbar />
    <v-container class="my-16">
      <router-view></router-view>
    </v-container>
    <Footer class=""/>
  </v-app>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  background: #f8f9fe;
}
</style>
