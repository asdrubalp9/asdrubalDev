<template>
  <div class="row flex justify-center" style="height: 92vh" id="contactame">
    <div class="col-8">
      <div class="row">
        <div class="col-12">
          <p class="text-center text-primary text-h5 q-ma-none">Contáctame</p>
          <p
            class="text-center primary-text text-white text-h2 text-weight-bold"
          >
            Escribeme con confianza
          </p>
        </div>
        <div class="col-12">
          <q-form ref="contactForm">
            <form-field-generator :fields="form" />
            <q-btn
              color="primary"
              icon-right="fa-solid fa-paper-plane"
              label="Enviar mensaje"
              unelevated
              class="full-width"
            />
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isValidEmail } from "./../composables/isValidEmail.js";
import { doConfetti } from "./../composables/confettiFn.js";
import FormFieldGenerator from "src/components/FormFieldGenerator.vue";

import { ref } from "vue";
export default {
  components: {
    FormFieldGenerator,
  },
  setup() {
    const contactForm = ref(null);
    const form = ref([
      {
        type: "text",
        label: "Tu nombre",
        icon: "fa-solid fa-circle-xmark",
        value: null,
        rules: [(val) => !!val || "Precio es requerido"],
      },
      {
        type: "email",
        label: "Tu correo",
        icon: "fa-solid fa-circle-xmark",
        value: null,
        rules: [
          (val) => (val !== null && val !== "") || "Este campo es obligatorio",
          isValidEmail,
        ],
      },
      {
        type: "text",
        label: "Tu teléfono",
        icon: "fa-solid fa-circle-xmark",
        value: null,
        rules: [(val) => val.length > 20 || "El campo es muy largo"],
      },
      {
        type: "textarea",
        label: "Tu mensaje",
        icon: "fa-solid fa-circle-xmark",
        value: null,
        rules: [
          (val) => (val !== null && val !== "") || "Este campo es obligatorio",
        ],
      },
    ]);

    return {
      form,
      contactForm,
    };
  },
};
</script>
<style>
.hero-text {
  color: white;
}
.hero-text span.primary-font {
  color: var(--q-primary);
  display: block !important;
  line-height: 2em;
  font-size: 2em;
  font-weight: bolder;
}
</style>
