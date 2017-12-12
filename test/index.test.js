import observe from '../src'

test('main', () => {
  class Store {
    @observe count = 1

    get double() {
      return this.count * 2
    }
  }
  const store = new Store()
  expect(store.double).toBe(2)
})
