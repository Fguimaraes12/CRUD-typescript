import { Register } from "../contexts/tasksContext"

type stateType = Register[]

export const initialState: stateType = []

type actionType = {
  type: "ADD_REGISTER"
  payload: Register
}

function RegisterReducer(state: stateType, action: actionType){
    switch(action.type){
        case "ADD_REGISTER":
         return [...state, action.payload]

        default:
          return state
    }
}

export default RegisterReducer;

