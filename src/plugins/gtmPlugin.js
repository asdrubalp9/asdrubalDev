import gtm from "./../composables/gtm.js";

export default ({ router }) => {
  router.afterEach((to, from) => {
    gtm.logPage(to.path);
  });
};
