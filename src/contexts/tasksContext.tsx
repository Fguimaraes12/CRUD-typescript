import { createContext, type ReactNode, useReducer, useState } from "react"
import RegisterReducer, { initialState } from "../reducers/RegisterReducer"

/* ================= TIPAGENS ================= */
type TasksProviderProps = {
  children: ReactNode
}

type Level = "Junior" | "Pleno" | "Senior"
type Area = "Frontend" | "Backend" | "Mobile" | "Data" | "DevOps"

export type Register = {
  id: number
  name: string
  email: string
  level: Level
  area: Area
  note: string
}

export type RegisterForm = Omit<Register, "id">


type TasksContextType = {
  states: {
    registers: Register[]
    form: RegisterForm
    showModal: Boolean
    setShowModal: React.Dispatch<React.SetStateAction<Boolean>>
    setRegisterToEdit: React.Dispatch<React.SetStateAction<Register | null>>
    registerToEdit: Register | null
    state: Register[]
    
  },
  functions: {
    handleInput: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
    handleSubmit: () => void
    deleteRegister: (id: number) => void
    editRegister: () => void
    handleEditInput: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
  }
}

/* ================= CONTEXT ================= */

export const taskContext = createContext<TasksContextType | null>(null)

/* ================= PROVIDER ================= */
function TasksProvider({ children }: TasksProviderProps) {

  const [state, dispatch] = useReducer(RegisterReducer, initialState) 
  const [showModal, setShowModal] = useState<Boolean>(false) // toggle do modal
  const [registers, setRegisters] = useState<Register[]>([]) // armazena os registros
  const [registerToEdit, setRegisterToEdit] = useState<Register | null>(null) // Novo registro editado
  const [form, setForm] = useState<RegisterForm>({ 
    name: "",
    email: "",
    level: "Junior",
    area: "Frontend",
    note: "",
  }) 

  console.log(state)

  function handleInput(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit() {
    if(form.email.trim() !== "" && form.name.trim() !== ""){
      const newRegister: Register = {
      id: Date.now(),
      ...form
    }
    dispatch({type: "CREATE_REGISTER", payload: newRegister})
    setForm({
      name: "",
      email: "",
      level: "Junior",
      area: "Frontend",
      note: "",
    })
    }
  }

  function deleteRegister(id: number) {
    dispatch({type: "DELETE_REGISTER", payload: id})
  }
  
  
function handleEditInput(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
  const { name, value } = e.target
  setRegisterToEdit(prev => prev ? { ...prev, [name]: value } : null)
}

function editRegister() {
  if (!registerToEdit) return
  dispatch({type: "UPDATE_REGISTER", payload: registerToEdit})
  setShowModal(false)
}

  /* ================= VALUE DO CONTEXT ================= */
  const valueContext: TasksContextType = {
    states: {
      registers,
      form,
      showModal,
      setShowModal,
      setRegisterToEdit,
      registerToEdit,
      state
    },
    functions: {
      handleInput,
      handleSubmit,
      deleteRegister,
      editRegister,
      handleEditInput
    }
  }

  return (
    <taskContext.Provider value={valueContext}>
      {children}
    </taskContext.Provider>
  )
}

export { TasksProvider }