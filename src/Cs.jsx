import React from 'react'
import Cscard from './Cscard'

function Cs() {
    let CscourseList = [
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
          title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
          discription:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success.While it is true that certain cybersecurity roles require extensive coding knowledge, there are plenty of non-coding.",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
          title:"What Is Hacking? Types of Hacking & More",
          discription:"Have you ever wondered what hacking is all about? It’s a big deal in today’s tech-heavy world, and it can be both fascinating and scary. In this blog, we’re going to explore hacking in simple terms so that you can understand it better. We’ll look",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
          title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
          discription:"Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe Is there a difference between cybersecurity and ethical hacking, if yes what is the difference? Let’s find out! ",
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
         CscourseList.map((Cscourse) =>{
          return <Cscard Cscourse={Cscourse}/>
         })
      }
     
      </div>
    </div>
  </div>
  )
}

export default Cs