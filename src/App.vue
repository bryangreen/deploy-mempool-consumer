<template>
  <div id="app">
    <div class="connection-status">
      Aggregator status: <em>{{ $socket.connected ? 'Connected' : 'Disconnected' }}</em>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/pendingTxs">Stream</router-link>
      |
      <router-link to="/detailedTxs">Detailed</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .connection-status {
    float: right;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
