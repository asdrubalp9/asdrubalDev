<template>
  <q-page>
    <Principal />
    <Sobre />
    <Servicios />
    <Contactame />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Principal from "../components/principalSection.vue";
import Sobre from "../components/sobreDruSection.vue";
import Servicios from "../components/serviciosSection.vue";
import Contactame from "src/components/contactameSection.vue";

export default defineComponent({
  name: "IndexPage",
  components: { Principal, Sobre, Servicios, Contactame },
});
</script>
