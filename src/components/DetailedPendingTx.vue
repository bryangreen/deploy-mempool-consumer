<template>
  <div>Showing ({{ txs.length }} of {{ count }})
    <div>
      <table class="txs">
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
          <td>{{ tx.hash }}</td>
          <td>{{ tx.nonce }}</td>
          <td>{{ tx.gas }}</td>
          <td>{{ tx.gasPrice }}</td>
          <td>{{ tx.from }}</td>
          <td>{{ tx.to }}</td>
          <td>{{ tx.value }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { IPendingTransaction } from '@/shared/IPendingTransaction';

export default Vue.extend({
  name: 'DetailedPendingTx',
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

<style scoped type="text/scss">
  table.txs {
    font-size: 80%;

    td {
      .hash {
        width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>
