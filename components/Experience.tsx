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
        <GetAppEaseMDDetails />
      </div>
      <div className="m-3">
        <GetProjectDetails />
      </div>
      {/* <div className="m-3">
        <GetSolvativeDetails />
      </div> */}
    </section>
  )
}

const redirection = (url: string) => {
  window.open(url)
}

function GetProjectDetails() {
  return (
    <section className="flex-column border-1 m-6 flex h-auto items-center justify-center">
      <div
        onClick={() => redirection("https://hgffd.com/")}
        className="text-side flex h-fit cursor-pointer flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-lg-invert md:flex-row"
      >
        <Image
          height={500}
          width={500}
          className="rounded-t-lg object-cover md:h-auto md:rounded md:rounded-l-lg"
          src="/c.png"
          alt=""
        />
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-center text-xl  font-extrabold text-[#147efb] dark:text-neutral-50 md:text-left">
            Camera App (Final Project)
          </h5>
          <p className="mb-2  truncate font-extrabold text-gray-400 dark:text-gray-400">
            Mar,200 - Oct,2021
          </p>
          <p className="max-w-[500px] text-xl font-medium leading-7 text-muted-foreground sm:text-base">

            Designed and developed a Wear OS app in Java using Android Studio, allowing users to capture images seamlessly on their wearable devices. Implemented camera functionality with front and rear camera options, along with flash control for versatile photography in various conditions.

            Conducted rigorous testing, debugging, and optimization for a stable and responsive application. Collaborated with cross-functional teams to gather requirements and iterate on features based on user feedback. Ensured compliance with Android development best practices and stayed updated on Wear OS ecosystem innovations.
          </p>
          <div className="stack flex flex-wrap dark:text-white">
            <p>JAVA</p>
            <p>Android Studio</p>
            <p>Figma</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function GetAppEaseMDDetails() {
  return (
    <section className="flex-column border-1 m-6 flex h-auto items-center justify-center dark:shadow-lg-invert">
      <div
        onClick={() => redirection("www.google.com")}
        className="text-side flex h-fit cursor-pointer
flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:flex-row"
      >
        <Image
          height={500}
          width={500}
          className="rounded-t-lg object-cover md:h-auto md:rounded md:rounded-l-lg"
          src="/mee.png"
          alt=""
        />
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-center text-xl  font-extrabold text-[#147efb] dark:text-neutral-50 md:text-left">
            AppEaseMd (Capstone Project)
          </h5>
          <p className="mb-2  truncate font-extrabold text-gray-400 dark:text-gray-400">
            Aug,2023 - Dec,2023
            {/* <span className="text-gray-700 dark:text-white">Current</span> */}
          </p>
          <p className="max-w-[500px] text-xl font-medium leading-7 text-muted-foreground sm:text-base">
            Led full-stack development of a state-of-the-art React-based mobile web app, connecting users with healthcare professionals. Achieved a 30% boost in appointment bookings through user-friendly scheduling features. Implemented Agile processes, reducing time-to-market by 20%.

            Integrated Microsoft Chatbot, slashing appointment verification time by 90% and elevating user satisfaction. Improved user engagement by 25% through seamless access to historical and upcoming appointments.

            Designed and managed a robust SQL Database, enhancing data integrity and processing speed by 15%. Maintained code quality with a 95% code coverage through rigorous testing practices.{" "}
          </p>
          <div className="stack flex flex-wrap dark:text-white">
            <p>React</p>
            <p>C#</p>
            <p>SQL</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// function GetSolvativeDetails() {
//   return (
//     <section
//       onClick={() => redirection("https://solvative.com/")}
//       className="flex-column border-1 m-6 flex h-auto items-center justify-center dark:shadow-lg-invert"
//     >
//       <div
//         className="text-side flex h-fit cursor-pointer
// flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:flex-row"
//       >
//         <Image
//           height={500}
//           width={500}
//           className="rounded-t-lg object-cover md:h-auto md:rounded md:rounded-l-lg"
//           src="/solv.png"
//           alt=""
//         />
//         <div className="flex flex-col justify-start p-6">
//           <h5 className="mb-2 text-center text-xl  font-extrabold text-[#147efb] dark:text-neutral-50 md:text-left">
//             solvative.com (Fullstack Engineer)
//           </h5>
//           <p className="mb-2  truncate font-extrabold text-gray-400 dark:text-gray-400">
//             Jan,2017 - Nov,2019
//           </p>
//           <p className="max-w-[500px] text-xl font-medium leading-7 text-muted-foreground sm:text-base">
//             This application provides a reliable VoIP calling and Tap alert
//             solution for emergency prevention in Hospitals, Old age homes,
//             Nursing Homes. I have worked on the following modules. Writing a
//             Dialplan for calling, voiceMail, Push2Talk feature. Working on Tap
//             Alert middleware. Responsible for the Licensing module to manage
//             users, new installation, update, and other permissions. Data
//             visualization for calls, tap alerts, users, active channels.
//           </p>
//           <div className="stack flex flex-wrap dark:text-white">
//             <p>Nodejs</p>
//             <p>Golang</p>
//             <p>Docker</p>
//             <p>React</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
