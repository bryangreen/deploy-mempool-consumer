<template>
  <div>Showing ({{ latest.length }} of {{ count }})
    <div>
      {{ latest }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PendingTransaction',
  computed: {
    latest() {
      return this.$store.getters.latestPendingTxs;
    },
    count() {
      return this.$store.getters.totalPendingTxs;
    },
  },
};
</script>

<style scoped>

</style>
