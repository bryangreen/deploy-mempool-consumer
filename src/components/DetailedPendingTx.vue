<template>
  <div>Showing ({{ txs.length }} of {{ count }})
    <div>
      <table>
        <thead>
        <tr>
          <th>Hash</th>
          <th>None</th>
          <th>Gas</th>
          <th>Gas Price</th>
          <th>From</th>
          <th>To</th>
          <th>Value</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="tx in txs" v-bind:key="tx.hash">
          <DetailedPendingTransactionRow :tx="tx"/>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DetailedPendingTransactionRow from '@/components/DetailedPendingTransactionRow.vue';
import { IPendingTransaction } from '@/shared/IPendingTransaction';

export default Vue.extend({
  name: 'DetailedPendingTx',
  components: { DetailedPendingTransactionRow },
  computed: {
    txs(): IPendingTransaction[] {
      return this.$store.getters.latestPendingTxs;
    },
    count(): number {
      return this.$store.getters.totalPendingTxs;
    },
  },
});
</script>
