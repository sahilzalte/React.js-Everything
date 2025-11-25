import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png",
      companyName: "Google",
      datePosted: "3 days ago",
      post: "Software Engineer",
      tags: "Full-time",
      tag2: "Junior Level",
      pay: 62, // dollars per hour
      location: "Mountain View, CA"
    },
    {
      brandLogo: "https://images.seeklogo.com/logo-png/42/1/meta-new-facebook-2021-logo-png_seeklogo-423961.png",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "Frontend Developer",
      tags: "Full-time",
      tag2: "Mid Level",
      pay: 58,
      location: "Menlo Park, CA"
    },
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Engineer",
      tags: "Full-time",
      tag2: "Senior Level",
      pay: 70,
      location: "Seattle, WA"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tags: "Part-time",
      tag2: "Junior Level",
      pay: 55,
      location: "Cupertino, CA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "5 days ago",
      post: "Machine Learning Engineer",
      tags: "Full-time",
      tag2: "Senior Level",
      pay: 85,
      location: "Los Gatos, CA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
      companyName: "Microsoft",
      datePosted: "3 weeks ago",
      post: "Cloud Engineer",
      tags: "Full-time",
      tag2: "Mid Level",
      pay: 60,
      location: "Redmond, WA"
    },
    {
      brandLogo: "https://images.seeklogo.com/logo-png/32/2/tesla-logo-png_seeklogo-329764.png",
      companyName: "Tesla",
      datePosted: "12 days ago",
      post: "Data Scientist",
      tags: "Full-time",
      tag2: "Senior Level",
      pay: 78,
      location: "Austin, TX"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png",
      companyName: "OpenAI",
      datePosted: "4 days ago",
      post: "AI Research Engineer",
      tags: "Full-time",
      tag2: "Senior Level",
      pay: 95,
      location: "San Francisco, CA"
    },
    {
      brandLogo: "https://images.seeklogo.com/logo-png/10/2/nvidia-logo-png_seeklogo-101614.png",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "Deep Learning Engineer",
      tags: "Full-time",
      tag2: "Mid Level",
      pay: 88,
      location: "Santa Clara, CA"
    },
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Adobe-Logo-1993.jpg",
      companyName: "Adobe",
      datePosted: "8 days ago",
      post: "UI/UX Designer",
      tags: "Part-time",
      tag2: "Junior Level",
      pay: '48',
      location: "San Jose, CA"
    }
  ];

  return (
    <>
      <div className='parent'>
        {jobOpenings.map((item, key) => {
          return <div key={key}>
            <Card key={key} company={item.companyName}
              brandLogo={item.brandLogo}
              datePosted={item.datePosted}
              post={item.post}
              tags={item.tags}
              tag2={item.tag2}
              pay={item.pay}
              location={item.location}
            />
          </div>
        })}
      </div>
    </>
  )
}

export default App