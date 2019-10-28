# Mempool Consumer

Built from a Vue CLI

Used to view pending transactions from the Mempool Aggregator

Currently only shows the most recent 20 transactions, along with a counter for total transactions received.

## TODO
- Probably add chunking of transactions so that the ws stream can keep up.
- Use Web3.js utils to process gas, gas price, etc. into numbers/units that make sense.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
