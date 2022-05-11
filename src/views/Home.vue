<template>
  <div class="home">
    <Header />
    <Tools />
    <ImportantProjects />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layout/Header.vue";
import ImportantProjects from "@/components/projects/Important.vue";
import Tools from "@/components/tools/Tools.vue";

export default {
  name: "Home",
  components: {
    Header,
    ImportantProjects,
    Tools,
  },
};
</script>
