<template>
  <div class="row bg-darker flex justify-center q-pa-xl" id="contactame">
    <div class="col-12 col-md-11 col-lg-8">
      <div class="row justify-around">
        <div class="col-12">
          <p class="text-center text-primary text-h5 q-ma-none">
            {{ t("contactMe") }}
          </p>
          <p
            class="text-center primary-text text-white text-h2 text-weight-bold contactame_title"
          >
            {{ t("writeToMe") }}
          </p>
        </div>
        <div class="col-md-5 col-12 contactame_content">
          <p>
            {{ t("contactMeContent") }}
          </p>
          <div class="row">
            <div class="col-2 flex flex-center">
              <q-icon name="fa-solid fa-envelope" size="xl" />
            </div>
            <div class="col-12">
              <p class="text-white font-weight-bold q-ma-none">
                {{ t("email") }}
              </p>
              <p
                class="text-white primary-text text-h4 q-ma-none primary-color contactame_emailAddr"
              >
                asdrubaldev@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <q-form ref="contactForm" @submit.prevent="recaptcha()">
            <form-field-generator :fields="form" />
            <q-btn
              :loading="loading"
              color="primary"
              icon-right="fa-solid fa-paper-plane"
              :label="t('sendMessage')"
              unelevated
              class="full-width q-mt-lg q-pa-md"
              type="submit"
            />
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isValidEmail } from "./../composables/isValidEmail.js";
import { ref, computed } from "vue";
import { doConfetti } from "./../composables/confettiFn.js";
import { VueReCaptcha, useReCaptcha } from "vue-recaptcha-v3";
import FormFieldGenerator from "src/components/FormFieldGenerator.vue";
import { useI18n } from "vue-i18n";
import axios from "axios";
export default {
  components: {
    FormFieldGenerator,
  },
  setup() {
    const { t } = useI18n();
    const contactForm = ref(null);
    const loading = ref(null);
    const form = ref([
      {
        type: "text",
        name: "name",
        label: computed(() => t("yourName")),
        icon: "fa-solid fa-circle-xmark",
        clearIcon: "fa-solid fa-times",
        cancelIcon: "fa-solid fa-times",
        errorIcon: "fa-solid fa-triangle-exclamation",
        value: ref(""),
        rules: [(val) => !!val || computed(() => t("nameRequired"))],
      },
      {
        type: "email",
        name: "email",
        label: computed(() => t("yourEmail")),
        icon: "fa-solid fa-circle-xmark",
        clearIcon: "fa-solid fa-times",
        cancelIcon: "fa-solid fa-times",
        errorIcon: "fa-solid fa-triangle-exclamation",
        value: ref(""),
        rules: [
          (val) =>
            (val !== null && val !== "") ||
            computed(() => t("obligatoryField")),
          isValidEmail,
        ],
      },
      {
        type: "text",
        name: "phone",
        label: computed(() => t("yourPhone")),
        icon: "fa-solid fa-circle-xmark",
        clearIcon: "fa-solid fa-times",
        cancelIcon: "fa-solid fa-times",
        errorIcon: "fa-solid fa-triangle-exclamation",
        value: ref(""),
        rules: [(val) => val.length > 20 || computed(() => t("fieldTooLong"))],
      },
      {
        type: "textarea",
        name: "message",
        label: computed(() => t("yourMessage")),
        icon: "fa-solid fa-circle-xmark",
        clearIcon: "fa-solid fa-times",
        cancelIcon: "fa-solid fa-times",
        errorIcon: "fa-solid fa-triangle-exclamation",
        value: ref(""),
        rules: [
          (val) =>
            (val !== null && val !== "") ||
            computed(() => t("obligatoryField")),
        ],
      },
    ]);
    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

    const recaptcha = () => {
      const payload = {};
      form.value.forEach((element) => {
        payload[element.name] = element.value;
      });

      contactForm.value.validate().then(async (success) => {
        if (success) {
          await recaptchaLoaded();
          const token = await executeRecaptcha("login");
          loading.value = true;
          console.log("token", token);

          payload.token = token;
          axios
            .post(
              "https://1cbycl999h.execute-api.us-east-1.amazonaws.com/DEV",
              payload,
              {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              }
            )
            .then((res) => {
              console.log(res);
              if (res.status === 200) {
                doConfetti();
                contactForm.value.reset();
              }
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              loading.value = false;
            });
        }
      });
    };

    return {
      form,
      contactForm,
      recaptcha,
      loading,
      t,
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
#contactame {
  height: 92vh;
}
.q-field [role="alert"] {
  font-size: 13px !important;
  font-weight: bold;
  color: #ed3333;
}
@media (max-width: 768px) {
  .contactame_emailAddr {
    font-size: 1.2em;
  }
  .contactame_content {
    text-align: justify;
  }
  .contactame_title {
    font-size: 2em;
    line-height: 1.5em;
  }
  #contactame {
    height: unset;
  }
}
i.q-icon.text-negative.notranslate.material-icons:before {
  content: "\f00d";
  font-family: "FontAwesome";
}
i.q-icon.text-negative.notranslate.material-icons {
  content: "";
  text-indent: 100%;
  overflow: hidden;
  padding-left: 20px;
}
</style>
