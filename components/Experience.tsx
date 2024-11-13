"use client"

import Image from "next/image"

export default function IndexPage() {
  return (
    <section className="mt-[10rem] flex flex-col flex-wrap items-start justify-start md:justify-start">
      <div className=" project-content m-8 flex flex-col pb-[3rem]">
        <h1 className="mt-2 text-start text-xl  font-extrabold text-[#147efb] dark:text-neutral-50 md:text-center">
          Experience
        </h1>
      </div>
      <div className="m-3">
        <GetLazzifyDetails />
      </div>
      <div className="m-3">
        <GetOutlierDetails />
      </div>

    </section>
  )
}

const redirection = (url: string) => {
  window.open(url)
}

function GetOutlierDetails() {
  return (
    <section className="flex-column border-1 m-6 flex h-auto items-center justify-center bg-white dark:bg-black">
      <div
        onClick={() => redirection("https://outlier.ai/")}
        className="text-side flex h-fit cursor-pointer flex-col rounded-lg shadow-md dark:shadow-lg-invert md:flex-row p-5  border border-transparent transition duration-300 ease-in-out hover:border-[#147efb] hover:shadow-xl "
      >
        <img
          height={500}
          width={500}
          className="rounded-t-lg object-cover md:h-auto md:rounded md:rounded-l-lg "
          src="/Outlier.jpeg"
          alt="Outlier AI"
        />
        <div className="flex flex-col justify-start p-6" style={{ width: '100%' }}>
          <h5 className="mb-2 text-center text-xl font-extrabold text-[#147efb] dark:text-[#147efb] md:text-left">
            Outlier AI
          </h5>
          <p className="mb-2 truncate font-extrabold text-gray-700 dark:text-gray-300">
            AI Trainee (Feb 2024 - Present)
          </p>
          {/* Convert paragraph into an unordered list */}
          <ul className="max-w-[500px] text-xl font-medium leading-7 text-gray-600 dark:text-gray-400 list-disc pl-6 mb-4">
            <li>
              Crafted high-quality prompts for AI models, leveraging NLP principles.
            </li>
            <li>
              Conducted multilingual quality assurance across various programming languages (Python, C/C++, JavaScript, HTML, CSS).
            </li>
            <li>
              Demonstrated strong attention to detail and proficiency in identifying potential errors or inconsistencies.
            </li>
          </ul>
          <div className="stack flex flex-wrap dark:text-white">
            <p className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md mr-2 mb-2">JavaScript</p>
            <p className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md mr-2 mb-2">Java</p>
            <p className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md mr-2 mb-2">Prompt Evaluation</p>
          </div>
        </div>
      </div>
    </section>
  );
}


function GetLazzifyDetails() {
  return (

    <section className="flex-column border-1 m-6 flex h-auto items-center justify-center dark:shadow-lg-invert bg-white dark:bg-black">
      <div
        onClick={() => redirection("https://www.lazzify.com/")}
        className="text-side flex  h-fit cursor-pointer flex-row rounded-lg shadow-md md:flex-row p-5 border border-transparent transition duration-300 ease-in-out hover:border-[#147efb] hover:shadow-xl"
      >
        <img
          className="rounded-t-lg object-cover md:h-auto md:rounded md:rounded-l-lg mt-30"
          style={{ maxWidth: '60%', maxHeight: '450px' }}
          src="/Lazzify.png"
          alt="CloudMate Technologies LLP"
        />

        <div className="flex flex-col justify-start p-6" style={{ width: '100%' }}>
          <h5 className="mb-2 text-center text-xl font-extrabold text-[#147efb] dark:text-[#147efb] md:text-left">
            CloudMate Technologies LLP
          </h5>
          <p className="mb-2 truncate font-extrabold text-gray-700 dark:text-gray-300">
            Software Engineer (05/21 - 08/22)
          </p>
          <a className="max-w-[500px] text-xl font-medium leading-7 text-gray-600 dark:text-gray-400">
            <ul className="list-disc pl-6 mb-4">
              <li>During my tenure at Cloud Mate Technologies LLP, I wrote over 20,000 lines of code and resolved 50+ bugs, contributing to the development of 20+ features and 50+ deployments.</li>
              <li>Resulting in a 25% increase in application performance and a 30% improvement in response time.</li>
              <li>My efforts led to a 20% decrease in system downtime, with a maintained server uptime of 99.9%.</li>
              <li>I optimized database queries, achieving 30% faster retrieval, and implemented 20+ API integrations.</li>
              <li>I managed cloud resources across AWS, Azure, and Google Cloud..</li>
              <li>Demonstrated excellent analytical, troubleshooting, and problem-solving skills, resolving over 50 issues in a dynamic environment.
              </li>
              <li>Participated in an Agile team, creating clean code and documenting work.
              </li>
              <li>Contributed to test automation to enable continuous integration and delivery.
              </li>
            </ul>
          </a>
          <div className="stack flex flex-wrap dark:text-white">
            <p className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md mr-2 mb-2">React</p>
            <p className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md mr-2 mb-2">Javascript</p>

            <p className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md mr-2 mb-2">TypeScript</p>
            <p className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md mr-2 mb-2">SQL</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { GetOutlierDetails, GetLazzifyDetails };






// <section className="flex-column border-1 m-6 flex h-auto items-center justify-center">
//       <div
//         onClick={() => redirection("https://outlier.ai/")}
//         className="text-side flex h-fit cursor-pointer flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-lg-invert md:flex-row p-5"
//       >
//         <img
//           height={500}
//           width={500}
//           className="rounded-t-lg object-cover md:h-auto md:rounded md:rounded-l-lg"
//           src="/Outlier.jpeg"
//           alt=""
//         />
//         <div className="flex flex-col justify-start p-6">
//           <h5 className="mb-2 text-center text-xl  font-extrabold text-[#147efb] dark:text-neutral-50 md:text-left">
//             Outlier AI
//           </h5>
//           <p className="mb-2  truncate font-extrabold text-gray-400 dark:text-gray-400">
//             AI Trainee (Mar,200 - Oct,2021)
//           </p>
//           <p className="max-w-[500px] text-xl font-medium leading-7 text-muted-foreground sm:text-base">

//             Crafted high-quality prompts for AI models, leveraging NLP principles.
//             Conducted multilingual quality assurance across various programming languages (Python, C/C++, JavaScript, HTML, CSS).
//             Demonstrated strong attention to detail and proficiency in identifying potential errors or inconsistencies.
//           </p>
//           <div className="stack flex flex-wrap dark:text-white">
//             <p>JavaScript</p>
//             <p>Java</p>
//             <p>Prompt Evaluation </p>
//           </div>
//         </div>
//       </div>
//     </section>




// <section className="flex-column border-1 m-6 flex h-auto items-center justify-center dark:shadow-lg-invert">
// <div
//   onClick={() => redirection("https://www.lazzify.com/")}
//   className="text-side flex h-fit cursor-pointer
// flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:flex-row"
// >
//   <img
//     height={500}
//     width={500}
//     className="rounded-t-lg object-cover md:h-auto md:rounded md:rounded-l-lg"
//     src="/Lazzify.png"
//     alt=""
//   />
//   <div className="flex flex-col justify-start p-6">
//     <h5 className="mb-2 text-center text-xl  font-extrabold text-[#147efb] dark:text-neutral-50 md:text-left">
//       CloudMate Technologies LLP
//     </h5>
//     <p className="mb-2  truncate font-extrabold text-gray-400 dark:text-gray-400">
//       Front-end Developer (05/21 - 08/22).
//       {/* <span className="text-gray-700 dark:text-white">Current</span> */}
//     </p>
//     <p className="max-w-[500px] text-xl font-medium leading-7 text-muted-foreground sm:text-base">
//       Developed web applications with React, Node.js, and SQL, reducing user-generated errors by 50%.
//       Increased user engagement by 40% through dynamic and responsive user interfaces.
//       Designed an e-commerce platform, resulting in a 25% increase in sales.
//       Enhanced website performance by reducing LCP by 25%.
//       Contributed to the design of request and response payloads for API endpoints.
//       Integrated backend services through Express.js and REST APIs.
//       Deployed and managed applications on AWS, leveraging services such as EC2, S3, and RDS to ensure scalability and reliability.
//       Collaborated with team members and clients using Figma for clear communication and project alignment.
//       Utilized agile methodologies to deliver high-quality applications.
//       Involved in end-to-end development from design to deployment, ensuring robust and efficient system integration.
//       Projects: Lazzify
//       {" "}
//     </p>
//     <div className="stack flex flex-wrap dark:text-white">
//       <p>React</p>
//       <p>C#</p>
//       <p>SQL</p>
//     </div>
//   </div>
// </div>
// </section>