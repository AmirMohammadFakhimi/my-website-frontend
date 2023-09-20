import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import AboutMe from "./components/pages/aboutMe/AboutMe";
import Header from "./components/header/Header";
import {urls} from "./global/Variables";
import Educations from "./components/pages/educations/Educations";
import {getMenuItemUrl} from "./global/Storages";
import Experiences from "./components/pages/experiences/Experiences";
import Volunteering from "./components/pages/volunteering/Volunteering";
import Projects from "./components/pages/projects/Projects";
import Courses from "./components/pages/courses/Courses";
import Licenses from "./components/pages/licenses/Licenses";
import ContactMe from "./components/pages/contactMe/ContactMe";
import NextPrevButton from "./components/nextPrevButton/NextPrevButton";
import TagManager from 'react-gtm-module'


declare global {
    interface Window {
        dataLayer: any;
    }
}

function App() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate(getMenuItemUrl())
    }, [])


    window.dataLayer.push({
        event: 'pageview'
    });
    useEffect(() => {
        TagManager.initialize({gtmId: 'GTM-N8K5BXLN'});
    }, []);

    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path={urls.aboutMe} element={<AboutMe/>}/>
                <Route path={urls.educations} element={<Educations/>}/>
                <Route path={urls.experiences} element={<Experiences/>}/>
                <Route path={urls.experiences} element={<Experiences/>}/>
                <Route path={urls.volunteering} element={<Volunteering/>}/>
                <Route path={urls.projects} element={<Projects/>}/>
                <Route path={urls.courses} element={<Courses/>}/>
                <Route path={urls.licenses} element={<Licenses/>}/>
                <Route path={urls.contactMe} element={<ContactMe/>}/>
            </Routes>

            <NextPrevButton/>
        </div>
    );
}

export default App;
