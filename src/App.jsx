import {ulams} from './data/ulams'
import UlamCard from './components/UlamCard'

function App() {

  return (
    <div className="min-h-screen bg-orange-50 p04">
      <p>Loaded {ulams.length} ulam entries</p>
    </div>
  )
}

export default App
