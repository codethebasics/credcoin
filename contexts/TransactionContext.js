import { createContext } from 'react';
import { useState } from 'react';

export const TransactionContext = createContext({});

export function TransactionProvider({ children }) {
    const [currentTransaction, setCurrentTransaction] = useState({});

    return (
        <TransactionContext.Provider
            value={{ currentTransaction, setCurrentTransaction }}
        >
            {children}
        </TransactionContext.Provider>
    );
}
