<template>
  <div>Showing ({{ latest.length }} of {{ count }})
    <div>
      {{ latest }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PendingTransactionSteam',
  computed: {
    latest() {
      return this.$store.getters.latestPendingTxs;
    },
    count() {
      return this.$store.getters.totalPendingTxs;
    },
  },
});
</script>

<style scoped>

</style>
