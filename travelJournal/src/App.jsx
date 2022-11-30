import './App.css'
import Nav from "./Nav"
import Card from "./Card"
import data from "./data"

const element = data.map(x => {
  return <Card  
    data = {x}
    />

})


function App() {

  return (
    <div className="App">
      <Nav /> 
      <section>
        {element}
      </section> 
    </div>
  )
}

export default App
