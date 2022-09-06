import gtm from "src/components/gtm.js";

export default ({ router }) => {
  router.afterEach((to, from) => {
    console.log("aaaaaaaa");
    gtm.logPage(to.path);
  });
};
