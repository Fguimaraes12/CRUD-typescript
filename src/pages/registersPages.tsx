import { useContext } from "react"
import { taskContext } from "../contexts/tasksContext"
import EditRegisterModal from "../components/editRegisterModal"

function RegisterPages() {
  const {
    states: { registers, form, showModal, setShowModal, setRegisterToEdit },
    functions: { handleInput, handleSubmit, deleteRegister }
  } = useContext(taskContext)!

  return (
    <>
      {/* FORM DE CRIAÇÃO */}
      <div>
        <form action={handleSubmit}>
          <input type="text" name="name" value={form.name} onChange={handleInput} />
          <input type="text" name="email" value={form.email} onChange={handleInput} />

          <select name="level" value={form.level} onChange={handleInput}>
            <option value="Junior">Junior</option>
            <option value="Pleno">Pleno</option>
            <option value="Senior">Senior</option>
          </select>

          <select name="area" value={form.area} onChange={handleInput}>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Mobile">Mobile</option>
            <option value="Data">Data</option>
            <option value="DevOps">DevOps</option>
          </select>

          <textarea name="note" value={form.note} onChange={handleInput} />
          <button type="submit">Registrar</button>
        </form>
      </div>

      {/* MODAL DE EDIÇÃO */}
      {showModal && <EditRegisterModal />}

      {/* LISTA DE REGISTROS */}
      <ul>
        {registers.map((register) => (
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