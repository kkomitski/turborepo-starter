import React from 'react'

const ContactDetails = () => {
  return (
    <div className="flex flex-col border-t border-t-navy-70 pb-12 pt-4 md:col-span-3">
    <span className="mb-4 block uppercase"> Contact </span>
    <div className="mb-4 flex flex-col gap-x-2 md:flex-row">
      <svg
        className="mb-2 md:mb-0 md:mt-2"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 2.83472C1 1.73015 1.89543 0.834717 3 0.834717H6.27924C6.70967 0.834717 7.09181 1.11015 7.22792 1.51849L8.72574 6.01193C8.88311 6.48404 8.66938 7.00003 8.22427 7.22258L5.96701 8.35121C7.06925 10.7959 9.03878 12.7655 11.4835 13.8677L12.6121 11.6104C12.8347 11.1653 13.3507 10.9516 13.8228 11.109L18.3162 12.6068C18.7246 12.7429 19 13.125 19 13.5555V16.8347C19 17.9393 18.1046 18.8347 17 18.8347H16C7.71573 18.8347 1 12.119 1 3.83472V2.83472Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div>
        <span className="block">+44 (0)20 7170 8200</span>
        <span className="block">
          Lines open 24hrs, Monday - Friday
        </span>
      </div>
    </div>
    <div className="flex flex-col gap-x-2 md:flex-row">
      <svg
        className="mb-2 md:mb-0"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 8.83472L10.8906 14.0951C11.5624 14.543 12.4376 14.543 13.1094 14.0951L21 8.83472M5 19.8347H19C20.1046 19.8347 21 18.9393 21 17.8347V7.83472C21 6.73015 20.1046 5.83472 19 5.83472H5C3.89543 5.83472 3 6.73015 3 7.83472V17.8347C3 18.9393 3.89543 19.8347 5 19.8347Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="block">clientmanagement@cmcmarkets.co.uk</span>
    </div>
  </div>
  )
}

export default ContactDetails