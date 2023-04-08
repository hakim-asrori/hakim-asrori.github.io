import React, { createContext, useEffect, useReducer, Dispatch } from "react";

interface State {
  darkMode: boolean;
}

interface Action {
  type: "toggle";
}

interface ThemeContextValue {
  state: State;
  dispatch: Dispatch<Action>;
}

export const themeContext = createContext<ThemeContextValue>({
  state: { darkMode: true },
  dispatch: () => null,
});

const initialState: State = { darkMode: true };

const themeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "toggle":
      let newState = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(newState))
      return { darkMode: newState };
      
      default:
      return state;
  }
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [state, dispatch] = useReducer(themeReducer, {
    darkMode: JSON.parse(localStorage.getItem('darkMode') || "true")
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
  }, [state.darkMode]);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {children}
    </themeContext.Provider>
  );
};
