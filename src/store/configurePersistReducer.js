import { persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import collections from "utils/themes";

const transform = createTransform(
  (inboundState, key) => {
    return inboundState;
  },
  (outboundState, key) => {
    switch (key) {
      case "settings":
        return Object.assign({}, outboundState, {
          // theme: collections[outboundState.theme.id],
          theme: collections[1]
        });
      default:
        return outboundState;
    }
  }
);
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["settings"],
  transforms: [transform]
};

export default rootReducer => {
  return persistReducer(persistConfig, rootReducer);
};
