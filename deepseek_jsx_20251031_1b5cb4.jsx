import { useState, useEffect } from 'react'
import styles from '../styles/EmotionWheel.module.css'

export default function EmotionWheel({ emotions, isSpinning, selectedEmotion }) {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (isSpinning) {
      setRotation(prev => prev + 360 * 5) // 5 rotaciones completas
    }
  }, [isSpinning])

  const segmentAngle = 360 / emotions.length

  return (
    <div className={styles.wheelContainer}>
      <div 
        className={`${styles.wheel} ${isSpinning ? styles.spinning : ''}`}
        style={{ 
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning ? 'transform 2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
        }}
      >
        {emotions.map((emotion, index) => {
          const angle = index * segmentAngle
          const skewY = segmentAngle - 90
          
          return (
            <div
              key={emotion.id}
              className={`${styles.segment} ${selectedEmotion?.id === emotion.id ? styles.selected : ''}`}
              style={{
                transform: `rotate(${angle}deg) skewY(${skewY}deg)`,
                backgroundColor: emotion.color
              }}
            >
              <div 
                className={styles.segmentContent}
                style={{ transform: `skewY(${-skewY}deg) rotate(${segmentAngle/2}deg)` }}
              >
                <span className={styles.emotionName}>{emotion.name}</span>
              </div>
            </div>
          )
        })}
        
        {/* Centro de la rueda */}
        <div className={styles.center}></div>
        {/* Indicador */}
        <div className={styles.indicator}></div>
      </div>
    </div>
  )
}