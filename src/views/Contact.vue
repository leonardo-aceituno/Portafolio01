<template>
  <div class="my-15">
    <v-row>
      <v-col align="center" cols="12" md="8" offset-md="2">
        <v-avatar color="accent" size="86" class="authors">
          <v-icon dark size="64">mdi-email</v-icon>
        </v-avatar>

        <div class="text-h5 font-weight-bold primary--text pt-4">CONTACTO</div>

        <div class="text-body-1 py-4 mx-10 ">
            Contactame en las siguintes redes sociales:
        </div>

        <div>
          <v-btn
            v-for="(item, index) in icons"
            :key="index"
            color="primary"
            class="boton ma-10 "
            fab
            x-large
            celevation="0"
            v-bind="attrs"
            v-on="on"
            :href="item.href"
          >
            <v-icon class="boton" dark> {{ item.icon }} </v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      icons: [
        // {
        //   name: "facebook",
        //   icon: "mdi-facebook",
        //   link: "https://www.facebook.com/leoaceitunourzua/",
        // },
        {
          name: "twitter",
          icon: "mdi-twitter",
          href: "https://twitter.com/LeoAceitunoU",
        },
        {
          name: "github",
          icon: "mdi-github",
          href: "https://github.com/leoaceituno",
        },
        // {
        //   name: "instagram",
        //   icon: "mdi-instagram",
        //   href: "https://www.instagram.com/iamleoaceituno/",
        // },
        {
          name: "linkedin",
          icon: "mdi-linkedin",
          href: "https://www.linkedin.com/in/leonardoaceituno/",
        },
        {
          name: "linkedin",
          icon: "mdi-at",
          href: "mailto:leonardo.aceituno@gmail.com",
        },
      ],
    };
  },
};
</script>

<style>
.boton:hover {
  color: #387ed7;
  transform: scale(1.5);
  transition: 0.1s;
}
</style>