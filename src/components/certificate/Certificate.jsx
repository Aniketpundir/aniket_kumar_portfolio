import React from 'react'
import "./Certificate.css"
import image from "../../assets/certificate_frontend.jpg"

const certificate = [
    {
        id: "1",
        certificateImage: image,
        certificateName: "HTML, CSS, React - Certification Course for Beginners",
        certificateLink: "https://www.udemy.com/certificate/UC-341bef55-69d6-4029-8e05-d2d81cad90f8/",
        description: "Completed Udemy’s “HTML, CSS, React - Certification Course for Beginners” by YouAccel Training. This 14.5-hour program covered HTML structure, advanced CSS styling, responsive design, and React fundamentals for building interactive web applications. Gained skills in creating dynamic, component-based UIs, enhancing front-end development proficiency and delivering modern, user-friendly web experiences."
    }
]

const Certificate = () => {
    return (
        <>
            <div id="work" className="my-work">
                <h1>Certificates</h1>
                <div className="card-wrapper">
                    {certificate.map((items, index) => {
                        return (
                            <div className="card" key={index}>
                                <img src={items.certificateImage} alt={items.title} className="card-image" />
                                <div className="card-content">
                                    <h3 className="card-title">{items.certificateName}</h3>
                                    <p className="card-desc">{items.description}</p>
                                    <div className="button-group">
                                        <a target="_blank" href={items.certificateLink} rel="noreferrer">
                                            <button className="card-button">View</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Certificate