"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapLocationDot, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'


export default function IndexPage() {
  return (
    <section className=" mt-[5rem] flex flex-col flex-wrap items-start justify-start md:justify-start">
      <div className=" project-content m-8 flex flex-col pb-[1rem]">
        <h1 className="mt-2 text-start text-xl  font-extrabold text-[#147efb] dark:text-neutral-50 md:text-center">
          Contact
        </h1>
      </div>
      <div className=" ml-[1rem]">
        <div className="contact__icons">
          <div className="contact__icon-box">
            <span>
              <FontAwesomeIcon
                icon={faMapLocationDot}
                height={180}
                width={30}
                className="hover:text-sky-700"
              />
            </span>
            <div className="contact__info">
              <h3 className="font-extrabold ">Location</h3>
              <p>Toronto, ON, Canada</p>
            </div>
          </div>
          <div className="contact__icon-box">
            <span>
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                height={180}
                width={30}
                className="hover:text-sky-700"
              />
            </span>
            <div className="contact__info">
              <h3 className="font-extrabold ">Mail</h3>
              <a href="mailto: priyanshuchoudhary0104@gmail.com">
                priyanshuchoudhary0104@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
