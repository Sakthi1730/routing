import React from 'react'
import Fsdcard from './Fsdcard'
function Fsd() {
    let FsdcourseList = [
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Web-Components-A-Deep-Dive-into-Reusable-and-Custom-Elements.webp",
          title:"Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
          discription:"As a full-stack developer, have you ever got bored of using the same HTML, CSS, and JavaScript codes? Initially, it may be interesting, but over some time, over a million lines of code, you will get bored of it, and in the worst case, you may lose interest as well.",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
          title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
          discription:"When you’re hiring a full-stack developer, what are the most important things you look for? Most probably excellent technical and development skills. Sure, they might be great at their work, but would they be a great employee or someone who fits well",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
          title:"Top Differences: Full Stack Developer vs Software Engineer 2024",
          discription:"A Full Stack Developer is a tech all-rounder. They work on both the front and back parts of websites or apps. A Software Engineer focuses on building software. They work on specific bits of the software and make sure everything fits together well.",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Free-Courses-by-GUVI-Best-Upskilling-Courses-in-Tech.webp",
          title:"Horizontal vs Vertical Scaling for Efficient System Design",
          discription:"In the world of system design, envision a digital skyscraper – a multifaceted structure built to withstand the demands of the modern world. Just as an architect crafts blueprints to ensure a skyscraper’s stability, a well-thought-out ",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
          title:"Best Books to Learn Full-Stack Development",
          discription:"Are you interested in becoming a full-stack developer but not sure where to start? In this blog, we’ll introduce you to a list of books to learn full-stack development.Full stack development means you can build the whole shebang – from the stuff people",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
          title:"Top 10 Product-Based Companies for Full-Stack Developers [2024]",
          discription:"In the dynamic landscape of technology, full-stack developers are the architects of the digital world, bridging the gap between front-end and back-end development. In 2024 and the upcoming years, the demand for versatile full-stack developers",
          date: "29 jan 2024"
        }
    ]
    
  return (
    <div className="container">
    <div className="col-12">
      <div className="row">{
         FsdcourseList.map((Fsdcourse) =>{
          return <Fsdcard Fsdcourse={Fsdcourse}/>
         })
      }
     
      </div>
    </div>
  </div>
  )
}

export default Fsd