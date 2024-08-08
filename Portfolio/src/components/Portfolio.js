import React, { useState } from "react";
import alienInvasionImage from "../images/alien_invasion1.png";
import alienInvasionImage2 from "../images/alien_invasion2.png";
import pythonCertificate from "../images/python.png";
import javaScriptCertificate from "../images/JavaScript.png";
import commandLineCertificate from "../images/CommandLineCourse.png";
import htmlCertificate from "../images/htmlWebEssentials.png";
import cssCertificate from "../images/cssEssentials.png";
import gitHubCertificate from "../images/GitHubGit.png";
import stockLogin from "../images/stock-login.png";
import stockRegister from "../images/stock-register.png";
import stockQuote from "../images/stock-quote.png";

export const Portfolio = () => {
  const [galleryVisibility, setGalleryVisibility] = useState({
    alienInvasion: false,
    python: false,
    javaScript: false,
    commandLine: false,
    html: false,
    css: false,
    git: false,
    stock: false,
  });

  const [descriptionVisibility, setDescriptionVisibility] = useState({
    alienInvasionDes: false,
    pythonDes: false,
    javaScriptDes: false,
    commandLineDes: false,
    htmlDes: false,
    cssDes: false,
    gitDes: false,
    stockDes: false,
  });

  const toggleDescription = (description) => {
    setDescriptionVisibility((prevVisibility) => ({
      ...prevVisibility,
      [description]: !prevVisibility[description],
    }));
  };

  const maxLength = 100;

  const toggleGallery = (gallery) => {
    setGalleryVisibility((prevVisibility) => ({
      ...prevVisibility,
      [gallery]: !prevVisibility[gallery],
    }));
  };

  const descriptions = {
    alienInvasion: `This project is a recreation of the old school Alien Invasion game where aliens drop down from the sky and you shoot them down. 
    There are 3 difficulty levels where aliens move down the screen faster and as you complete waves, the aliens reset and again move 
    quicker than the previous wave. There is a points system that increases as you complete waves and a high score that is stored and 
    shown at the top of the screen with current points, wave level you are currently on as well as the number of lives you have left.
    Once an alien hits your ship or the bottom of the screen, the game is over. For this game, I utilized Python & Flask.`,
    stock: `...`,
    python:
      "This course covers Python programming, including data types, control flow, functions, and modules.",
    javaScript:
      "This course covers JavaScript programming, including variables, functions, objects, and events.",
    commandLine:
      "This course covers the basics of using the command line interface, including navigation, file manipulation, and scripting.",
    html: "This course covers the essentials of HTML, including elements, attributes, and best practices for structuring web content.",
    css: "This course covers the essentials of CSS, including selectors, properties, and best practices for styling web content.",
    git: "This course covers the basics of using Git and GitHub, including version control, branching, and collaboration.",
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="flex flex-col md:flex-row justify-center space-x-4 w-full max-w-4xl">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-bold text-center">Projects</h1>
          <br />
          <div>
            <h2 className="text-xl font-bold">
              <a
                href="https://github.com/jmarsden8/Alien-Invasion"
                className="hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Alien Invasion
              </a>
            </h2>
            <p>
              {descriptionVisibility.alienInvasionDes
                ? descriptions.alienInvasion
                : `${descriptions.alienInvasion.substring(0, maxLength)}...`}
            </p>
            <button
              onClick={() => toggleDescription("alienInvasionDes")}
              className="text-black font-bold hover:underline"
            >
              {descriptionVisibility.alienInvasionDes
                ? "Show Less......"
                : "Show More......"}
            </button>
            <br />
            <br />
            <button
              onClick={() => toggleGallery("alienInvasion")}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-black transition duration-300 ease-in-out"
            >
              {galleryVisibility.alienInvasion
                ? "Hide Alien Invasion Gallery"
                : "Show Alien Invasion Gallery"}
            </button>
            {galleryVisibility.alienInvasion && (
              <div
                id="alienInvasionGallery"
                className="p-4 border border-gray-300 shadow-lg"
              >
                <img
                  src={alienInvasionImage}
                  alt="Alien Invasion Project"
                  className="w-full h-auto max-w-md mx-auto"
                />
                <br />
                <img
                  src={alienInvasionImage2}
                  alt="Alien Invasion Project"
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>
            )}
          </div>
          <br />
          <br />
          <div>
            <h2 className="text-xl font-bold">
              <a
                href="https://github.com/jmarsden8/Stock-Site"
                className="hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Stock Website
              </a>
            </h2>
            <p>
              {descriptionVisibility.stockDes
                ? descriptions.stock
                : `${descriptions.stock.substring(0, maxLength)}...`}
            </p>
            <button
              onClick={() => toggleDescription("stockDes")}
              className="text-black font-bold hover:underline"
            >
              {descriptionVisibility.stockDes
                ? "Show Less......"
                : "Show More......"}
            </button>
            <br />
            <br />
            <button
              onClick={() => toggleGallery("stock")}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-black transition duration-300 ease-in-out"
            >
              {galleryVisibility.stock
                ? "Hide Stock Website Gallery"
                : "Show Stock Website Gallery"}
            </button>
            {galleryVisibility.stock && (
              <div
                id="stockGallery"
                className="p-4 border border-gray-300 shadow-lg"
              >
                <img
                  src={stockRegister}
                  alt="Stock Website Register Page"
                  className="w-full h-auto max-w-md mx-auto"
                />
                <br />
                <img
                  src={stockLogin}
                  alt="Stock Website Login Page"
                  className="w-full h-auto max-w-md mx-auto"
                />
                <br />
                <img
                  src={stockRegister}
                  alt="Stock Website Register Page"
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>
            )}
          </div>
          <br />
          <br />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-bold text-center">Courses</h1>
          <br />
          <div>
            <h2 className="text-xl font-bold">Python Course</h2>
            <p>
              {descriptionVisibility.pythonDes
                ? descriptions.python
                : `${descriptions.python.substring(0, maxLength)}...`}
            </p>
            <button
              onClick={() => toggleDescription("pythonDes")}
              className="text-black font-bold hover:underline"
            >
              {descriptionVisibility.pythonDes ? "Show Less..." : "Show More..."}
            </button>
            <br />
            <br />
            <button
              onClick={() => toggleGallery("python")}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-black transition duration-300 ease-in-out"
            >
              {galleryVisibility.python
                ? "Hide Python Certificate"
                : "Show Python Certificate"}
            </button>
            {galleryVisibility.python && (
              <div id="Python" className="p-4 border border-gray-300 shadow-lg">
                <img
                  src={pythonCertificate}
                  alt="Python Certificate"
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>
            )}
          </div>
          <br />
          <br />

          <div>
            <h2 className="text-xl font-bold">JavaScript Course</h2>
            <p>
              {descriptionVisibility.javaScriptDes
                ? descriptions.javaScript
                : `${descriptions.javaScript.substring(0, maxLength)}...`}
            </p>
            <button
              onClick={() => toggleDescription("javaScriptDes")}
              className="text-black font-bold hover:underline"
            >
              {descriptionVisibility.javaScriptDes ? "Show Less..." : "Show More..."}
            </button>
            <br />
            <br />
            <button
              onClick={() => toggleGallery("javaScript")}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-black transition duration-300 ease-in-out"
            >
              {galleryVisibility.javaScript
                ? "Hide JavaScript Certificate"
                : "Show JavaScript Certificate"}
            </button>
            {galleryVisibility.javaScript && (
              <div
                id="JavaScript"
                className="p-4 border border-gray-300 shadow-lg"
              >
                <img
                  src={javaScriptCertificate}
                  alt="JavaScript Certificate"
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>
            )}
          </div>
          <br />
          <br />

          <div>
            <h2 className="text-xl font-bold">Command Line Course</h2>
            <p>
              {descriptionVisibility.commandLineDes
                ? descriptions.commandLine
                : `${descriptions.commandLine.substring(0, maxLength)}...`}
            </p>
            <button
              onClick={() => toggleDescription("commandLineDes")}
              className="text-black font-bold hover:underline"
            >
              {descriptionVisibility.commandLineDes ? "Show Less..." : "Show More..."}
            </button>
            <br />
            <br />
            <button
              onClick={() => toggleGallery("commandLine")}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-black transition duration-300 ease-in-out"
            >
              {galleryVisibility.commandLine
                ? "Hide Command Line Certificate"
                : "Show Command Line Certificate"}
            </button>
            {galleryVisibility.commandLine && (
              <div
                id="commandLine"
                className="p-4 border border-gray-300 shadow-lg"
              >
                <img
                  src={commandLineCertificate}
                  alt="Command Line Certificate"
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>
            )}
          </div>
          <br />
          <br />

          <div>
            <h2 className="text-xl font-bold">HTML Course</h2>
            <p>
              {descriptionVisibility.htmlDes
                ? descriptions.html
                : `${descriptions.html.substring(0, maxLength)}...`}
            </p>
            <button
              onClick={() => toggleDescription("htmlDes")}
              className="text-black font-bold hover:underline"
            >
              {descriptionVisibility.htmlDes ? "Show Less..." : "Show More..."}
            </button>
            <br />
            <br />
            <button
              onClick={() => toggleGallery("html")}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-black transition duration-300 ease-in-out"
            >
              {galleryVisibility.html
                ? "Hide HTML Certificate"
                : "Show HTML Certificate"}
            </button>
            {galleryVisibility.html && (
              <div id="html" className="p-4 border border-gray-300 shadow-lg">
                <img
                  src={htmlCertificate}
                  alt="HTML Certificate"
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>
            )}
          </div>
          <br />
          <br />

          <div>
            <h2 className="text-xl font-bold">CSS Course</h2>
            <p>
              {descriptionVisibility.cssDes
                ? descriptions.css
                : `${descriptions.css.substring(0, maxLength)}...`}
            </p>
            <button
              onClick={() => toggleDescription("cssDes")}
              className="text-black font-bold hover:underline"
            >
              {descriptionVisibility.cssDes ? "Show Less..." : "Show More..."}
            </button>
            <br />
            <br />
            <button
              onClick={() => toggleGallery("css")}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-black transition duration-300 ease-in-out"
            >
              {galleryVisibility.css
                ? "Hide CSS Certificate"
                : "Show CSS Certificate"}
            </button>
            {galleryVisibility.css && (
              <div id="css" className="p-4 border border-gray-300 shadow-lg">
                <img
                  src={cssCertificate}
                  alt="CSS Certificate"
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>
            )}
          </div>
          <br />
          <br />

          <div>
            <h2 className="text-xl font-bold">GitHub Course</h2>
            <p>
              {descriptionVisibility.gitDes
                ? descriptions.git
                : `${descriptions.git.substring(0, maxLength)}...`}
            </p>
            <button
              onClick={() => toggleDescription("gitDes")}
              className="text-black font-bold hover:underline"
            >
              {descriptionVisibility.gitDes ? "Show Less..." : "Show More..."}
            </button>
            <br />
            <br />
            <button
              onClick={() => toggleGallery("git")}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-black transition duration-300 ease-in-out"
            >
              {galleryVisibility.git
                ? "Hide GitHub Certificate"
                : "Show GitHub Certificate"}
            </button>
            {galleryVisibility.git && (
              <div id="git" className="p-4 border border-gray-300 shadow-lg">
                <img
                  src={gitHubCertificate}
                  alt="GitHub Certificate"
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>
            )}
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
