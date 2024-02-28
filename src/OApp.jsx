import Contact from "./assets/Contact"
import Counter from "./assets/Counter"
import Hello from "./assets/Hello"

function App() {
const helloData = [
  {name: "Darunee", message: 'Hi there'},
  {name: "Tom", message: 'Hi there'}
]

  return (
    <div className="App">
      <Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message}/>
      ))}

      <Contact email="Darunee@gmail.com" phone="23032000"/>
    </div>
  )
}

export default App