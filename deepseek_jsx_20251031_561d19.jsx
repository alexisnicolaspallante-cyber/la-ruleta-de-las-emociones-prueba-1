import { useState } from 'react'
import styles from '../styles/EmotionWheel.module.css'

export default function EmotionResult({ emotion }) {
  const [showMeme, setShowMeme] = useState(false)

  const createMeme = () => {
    setShowMeme(true)
    // En una versión más avanzada, aquí podrías generar un meme real
  }

  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultCard}>
        <h2>¡Tu emoción es: {emotion.name}!</h2>
        
        <div className={styles.emotionDisplay}>
          <div className={styles.imageContainer}>
            <img 
              src={emotion.image} 
              alt={`Perro salchicha ${emotion.name}`}
              className={styles.emotionImage}
            />
          </div>
          
          <div className={styles.emotionInfo}>
            <h3>Descripción:</h3>
            <p>{emotion.description}</p>
            
            <h3>🎯 Consejo del Perro Salchicha:</h3>
            <p className={styles.advice}>{emotion.advice}</p>
            
            <button 
              className={styles.memeButton}
              onClick={createMeme}
            >
              🎨 Crear Meme de esta Emoción
            </button>
          </div>
        </div>

        {showMeme && (
          <div className={styles.memeContainer}>
            <div className={styles.meme}>
              <img src={emotion.image} alt={emotion.name} />
              <div className={styles.memeText}>
                <h2>CUANDO {emotion.name.toUpperCase()}</h2>
                <p>{emotion.memeText}</p>
              </div>
            </div>
            <button 
              className={styles.downloadButton}
              onClick={() => alert('En una versión real, esto descargaría el meme')}
            >
              📥 Descargar Meme
            </button>
          </div>
        )}
      </div>
    </div>
  )
}