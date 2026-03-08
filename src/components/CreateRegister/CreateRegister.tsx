import { useContext } from "react"
import { taskContext } from "../../contexts/tasksContext"
import EditRegisterModal from "../EditRegisterModal/EditRegisterModal"

function CreateRegister(){
  const {
    states: { form, showModal, setShowModal, registerToEdit},
    functions: { handleInput, handleSubmit, editRegister, handleEditInput}
  } = useContext(taskContext)!

  return(
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

        
      {/* MODAL DE EDIÇÃO */}
      {showModal && <EditRegisterModal 
        setShowModal={setShowModal}
        registerToEdit={registerToEdit}
        editRegister={editRegister}
        handleEditInput={handleEditInput}
      />}
    </div>
  )
}


export default CreateRegister;
