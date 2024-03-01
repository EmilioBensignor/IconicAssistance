<template>
  <div id="calendly-embed" style="width: 70vw; height: 85vh; margin: 5vw 0; height: 700px"></div>
</template>

<script>
export default {
  mounted() {
    this.loadCalendlyScript();
  },
  methods: {
    loadCalendlyScript() {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        this.initCalendly();
      };
      document.body.appendChild(script);
    },
    initCalendly() {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/ivan-iconicassistance/15min?hide_gdpr_banner=1',
          parentElement: document.getElementById('calendly-embed'),
          prefill: {},
          utm: {}
        });
      }
    }
  }
};
</script>