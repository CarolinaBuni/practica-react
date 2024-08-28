export const handleInput = ( dispatch, value ) => {
     dispatch( { type: "SET_INPUT", payload: value } );
};
export const handleOperation = ( dispatch, operation ) => {
     dispatch( { type: "SET_OPERATION", payload: operation } );
};
export const handleEqual = ( dispatch ) => {
     dispatch( { type: "CALCULATE_RESULT" } );
};