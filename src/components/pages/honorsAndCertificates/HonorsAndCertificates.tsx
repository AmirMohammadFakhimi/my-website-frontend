import React, {useEffect, useState} from "react";
import "./HonorsAndCertificates.css";
import HeaderTitle from "../../utils/headerTitle/HeaderTitle";
import InfoTile from "../../utils/infoTile/InfoTile";
import Divider from "../../utils/divider/Divider";
import {getHonorsAndCertificates} from "../../../global/ApiCalls";
import {onAxiosError, onAxiosSuccess} from "../../../global/Errors";

function HonorsAndCertificates({header}: { header: string }) {
    type HonorsAndCertificatesType = {
        title: string,
        company: string,
        issueDate: Date,
        skills?: string[],
        description?: string,
        logoUrl: string,
        websiteUrl: string,
        honorAndCertificateUrl?: string,
        honorAndCertificateImageUrl?: string,
    }[]

    type HonorsAndCertificatesResponseType = {
        honors_and_certificates: {
            title: string,
            company: string,
            issue_date: Date,
            skills?: string[],
            description?: string,
            logo_url: string,
            website_url: string,
            honor_and_certificate_url?: string,
            honor_and_certificate_image_url?: string,
        }[]
    }

    const [honorsAndCertificates, setHonorsAndCertificates] =
        useState<HonorsAndCertificatesType>([])

    function convertHonorsAndCertificatesResponse(response: HonorsAndCertificatesResponseType): HonorsAndCertificatesType {
        const currentHonorsAndCertificates = response.honors_and_certificates
        const newHonorsAndCertificates: HonorsAndCertificatesType = []

        currentHonorsAndCertificates.forEach(honorAndCertificate => {
            newHonorsAndCertificates.push({
                title: honorAndCertificate.title,
                company: honorAndCertificate.company,
                issueDate: new Date(honorAndCertificate.issue_date),
                skills: honorAndCertificate.skills,
                description: honorAndCertificate.description,
                logoUrl: honorAndCertificate.logo_url,
                websiteUrl: honorAndCertificate.website_url,
                honorAndCertificateUrl: honorAndCertificate.honor_and_certificate_url,
                honorAndCertificateImageUrl: honorAndCertificate.honor_and_certificate_image_url
            })
        })

        return newHonorsAndCertificates
    }

    useEffect(() => {
        getHonorsAndCertificates()
            .then(
                response =>
                    onAxiosSuccess({
                        res: response,
                        onSuccess: () => setHonorsAndCertificates(convertHonorsAndCertificatesResponse(response.data))
                    }),
                error =>
                    onAxiosError({axiosError: error})
            )
    }, [])


    return (
        <div id={'honors-and-certificates'}>
            <HeaderTitle text={header}/>
            <div id={'honors-and-certificates-container'}>
                {honorsAndCertificates.map((honorAndCertificate, index) => (
                    <>
                        <InfoTile index={index} title={honorAndCertificate.title}
                                  subtitle={`${honorAndCertificate.company}`} startDate={honorAndCertificate.issueDate}
                                  description={honorAndCertificate.description} skills={honorAndCertificate.skills}
                                  logoUrl={honorAndCertificate.logoUrl}
                                  websiteUrl={honorAndCertificate.websiteUrl}
                                  imageUrl={honorAndCertificate.honorAndCertificateImageUrl}
                                  imageRedirectUrl={honorAndCertificate.honorAndCertificateUrl}>
                        </InfoTile>
                        <Divider index={index} allCount={honorsAndCertificates.length}/>
                    </>
                ))}
            </div>
        </div>
    )
}

export default HonorsAndCertificates