import { RouterProvider } from "react-router-dom";
import route from "./AppRoutes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persister } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <RouterProvider router={route} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
