<template>
  <div class="pending">
    <h1>Details</h1>
    <DetailedPendingTx></DetailedPendingTx>

  </div>
</template>

<script lang="ts">
import DetailedPendingTx from '../components/DetailedPendingTx.vue';

export default {
  name: 'txsPending',
  components: {
    DetailedPendingTx,
  },
};
</script>

<style scoped>

</style>
