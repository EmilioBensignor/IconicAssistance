<template>
  <h1>Test</h1>
</template>

<script>
export default {
  mounted() {
    // Crear el elemento <script> para cargar el formulario de HubSpot
    const script = document.createElement('script');
    script.setAttribute('charset', 'utf-8');
    script.setAttribute('type', 'text/javascript');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    
    // Agregar el elemento <script> al final del body
    document.body.appendChild(script);
    
    // Llamar a la función de creación del formulario de HubSpot
    script.onload = function() {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "46001660",
        formId: "d164c3b6-b2b5-4fc9-acdf-b0920ec87420"
      });
    };
  }
};
</script>

<style scoped>
/* Aquí puedes incluir estilos específicos para este componente si es necesario */
</style>
