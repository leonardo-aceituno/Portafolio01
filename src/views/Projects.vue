<template>
  <div class="my-15">
    <v-row>
      <v-col align="center" cols="12" md="8" offset-md="2">
        <v-avatar color="accent" size="86" class="authors">
          <v-icon dark size="64">mdi-briefcase-outline</v-icon>
        </v-avatar>

        <div class="text-h5 font-weight-bold primary--text pt-4">PROYECTOS</div>

        <div class="text-body-1 py-4 mx-10">Algunos de mis proyectos:</div>
      </v-col>
    </v-row>
  <AllProjects />
  </div>
</template>

<script>
import AllProjects from "../components/projects/All.vue";


export default {
  name: "View-Projects",
  components: {
AllProjects
  },
};
</script>


