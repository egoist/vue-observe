
# vue-observe

[![NPM version](https://img.shields.io/npm/v/vue-observe.svg?style=flat)](https://npmjs.com/package/vue-observe) [![NPM downloads](https://img.shields.io/npm/dm/vue-observe.svg?style=flat)](https://npmjs.com/package/vue-observe) [![CircleCI](https://circleci.com/gh/egoist/vue-observe/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/vue-observe/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

## Install

```bash
yarn add vue-observe
```

## Usage

```js
class Store = {
  @observe count = 1

  get double() {
    return this.count * 2
  }

  inc() {
    this.count++
  }
}

const store = new Store()

// Your Vue.js component
const App = {
  render() {
    return (
      <button onClick={() => store.inc()}>
        {store.count}:{store.double}
      </button>
    )
  }
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**vue-observe** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/vue-observe/contributors)).

> [egoist.moe](https://egoist.moe) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
