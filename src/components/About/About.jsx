import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/dk.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="
        min-h-screen flex items-center
        px-[6vw] md:px-[8vw] lg:px-[16vw]
        font-sans
      "
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
        
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-medium text-gray-300">
            Hi, I’m
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mt-2">
            Dikesh Chouhan
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <ReactTypingEffect
                text={[
                  "MERN Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Problem Solver",
                ]}
                speed={90}
                eraseSpeed={40}
                typingDelay={600}
                eraseDelay={1800}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            </span>
          </h3>

          <p className="text-gray-400 mt-6 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            I’m a passionate MERN Stack Developer with hands-on experience
            building scalable, responsive, and user-friendly web applications.
            I enjoy creating clean UI, efficient backend logic, and real-world
            solutions using modern JavaScript technologies.
          </p>

          {/* DOWNLOAD CV BUTTON */}
          <a
            href="https://drive.google.com/file/d/1ttoJlLjMpjWT6zLeVabpOSc56PTivY2p/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block mt-8 px-8 py-3
              text-lg font-semibold text-white
              rounded-full
              bg-gradient-to-r from-purple-600 to-blue-400
              hover:scale-105
              hover:shadow-[0_0_35px_rgba(130,69,236,0.8)]
              transition-all duration-300
            "
          >
            Download CV
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope
            className="rounded-full"
          >
            <div
              className="
                relative w-56 h-56
                sm:w-72 sm:h-72
                md:w-[26rem] md:h-[26rem]
                rounded-full
                bg-gradient-to-tr from-purple-600 to-blue-400
                p-1
              "
            >
              <img
                src={profileImage}
                alt="Dikesh Chouhan"
                className="
                  w-full h-full rounded-full object-cover
                  bg-black
                  shadow-[0_15px_40px_rgba(130,69,236,0.6)]
                "
              />
            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;
