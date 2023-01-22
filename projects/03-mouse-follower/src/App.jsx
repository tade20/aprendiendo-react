import { useEffect, useState } from "react"
function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 })
  //Movimiento del puntero
  useEffect(() => {
    console.log('efecto');
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    //Se ejecuta cuando cambian las dependencias
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])
  //Cmabiar el className body
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])
  function handleClick() {
    setEnabled(!enabled)
  }
  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} />
      <h3>Proyecto 3</h3>
      <button onClick={handleClick}>{enabled ? 'Activado' : 'Desactivado'}</button>
    </main>
  )
}

export default App
