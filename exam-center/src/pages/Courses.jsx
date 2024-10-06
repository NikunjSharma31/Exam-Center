import React from "react";
import braille from "../assets/braille.png";
import audio from "../assets/audio.png";
import career from "../assets/career.png";
import math from "../assets/Math.png";
import personal from "../assets/personal.png";
import skills from "../assets/skills.png";
import tech from "../assets/tech.png";
import webDesign from "../assets/webDesign.png";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <section class="text-gray-400 h-full bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-2xl font-medium title-font mb-4 text-white tracking-widest">
            ALL COURSES
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={braille}
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-white">
                  1. Braille Literacy and Advanced Techniques
                </h2>
                <p class="mb-4">
                  Focuses on developing proficiency in braille reading and
                  writing.
                </p>
                <Link to="" class="text-green-500 mb-3">
                  Exams →{" "}
                </Link>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={tech}
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-white">
                  2. Assistive Technology for Education
                </h2>
                <p class="mb-4">
                  Explores various assistive technologies that support
                  educational success, such as text-to-speech software,
                  electronic notetakers, and accessible educational apps.
                </p>
                <Link to="" class="text-green-500 mb-3">
                  Exams →{" "}
                </Link>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={skills}
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-white">
                  3. Life Skills for Independence
                </h2>
                <p class="mb-4">
                  Offers practical skills for daily living, including personal
                  finance management, cooking, and household management.
                </p>
                <Link to="" class="text-green-500 mb-3">
                  Exams →{" "}
                </Link>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={webDesign}
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-white">
                  4. Digital Accessibility and Web Design
                </h2>
                <p class="mb-4">
                  Covers the principles of digital accessibility and inclusive
                  web design.
                </p>
                <Link to="" class="text-green-500 mb-3">
                  Exams →{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={audio}
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-white">
                  5. Audio Description and Media Accessibility
                </h2>
                <p class="mb-4">
                  Teaches the art of audio description, a technique used to make
                  visual media accessible to blind and visually impaired
                  individuals.
                </p>
                <Link to="" class="text-green-500 mb-3">
                  Exams →{" "}
                </Link>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={math}
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-white">
                  6. Mathematics and Science with Accessible Tools
                </h2>
                <p class="mb-4">
                  Focuses on learning math and science using accessible tools
                  and techniques.
                </p>
                <Link to="" class="text-green-500 mb-3">
                  Exams →{" "}
                </Link>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={career}
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-white">
                  7. Career Development and Job Readiness
                </h2>
                <p class="mb-4">
                  The course emphasizes skills and tools to enhance
                  employability and career growth.
                </p>
                <Link to="" class="text-green-500 mb-3">
                  Exams →{" "}
                </Link>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={personal}
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-white">
                  8. Personal Development and Self-Advocacy
                </h2>
                <p class="mb-4">
                  Encourages personal growth and self-advocacy skills.
                </p>
                <Link to="" class="text-green-500 mb-3">
                  Exams →{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
