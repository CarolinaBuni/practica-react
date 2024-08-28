export const INITIAL_STATE = {
     currentInput: '',
     operation: null,
     result: null,
     last_result: null,
     historic_result: [],
};

export const calculatorReducer = ( state, action ) => {
     switch ( action.type ) {
          case "SET_INPUT":
               return { ...state, currentInput: action.payload };
          case "SET_OPERATION":
               return {
                    ...state,
                    operation: action.payload,
                    last_result: parseFloat( state.currentInput ),
                    currentInput: '', 
               };
          case "CALCULATE_RESULT":
               let newResult = 0;
               switch ( state.operation ) {
                    case "+":
                         newResult = state.last_result + parseFloat( state.currentInput );
                         break;
                    case "-":
                         newResult = state.last_result - parseFloat( state.currentInput );
                         break;
                    case "x":
                         newResult = state.last_result * parseFloat( state.currentInput );
                         break;
                    case "/":
                         newResult = state.last_result / parseFloat( state.currentInput );
                         break;
                    case "%":
                         newResult = state.last_result % parseFloat( state.currentInput );
                         break;
                    default:
                         return state;
               }

               return {
                    ...state,
                    result: newResult,
                    historic_result: [ ...state.historic_result, newResult ],
                    currentInput: '',
                    last_result: newResult,
               };
          case "LOAD_HISTORY":
               return {
                    ...state,
                    historic_result: action.payload,
               }
          default:
               return state;
     }
};