import React, { useReducer } from 'react'
import { initialEmployees } from './initialStates/initialEmployees'
import { CartContext } from './CartContext'


export const GlobalContext = React.createContext()


const GlobalProvider = ({ children }) => {
    const [Cart, dispatchCart] = useReducer(cartContext)

    return (
        <GlobalContext.Provider value={{ Cart, dispatchCart }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
