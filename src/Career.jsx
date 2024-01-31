import React from 'react'
import Careercard from './Careercard'

function Career() {
    let CcourseList = [
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
          title:"Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
          discription:"If your New Year resolution consists of building a successful tech career in 2024, then you need a few more weapons in your arsenal to achieve your goal. The tech industry is rapidly evolving and as a representative of the techie world!",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg",
          title:"UI/UX Designer Job Description and Roles & Responsibilities",
          discription:"UI UX is the abbreviated word that’s been rocking the trend over the years, especially in the past decade. You know what UI UX is, but do you know their roles and responsibilities? Do you know anything about the UI/UX designer job description?It is completely fine if you don’t have answers to the above questions because most of them",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
          title:"Top 5 IT Jobs for Economics Students",
          discription:"As the world becomes increasingly interconnected, businesses are relying on technology to drive growth and make data-driven decisions. This has created a high demand for professionals who possess both economic acumen and technical skills.In this article, we will explore the best IT jobs",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
          title:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
          discription:"Look around today, you will witness that we are more reliant on technology and devices than ever before. Benefits of this trend range from getting rid of Yellowbook, and having near-instant access",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
          title:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
          discription:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, it depends on many facets. Because just starting off, many roles don’t really require you to code and based on how advanced you want to get, programming may or may not be all that important for you.",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
          title:"8 Different Types of Cybersecurity and Threats Involved",
          discription:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks, data theft, breaches, unauthorized access, etc. With the advent of technology and the increasing interconnectedness of organizational systems and network",
          date: "29 jan 2024"
        }
    ]
    
  return (
    <div className="container">
    <div className="col-12">
      <div className="row">{
         CcourseList.map((Ccourse) =>{
          return <Careercard Ccourse={Ccourse}/>
         })
      }
     
      </div>
    </div>
  </div>
  )
}

export default Career