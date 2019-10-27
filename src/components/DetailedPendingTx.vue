<template>
  <div>Showing ({{ txs.length }} of {{ count }})
    <div>
      <table>
        <thead>
        <tr>
          <th>Hash</th>
          <th>None</th>
          <th>Gas Limit</th>
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
import { PendingTransaction } from '@mempool/mempool-shared/dist/PendingTransaction';
import DetailedPendingTransactionRow from '@/components/DetailedPendingTransactionRow.vue';

export default Vue.extend({
  name: 'DetailedPendingTx',
  components: { DetailedPendingTransactionRow },
  computed: {
    txs(): PendingTransaction[] {
      return this.$store.getters.latestPendingTxs;
    },
    count(): number {
      return this.$store.getters.totalPendingTxs;
    },
  },
});
</script>
