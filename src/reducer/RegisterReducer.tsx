type Level = "Junior" | "Pleno" | "Senior"
type Area = "Frontend" | "Backend" | "Mobile" | "Data" | "DevOps"

 interface Register {
  id: number
  name: string
  email: string
  level: Level
  area: Area
  note: string
}

export type RegisterState = Register[]

export const initialState: RegisterState = []

type RegisterAction = 
   {type: "ADD_REGISTER"; payload: Register}



function registerReducer(state: RegisterState, action: RegisterAction): RegisterState{

  console.log("ACTION:", action)
  console.log("STATE BEFORE:", state)
  
  switch(action.type){
    case "ADD_REGISTER":
      return [...state, action.payload]
    
      default:
        return state
  }

}


export default registerReducer;