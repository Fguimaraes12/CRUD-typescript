import { useContext } from "react"
import { taskContext, type Register } from "../contexts/tasksContext"


function RegisterPages() {
  const {
    states: { state, setShowModal, setRegisterToEdit },
    functions: { deleteRegister }
  } = useContext(taskContext)!


  return (
    <>
      {/* LISTA DE REGISTROS */}
      <ul>
        {state.map((register: Register) => (
          <li key={register.id}>
            <h1>{register.name}</h1>
            <p>{register.email}</p>
            <span>{register.level}</span>
            <span>{register.area}</span>
            <p>{register.note}</p>
            <button onClick={() => deleteRegister(register.id)}>Excluir</button>
            <button onClick={() => {
              setRegisterToEdit(register)
              setShowModal(true)       
            }}>
              Editar
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default RegisterPages