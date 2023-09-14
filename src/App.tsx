import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import AboutMe from "./components/aboutMe/AboutMe";
import Header from "./components/header/Header";

function App() {
    const navigate = useNavigate()

    useEffect(() => {
            navigate('about-me')
    }, [])

    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path={'about-me'} element={<AboutMe/>}/>
                {/*<Route path={`/home/${homeTabsEndingUrl.myTeam}/${subTabsEndingUrl.list}`} element={*/}
                {/*    <Home mainTab={<MyTeam subTab={'list'}/>}/>*/}
                {/*}/>*/}
                {/*<Route path={`/home/${homeTabsEndingUrl.transfers}/${subTabsEndingUrl.schematic}`} element={*/}
                {/*    <Home mainTab={<Transfers subTab={'schematic'}/>}/>*/}
                {/*}/>*/}
                {/*<Route path={`/home/${homeTabsEndingUrl.transfers}/${subTabsEndingUrl.list}`} element={*/}
                {/*    <Home mainTab={<Transfers subTab={'list'}/>}/>*/}
                {/*}/>*/}
                {/*<Route path={`/home/${homeTabsEndingUrl.events}`} element={*/}
                {/*    <Home mainTab={<LatestEvents/>}/>*/}
                {/*}/>*/}
                {/*<Route path={`/home/${homeTabsEndingUrl.profile}`} element={*/}
                {/*    <Home mainTab={<Profile/>}/>*/}
                {/*}/>*/}
                {/*<Route path={`/home/${homeTabsEndingUrl.prizes}`} element={*/}
                {/*    <Home mainTab={<Prizes/>}/>*/}
                {/*}/>*/}
            </Routes>
        </div>
    );
}

export default App;
