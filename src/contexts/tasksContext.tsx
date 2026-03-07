import { createContext, type ReactNode, useState } from "react"

/* ================= TIPAGENS ================= */
type TasksProviderProps = {
  children: ReactNode
}

type Level = "Junior" | "Pleno" | "Senior"
type Area = "Frontend" | "Backend" | "Mobile" | "Data" | "DevOps"

type Register = {
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

  const [showModal, setShowModal] = useState<Boolean>(false)
  const [registers, setRegisters] = useState<Register[]>([])
  const [registerToEdit, setRegisterToEdit] = useState<Register | null>(null)
  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    level: "Junior",
    area: "Frontend",
    note: "",
  })

  function handleInput(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit() {
    const newRegister: Register = {
      id: Date.now(),
      ...form
    }
    setRegisters(prev => [...prev, newRegister])
    setForm({
      name: "",
      email: "",
      level: "Junior",
      area: "Frontend",
      note: "",
    })
  }

  function deleteRegister(id: number) {
    setRegisters(prev => prev.filter((register) => register.id !== id))
  }
  
  
function handleEditInput(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
  const { name, value } = e.target
  setRegisterToEdit(prev => prev ? { ...prev, [name]: value } : null)
}

function editRegister() {
  if (!registerToEdit) return
  setRegisters(prev =>
    prev.map(register =>
      register.id === registerToEdit.id ? registerToEdit : register
    )
  )
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