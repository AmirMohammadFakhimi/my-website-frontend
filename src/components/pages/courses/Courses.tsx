import React, {useEffect, useState} from "react";
import "./Courses.css";
import HeaderTitle from "../../utils/headerTitle/HeaderTitle";
import {onAxiosError, onAxiosSuccess} from "../../../global/Errors";
import {getCourses} from "../../../global/ApiCalls";

function Courses() {
    type CoursesType = {
        title: string,
        number: string,
        myGrade?: number,
        maxGrade?: number,
        instructors_names: string[],
        instructors_urls?: string[],
        associatedWith?: string,
    }[]

    type CoursesResponseType = {
        courses: {
            title: string,
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
                number: course.number,
                myGrade: course.my_grade,
                maxGrade: course.max_grade,
                instructors_names: course.instructors_names,
                instructors_urls: course.instructors_urls,
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

    function getInstructor(instructor_name: string, instructor_url?: string) {
        return instructor_url ?
            <a className={'course-instructor-link'} href={instructor_url} target={'_blank'} rel='noreferrer'>
                {instructor_name}
            </a>
            :
            instructor_name
    }

    function getInstructors(instructors_names: string[], instructors_urls?: string[]) {
        return instructors_names.map((instructor_name, index) => (
            <span key={index}>
                {getInstructor(instructor_name, instructors_urls ? instructors_urls[index] : undefined)}
                {index !== instructors_names.length - 1 ? ' & ' : ''}
            </span>
        ))
    }

    return (
        <div>
            <HeaderTitle text={'Courses'}/>
            <ul id={'courses-list'}>
                {courses.map((course, index) => (
                    <li key={index} className={'course'}>
                        <div className={'course-title'}>
                            {course.title}
                        </div>
                        <div className={'course-number'}>
                            {course.number}
                        </div>
                        <div className={'course-grade'}>
                            {course.myGrade !== null && course.maxGrade !== null ?
                                `Grade: ${course.myGrade} / ${course.maxGrade}` : ''}
                        </div>
                        <div className={'course-instructor'}>
                            {course.instructors_names.length === 1 ?
                                'Instructor: ' : 'Instructors: '}
                            {getInstructors(course.instructors_names, course.instructors_urls)}
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