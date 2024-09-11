import Community from "./components/Community"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Leaning from "./components/Leaning"
import Service from "./components/Service"
import Subscribe from "./components/Subscribe"


const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Service />
      <Leaning />
      <Subscribe />
      <Community />
      <Footer />
    </main>
  )
}

export default App