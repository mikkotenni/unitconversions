import './App.css'
import Converter from './components/converter/Converter'

/**
 * App component that renders the Converter component with chosen
 * units.
 * @returns The App component.
 */
function App() {
  return (
    <Converter unitFrom="centimeter" unitTo="millimeter" />
  )
}

export default App
