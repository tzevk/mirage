import { useState } from 'react';
import styles from './QuestionScreen.module.css';

export default function QuestionScreen({ question, questionNumber, totalQuestions, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showIndustry, setShowIndustry] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      onAnswer(selectedOption);
      setSelectedOption(null);
      setShowIndustry(false);
    }
  };

  const progressPercentage = (questionNumber / totalQuestions) * 100;

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
        {/* Left Panel - Industry (Locked) */}
        <div className={`${styles.panel} ${styles.industryPanel}`}>
          <div className={styles.panelHeader}>
            <h3>Industry Expects</h3>
            <span className={styles.lockIcon}>🔒</span>
          </div>
          <div className={styles.lockedContent}>
            <div className={styles.lockedOverlay}>
              <span className={styles.lockIconLarge}>🔒</span>
              <p>Revealed after all questions</p>
            </div>
          </div>
        </div>

        {/* Right Panel - Student Choice */}
        <div className={`${styles.panel} ${styles.studentPanel}`}>
          <div className={styles.panelHeader}>
            <h3>You Choose</h3>
          </div>
          <div className={styles.optionsContainer}>
            {question.studentOptions.map((option, index) => (
              <button
                key={index}
                className={`${styles.optionButton} ${
                  selectedOption?.text === option.text ? styles.selected : ''
                }`}
                onClick={() => handleSelect(option)}
              >
                <span className={styles.optionNumber}>{String.fromCharCode(65 + index)}</span>
                <span className={styles.optionText}>{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <button
          className={styles.nextButton}
          onClick={handleNext}
          disabled={!selectedOption}
        >
          {questionNumber === totalQuestions ? 'See Results' : 'Next'}
        </button>
      </div>
    </div>
  );
}
