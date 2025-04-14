import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider } from "react-redux";
import { setupStore } from "./shared/store/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  const { store, persistor } = setupStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
};

export default App;
