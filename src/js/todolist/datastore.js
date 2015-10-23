import store from 'store';

const factory = {
  create: function create(key) {
    return {
      get() {
        return store.get(key);
      },
      set(data) {
        store.set(key, data);
        return this;
      }
    };
  }
};

export default factory;
