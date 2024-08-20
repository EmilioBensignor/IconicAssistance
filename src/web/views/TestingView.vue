<template>
  <div class="booking column justify-end align-center ga-3 bg-grayBg">
    <iframe
      class="mt-2"
      :src="chiliPiperUrl"
      width="85%"
      height="100%"
    ></iframe>
    <div class="columnAlignCenter">
      <FooterRightsComponent />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const formData = ref({});
const chiliPiperUrl = ref("");

const loadChiliPiperScript = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://js.chilipiper.com/marketing.js";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      resolve();
    };

    script.onerror = () => {
      reject(new Error("Failed to load ChiliPiper script"));
    };

    document.body.appendChild(script);
  });
};

onMounted(async () => {
  try {
    await loadChiliPiperScript();
    // Captura y parsea los datos del formulario desde la URL
    const queryString = router.currentRoute.value.query;
    for (const key in queryString) {
      formData.value[key] = queryString[key];
    }
    console.log("Form data from query:", formData.value);

    const email = encodeURIComponent(formData.value.email || "");
    const firstname = encodeURIComponent(formData.value.firstname || "");
    const lastname = encodeURIComponent(formData.value.lastname || "");
    const phone = encodeURIComponent(formData.value.phone || "");

    chiliPiperUrl.value = `https://iconicassistants.na.chilipiper.com/router/disco_call?email=${email}&firstname=${firstname}&lastname=${lastname}&phone=${phone}`;

    // Verifica si los datos se están enviando correctamente a ChiliPiper
    if (window.ChiliPiper) {
      const leadValues = {
        email: formData.value.email || "",
        firstname: formData.value.firstname || "",
        lastname: formData.value.lastname || "",
        phone: formData.value.phone || "",
      };

      ChiliPiper.submit(
        "iconicassistants",
        "disco_call",
        {
          map: true,
          lead: leadValues,
        },
        (error, result) => {
          if (error) {
            console.error("Error al enviar datos a ChiliPiper:", error);
          } else {
            console.log("Datos enviados a ChiliPiper:", leadValues);
          }
        }
      );
    } else {
      console.error("ChiliPiper no está definido.");
    }
  } catch (error) {
    console.error("Error loading ChiliPiper script:", error);
  }
});
</script>
