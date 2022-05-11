<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" lg="3" v-for="i in 3" :key="i">
      
       <Card/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Card from '@/components/cards/Card.vue';

export default ({
    name: "Projects",
    components: {
      Card
    },
})
</script>
