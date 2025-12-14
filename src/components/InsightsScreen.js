import styles from './InsightsScreen.module.css';

export default function InsightsScreen({ insights, alignmentScore, streamName, onRestart }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Your Insights</h1>
        {streamName && (
          <div className={styles.streamBadge}>{streamName}</div>
        )}
        
        <div className={styles.scoreCircle}>
          <div className={styles.circleContent}>
            <span className={styles.scoreNumber}>{alignmentScore}%</span>
            <span className={styles.scoreLabel}>Alignment</span>
          </div>
        </div>

        <div className={styles.insightsGrid}>
          {/* Strength */}
          {insights.strength && (
            <div className={`${styles.insightCard} ${styles.strengthCard}`}>
              <div className={styles.cardLabel}>Strength</div>
              <h3 className={styles.cardTitle}>Places that you are excelling</h3>
              <p className={styles.cardText}>{insights.strength}</p>
            </div>
          )}

          {/* Gap */}
          {insights.gap && (
            <div className={`${styles.insightCard} ${styles.gapCard}`}>
              <div className={styles.cardLabel}>Growth Area</div>
              <h3 className={styles.cardTitle}>Room for Improvement</h3>
              <p className={styles.cardText}>{insights.gap}</p>
            </div>
          )}

          {/* Focus Area */}
          {insights.focusArea && (
            <div className={`${styles.insightCard} ${styles.focusCard}`}>
              <div className={styles.cardLabel}>Next Steps</div>
              <h3 className={styles.cardTitle}>Your Action Plan</h3>
              <p className={styles.cardText}>{insights.focusArea}</p>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerMessage}>
            This experience is designed to spark reflection, not judgment.<br />
            Use these insights to bridge the gap between classroom and industry.
          </p>
          
          <div className={styles.actions}>
            <button className={styles.restartButton} onClick={onRestart}>
              Take Again
            </button>
            <div className={styles.qrBox}>
              <div className={styles.qrPlaceholder}></div>
              <p className={styles.qrText}>Scan for Resources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
