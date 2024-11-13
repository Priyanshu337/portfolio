import Image from 'next/image';

export default function IndexPage() {
    return (
        <>

            <section className="mt-[10rem] p-2 flex flex-col justify-center ">
                <div className="border-1 border-solid border-white rounded-2xl p-3 h-200  flex flex-col align-center justify-center">
                    <h1 className="ml-[15px] font-extrabold text-4xl">Projects</h1>
                    <div className="border-3 border-solid border-white">
                        <div className='d-flex border-3 border-solid border-grey-100 p-3 m-3 h-30 w-[600px] '>
                            <div className=" ">
                                <h2>Figma Clone</h2>
                                <p>Build a clone application of Figma for collaboratoin</p>
                            </div>
                            {/* add the link for git proj */}

                            <a href="https://github.com/Priyanshu337/FigmaClone">
                                <span className="icon">
                                    <Image
                                        src="/github-mark.svg"
                                        alt="GitHub Logo"
                                        width={100}
                                        height={100} />
                                </span>
                            </a>
                        </div>
                        <div className=" border-3 border-solid border-grey p-3 m-3 h-30 w-[600px]">
                            <div className=" ">

                                <h2>Chatpdf</h2>
                                <p>User can chat with pdf using Ai and make its work easy </p>
                            </div>
                            {/* add the link for git proj */}

                            <a href="">
                                <span className="icon">
                                    <Image
                                        src="/github-mark.svg"
                                        alt="GitHub Logo"
                                        width={100}
                                        height={100} />
                                </span>
                            </a>
                        </div>

                        <div className="border-3 border-solid border-grey p-3 m-3 h-30 w-[600px]">
                            <div className=" ">

                                <h2>AppEaseMD</h2>
                                <p>Appointment Booking System</p>
                            </div>
                            {/* add the link for git proj */}

                            <a href="">
                                <span className="icon">
                                    <Image
                                        src="/github-mark.svg"
                                        alt="GitHub Logo"
                                        width={100}
                                        height={100} />
                                </span>
                            </a>
                        </div>

                        <div className="border-3 border-solid border-grey p-4 m-3 h-30 w-[600px]">
                            <div className=" ">

                                <h2>My Blog App</h2>
                                <p>Application to Read Blogs</p>
                            </div>
                            {/* add the link for git proj */}
                            <a href="https://github.com/Priyanshu337/my-blog">
                                <span className="icon">
                                    <Image
                                        src="/github-mark.svg"
                                        alt="GitHub Logo"
                                        width={100}
                                        height={100} />
                                </span>
                            </a>
                        </div>

                        <div className=" border-3 border-solid border-grey p-3 m-3 h-30 w-[600px]">
                            <div className=" ">

                                <h2>Health360</h2>
                                <p>Health and Fitness Mobile App</p>
                            </div>
                            {/* add the link for git proj */}

                            <a href="">
                                <span className="icon">
                                    <Image
                                        src="/github-mark.svg"
                                        alt="GitHub Logo"
                                        width={100}
                                        height={100} />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}