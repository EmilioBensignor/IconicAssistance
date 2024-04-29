<template>
  <h1>Test</h1>
  <div ref="formContainer" id="form-container"></div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.setAttribute('charset', 'utf-8');
    script.setAttribute('type', 'text/javascript');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    
    this.$refs.formContainer.appendChild(script);
    
    script.onload = () => {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "46001660",
        formId: "d164c3b6-b2b5-4fc9-acdf-b0920ec87420",
        target: '#form-container'
      });
    };
  }
};
</script>