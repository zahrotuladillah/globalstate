import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"

import MainPage from "./page/MainPage";
import { dataList } from "./dataList";

import { store, persistor } from "./store/store"

//Fungsi untuk menuju MainPage 
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate Loading={null} persistor={persistor}>
          <MainPage lists={dataList}/>
        </PersistGate> 
      </Provider>
    </>
  );
}

export default App;
