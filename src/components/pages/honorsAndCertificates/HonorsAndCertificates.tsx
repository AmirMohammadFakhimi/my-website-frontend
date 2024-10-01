import React, {useEffect, useState} from "react";
import "./HonorsAndCertificates.css";
import HeaderTitle from "../../utils/headerTitle/HeaderTitle";
import InfoTile from "../../utils/infoTile/InfoTile";
import Divider from "../../utils/divider/Divider";
import {getLicenses} from "../../../global/ApiCalls";
import {onAxiosError, onAxiosSuccess} from "../../../global/Errors";

function HonorsAndCertificates() {
    type LicensesType = {
        title: string,
        company: string,
        issueDate: Date,
        skills: string[],
        logoUrl: string,
        licenseUrl: string,
        licenseImageUrl?: string,
    }[]

    type LicensesResponseType = {
        licenses: {
            title: string,
            company: string,
            issue_date: Date,
            skills: string[],
            logo_url: string,
            license_url: string,
            license_image_url?: string,
        }[]
    }

    const [licenses, setLicenses] = useState<LicensesType>([])

    function convertLicensesResponse(response: LicensesResponseType): LicensesType {
        const currentLicenses = response.licenses
        const newLicenses: LicensesType = []

        currentLicenses.forEach(license => {
            newLicenses.push({
                title: license.title,
                company: license.company,
                issueDate: new Date(license.issue_date),
                skills: license.skills,
                logoUrl: license.logo_url,
                licenseUrl: license.license_url,
                licenseImageUrl: license.license_image_url
            })
        })

        return newLicenses
    }

    useEffect(() => {
        getLicenses()
            .then(
                response =>
                    onAxiosSuccess({
                        res: response, onSuccess: () => setLicenses(convertLicensesResponse(response.data))
                    }),
                error =>
                    onAxiosError({axiosError: error})
            )
    }, [])


    return (
        <div id={'licenses'}>
            <HeaderTitle text={'Licenses & Certifications'}/>
            <div id={'honorsAndCertificates-container'}>
                {licenses.map((license, index) => (
                    <>
                        <InfoTile index={index} title={license.title}
                                  subtitle={`${license.company}`}
                                  startDate={license.issueDate}
                                  skills={license.skills} logoUrl={license.logoUrl}
                                  websiteUrl={license.licenseUrl}
                                  imageUrl={license.licenseImageUrl}
                                  imageRedirectUrl={license.licenseUrl}>
                        </InfoTile>
                        <Divider index={index} allCount={licenses.length}/>
                    </>
                ))}
            </div>
        </div>
    )
}

export default HonorsAndCertificates