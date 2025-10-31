import { useState } from 'react'
import Head from 'next/head'
import EmotionWheel from '../components/EmotionWheel'
import EmotionResult from '../components/EmotionResult'
import { emotions } from '../data/emotions'

export default function Home() {
  const [selectedEmotion, setSelectedEmotion] = useState(null)
  const [isSpinning, setIsSpinning] = useState(false)

  const handleSpin = () => {
    if (isSpinning) return
    
    setIsSpinning(true)
    // Simular giro y selección aleatoria
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * emotions.length)
      setSelectedEmotion(emotions[randomIndex])
      setIsSpinning(false)
      
      // Reproducir sonido si está disponible
      if (emotions[randomIndex].sound) {
        const audio = new Audio(emotions[randomIndex].sound)
        audio.play()
      }
    }, 2000)
  }

  return (
    <div className="container">
      <Head>
        <title>El Emocionómetro Salchicha</title>
        <meta name="description" content="Descubre tus emociones con perros salchichas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">🐕 El Emocionómetro Salchicha</h1>
        <p className="description">¡Gira la rueda y descubre tu emoción canina!</p>
        
        <div className="wheel-container">
          <EmotionWheel 
            emotions={emotions} 
            isSpinning={isSpinning}
            selectedEmotion={selectedEmotion}
          />
          
          <button 
            className={`spin-button ${isSpinning ? 'spinning' : ''}`}
            onClick={handleSpin}
            disabled={isSpinning}
          >
            {isSpinning ? 'Girando...' : '¡Girar la Rueda!'}
          </button>
        </div>

        {selectedEmotion && (
          <EmotionResult emotion={selectedEmotion} />
        )}
      </main>

      <footer className="footer">
        <p>Hecho con ❤️ y mucho humor perruno</p>
      </footer>
    </div>
  )
}