<template>
  <div role="status">
    <LoadingIcon />
    <span class="sr-only">Loading...</span>
  </div>
</template>

<style></style>

<script>
import LoadingIcon from "./icons/Loading.vue";

export default {
  name: "Loader",
  components: { LoadingIcon },
};
</script>
