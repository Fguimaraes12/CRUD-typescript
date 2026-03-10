type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<Boolean>>
  registerToEdit: any
  editRegister: () => void
  handleEditInput: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
}


function EditRegisterModal({setShowModal, registerToEdit, editRegister, handleEditInput}: Props) {

  return (
    <div>
      <form action={editRegister}>
        <input required type="text" name="name" defaultValue={registerToEdit?.name} onChange={(e) => handleEditInput(e)} />
        <input required type="text" name="email" defaultValue={registerToEdit?.email} onChange={(e) => handleEditInput(e)}/>

        <select name="level" value={registerToEdit?.level ?? ""} onChange={(e) => handleEditInput(e)}>
          <option value="Junior">Junior</option>
          <option value="Pleno">Pleno</option>
          <option value="Senior">Senior</option>
        </select>

        <select name="area" value={registerToEdit?.area ?? ""} onChange={(e) => handleEditInput(e)}>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Mobile">Mobile</option>
          <option value="Data">Data</option>
          <option value="DevOps">DevOps</option>
        </select>

        <textarea name="note" value={registerToEdit?.note ?? ""} onChange={(e) => handleEditInput(e)}/>
        <button type="submit">Salvar</button>
        <button type="button" onClick={() => setShowModal(false)}>Cancelar</button>
      </form>
    </div>
  )
}

export default EditRegisterModal