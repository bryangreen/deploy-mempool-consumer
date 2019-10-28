<template>
  <div class="pending">
    <h1>Mempool details</h1>
    <PendingTransaction></PendingTransaction>

  </div>
</template>

<script>
import PendingTransactionStream from '@/components/PendingTransactionStream.vue';

export default {
  name: 'txsPending',
  components: {
    PendingTransaction: PendingTransactionStream,
  },
};
</script>

<style scoped>

</style>
