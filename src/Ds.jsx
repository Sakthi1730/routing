import React from 'react'
import Dscard from './Dscard'

function Ds() {
    let DscourseList = [
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
          title:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
          discription:"Are you someone who’s not interested in coding, but wants to get placed in tech through data science, and earn a handsome salary? Worry Not! Tech companies have various opportunities open for you even if you’ve no experience in coding.",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
          title:"Top Product-Based Companies for Data Science Freshers",
          discription:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing the power of data to gain valuable insights and make informed decisions.As a data science fresher, it’s essential to find the right company",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
          title:"What is the Difference between Data Science and Data Engineering?",
          discription:"India has been making some serious waves in the world of data. Just like the rest of the world, we’re seeing a massive jump in the demand for data science and data engineering roles. And this isn’t just a passing trend. ",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
          title:"Best Data Science Books to Learn in 2024",
          discription:"Today, we’re going to talk about something really cool: data science. It’s all about using data to make smart decisions and create amazing things. You know, like predicting what people want or finding new ways to help people. Now, if you want to become a data scientist,",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
          title:"Top Product-Based Companies for Data Scientists in 2024",
          discription:"We all know about the kind of buzz surrounding data science right now, it is The tech career of this decade and that’s saying a lot! With the explosive growth of big data, companies across all kinds of industries are leveraging data science to gain valuable",
          date: "29 jan 2024"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
          title:"Useful Python Libraries & Tools for Data Science Beginners",
          discription:"In a world filled with information, knowing how to understand and use data is super important. Data science, which is all about finding valuable insights from data, is a skill that’s needed in many areas like business, finance, and healthcare.",
          date: "29 jan 2024"
        }
    ]
    
  return (
    <div className="container">
    <div className="col-12">
      <div className="row">{
         DscourseList.map((dscourse) =>{
          return <Dscard dscourse={dscourse}/>
         })
      }
     
      </div>
    </div>
  </div>
  )
}

export default Ds