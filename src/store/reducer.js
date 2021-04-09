const initialState = []


const todo = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          id: action.id,
          text: action.text,
          completed: false
        };
        case 'TOGGLE_TODO':
          if (state.id !== action.id) {
            return state;
          }
          return {
            ...state,
            completed: !state.completed
          };
          case 'UPDATE_TODO':
          if (state.id !== action.id) {
            return state;
          }
          return {
            ...state,
            text:action.text,
            completed: false
          };
        case 'DELETE_TODO':
            console.log(state)

            return {
                ...state, state}
               
            
            
      default:
        return state;
    }
  };

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'ADD_TODO':
          return [
            ...state,
            todo(undefined, action)
          ];
        case 'TOGGLE_TODO':
          return state.map(t =>
            todo(t, action)
          );
        case "DELETE_TODO":
            console.log(state.filter(todo => todo.id !== action.id))
           return [
            
            todo(state.filter(todo => todo.id !== action.id), action)
            ];
        case "UPDATE_TODO":
            return state.map(t =>
                todo(t, action)
              );
        default:
          return state;
      }
}



  
export default reducer;