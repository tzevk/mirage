'use client';

import { useState } from 'react';
import RegistrationScreen from '@/components/RegistrationScreen';
import StreamSelection from '@/components/StreamSelection';
import IntroScreen from '@/components/IntroScreen';
import QuestionScreen from '@/components/QuestionScreen';
import InsightsScreen from '@/components/InsightsScreen';
import { getQuestionsForStream, calculateAlignment, generateInsights } from '@/data/questions';

export default function Home() {
  const [screen, setScreen] = useState('register'); // register, stream, intro, question, insights
  const [userData, setUserData] = useState(null);
  const [selectedStream, setSelectedStream] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [alignmentScore, setAlignmentScore] = useState(0);
  const [insights, setInsights] = useState(null);

  const handleRegistration = (data) => {
    setUserData(data);
    setScreen('stream');
  };

  const handleStreamSelection = (stream) => {
    setSelectedStream(stream);
    setQuestions(getQuestionsForStream(stream.id));
    setScreen('intro');
  };

  const handleStart = () => {
    setScreen('question');
    setCurrentQuestionIndex(0);
    setResponses([]);
  };

  const handleAnswer = (selectedOption) => {
    const newResponses = [...responses, selectedOption];
    setResponses(newResponses);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions answered, calculate results
      const score = calculateAlignment(newResponses);
      const generatedInsights = generateInsights(newResponses, score);
      setAlignmentScore(score);
      setInsights(generatedInsights);
      setScreen('insights');

      // Save results to database
      saveResultsToDatabase(newResponses, score, generatedInsights);
    }
  };

  const saveResultsToDatabase = async (finalResponses, score, generatedInsights) => {
    try {
      await fetch('/api/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userData?.userId,
          stream: selectedStream,
          responses: finalResponses,
          alignmentScore: score,
          insights: generatedInsights
        })
      });
    } catch (error) {
      console.error('Failed to save results:', error);
    }
  };

  const handleRestart = () => {
    setScreen('register');
    setUserData(null);
    setSelectedStream(null);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setResponses([]);
    setAlignmentScore(0);
    setInsights(null);
  };

  return (
    <>
      {screen === 'register' && <RegistrationScreen onRegister={handleRegistration} />}
      
      {screen === 'stream' && <StreamSelection onSelectStream={handleStreamSelection} />}
      
      {screen === 'intro' && <IntroScreen onStart={handleStart} streamName={selectedStream?.name} />}
      
      {screen === 'question' && (
        <QuestionScreen
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      
      {screen === 'insights' && (
        <InsightsScreen
          insights={insights}
          alignmentScore={alignmentScore}
          streamName={selectedStream?.name}
          onRestart={handleRestart}
        />
      )}
    </>
  );
}
