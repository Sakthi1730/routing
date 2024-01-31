
import Card from './Card.jsx'
function All() {
  let courseList = [
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Human-Computer-Interaction-in-UIUX-A-Comprehensive-Guide-on-Effective-Designing-.webp",
      title:"Human-Computer Interaction in UI/UX: A Comprehensive Guide on Effective Designing [2024]",
      discription:"Believe it or not, approximately 52% of Indians have increased usage of digital devices in 2022 and this percentage will not go down but rather will grow exponentially over the years.",
      date: "29 jan 2024"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Important-Things-to-Consider-Before-Joining-Digital-Marketing-Course.webp",
      title:"10 Important Things to Consider Before Joining Digital Marketing Course",
      discription:"Digital marketing is an exceptionally dynamic field that keeps on evolving with the changing trends, users, and technology. Selecting the appropriate digital marketing course can ultimately profoundly influence your career",
      date: "29 jan 2024"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Most-Common-SQL-Queries-with-Examples.webp",
      title:"15 Most Common SQL Queries with Examples",
      discription:"SQL is a must-have skill for every developer or tech professional to handle large amounts of data. To handle this data, you need to do it efficiently and effectively.SQL Query is one such way to work on these data and update",
      date: "29 jan 2024"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Free-Courses-by-GUVI-Best-Upskilling-Courses-in-Tech.webp",
      title:"Top 5 Free Courses by GUVI: Best Upskilling Courses in Tech [2024]",
      discription:"Does waking up to the news of mass layoffs every morning make you anxious about your future too? As a college student, does the dry placement season scare you? If yes, then no matter where you stand in your life.",
      date: "29 jan 2024"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Cloud-Computing-Project-Ideas.webp",
      title:"Top 10 Cloud Computing Project Ideas [2024]",
      discription:"Cloud computing is among the top trending technologies and people are getting diverted toward it as it has revolutionized the process of storing and accessing data. As businesses and working professionals have embraced cloud solutions.",
      date: "29 jan 2024"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-What-is-Heuristic-Evaluation-An-Essential-Guide.webp",
      title:"What is Heuristic Evaluation? An Essential Guide [2024]",
      discription:"Have you ever wondered why some websites feel effortlessly intuitive, while others leave you lost and frustrated? The secret often lies in a critical, yet frequently overlooked process known as heuristic evaluation. If you’ve heard this word.",
      date: "29 jan 2024"
    }

  ]
  return (
    
    <div className="container">
      <div className="col-12">
        <div className="row">{
           courseList.map((course) =>{
            return <Card course={course}/>
           })
        }
       
        </div>
      </div>
    </div>


  )
}

export default All
