import styles from './IntroScreen.module.css';
import Image from 'next/image';

export default function IntroScreen({ onStart, streamName }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image 
            src="/accent.png" 
            alt="MIRAGE Logo" 
            width={180} 
            height={111}
            className={styles.logo}
            priority
          />
        </div>
        <h1 className={styles.title}>MIRAGE</h1>
        <h2 className={styles.subtitle}>Reality Check: Industry Edition</h2>
        {streamName && (
          <div className={styles.streamBadge}>{streamName}</div>
        )}
        <p className={styles.description}>
          Discover how your approach aligns with industry expectations
        </p>
        <button className={styles.startButton} onClick={onStart}>
          Start
        </button>
      </div>
    </div>
  );
}
