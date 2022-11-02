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
          <q-form @submit.prevent="recaptcha()" ref="contactForm">
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
import { ref, computed, watch } from "vue";
import { doConfetti } from "./../composables/confettiFn.js";
import { VueReCaptcha, useReCaptcha } from "vue-recaptcha-v3";
import FormFieldGenerator from "src/components/FormFieldGenerator.vue";
import { useI18n } from "vue-i18n";
import axios from "axios";
import { Notify } from "quasar";
export default {
  components: {
    FormFieldGenerator,
  },
  setup() {
    const { t, locale } = useI18n();
    const contactForm = ref(null);
    const loading = ref(null);
    //const obligatoryField = computed(() => t("obligatoryField"));
    //const fieldTooLong = computed(() => t("fieldTooLong"));
    //const fieldTooShort = computed(() => t("fieldTooShort"));
    const obligatoryField = ref("This field is required");
    const fieldTooLong = ref("This field is too long");
    const fieldTooShort = ref("this field is too short");

    watch(
      () => locale,
      (newLocale) => {
        if (locale.value !== "es") {
          obligatoryField.value = "Este campo es obligatorio";
          fieldTooLong.value = "Este campo es demasiado largo";
          fieldTooShort.value = "Este campo es demasiado corto";
        }
      },
      {
        deep: true,
      }
    );

    const form = ref([
      {
        type: "text",

        errorMessage: ref(null),
        name: "name",
        label: computed(() => t("yourName")),
        icon: "fa-solid fa-circle-xmark",
        clearIcon: "fa-solid fa-times",
        cancelIcon: "fa-solid fa-times",
        errorIcon: "fa-solid fa-triangle-exclamation",
        value: ref(""),
        rules: [(val) => !!val || obligatoryField],
      },
      {
        type: "email",

        errorMessage: ref(null),
        name: "email",
        label: computed(() => t("yourEmail")),
        icon: "fa-solid fa-circle-xmark",
        clearIcon: "fa-solid fa-times",
        cancelIcon: "fa-solid fa-times",
        errorIcon: "fa-solid fa-triangle-exclamation",
        value: ref("asd@asd.com"),
        rules: [
          (val) => {
            return !val ? obligatoryField : true;
          },
          isValidEmail,
        ],
      },
      {
        type: "text",

        errorMessage: ref(null),
        name: "phone",
        label: computed(() => t("yourPhone")),
        icon: "fa-solid fa-circle-xmark",
        clearIcon: "fa-solid fa-times",
        cancelIcon: "fa-solid fa-times",
        errorIcon: "fa-solid fa-triangle-exclamation",
        value: ref(""),
        rules: [
          (val) => {
            return val && val.length > 20 ? fieldTooLong : true;
          },
        ],
      },
      {
        type: "textarea",

        errorMessage: ref(null),
        name: "message",
        label: computed(() => t("yourMessage")),
        icon: "fa-solid fa-circle-xmark",
        clearIcon: "fa-solid fa-times",
        cancelIcon: "fa-solid fa-times",
        errorIcon: "fa-solid fa-triangle-exclamation",
        value: ref(""),
        rules: [
          (val) => {
            return val.length > 1000 ? fieldTooLong : true;
          },
          (val) => {
            return val.length < 5 ? fieldTooShort : true;
          },
          ,
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
        let message = "";
        form.value.forEach((field) => {
          field.rules.forEach((rule) => {
            if (rule(field.value).value !== true) {
              field.isValid = false;
              field.errorMessage = rule(field.value).value;
              message += rule(field.value).value + "<br>";
            } else {
              message += "";
              field.isValid = true;
              field.errorMessage = "";
            }
          });
        });
        form.value.forEach((field) => {
          if (field.errorMessage) {
            success = false;
          } else {
            success = true;
          }
        });
        if (success) {
          await recaptchaLoaded();
          const token = await executeRecaptcha("login");
          loading.value = true;
          payload.token = token;
          axios
            .post(
              //"https://1cbycl999h.execute-api.us-east-1.amazonaws.com/DEV",
              "https://q7bjp08yj8.execute-api.us-east-1.amazonaws.com/default/portfolioDruMailSenderSendgrid",
              payload,
              {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json;charset=utf-8",
                },
              }
            )
            .then((res) => {
              if (res.status === 200) {
                doConfetti();
                Notify.create({
                  message: t("messageSent"),
                  color: "positive",
                  position: "center",
                });
                contactForm.value.reset();
              }
            })
            .catch((err) => {
              let messageNotSent = "messageNotSent";
              if (err.response.status === 501) {
                messageNotSent = "emailMissing";
              }
              if (err.response.status === 403) {
                messageNotSent = "captchaError";
              }
              Notify.create({
                message: t(messageNotSent),
                color: "negative",
                position: "center",
              });
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
  font-family: "Font Awesome 6 Free";
  font-weight: bold;
}
i.q-icon.text-negative.notranslate.material-icons {
  content: "";
  text-indent: 100%;
  overflow: hidden;
  padding-left: 20px;
}
</style>
