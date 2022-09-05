import { boot } from "quasar/wrappers";
import { VueReCaptcha } from "vue-recaptcha-v3";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.use(VueReCaptcha, {
    siteKey: "6Ld5H84hAAAAALKBLisVecLJhsN0Mjilsi2S8Ncz",
  });
});
