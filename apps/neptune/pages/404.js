import React from "react";

export default function Custom404() {

  return (
    <>
      <section className="Module hero-module lg:relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="content-container text-center md-max:px-4 xl-max:px-6 pt-10 lg:pt-16 pb-14 lg:pb-20">
            
            <h1 className="text-5xl text-dark-green-30 mb-4 lg:mb-8" >
              404 <br/>
              <span className="text-5xl text-dark-green-30">Page not found</span>
            </h1>

            <p className="text-dark-green-30 text-lg mb-4 lg:mb-12">
              We couldn't find what you were looking for.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
