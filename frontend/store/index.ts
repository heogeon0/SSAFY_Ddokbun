import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import authSlice from "./auth";
import manage from "./manage";
import {
  CartListSlice,
  CommerceState,
  RelatedProductSlice,
  OrderListSlice,
} from "./commerce";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import localstorage from "redux-persist/lib/storage"; //sessionstorage나 localstorage 중에 선택

import { ListArray, ListObjectItem } from "../types/commerce/list.interface";

export interface StoreState {
  orderListSlice: ListObjectItem[];
  relatedProductSlice: ListObjectItem[];
  cartList: ListArray;
  authSlice: any;
  manage: any;
}

const combinedReducer = combineReducers({
  // 여기에 reducer들 추가
  manage,
  authSlice,
  cartList: CartListSlice.reducer,
  relatedProductSlice: RelatedProductSlice.reducer,
  orderListSlice: OrderListSlice.reducer,
});

const rootReducers = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction,
) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        relatedProductSlice: action.payload.relatedProductSlice.data,
      };

    default:
      return combinedReducer(state, action);
  }
};

const persistConfig = {
  key: "root",
  storage: localstorage,
  whitelist: ["cartList", "manage", "authSlice", "orderListSlice"],
};

const persistedReducer = persistReducer<any>(persistConfig, rootReducers);

export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        // }).concat(logger),
      }),
  });
export const persistor = persistStore(makeStore());

// export const makeStore = () =>
//   configureStore({
//     reducer: rootReducers,
//     devTools: true,
//   });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;

export type AppDispatch = typeof persistor.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore);
export type RootState = ReturnType<typeof rootReducers>;

export default makeStore;
