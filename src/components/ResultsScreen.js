import { useState, useEffect } from 'react';
import styles from './ResultsScreen.module.css';

export default function ResultsScreen({ alignmentScore, responses, questions, onContinue }) {
  const [revealed, setRevealed] = useState(false);
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    // Trigger reveal animation after component mounts
    const revealTimer = setTimeout(() => {
      setRevealed(true);
    }, 500);

    return () => clearTimeout(revealTimer);
  }, []);

  useEffect(() => {
    // Animate the score counter
    if (revealed) {
      let currentScore = 0;
      const increment = alignmentScore / 50; // Will take ~1 second to complete
      const timer = setInterval(() => {
        currentScore += increment;
        if (currentScore >= alignmentScore) {
          setAnimatedScore(alignmentScore);
          clearInterval(timer);
        } else {
          setAnimatedScore(Math.floor(currentScore));
        }
      }, 20);

      return () => clearInterval(timer);
    }
  }, [revealed, alignmentScore]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>The Reveal</h1>
        <p className={styles.subtitle}>See how your choices compare</p>

        {/* Question-by-question comparison */}
        <div className={styles.comparisons}>
          {questions.map((question, index) => {
            const userAnswer = responses[index];
            const industryAnswer = question.industryAnswer;
            const isMatch = userAnswer.text === industryAnswer.text;
            
            return (
              <div key={index} className={`${styles.comparisonCard} ${revealed ? styles.revealed : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={styles.questionHeader}>
                  <span className={styles.questionNumber}>Q{index + 1}</span>
                  <span className={styles.categoryBadge}>{question.category}</span>
                  {isMatch && <span className={styles.matchBadge}>✓ Match</span>}
                </div>
                <p className={styles.questionScenario}>{question.scenario}</p>
                
                <div className={styles.answerComparison}>
                  <div className={styles.answerBox}>
                    <div className={styles.answerHeader}>
                      <span className={styles.answerIcon}>🏢</span>
                      <span className={styles.answerLabel}>Industry</span>
                    </div>
                    <p className={styles.answerText}>{industryAnswer.text}</p>
                  </div>
                  
                  <div className={`${styles.answerBox} ${isMatch ? styles.matchAnswer : styles.differentAnswer}`}>
                    <div className={styles.answerHeader}>
                      <span className={styles.answerIcon}>👤</span>
                      <span className={styles.answerLabel}>You</span>
                    </div>
                    <p className={styles.answerText}>{userAnswer.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.scoreSection}>
          <h2 className={styles.scoreTitle}>Your Overall Alignment</h2>
          <div className={styles.scoreCircle}>
            <span className={styles.scoreNumber}>{animatedScore}%</span>
          </div>
        </div>

        <button className={styles.continueButton} onClick={onContinue}>
          View Insights
        </button>
      </div>
    </div>
  );
}
