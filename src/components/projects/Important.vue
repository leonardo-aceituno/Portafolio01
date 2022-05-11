<template>
  <v-row>
    <v-col cols="12" lg="12" xl="8">
      <div>
        <div class="pt-16">
          <h2 class="text-h4 font-weight-bold pb-4 text-center">Proyectos</h2>
          <v-divider></v-divider>
          <div v-for="i in 2" :key="i" class="py-5">
            <CardList></CardList>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import CardList from "@/components/cards/List.vue";
export default {
  name: "Important-Projects",
  components: {
    CardList,
  },
};
</script>

<style>
</style>