import { createContext, useReducer } from "react";

export const initialState = {
  theme: "light",
  // data: [],
  favs: JSON.parse(localStorage.getItem('favData')) || [],
}

const reducer = (state, action) => {
  switch (action.type) {

    case 'TOGGLE_THEME':
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      return { ...state, theme: newTheme };
    
    case "ADD_FAV":
      const updatedData = state.favs ? [...state.favs, action.payload] : [action.payload];
      localStorage.setItem("favData", JSON.stringify(updatedData));
      return { ...state, favs: updatedData };

    case "REMOVE_FAV":
      const filteredData = state.favs
        ? state.favs.filter((item) => item.id !== action.payload)
        : [];
      localStorage.setItem("favData", JSON.stringify(filteredData));
      return { ...state, favs: filteredData };

    default:
      return state;
  }
}

export default reducer;

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const addFav = (item) => {
    dispatch({ type: 'ADD_FAV', payload: item })
  };

  const removeFav = (id) => {
    dispatch({ type: "REMOVE_FAV", payload: id });
  };

  const contextValues = {
    toggleTheme,
    addFav,
    removeFav,
    state,
  };

  return (
    <ContextGlobal.Provider value={contextValues}>
      {children}
    </ContextGlobal.Provider>
  );
};



