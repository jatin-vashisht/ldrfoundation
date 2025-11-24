'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Faq">
            {/*Faq Page Start*/}
            <section className="faq-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-page__left">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>How can I donate to support children in need?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>You can donate through our website using secure payment methods, bank transfer, or by visiting our office. We accept one-time donations or monthly recurring contributions. All donations go directly towards children's healthcare, education, and essential support services.</p>
                                            </div>{/*.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>What services do you provide to children?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>We provide comprehensive healthcare including medical treatment and vaccinations, educational programs and scholarships, nutritional support, emergency care, and family counseling. Our services are designed to address all aspects of child welfare and development.</p>
                                            </div>{/**.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>How can I volunteer with your organization?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>You can volunteer by filling out our volunteer application form on our website or contacting us directly. We welcome volunteers from all backgrounds including medical professionals, teachers, and general supporters. Training and orientation are provided for all volunteers.</p>
                                            </div>{/**.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>Are donations tax-deductible?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Yes, all donations to our organization are tax-deductible under Section 80G of the Income Tax Act. We provide official donation receipts for all contributions, which can be used for tax exemption purposes when filing your returns.</p>
                                            </div>{/**.inner */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-page__right">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-2">
                                    <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                        <div className="accrodion-title">
                                            <h4>How do you ensure transparency in fund usage?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>We maintain complete transparency through regular financial reports, annual audits, and detailed project updates. Donors receive periodic reports showing exactly how their contributions are being used to help children. Our financial statements are available on our website.</p>
                                            </div>{/**.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 6 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(6)}>
                                        <div className="accrodion-title">
                                            <h4>What areas do you serve?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>We serve children across India, with a focus on underserved communities in rural and urban areas. Our mobile medical units reach remote villages, while our permanent centers operate in major cities. We also respond to emergency situations nationwide.</p>
                                            </div>{/**.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 7 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(7)}>
                                        <div className="accrodion-title">
                                            <h4>How can families apply for assistance?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Families can apply for assistance by visiting our centers, calling our helpline, or submitting an online application. Our team evaluates each case based on need and available resources. Emergency cases receive immediate attention and support.</p>
                                            </div>{/**.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 8 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(8)}>
                                        <div className="accrodion-title">
                                            <h4>Do you provide long-term support or just emergency aid?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>We provide both emergency aid and long-term support programs. While we respond quickly to urgent medical needs, we also offer ongoing educational scholarships, regular health check-ups, and sustained family support to ensure lasting positive impact on children's lives.</p>
                                            </div>{/**.inner */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Faq Page End*/}

            </Layout>
        </>
    )
}