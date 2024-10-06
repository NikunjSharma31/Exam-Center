import React, { useState, useEffect } from "react";

const questions = [
  {
    question: "What is the basic unit of life?",
    options: ["Atom", "Molecule", "Cell", "Tissue"],
    answer: "Cell",
  },
  {
    question: "What force pulls objects toward the Earth?",
    options: ["Friction", "Magnetism", "Gravity", "Electromagnetic Force"],
    answer: "Gravity",
  },
  {
    question: "What is the chemical symbol for oxygen?",
    options: ["O", "O₂", "Ox", "Oy"],
    answer: "O",
  },
  {
    question: "What organ in the human body is primarily responsible for pumping blood?",
    options: ["Brain", "Liver", "Stomach", "Heart"],
    answer: "Heart",
  },
  {
    question: "What do we call the process by which water vapor turns into liquid water?",
    options: ["Evaporation", "Condensation", "Precipitation", "Sublimation"],
    answer: "Condensation",
  },
  {
    question: "What is the state of matter that has a definite shape and a definite volume?",
    options: ["Liquid", "Gas", "Solid", "Plasma"],
    answer: "Solid",
  },
  {
    question: "What is water composed of?",
    options: ["Hydrogen and Carbon", "Hydrogen and Nitrogen", "Hydrogen and Oxygen", "Oxygen and Carbon"],
    answer: "Hydrogen and Oxygen",
  },
  {
    question: "What is the green pigment in plants that helps in photosynthesis?",
    options: ["Carotene", "Xanthophyll", "Chlorophyll", "Anthocyanin"],
    answer: "Chlorophyll",
  },
  {
    question: "What is the outermost layer of the Earth called?",
    options: ["Mantle", "Core", "Lithosphere", "Crust"],
    answer: "Crust",
  },
  {
    question: "What is the name of the energy stored in an object due to its position or state?",
    options: ["Kinetic Energy", "Thermal Energy", "Potential Energy", "Chemical Energy"],
    answer: "Potential Energy",
  },
];

const Questionnaire = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [speechResult, setSpeechResult] = useState("");
  const [recognition, setRecognition] = useState(null);
  const [hasReadCurrent, setHasReadCurrent] = useState(false);
  const [synth, setSynth] = useState(window.speechSynthesis);
  const [utterance, setUtterance] = useState(null);
  const [exitAttempts, setExitAttempts] = useState(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        alert("Please don’t switch tabs or applications during the test!");
        speak("Warning: You have switched away from the test window.");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = "en-US";

      rec.onresult = (event) => {
        const result = event.results[0][0].transcript;
        handleSpeechResult(result);
      };

      rec.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };

      rec.onstart = () => {
        console.log("Speech recognition service has started");
      };

      setRecognition(rec);
    } else {
      alert("Your browser does not support Speech Recognition API. Please use Google Chrome.");
      console.warn("Speech Recognition API is not supported in this browser.");
    }
  }, []);

  const getOptionLetter = (index) => {
    return String.fromCharCode(65 + index);
  };

  const handleSpeechResult = (speechResult) => {
    setSpeechResult(speechResult);
    const normalizedResult = speechResult.toLowerCase();
    const options = questions[currentIndex].options;

    console.log("Voice Command:", normalizedResult);

    if (normalizedResult.includes("stop")) {
      if (utterance) {
        synth.cancel();
        speak("Speech stopped.");
      }
      return;
    }

    if (normalizedResult.includes("previous")) {
      handlePrevious();
      return;
    }

    if (normalizedResult.includes("next")) {
      handleNext();
      return;
    }

    if (normalizedResult.includes("read")) {
      readCurrentQuestionAndOptions();
      return;
    }

    if (normalizedResult.includes("submit")) {
      handleSubmit();
      return;
    }

    let matched = false;
    options.forEach((option, idx) => {
      const letterCommand = `option ${getOptionLetter(idx)}`.toLowerCase();
      const optionText = option.toLowerCase();
      if (
        normalizedResult.includes(letterCommand) ||
        normalizedResult.includes(optionText)
      ) {
        handleOptionChange(option);
        speak(`Selected option: ${option}`);
        matched = true;
      }
    });

    if (!matched) {
      speak("Option not recognized. Please try again.");
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentIndex]: option,
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setHasReadCurrent(false);
      readCurrentQuestionAndOptions();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setHasReadCurrent(false);
      readCurrentQuestionAndOptions();
    }
  };

  const handleSubmit = () => {
    speak("Form submitted successfully.");
    // Add form submission logic here
    alert("Your test has been submitted!");
  };

  const readCurrentQuestionAndOptions = () => {
    if (hasReadCurrent) return;

    const questionText = questions[currentIndex].question;
    const optionsText = questions[currentIndex].options
      .map((option, idx) => `Option ${getOptionLetter(idx)}: ${option}`)
      .join(", ");
    const selectedOptionText = selectedOptions[currentIndex]
      ? `Selected option is ${selectedOptions[currentIndex]}`
      : "";
    const textToSpeak = `${questionText}. ${optionsText}. ${selectedOptionText}`;

    if (utterance) {
      synth.cancel();
    }

    const newUtterance = new SpeechSynthesisUtterance(textToSpeak);
    newUtterance.onend = () => setUtterance(null);
    setUtterance(newUtterance);
    synth.speak(newUtterance);

    setHasReadCurrent(true);
  };

  const startRecognition = () => {
    if (recognition) {
      try {
        recognition.start();
        speak("Voice command mode activated. Please say your command.");
      } catch (error) {
        console.error("Error starting recognition:", error);
        speak("There was an error starting the voice command.");
      }
    } else {
      speak("Speech recognition is not supported in this browser.");
    }
  };

  const speak = (text) => {
    if (utterance) {
      synth.cancel();
    }
    const newUtterance = new SpeechSynthesisUtterance(text);
    setUtterance(newUtterance);
    synth.speak(newUtterance);
  };

  // Full-Screen Mode Management
  const startTestInFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };

  const handleFullscreenExit = () => {
    setExitAttempts((prevAttempts) => {
      const newAttempts = prevAttempts + 1;

      if (newAttempts === 1) {
        alert("Warning: Please stay in full-screen mode. If you exit again, your test will be submitted.");
        speak("Warning: Please stay in full-screen mode.");
        startTestInFullscreen(); // Attempt to re-enter full-screen mode
      }

      // Automatically submit the test after 2 exits from full-screen
      if (newAttempts >= 2) {
        handleSubmit(); // Call the submit function
      }

      return newAttempts;
    });
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        handleFullscreenExit();
      }
    });

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenExit);
    };
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          {questions[currentIndex].question}
        </h2>
        {/* <ul className="list-disc list-inside mb-6">
          {questions[currentIndex].options.map((option, idx) => (
            <li key={idx} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={${currentIndex}-${idx}}
              checked={selectedOptions[currentIndex] === option}
              onChange={() => handleOptionChange(option)}
              className="mr-2"
              />
              <label htmlFor={${currentIndex}-${idx}}>{`${getOptionLetter(
                idx
              )}: ${option}`}</label>
            </li>
          ))}
      </ul> */}
        <ul className="list-disc list-inside mb-6">
          {questions[currentIndex].options.map((option, idx) => (
            <li key={idx} className="flex items-center mb-2">
              <input
                type="radio"
                id={`${currentIndex}-${idx}`}
                name={`question_${currentIndex}`}
                checked={selectedOptions[currentIndex] === option}
                onChange={() => handleOptionChange(option)}
                className="mr-2"
              />
              <label htmlFor={`${currentIndex}-${idx}`}>{`${getOptionLetter(idx)}: ${option}`}</label>
            </li>
          ))}
        </ul>

        <div className="flex justify-between mb-4">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          {currentIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
              disabled={currentIndex === questions.length - 1}
            >
              Next
            </button>
          )}
          <button
            onClick={readCurrentQuestionAndOptions}
            className="px-4 py-2 bg-purple-500 text-white rounded-md ml-4"
          >
            Read
          </button>
          <button
            onClick={startRecognition}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md ml-4"
          >
            Start Voice Command
          </button>
        </div>
        <div className="mt-4 p-4 bg-gray-200 rounded-md">
          <h4 className="text-lg font-semibold">Speech Result:</h4>
          <p>{speechResult}</p>
        </div>
      </div>
    </div >
  );
};

export default Questionnaire;