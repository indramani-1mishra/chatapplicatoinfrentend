import React, { useState } from 'react';  // Correct import of useState
import Context from './formresultcontext';

export default function Contextprovider({children}) {
    const [success, setsuccess] = useState('');
    const [loggedin,setloggedin]= useState(false);
    
    return (
        <div>
            <Context.Provider value={{ success, setsuccess ,loggedin,setloggedin}}>
                {children}
            </Context.Provider>
        </div>
    );
}
