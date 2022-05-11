<template>
  <div>
    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.smAndUp"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
      <v-list color="primary" nav>
        <v-list-item
          v-for="(item, i) in barItems"
          :key="i"
          :href="item.href"
          :target="item.target"
          :to="item.to"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="white" elevate-on-scroll flat>
      <v-container :class="{ 'px-0': !$vuetify.breakpoint.smAndUp }">
        <v-row>
          <v-col class="d-flex align-center">
            <v-app-bar-nav-icon
              v-if="!$vuetify.breakpoint.mdAndUp"
              @click.stop="drawer = !drawer"
            />
            <v-toolbar-title
              class="font-weight-bold text-h5 primary--text"
              style="cursor: pointer"
              @click="$router.push('/')"
            >
              <v-icon color="primary" large>mdi-code-not-equal-variant</v-icon>

              <span class="accent--text">Leonardo Aceituno</span>
            </v-toolbar-title>
          </v-col>

          <v-col v-if="$vuetify.breakpoint.mdAndUp" class="text-right">
            <v-btn
              v-for="(item, i) in barItems"
              :key="i"
              :to="item.to"
              class="text-capitalize"
              exact
              exact-active-class="accent--text"
              text
              >{{ item.title }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: null,
      barItems: [
        {
          title: "Home",
          to: "/",
        },

        {
          title: "Conóceme",
          to: "/about",
        },
        {
          title: "Proyectos",
          to: "/projects",
        },
        {
          title: "Contacto",
          to: "/contact",
        },
      ],
    };
  },
};
</script>

<style>
</style>