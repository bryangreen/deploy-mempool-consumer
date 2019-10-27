<template>
  <div class="pending">
    <h1>Mempool details</h1>
    <PendingTransaction></PendingTransaction>

  </div>
</template>

<script>
import PendingTransaction from '@/components/PendingTransaction.vue';

export default {
  name: 'txsPending',
  components: {
    PendingTransaction,
  },
};
</script>

<style scoped>

</style>
