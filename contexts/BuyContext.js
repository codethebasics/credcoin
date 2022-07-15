import { createContext, useState, useEffect } from 'react';

export const BuyContext = createContext({});

export function BuyProvider({ children }) {
    const [buyValue, setBuyValue] = useState(0);

    useEffect(() => {}, []);

    return (
        <BuyContext.Provider value={{ buyValue }}>
            <div>{buyValue}</div>
            {children}
        </BuyContext.Provider>
    );
}
