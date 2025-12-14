'use client';

import { useState } from 'react';
import StreamSelection from '@/components/StreamSelection';
import IntroScreen from '@/components/IntroScreen';
import QuestionScreen from '@/components/QuestionScreen';
import ResultsScreen from '@/components/ResultsScreen';
import InsightsScreen from '@/components/InsightsScreen';
import { getQuestionsForStream, calculateAlignment, generateInsights } from '@/data/questions';

export default function Home() {
  const [screen, setScreen] = useState('stream'); // stream, intro, question, results, insights
  const [selectedStream, setSelectedStream] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [alignmentScore, setAlignmentScore] = useState(0);
  const [insights, setInsights] = useState(null);

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
      setScreen('results');
    }
  };

  const handleContinueToInsights = () => {
    setScreen('insights');
  };

  const handleRestart = () => {
    setScreen('stream');
    setSelectedStream(null);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setResponses([]);
    setAlignmentScore(0);
    setInsights(null);
  };

  return (
    <>
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
      
      {screen === 'results' && (
        <ResultsScreen
          alignmentScore={alignmentScore}
          responses={responses}
          questions={questions}
          onContinue={handleContinueToInsights}
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
