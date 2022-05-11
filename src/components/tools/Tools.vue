<template>
  <v-row>
    <v-col cols="12" lg="12" xl="8">
      <div>
        <div class="pt-16">
          <h2 class="text-h4 font-weight-bold pb-4 text-center">
            Herramientas
          </h2>
          <v-divider></v-divider>

          <!-- web -->
          <div class="slider d-none d-md-block mt-15">
            <div class="slide-track">
              <div v-for="(item, index) in logos" :key="index" class="slide">
                <img :src="item.route" height="80" width="80" />
                <br />
                <p v-text="item.nombre" class="mt-2 fw-bold"></p>
              </div>

              <div v-for="(item, index) in logos" :key="index+100" class="slide">
                <img :src="item.route" height="80" width="80" />
                <br />
                <p v-text="item.nombre" class="mt-2 fw-bold"></p>
              </div>
            </div>
          </div>

          <!-- Movil -->

          <div class="d-block d-md-none mt-10">
            <v-row>
              <v-col
                v-for="(item, index) in logos"
                :key="index"
                class="pb-3"
                cols="4"
                align="center"
              >
                <img :src="item.route" height="50" width="50" />
                <br />
                <p v-text="item.nombre" class="mt-2 fw-bold"></p>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Tools",
  data() {
    return {
      logos: [
        {
          route:
            "https://raw.githubusercontent.com/leoaceituno/Files/main/bootstrap.png",
          nombre: "BOOTSTRAP",
        },
        {
          route:
            "https://raw.githubusercontent.com/leoaceituno/Files/main/css.png",
          nombre: "CSS",
        },
        {
          route:
            "https://raw.githubusercontent.com/leoaceituno/Files/main/cypress.webp",
          nombre: "CYPRESS",
        },
        {
          route:
            "https://raw.githubusercontent.com/leoaceituno/Files/main/firebase.webp",
          nombre: "FIREBASE",
        },
        {
          route:
            "https://raw.githubusercontent.com/leoaceituno/Files/main/git.png",
          nombre: "GIT",
        },
        {
          route:
            "https://raw.githubusercontent.com/leoaceituno/Files/main/html.png",
          nombre: "HTML",
        },
        {
          route:
            "https://raw.githubusercontent.com/leoaceituno/Files/main/js.png",
          nombre: "JAVASCRIPT",
        },
        {
          route:
            "https://raw.githubusercontent.com/leoaceituno/Files/main/npm.png",
          nombre: "NPM",
        },
        {
          route:
            "https://raw.githubusercontent.com/leoaceituno/Files/main/sass.png",
          nombre: "SAAS",
        },
        {
          route:
            "https://raw.githubusercontent.com/leoaceituno/Files/main/vue.png",
          nombre: "VUE",
        },
      ],
    };
  },
};
</script>

<style scoped>
body {
  align-items: center;
  justify-content: center;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 10));
  }
}

.slider {
  height: 150px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: auto;
  text-align: center;
}
.slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 20);
}
.slide {
  height: 100px;
  width: 250px;
}
</style>