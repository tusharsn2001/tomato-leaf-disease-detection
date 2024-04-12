import React, { createContext, useState } from 'react';
import LoginContext from './LoginContext'


const ContextProvider = ({ children }) => {


    const [isLoggedIn, setLoggedIn] = useState(false);
    const [userDetail, setUserDetail] = useState({})
    const contextValue = {
        isLoggedIn,
        setLoggedIn,
        userDetail,
        setUserDetail
    };
    return (
        <>
            <LoginContext.Provider value={contextValue}>
                {children}
            </LoginContext.Provider>
        </>
    )
}



export default ContextProvider
