import React from "react";
import { FaRegLightbulb, FaVolumeUp } from "react-icons/fa";

function QuestionSection({ mockInterviewQuestion, activeQuestionIndex }) {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, Your browser does not support text To Speech");
    }
  };

  // Ensure mockInterviewQuestion is an array
  const questions = Array.isArray(mockInterviewQuestion) ? mockInterviewQuestion : [];

  return (
    questions.length > 0 && (
      <div className="p-5 border rounded-lg my-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {questions.map((question, index) => (
            <h2
              key={index} // Consider using a unique identifier if available
              className={`p-2 border rounded-full 
              text-xs md:text-sm text-center cursor-pointer 
              ${activeQuestionIndex === index ? "bg-primary text-white" : ""}`}
            >
              Question #{index + 1}
            </h2>
          ))}
        </div>
        <h2 className="my-5 text-sm md:text-lg">
          {questions[activeQuestionIndex]?.question} {/* Updated to use 'question' */}
        </h2>
        <FaVolumeUp
          className="cursor-pointer"
          onClick={() =>
            textToSpeech(questions[activeQuestionIndex]?.question) // Updated to use 'question'
          }
        />
        <div className="border rounded-lg p-5 bg-blue-100 mt-20">
          <h2 className="flex gap-2 items-center text-blue-700">
            <FaRegLightbulb />
            <strong>Note:</strong>
          </h2>
          <h2 className="text-sm text-blue-700 my-2">
            {process.env.NEXT_PUBLIC_QUESTION_NOTE}
          </h2>
        </div>
      </div>
    )
  );
}

export default QuestionSection;
