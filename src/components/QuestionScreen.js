import { useState } from 'react';
import styles from './QuestionScreen.module.css';

export default function QuestionScreen({ question, questionNumber, totalQuestions, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = (option) => {
    if (!isRevealed) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    if (selectedOption && !isRevealed) {
      // Reveal the industry answer
      setIsRevealed(true);
    }
  };

  const handleNext = () => {
    if (selectedOption && isRevealed) {
      setIsTransitioning(true);
      // Short delay for user to see the reveal, then proceed
      setTimeout(() => {
        onAnswer(selectedOption);
        setSelectedOption(null);
        setIsRevealed(false);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const progressPercentage = (questionNumber / totalQuestions) * 100;
  
  // Check if user's answer matches industry answer
  const isMatch = isRevealed && selectedOption?.text === question.industryAnswer.text;

  return (
    <div className={styles.container}>
      <div 
        className={styles.header}
        style={{ '--progress-width': `${progressPercentage}%` }}
      >
        <div className={styles.progress}>
          Question {questionNumber} of {totalQuestions}
        </div>
        <div className={styles.category}>{question.category}</div>
      </div>

      <div className={styles.scenario}>
        <p className={styles.scenarioText}>{question.scenario}</p>
        <h2 className={styles.prompt}>{question.prompt}</h2>
      </div>

      <div className={styles.splitScreen}>
        {/* Left Panel - Industry */}
        <div className={`${styles.panel} ${styles.industryPanel} ${isRevealed ? styles.revealed : ''}`}>
          <div className={styles.panelHeader}>
            <h3>Industry Expects</h3>
            <span className={styles.lockIcon}>{isRevealed ? '🔓' : '🔒'}</span>
          </div>
          
          {isRevealed ? (
            <div className={styles.industryAnswer}>
              <div className={`${styles.industryAnswerBox} ${isMatch ? styles.matchBox : styles.differentBox}`}>
                <span className={styles.answerLabel}>
                  {isMatch ? 'You matched!' : 'Industry prefers:'}
                </span>
                <p className={styles.answerText}>{question.industryAnswer.text}</p>
              </div>
            </div>
          ) : (
            <div className={styles.lockedContent}>
              <div className={styles.lockedOverlay}>
                <span className={styles.lockIconLarge}>🔒</span>
                <p>Submit your answer to reveal</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Panel - Student Choice */}
        <div className={`${styles.panel} ${styles.studentPanel}`}>
          <div className={styles.panelHeader}>
            <h3>You Choose</h3>
            {isRevealed && (
              <span className={`${styles.resultBadge} ${isMatch ? styles.matchBadge : styles.differentBadge}`}>
                {isMatch ? 'Match' : 'Different'}
              </span>
            )}
          </div>
          <div className={styles.optionsContainer}>
            {question.studentOptions.map((option, index) => {
              const isSelected = selectedOption?.text === option.text;
              const isIndustryChoice = isRevealed && option.text === question.industryAnswer.text;
              
              return (
                <button
                  key={index}
                  className={`${styles.optionButton} 
                    ${isSelected ? styles.selected : ''} 
                    ${isRevealed && isIndustryChoice && !isSelected ? styles.industryChoice : ''}
                    ${isRevealed ? styles.locked : ''}
                  `}
                  onClick={() => handleSelect(option)}
                  disabled={isRevealed}
                >
                  <span className={styles.optionNumber}>{String.fromCharCode(65 + index)}</span>
                  <span className={styles.optionText}>{option.text}</span>
                  {isRevealed && isIndustryChoice && !isSelected && (
                    <span className={styles.industryTag}>Industry</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        {!isRevealed ? (
          <button
            className={styles.nextButton}
            onClick={handleSubmit}
            disabled={!selectedOption}
          >
            Submit Answer
          </button>
        ) : (
          <button
            className={`${styles.nextButton} ${styles.continueButton}`}
            onClick={handleNext}
            disabled={isTransitioning}
          >
            {questionNumber === totalQuestions ? 'See Results' : 'Continue'}
          </button>
        )}
      </div>
    </div>
  );
}
