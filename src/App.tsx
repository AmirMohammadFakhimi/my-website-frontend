import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import AboutMe from "./components/pages/aboutMe/AboutMe";
import Header from "./components/header/Header";
import {menuItems, urls} from "./global/Variables";
import Educations from "./components/pages/educations/Educations";
import {getMenuItemUrl} from "./global/Storages";
import Experience from "./components/pages/experience/Experience";
import Volunteering from "./components/pages/volunteering/Volunteering";
import Projects from "./components/pages/projects/Projects";
import Courses from "./components/pages/courses/Courses";
import HonorsAndCertificates from "./components/pages/honorsAndCertificates/HonorsAndCertificates";
import ContactMe from "./components/pages/contactMe/ContactMe";
import NextPrevButton from "./components/nextPrevButton/NextPrevButton";
import TagManager from 'react-gtm-module'


function App() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate(getMenuItemUrl())
    }, [])


    useEffect(() => {
        TagManager.initialize({gtmId: 'GTM-N8K5BXLN'});
    }, []);

    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path={urls.aboutMe} element={<AboutMe/>}/>
                <Route path={urls.educations} element={<Educations header={menuItems[1].name}/>}/>
                <Route path={urls.experience} element={<Experience header={menuItems[2].name}/>}/>
                <Route path={urls.volunteering} element={<Volunteering header={menuItems[3].name}/>}/>
                <Route path={urls.projects} element={<Projects header={menuItems[4].name}/>}/>
                <Route path={urls.courses} element={<Courses header={menuItems[5].name}/>}/>
                <Route path={urls.honorsAndCertificates} element={<HonorsAndCertificates header={menuItems[6].name}/>}/>
                <Route path={urls.contactMe} element={<ContactMe header={menuItems[7].name}/>}/>
            </Routes>

            <NextPrevButton/>
        </div>
    );
}

export default App