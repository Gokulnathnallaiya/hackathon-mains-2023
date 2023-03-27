import React, { useEffect, useState, useRef } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./App.css";
import Robot from "./robot";

function App() {
  const [isListening, setIsListening] = useState(false);
  const [speaking, setSpeaking] = useState(false)
  const { transcript, resetTranscript } = useSpeechRecognition();

  const prevTranscriptRef = useRef("");

  useEffect(() => {
    prevTranscriptRef.current = transcript;
    const timeoutId = setTimeout(() => {
      if (prevTranscriptRef.current === transcript) {
        console.log("The state of the transcript has not changed.");
        handleBotResponse(transcript)

      } else {
        console.log("The state of the transcript has changed.");
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [transcript]);

  // useEffect(() => {
  //   if (transcript) {
  //     handleUserVoiceInput(transcript);
  //   }
  // }, [transcript]);

  const handleClick = () => {
    setIsListening(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleUserVoiceInput = (userVoiceInput) => {
    setIsListening(false);
    resetTranscript();
    // send userVoiceInput to a function that handles the response of the voice bot
    handleBotResponse(userVoiceInput);
  };

  const handleBotResponse = (userVoiceInput) => {
    // here, you can implement your logic to generate a response from the bot based on the user's input
    // and then speak that response

    speak(userVoiceInput);
    resetTranscript()

  };

  const speak = (text) => {

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => {
      setSpeaking(true)
    }

    window.speechSynthesis.speak(utterance);

    utterance.onend = () => {
      setSpeaking(false)
    };
  };

  const handleStop = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
    resetTranscript();
  };

  return (

    <div className="wrapper">
            <div className="container">
        <div className="header">
          <h1 className="title">Voice Bot</h1>
          <div className="mic-container">
            {isListening ? (
              <button className="stop-btn" onClick={handleStop}>
                <i className="fas fa-microphone-alt"></i>
              </button>
            ) : (
              <button className="start-btn" onClick={handleClick}>
                <i className="fas fa-microphone-alt"></i>
              </button>
            )}
          </div>
        </div>
        <div className="content">
          <p className="transcript">{transcript}</p>
          
          <div className="robot-container">

            {/* <img className="robot-image" src="https://media.istockphoto.com/id/1359585151/photo/cute-blue-robot-giving-thumbs-up-3d.jpg?b=1&s=170667a&w=0&k=20&c=zHWqqnOwgEMK1BFmJSh5m9BWOLJGh85yztf7hOr-eeQ=" alt="Robot" /> */}
            {isListening && <div className="robot-wave"></div>}
          </div>
        </div>
      </div>
      <Robot speaking={speaking} />

    </div>
  );
}

export default App;
