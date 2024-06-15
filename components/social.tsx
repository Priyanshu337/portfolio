import React from 'react'
import Image from 'next/image';

function Social() {


    return (
        <div className='main-container-social'>

            <div className="card">
                <div className="background">
                </div>
                <div className="logo">
                    Socials
                </div>

                <a href="https://github.com/Priyanshu337"><div className="box box1" ><span className="icon">
                    <Image
                        src="/github-mark.svg"
                        alt="GitHub Logo"
                        width={100}
                        height={100} />
                </span></div></a>


                <a href="mailto:priyanshuchoudhary0104@gmail.com"><div className="box box2"> <span className="icon">
                    <Image
                        src="/gmail.svg"
                        alt="GitHub Logo"
                        width={100}
                        height={100} />
                </span></div></a>

                <a href="www.linkedin.com/in/priyanshu0209"><div className="box box3" ><span className="icon"><Image
                    src="/linkedin.svg"
                    alt="GitHub Logo"
                    width={100}
                    height={100} /></span></div></a>

                <div className="box box4"></div>
            </div >
        </div >
    )
}

export default Social;

