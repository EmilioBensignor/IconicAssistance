<template>
  <v-app class="pt-15">
    <HeaderComponent />
    <div class="pt-4">
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

<style>
/* Fonts */
h1, h2, h3, h4, h5, h6, p{
  font-family: 'Poppins', sans-serif;
}
h1{
  font-weight: 700;
  line-height: 1.2em;
  font-size: 2.4rem;
}
h2{
  width: 95%;
  font-weight: 700;
  font-size: 1.7rem;
}
.subtitle{
  font-size: 1.1rem;
}
p{
  width: 85%;
  line-height: 1.5em;
  font-size: 1rem;
}

/* Buttons */

.primaryButton{
  background-color: white;
  border: 1px solid white;
  border-radius: 20vw;
  color: #373ae6;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.3rem;
  text-decoration: none;
  padding: 4vw 7vw;
}

.secondaryButton{
  background-color: #373ae6;
  border: 1px solid #373ae6;
  border-radius: 20vw;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.3rem;
  text-decoration: none;
  padding: 4vw 7vw;
}

/* BackGrounds */
.skyRadioactive{
  background-image: linear-gradient(to bottom, #0cb8f1, #00a0fa, #0085fe, #0066f9, #373ae6);
}
.radioactiveSky{
  background-image: linear-gradient(to bottom, #373ae6, #0066f9, #0085fe, #00a0fa, #0cb8f1);
}

/* Alignments */
.columnAlignCenter{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
