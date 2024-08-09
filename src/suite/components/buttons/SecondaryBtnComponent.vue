<template>
  <v-btn class="w-75 secondary elevation-5 mt-5 mb-1" type="submit" :loading="loading">
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: 'SecondaryBtn',
  props: {
    text: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.secondary {
  height: auto !important;
  border-radius: 100px;
  background-color: #8477FA;
  border: 1px solid #8477FA;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.3rem;
  text-decoration: none;
  text-align: center;
  padding: 1.3rem 1rem;
  transition: all ease 0.2s;
}

.secondary:hover {
  background-color: white;
  color: #8477FA !important;
}
</style>