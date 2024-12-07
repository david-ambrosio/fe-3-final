/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import { ContextGlobal, initialState } from "./context";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_FAV":
      return {
        ...state,
        favs: [...state.favs, action.payload], // Agregar un favorito
      };
    default:
      return state;
  }
};

/* eslint-disable react/prop-types */
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
