import React, {useEffect, useState} from "react";
import "./Courses.css";
import HeaderTitle from "../../utils/headerTitle/HeaderTitle";
import {onAxiosError, onAxiosSuccess} from "../../../global/Errors";
import {getCourses} from "../../../global/ApiCalls";

function Courses({header}: { header: string }) {
    type CoursesType = {
        title: string,
        websiteUrl?: string,
        number: string,
        myGrade?: number,
        maxGrade?: number,
        instructorsNames: string[],
        instructorsUrls?: string[],
        associatedWith?: string,
    }[]

    type CoursesResponseType = {
        courses: {
            title: string,
            website_url?: string,
            number: string,
            my_grade?: number,
            max_grade?: number,
            instructors_names: string[],
            instructors_urls?: string[],
            associated_with?: string,
        }[]
    }

    const [courses, setCourses] = useState<CoursesType>([])

    function convertCoursesResponse(response: CoursesResponseType): CoursesType {
        const currentCourses = response.courses
        const newCourses: CoursesType = []

        currentCourses.forEach(course => {
            newCourses.push({
                title: course.title,
                websiteUrl: course.website_url,
                number: course.number,
                myGrade: course.my_grade,
                maxGrade: course.max_grade,
                instructorsNames: course.instructors_names,
                instructorsUrls: course.instructors_urls,
                associatedWith: course.associated_with
            })
        })

        return newCourses
    }

    useEffect(() => {
        getCourses()
            .then(
                response =>
                    onAxiosSuccess({
                        res: response, onSuccess: () => setCourses(convertCoursesResponse(response.data))
                    }),
                error =>
                    onAxiosError({axiosError: error})
            )
    }, [])

    function getTitle(title: string, websiteUrl?: string) {
        return websiteUrl ?
            <a className={'course-title course-title-link'} href={websiteUrl} target={'_blank'} rel='noreferrer'>
                {title}
            </a>
            :
            <div className={'course-title'}>
                {title}
            </div>
    }

    function getInstructor(instructorName: string, instructorUrl?: string) {
        return instructorUrl ?
            <a className={'course-instructor-link'} href={instructorUrl} target={'_blank'} rel='noreferrer'>
                {instructorName}
            </a>
            :
            instructorName
    }

    function getInstructors(instructorsNames: string[], instructorsUrls?: string[]) {
        return instructorsNames.map((instructorName, index) => (
            <span key={index}>
                {getInstructor(instructorName, instructorsUrls ? instructorsUrls[index] : undefined)}
                {index !== instructorsNames.length - 1 ? ' & ' : ''}
            </span>
        ))
    }

    return (
        <div>
            <HeaderTitle text={header} total={courses.length}/>
            <ul id={'courses-list'}>
                {courses.map((course, index) => (
                    <li key={index} className={'course'}>
                        {getTitle(course.title, course.websiteUrl)}
                        <div className={'course-number'}>
                            {course.number}
                        </div>
                        <div className={'course-grade'}>
                            {course.myGrade !== null && course.maxGrade !== null ?
                                `Grade: ${course.myGrade} / ${course.maxGrade}` : ''}
                        </div>
                        <div className={'course-instructor'}>
                            {course.instructorsNames.length === 1 ?
                                'Instructor: ' : 'Instructors: '}
                            {getInstructors(course.instructorsNames, course.instructorsUrls)}
                        </div>
                        <div className={'course-associated-with'}>
                            {course.associatedWith ? 'Associated with ' + course.associatedWith : ''}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Courses