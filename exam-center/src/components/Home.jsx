import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blindgirl from "../assets/little-girl.jpeg";

const Home = () => {

  const [exitAttempts, setExitAttempts] = useState(0);

  // This function forces full-screen mode when the test starts
  const startTestInFullscreen = () => {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
      elem.msRequestFullscreen();
    }

    console.log('Test started in full-screen mode');
  };


  const submitTest = () => {
    // Logic to submit the test goes here
    console.log('Test has been submitted due to full-screen exit.');
    alert('Your test has been submitted because you exited full-screen mode multiple times.');
    // Redirect or stop the test logic
  };

  const handleFullscreenExit = () => {
    setExitAttempts((prevAttempts) => {
      const newAttempts = prevAttempts + 1;

      if (newAttempts === 1) {
        alert('Warning: Please stay in full-screen mode. If you exit again, your test will be submitted.');
        // Attempt to re-enter full-screen mode
        startTestInFullscreen();
      }

      // Automatically submit the test after 2 exits from full-screen
      if (newAttempts >= 2) {
        submitTest();
      }

      return newAttempts;
    });
  };


  useEffect(() => {
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        // If the user exits full-screen, call the handleFullscreenExit function
        handleFullscreenExit();
      }
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);


  return (
    <div className="">
      <div className="bg-blue-950 h-screen">
        <div className="relative z-10">
          <img className=" w-screen h-screen opacity-30" src={blindgirl} />

          <div className="absolute inset-48 flex flex-col gap-10 justify-center items-center z-20 text-center text-white">
            <p className="text-5xl text-green-400 font-mono">
              {" "}
              The Most Popular Online Exam Site For Blind Students
            </p>
            <p className="text-4xl font-serif">
              We Will Open The World Of Knowledge For You!
            </p>
            <div>
              <button className="bg-green-400 rounded-lg p-1 w-44 h-14">
                <Link to="/questions" onClick={startTestInFullscreen}> Get Started</Link>
              </button>
            </div>
          </div>
        </div>

        <div>
          <section className=" body-font bg-black ">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap  -m-4">
                <div className="p-4 lg:w-1/3 bg-cyan-950">
                  <div className="h-full bg-indigo-950 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                      Get Support
                    </h1>
                    <h2 className="tracking-widest text-xs title-font font-medium text-green-500 mb-3">
                      Support & Services
                    </h2>
                    <p className="leading-relaxed text-white mb-3">
                      Our Support team are at your services.If need anything ,
                      request or support! We are available for you.
                    </p>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 bg-cyan-950">
                  <div className="h-full bg-indigo-950  bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                      Attend Your Examination
                    </h1>
                    <h2 className="tracking-widest text-xs title-font font-medium text-green-500 mb-3">
                      Subject & resources
                    </h2>

                    <p className="leading-relaxed mb-3 text-white">
                      Choose your subject and question bank with lots of
                      questions. And get ready to give the exam. The random
                      questions you will get in the exams.
                    </p>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3 bg-cyan-950">
                  <div className="h-full bg-indigo-950  bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                      Join Us
                    </h1>
                    <h2 className="tracking-widest text-xs title-font font-medium text-green-500 mb-3">
                      Welcome to the ExamHub.
                    </h2>

                    <p className="leading-relaxed mb-3 text-white">
                      Join to our ExamHub community. Get the latest update and
                      Our support team are always by your side and provide you
                      with the best possible support!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
