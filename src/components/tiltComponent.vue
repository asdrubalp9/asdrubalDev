<template>
  <div :class="parallax ? 'preserve' : ''" class="tiltMe">
    <slot></slot>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import VanillaTilt from "vanilla-tilt";

export default {
  name: "TiltComponent",
  setup(props) {
    const tiltRef = ref(null);
    onMounted(() => {
      VanillaTilt.init(document.querySelectorAll(".tiltMe"), props.options);
    });
    return {
      tiltRef,
    };
  },
  props: {
    options: { type: Object, default: null },
    parallax: { type: Boolean, default: true },
  },
};
</script>

<style>
.preserve {
  transform-style: preserve-3d;
}
</style>
