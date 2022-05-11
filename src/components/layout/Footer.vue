<template>
  <v-footer padless color="primary" dark app>
    <v-container>
      <v-row align="start"> </v-row>

      <div class="text-center mt-6 caption">
        Copyright &copy;
        <a
          class="white--text"
          href="https://github.com/leoaceituno"
          rel="noopener noreferrer"
          target="_blank"
          >Leo Aceituno</a
        >
        {{ new Date().getFullYear() }}. All rights reserved.
      </div>
    </v-container>
  </v-footer>
</template>



<script>
export default {
  data: () => ({}),
};
</script>