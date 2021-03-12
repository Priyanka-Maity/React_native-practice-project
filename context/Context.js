import React, { createContext, useState } from 'react'
import MainNavigator from '../navigation/MainNavigator'
export const GlobalContext = createContext();
export default function Context() {
    const [show, setShow] = useState(false)
    const [tol, setTol] = useState(false)
    const [tog, setTog] = useState(false)
    const [visible, setVisible] = useState(true)
    const [errortext, setErrortext] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    return (
        <GlobalContext.Provider value={{ show, setShow, tol, setTol, tog, setTog, visible, setVisible, errortext, setErrortext, userEmail, setUserEmail, userPassword, setUserPassword, }}>
            <MainNavigator />

        </GlobalContext.Provider>

    )
}
