import styles from './StreamSelection.module.css';
import Image from 'next/image';

const streams = [
  { id: 'cs', name: 'Computer Science & IT', icon: 'CS', color: '#64126D' },
  { id: 'mechanical', name: 'Mechanical Engineering', icon: 'ME', color: '#86288F' },
  { id: 'electrical', name: 'Electrical & Electronics', icon: 'EE', color: '#9B3FA5' },
  { id: 'civil', name: 'Civil Engineering', icon: 'CE', color: '#64126D' },
  { id: 'chemical', name: 'Chemical Engineering', icon: 'CH', color: '#86288F' },
  { id: 'other', name: 'Other Engineering', icon: 'OE', color: '#9B3FA5' }
];

export default function StreamSelection({ onSelectStream }) {
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
        <h2 className={styles.subtitle}>Select Your Stream</h2>
        
        <div className={styles.streamGrid}>
          {streams.map((stream) => (
            <button
              key={stream.id}
              className={styles.streamCard}
              onClick={() => onSelectStream(stream)}
              style={{ '--stream-color': stream.color }}
            >
              <span className={styles.streamIcon}>{stream.icon}</span>
              <span className={styles.streamName}>{stream.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
