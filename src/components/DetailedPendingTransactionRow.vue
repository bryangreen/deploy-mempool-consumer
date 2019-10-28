<template>
  <div>
    <td>{{ tx.hash }}</td>
    <td>{{ tx.nonce }}</td>
    <td>{{ tx.gas }}</td>
    <td>{{ tx.gasPrice }}</td>
    <td>{{ tx.from }}</td>
    <td>{{ tx.to }}</td>
    <td>{{ tx.value }}</td>
  </div>
</template>
<script lang="ts">

export default {
  name: 'DetailedPendingTransactionRow',
  props: {
    tx: {},
  },
};
</script>
