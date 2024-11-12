import React, { useReducer } from "react";
import { peopleData } from "../data/peopleData";
import AppReducer from '../data/AppReducer';
import AppContext from "./AppContext";

function AppProvider({ children }) {
  const [state, appDispatch] = useReducer(AppReducer, peopleData);
  
  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;