import { useEffect, useState } from "react";
import Store from "electron-store";

const useElectronStore = ({ name }) => {
  const store = new Store({ name, watch: true });
  const [_, setStateStore] = useState(store.store);
  const onStoreChange = () => {
    setStateStore(store.store);
  };

  useEffect(() => {
    const unsubscribe = store.onDidAnyChange(onStoreChange);
    return () => {
      unsubscribe();
    };
  });

  return store;
};

export default useElectronStore;
