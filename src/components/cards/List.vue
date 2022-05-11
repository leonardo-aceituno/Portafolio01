<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-card flat height="100%">
        <v-img
          :aspect-ratio="16 / 9"
          height="100%"
          src="https://disenowebakus.net/imagenes/articulos/la-web-frente-a-internet.jpg"
         
        ></v-img>
      </v-card>
    </v-col>

    <v-col>
      <div>
        <v-btn color="accent" depressed x-small>VUE</v-btn>

        <h3 class="text-h5 font-weight-bold pt-3">
          Ut enim blandit volutpat maecenas volutpat
        </h3>

        <p class="text-h7 font-weight-regular pt-3 text--secondary">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <div class="d-flex justify-space-between">
          <div class="d-flex align-center">
            <v-avatar color="accent" size="36">
              <v-icon dark>mdi-code-not-equal-variant</v-icon>
            </v-avatar>

            <div class="pl-2 text-h7 font-weight-regular ">Leo Aceituno · 03 Jan 2019</div>
          </div>

          <div>
            <v-tooltip top v-for="(item, index) in icons" :key="index" color="accent">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-1"
                  fab
                  small
                  color="accent"
                  elevation="0"
                  v-bind="attrs"
                  v-on="on"
                  :href="item.url"
                >
                  <v-icon dark> {{ item.icon }} </v-icon>
                </v-btn>
              </template>
              <span>{{ item.desc }}</span>
            </v-tooltip>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Card-List",
  data() {
    return {
      icons: [
        { name: "Github", icon: "mdi-github", desc: "Ver en Github", url:"https://www.google.com/" },
        { name: "Web", icon: "mdi-laptop", desc: "Ver en Web" , url:"/"},
      ],
    };
  },
};
</script>

<style>
</style>