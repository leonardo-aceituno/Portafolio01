<template>
  <div class="my-15">
    <v-row>
      <v-col align="center" cols="12" md="8" offset-md="2">
        <v-avatar color="accent" size="86" class="authors">
          <v-icon dark size="64">mdi-account</v-icon>
        </v-avatar>

        <div class="text-h5 font-weight-bold primary--text pt-4">
          Leonardo Aceituno
        </div>

        <div class="text-body-1 py-4 mx-10">
          Soy desarrollador Front End y estoy comenzando esta mi carrera como
          programador, sin embargo he estado ligado a la informática por más de
          10 años, donde me he desempeñádo como Analista QA funcional y también
          líder de equipo de Soporte (mesa de ayuda).
          <br />
          <br />
          La necesidad de buscar nuevos desafíos me motivaron a participar en el
          Bootcamp de Desarrollo Front-end VUE JS, realizado por la Academia
          Desafío Latam. Donde aprendí a trabajar con herramientas como Vue,
          JavaScript, HTML, CSS, GIT, realizar peticiones a APIs, trabajar con
          Cloud Firestore, y más.
        </div>

        <div>
          <v-btn
            v-for="(item, index) in icons"
            :key="index"
            :href="item.link"
            icon
          >
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      icons: [
        {
          name: "facebook",
          icon: "mdi-facebook",
          link: "https://www.facebook.com/leoaceitunourzua/",
        },
        {
          name: "twitter",
          icon: "mdi-twitter",
          link: "https://twitter.com/LeoAceitunoU",
        },
        {
          name: "github",
          icon: "mdi-github",
          link: "https://github.com/leoaceituno",
        },
        {
          name: "instagram",
          icon: "mdi-instagram",
          link: "https://www.instagram.com/iamleoaceituno/",
        },
        {
          name: "linkedin",
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/leonardoaceituno/",
        },
      ],
    };
  },
};
</script>
