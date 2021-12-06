import { ADD_TASK,EDIT_TASK,DELETE_TASK,COMPLETE_TASK } from "./Types";

  const initialState = {
    tasks: [
      {
        id:"0",
        description: "eat",
        isDone: true
      },
      {
        id:"1",
        description: "sleep",
        isDone: false
      },
      {
        id:"2",
        description: "watch tv",
        isDone: false
      }
    ]
   };
   
   function rootReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TASK:
        return {...state,
           tasks: [...state.tasks ,action.payload]
        }   
      case EDIT_TASK:
        return {...state, 
          tasks: state.tasks.map ((el) => el.id === action.id ? {...el, description: action.newTodo}  : el)
        } 
      case DELETE_TASK:
        return {...state,
          tasks: state.tasks.filter ((el) => el.id !== action.payload)
        }
      case COMPLETE_TASK:
        return {...state,
          tasks: state.tasks.map ((el) => el.id === action.payload ? {...el, isDone: !el.isDone} :el)
        }  
      default:
        return state;
    }
    
 
   };
   
   export default rootReducer;