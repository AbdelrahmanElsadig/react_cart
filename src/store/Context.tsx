import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";



const AppContext = createContext<ContextProps | {}>({})

const AppProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const [state, dispatch] = useReducer(reducer, { items: [], total: 0, total_price: 0 });
    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AppContext.Provider>
    )

}

export { AppProvider, AppContext }