import axios from "axios";

const customAxios = axios.create(
    {
        baseURL: process.env.NODE_ENV === 'development' ?
            process.env.REACT_APP_LOCAL_ADDRESS : process.env.REACT_APP_SERVER_ADDRESS,
        timeout: 5000,
    }
);

export const getEducations = () => customAxios.get('educations')

export const getExperiences = () => customAxios.get('experiences')

export const getVolunteering = () => customAxios.get('volunteering')

export const getProjects = () => customAxios.get('projects')

export const getCourses = () => customAxios.get('courses')

export const getLicenses = () => customAxios.get('licenses')

export const getCV = () => customAxios.defaults.baseURL + '/cv'

export const getResume = () => customAxios.defaults.baseURL + '/resume'