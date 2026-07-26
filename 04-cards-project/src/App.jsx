import React from 'react'
import Cards from './components/Cards'

const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mountain View, California"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Cupertino, California"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "1 week ago",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$115/hr",
    location: "Menlo Park, California"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0nyh-NYMAszHqExTJnOcyQJKz4mEi9bKUD5_Il-cmg&s",
    companyName: "Amazon",
    datePosted: "3 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$90/hr",
    location: "Seattle, Washington"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    tag1: "Hybrid",
    tag2: "Senior Level",
    pay: "$105/hr",
    location: "Redmond, Washington"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Los Gatos, California"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$125/hr",
    location: "Santa Clara, California"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "2 days ago",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "San Jose, California"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "1 day ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "San Francisco, California"
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    companyName: "Salesforce",
    datePosted: "3 weeks ago",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$100/hr",
    location: "San Francisco, California"
  }
];

console.log(jobOpenings);
  
  return (
    <div className="parents">
      {jobOpenings.map(function(elem, indx){

        return <div key={indx}>
        <Cards  company={elem.companyName} pays={elem.pay} postdate={elem.datePosted} locations={elem.location} t1={elem.tag1} t2={elem.tag2} logo={elem.brandLogo}/>
       </div>


      })}
    </div>
  )
}

export default App
