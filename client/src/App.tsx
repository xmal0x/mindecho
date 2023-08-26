import React from 'react';
import {Header, Menu} from "./components";
import {styles} from "./styles";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About, Home, Search} from "./pages";

function App() {
    return (
        <BrowserRouter>
            <div className='relative z-0 w-full mx-auto flex justify-center'>
                <div className={`${styles.paddingX} flex flex-row max-w-7xl`}>
                    <Menu/>
                    <div className={`flex ml-[300px] w-[500px]`}>
                        <Header/>
                        <Routes>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/search" element={<Search/>}/>
                        </Routes>
                    </div>
                    <div className={`flex ml-[800px] fixed border-l ${styles.border} h-full `}></div>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
