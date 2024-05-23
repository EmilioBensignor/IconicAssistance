<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #373ae6;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: spin 1s linear infinite;
  margin: auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>