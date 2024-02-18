import React from 'react'
import boatWebsite from "./projectImages/boat_website.PNG"
import onlineAutoPartShop from "./projectImages/online_auto_part_shop.PNG"
import pharmacy from "./projectImages/pharmacy.png";
import Sugar from "./projectImages/Sugar.png";

import "./Project.css"
// import { motion } from "framer-motion"

const data = [
    {
        img: Sugar,
        projectTitle: "Sugar Cosmetics",
        techStack: ["React", "Redux", "CSS", "JavaScript ", "Chakra-UI" ],
        description: "Sugar Cosmetics is a popular beauty brand known for its diverse range of cruelty-free makeup products. From vivid lipsticks to precise eyeliners, Sugar offers high-quality cosmetics that cater to various styles and skin tones.",
        githubLink: "https://github.com/navtejnt1/cosmetics-eshop",
        appLink: "https://sugarcosmetics-awcs4db1s-navtejs-projects.vercel.app/"
    },
    {
        img: onlineAutoPartShop,
        projectTitle: "Online Auto Part Shop",
        techStack: ["HTML", "CSS", "JavaScript", "Firebase", "RazorPay"],
        description: "Autoparts is an online e-commerce website where you will find wide varity of autoparts products for different automobiles. Many functionalities are provided in the web application like login/signup, cart and filtering the products with its category along with payment and full responsiveness.",
        githubLink: "https://github.com/SursaChauhan/Online-Auto-Part-shop",
        appLink: "https://sursachauhan.github.io/Online-Auto-Part-shop/"
    },
    {
        img: boatWebsite,
        projectTitle: "boAt-Clone",
        techStack: ["HTML", "CSS", "JavaScript","Local Storage",],
        description: "Discover the boAt Clone Website Project, a web development initiative replicating boAt's sleek design. Enjoy user-friendly navigation while shopping for premium audio gear. We aim to provide an accessible alternative with authentic style. Stay tuned for an engaging online destination designed for audio enthusiasts.",
        githubLink: "https://github.com/RohanKansara01/boAt-Website-Clone",
        appLink: "https://shivering-need-4074.netlify.app/"
    },
    {
        img: pharmacy,
        projectTitle: "Online Pharmacy",
        techStack: ["HTML", "CSS", "JavaScript",],
        description: "Pharmacy is an innovative Pharmacy Management System designed to streamline and modernize pharmacy operations. This comprehensive software solution empowers pharmacies to efficiently manage inventory and enhance customer service.",
        githubLink: "https://github.com/satyam46020/Pharmacy",
        appLink: "https://joyful-ring-9720.vercel.app/"
    }, 
]

function Projects() {
    return (
        <div id='projects'>
            <h1>Projects</h1>

            {
                data.map((e, index) => {
                    return (

                        index % 2 == 0 ? (
                            <div className="project-card proCard1" key={index}>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.appLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="project-card proCard2" key={index}>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.appLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                            </div>
                        )
                    )
                })
            }
        </div>
    )
}

export default Projects