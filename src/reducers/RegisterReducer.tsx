import type { Register } from "../contexts/tasksContext"

type stateType = Register[]

export const initialState: stateType = []

type actionType = 
  | { type: "CREATE_REGISTER"; payload: Register }
  | { type: "DELETE_REGISTER"; payload: number }
  | { type: "UPDATE_REGISTER"; payload: Register }


function RegisterReducer(state: stateType, action: actionType){
    switch(action.type){
        case "CREATE_REGISTER":
         return [...state, action.payload]
         
        case "DELETE_REGISTER":
          return state.filter((item) => item.id !== action.payload)
           
        case "UPDATE_REGISTER":
          return state.map(register => register.id === action.payload.id 
            ? {...register, ...action.payload} 
            : register)

        default:
          return state
    }
}

export default RegisterReducer;

