<template>
  <div
    class="row bg-darker flex justify-center q-pa-xl"
    style="height: 92vh"
    id="contactame"
  >
    <div class="col-8">
      <div class="row justify-around">
        <div class="col-12">
          <p class="text-center text-primary text-h5 q-ma-none">Contáctame</p>
          <p
            class="text-center primary-text text-white text-h2 text-weight-bold"
          >
            Escribeme con confianza
          </p>
        </div>
        <div class="col-5">
          <p>
            Por favor, llena el formulario en esta sección y te responderé a la
            brevedad posible
          </p>
          <div class="row">
            <div class="col-2 flex flex-center">
              <q-icon name="fa-solid fa-envelope" size="xl" />
            </div>
            <div class="col">
              <p class="text-white font-weight-bold q-ma-none">Correo</p>
              <p
                class="text-white primary-text text-h4 q-ma-none primary-color"
              >
                asdrubaldev@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <q-form ref="contactForm">
            <form-field-generator :fields="form" />
            <q-btn
              color="primary"
              icon-right="fa-solid fa-paper-plane"
              label="Enviar mensaje"
              unelevated
              class="full-width q-mt-lg q-pa-md"
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
.q-field [role="alert"] {
  font-size: 13px !important;
  font-weight: bold;
  color: #ed3333;
}
</style>
