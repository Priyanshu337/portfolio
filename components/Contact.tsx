"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapLocationDot, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <section className="mt-6 flex min-h-[70vh] flex-col items-center justify-center bg-gradient-to-b from-neutral-50 to-white p-3 dark:from-neutral-950 dark:to-black sm:mt-10 sm:p-4 md:mt-20 md:min-h-screen md:p-6">
      <div className="w-full max-w-4xl p-3 sm:p-4 md:p-8">
        <div className="mb-6 text-center sm:mb-8 md:mb-12">
          <h1 className="text-2xl font-extrabold text-[#147efb] dark:text-neutral-50 sm:text-3xl md:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 sm:mt-3 sm:text-base md:mt-4 md:text-lg">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
          <div
            className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] hover:border-white/40 sm:p-4 md:p-6"
          >
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="rounded-lg bg-[#147efb]/10 p-2 md:p-3">
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  className="text-base text-[#147efb] sm:text-lg md:text-xl"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-800 dark:text-white sm:text-lg md:text-xl">Location</h3>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-300 sm:text-sm md:mt-2 md:text-base">Waterloo, ON, Canada</p>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] hover:border-white/40 sm:p-4 md:p-6"
          >
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="rounded-lg bg-[#147efb]/10 p-2 md:p-3">
                <FontAwesomeIcon
                  icon={faEnvelopeOpenText}
                  className="text-base text-[#147efb] sm:text-lg md:text-xl"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-gray-800 dark:text-white sm:text-lg md:text-xl">Email</h3>
                <a
                  href="mailto:priyanshuchoudhary0104@gmail.com"
                  className="mt-1 break-all text-xs text-gray-600 transition-colors hover:text-[#147efb] dark:text-gray-300 sm:text-sm md:mt-2 md:text-base"
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
