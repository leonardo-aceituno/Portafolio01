<template>
  <v-hover v-slot:default="{ hover }" open-delay="50" close-delay="50">
    <div>
      <v-card
        flat
        :color="hover ? 'white' : 'transparent'"
        :elevation="hover ? 12 : 0"
        hover
        to="/detail"
      >
        <v-img
          src="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg"
          :aspect-ratio="16 / 9"
          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
          height="200px"
          class="elevation-2"
          style="border-radius: 16px"
        >
          <!-- <v-card-text>
                  <v-btn color="accent">ANIMAL</v-btn>
                </v-card-text> -->
        </v-img>

        <v-card-text>
          <div class="text-h5 font-weight-bold primary--text">
            How to write an awesome blog post in 5 steps
          </div>

          <div class="text-body-1 py-4">
            Ultrices sagittis orci a scelerisque. Massa placerat duis ultricies
            lacus sed turpis
          </div>

          <div class="d-flex align-center justify-end">
           

            <v-btn
              v-for="(item, index) in icons"
              :key="index"
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
            <!-- <div class="pl-2">Yan Lee · 22 July 2019</div> -->
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-hover>
</template>

<script>
export default {
  name: "Card",
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