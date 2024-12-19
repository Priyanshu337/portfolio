import Image from 'next/image';

export default function IndexPage() {
    return (
        <section className="mt-[10rem] p-6 flex flex-col justify-center items-center">
            <div className="border-2 border-solid border-white rounded-2xl p-6 w-full max-w-5xl">
                <h1 className="text-center font-extrabold text-4xl text-white mb-6">Projects</h1>
                <div className="space-y-6">
                    {/* Figma Clone Project */}
                    <div className="project-card">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-700">Figma Clone</h2>
                                <p className="text-gray-700 mt-2">Build a clone application of Figma for collaboration.</p>
                            </div>
                            <a href="https://github.com/Priyanshu337/FigmaClone" className="github-icon">
                                <Image src="/github-mark.svg" alt="GitHub Logo" width={50} height={50} />
                            </a>
                        </div>
                    </div>

                    {/* Chatpdf Project */}
                    <div className="project-card">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-700">Chatpdf</h2>
                                <p className="text-gray-700 mt-2">User can chat with PDF using AI and make their work easier.</p>
                            </div>
                            <a href="#" className="github-icon">
                                <Image src="/github-mark.svg" alt="GitHub Logo" width={50} height={50} />
                            </a>
                        </div>
                    </div>

                    {/* AppEaseMD Project */}
                    <div className="project-card">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-700">AppEaseMD</h2>
                                <p className="text-gray-700 mt-2">Appointment Booking System.</p>
                            </div>
                            <a href="#" className="github-icon">
                                <Image src="/github-mark.svg" alt="GitHub Logo" width={50} height={50} />
                            </a>
                        </div>
                    </div>

                    {/* My Blog App Project */}
                    <div className="project-card">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-700">My Blog App</h2>
                                <p className="text-gray-700 mt-2">Application to Read Blogs.</p>
                            </div>
                            <a href="https://github.com/Priyanshu337/my-blog" className="github-icon">
                                <Image src="/github-mark.svg" alt="GitHub Logo" width={50} height={50} />
                            </a>
                        </div>
                    </div>

                    {/* Health360 Project */}
                    <div className="project-card">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-700">Health360</h2>
                                <p className="text-gray-700 mt-2">Health and Fitness Mobile App.</p>
                            </div>
                            <a href="#" className="github-icon">
                                <Image src="/github-mark.svg" alt="GitHub Logo" width={50} height={50} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}















// import Image from 'next/image';

// export default function IndexPage() {
//     return (
//         <>

//             <section className="mt-[10rem] p-2 flex flex-col justify-center ">
//                 <div className="border-1 border-solid border-white rounded-2xl p-3 h-200  flex flex-col align-center justify-center">
//                     <h1 className="ml-[15px] font-extrabold text-4xl">Projects</h1>
//                     <div className="border-3 border-solid border-white">
//                         <div className='d-flex border-3 border-solid border-grey-100 p-3 m-3 h-30 w-[600px] '>
//                             <div className=" ">
//                                 <h2>Figma Clone</h2>
//                                 <p>Build a clone application of Figma for collaboratoin</p>
//                             </div>
//                             {/* add the link for git proj */}

//                             <a href="https://github.com/Priyanshu337/FigmaClone">
//                                 <span className="icon">
//                                     <Image
//                                         src="/github-mark.svg"
//                                         alt="GitHub Logo"
//                                         width={100}
//                                         height={100} />
//                                 </span>
//                             </a>
//                         </div>
//                         <div className=" border-3 border-solid border-grey p-3 m-3 h-30 w-[600px]">
//                             <div className=" ">

//                                 <h2>Chatpdf</h2>
//                                 <p>User can chat with pdf using Ai and make its work easy </p>
//                             </div>
//                             {/* add the link for git proj */}

//                             <a href="">
//                                 <span className="icon">
//                                     <Image
//                                         src="/github-mark.svg"
//                                         alt="GitHub Logo"
//                                         width={100}
//                                         height={100} />
//                                 </span>
//                             </a>
//                         </div>

//                         <div className="border-3 border-solid border-grey p-3 m-3 h-30 w-[600px]">
//                             <div className=" ">

//                                 <h2>AppEaseMD</h2>
//                                 <p>Appointment Booking System</p>
//                             </div>
//                             {/* add the link for git proj */}

//                             <a href="">
//                                 <span className="icon">
//                                     <Image
//                                         src="/github-mark.svg"
//                                         alt="GitHub Logo"
//                                         width={100}
//                                         height={100} />
//                                 </span>
//                             </a>
//                         </div>

//                         <div className="border-3 border-solid border-grey p-4 m-3 h-30 w-[600px]">
//                             <div className=" ">

//                                 <h2>My Blog App</h2>
//                                 <p>Application to Read Blogs</p>
//                             </div>
//                             {/* add the link for git proj */}
//                             <a href="https://github.com/Priyanshu337/my-blog">
//                                 <span className="icon">
//                                     <Image
//                                         src="/github-mark.svg"
//                                         alt="GitHub Logo"
//                                         width={100}
//                                         height={100} />
//                                 </span>
//                             </a>
//                         </div>

//                         <div className=" border-3 border-solid border-grey p-3 m-3 h-30 w-[600px]">
//                             <div className=" ">

//                                 <h2>Health360</h2>
//                                 <p>Health and Fitness Mobile App</p>
//                             </div>
//                             {/* add the link for git proj */}

//                             <a href="">
//                                 <span className="icon">
//                                     <Image
//                                         src="/github-mark.svg"
//                                         alt="GitHub Logo"
//                                         width={100}
//                                         height={100} />
//                                 </span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </section >
//         </>
//     )
// }