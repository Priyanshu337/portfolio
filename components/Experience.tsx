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
          style={{
            maxWidth: '70%', maxHeight: '550px', justifyItems: 'center', alignItems: 'center'
          }}
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
          <a className="max-w-[500px] text-l font-medium leading-7 text-gray-600 dark:text-gray-400">
            <ul className="list-disc pl-6 mb-4">
              <li>Delivered 30+ successful deployments, developed 20+ features and resolved 50+ bugs.</li>
              <li>Creating a technical solution that meets the functional requirements and Wireframes of a system.

              </li>
              <li>Transformed Wireframe and Prototype into Webpages using React.js, HTML, CSS, and JavaScript, leveraging Redux and ContextAPI for state management.

              </li>
              <li>Designed scalable backend systems with Node.js (MVC) and integrated 20+ REST APIs with Express.js.

              </li>
              <li>Integrated APIs with frontend and backend, thoroughly tested using Postman, ensuring robust security measures.
              </li>
              <li>Developed Test cases using Jest testing library

              </li>
              <li>Optimized database queries for 30% faster retrieval and enhanced app performance by 25%.

              </li>
              <li>Demonstrated excellent analytical, troubleshooting, and problem-solving skills, resolving over 50 issues in a dynamic environment.

              </li>
              <li>Participated in an Agile team, creating clean code and documenting work.
              </li>
              <li>Collaborated in Agile workflows, contributing to CI/CD pipelines and delivering well-documented, clean code.
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
