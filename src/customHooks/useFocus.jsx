import { useEffect, useRef } from 'react';

const useFocus = ( dependencies = [] ) => {
     const inputRef = useRef();

     // Enfocar el input cuando el componente se monta
     useEffect( () => {
          if ( inputRef.current ) {
               inputRef.current.focus();
          }
     }, [] );

     // Enfocar el input cuando las dependencias cambian
     useEffect( () => {
          if ( inputRef.current ) {
               inputRef.current.focus();
          }
     }, dependencies );

     return inputRef;
};

export default useFocus;
