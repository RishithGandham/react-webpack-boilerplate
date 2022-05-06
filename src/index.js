import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom'

console.log('react started ')


const Router = () => {
    // for the navbarstate
    const navState = useState('out');

    return (
        <>
            
            <HashRouter>
                <Routes>


                </Routes>
            </HashRouter>
        </>
    )
}


ReactDOM.render(
    <React.StrictMode>
        <h1>react</h1>
        <Router/>
    </React.StrictMode>
    ,
    document.getElementById('root')
);


