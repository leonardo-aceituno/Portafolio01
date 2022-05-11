<template>
  <div>
    <v-card to="about">
      <v-img
        :aspect-ratio="16 / 9"
        dark
        gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
        height="500px"
        :src='image'
      >
        <v-card-text class="fill-height d-flex align-end">
          <v-row class="flex-column">
            <v-col cols="12" lg="8" md="10" xl="7" class="mb-10">
              <h2 class="text-h3 py-3" style="line-height: 1.2">
                {{name}}
              </h2>
              <div class="text-h6">{{title}}</div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
    name: "Header",
    data(){
        return{
            name: "Leonardo Aceituno",
            title: "Desarrollador Front End",
            image: "https://300school.com/wp-content/uploads/2019/12/blur-close-up-code-computer-546819-1080x675.jpg"
        }
    }
};
</script>

<style>
</style>