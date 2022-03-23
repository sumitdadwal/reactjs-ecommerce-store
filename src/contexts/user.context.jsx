import userEvent from '@testing-library/user-event';
import {createContext, useState, useEffect} from 'react';
import { useRoutes } from 'react-router-dom';
import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils';


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubsbcribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user)
            console.log(user)
        })
        return unsubsbcribe;
    }, [])
 
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};    
    