"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapLocationDot, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <section className="mt-[5rem] flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#147efb] dark:text-neutral-50">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#147efb]/10 rounded-lg">
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  className="text-[#147efb] text-xl"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Location</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Waterloo, ON, Canada</p>
              </div>
            </div>
          </div>

          <div
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#147efb]/10 rounded-lg">
                <FontAwesomeIcon
                  icon={faEnvelopeOpenText}
                  className="text-[#147efb] text-xl"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Email</h3>
                <a
                  href="mailto:priyanshuchoudhary0104@gmail.com"
                  className="mt-2 text-gray-600 dark:text-gray-300 hover:text-[#147efb] transition-colors"
                >
                  priyanshuchoudhary0104@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
