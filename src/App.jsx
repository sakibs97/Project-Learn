import Hero from "./components/Hero"
import Leaning from "./components/Leaning"
import Service from "./components/Service"


const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Service />
      <Leaning />
    </main>
  )
}

export default App