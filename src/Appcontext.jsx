import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
    const phone = "+1234 345345";

    return (
        <AppContext.Provider value={phone}>
            {props.children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
