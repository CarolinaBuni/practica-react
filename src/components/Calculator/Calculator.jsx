import { useEffect, useMemo, useReducer } from 'react';
import './Calculator.css';
import { calculatorReducer, INITIAL_STATE } from '../utils/reducer';
import { handleEqual, handleInput, handleOperation } from '../utils/actions';
import useLocalStorageWithDispatch from '../../customHooks/useLocalStorage';
import useFocus from '../../customHooks/useFocus';
import ResultHistory from '../ResultHistory/ResultHistory';
import InputSection from '../InputSection/InputSection';
import ButtonPanel from '../ButtonPanel/ButtonPanel';

const Calculator = () => {
     const [ state, dispatch ] = useReducer( calculatorReducer, INITIAL_STATE );

     // Custom hook para manejar localStorage
     const [ historicResult, setStoredValue ] = useLocalStorageWithDispatch( 'historic_result', [], dispatch, 'LOAD_HISTORY' );

     // Custom hook para manejar el enfoque del input
     const inputRef = useFocus( [ state.result, state.currentInput ] );

     // useMemo para ordenar los resultados históricos solo cuando cambian
     const sortedHistoricResults = useMemo( () => {
          return [ ...historicResult ].sort( ( a, b ) => a - b );
     }, [ historicResult ] );

     // Cuando state.historic_result cambia, lo sincronizamos con localStorage
     useEffect( () => {
          if ( state.historic_result.length > 0 ) {
               setStoredValue( state.historic_result );
          }
     }, [ state.historic_result, setStoredValue ] );


     return (
          <div className='calculator'>
               <InputSection
                    inputRef={ inputRef }
                    value={ state.currentInput }
                    onChange={ ( e ) => handleInput( dispatch, e.target.value ) }
               />
               <ButtonPanel
                    handleOperation={ handleOperation }
                    handleEqual={ handleEqual }
                    dispatch={ dispatch }
               />
               <ResultHistory
                    result={ state.result }
                    history={ sortedHistoricResults }
               />

          </div>
     );
};

export default Calculator;