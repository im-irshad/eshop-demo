import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

function toLS(state) {
  try {
    const lSState = JSON.stringify(state);
    localStorage.setItem("products", lSState);
  } catch (e) {}
}

function fromLS() {
  const lSState = localStorage.getItem("products");
  if (lSState === null) return undefined;
  return JSON.parse(lSState);
}
const storeFactory = () => {
  const middleware = [thunk];
  const reduxStore = createStore(
    rootReducer,
    fromLS(),
    composeWithDevTools(applyMiddleware(...middleware))
  );

  reduxStore.subscribe(() => toLS(reduxStore.getState()));
  return reduxStore;
};

export default storeFactory;
