<template>
  <v-app>
    <HeaderComponent />
    <div>
      <router-view />
    </div>
  </v-app>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
}
</script>

<style scoped>
h1, h2, h3, h4, h5, h6, p{
  font-family: 'Poppins', sans-serif;
}

</style>
