import { useState, useEffect } from 'react';

// Hook para manejar localStorage 
function useLocalStorageWithDispatch( key, initialValue, dispatch, actionType ) {
     const [ storedValue, setStoredValue ] = useState( () => {
          try {
               const item = localStorage.getItem( key );
               return item ? JSON.parse( item ) : initialValue;
          } catch ( error ) {
               console.error( 'Error leyendo localStorage', error );
               return initialValue;
          }
     } );

     useEffect( () => {
          if ( storedValue && storedValue.length > 0 ) {
               dispatch( { type: actionType, payload: storedValue } );
          }
     }, [ storedValue, dispatch, actionType ] );

     useEffect( () => {
          try {
               if ( storedValue.length > 0 ) {
                    localStorage.setItem( key, JSON.stringify( storedValue ) );
               }
          } catch ( error ) {
               console.error( 'Error guardando en localStorage', error );
          }
     }, [ key, storedValue ] );

     return [ storedValue, setStoredValue ];
}

export default useLocalStorageWithDispatch;
