import Header from "./components/Header/Header"
import RegisterPages from "./pages/registersPages"
import CreateRegister from "./components/CreateRegister/CreateRegister"


function App() {

  return (
    <>
    <div>
      <Header/>
      <CreateRegister/>
      <RegisterPages/>
    </div>
    </>
  )
}

export default App
