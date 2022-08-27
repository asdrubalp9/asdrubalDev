<template>
  <div :class="parallax ? 'preserve' : ''" id="tiltMe" ref="tiltRef">
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
      VanillaTilt.init(tiltRef, props.options);
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
