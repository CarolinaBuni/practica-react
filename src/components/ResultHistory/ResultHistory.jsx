import './ResultHistory.css';

const ResultHistory = ({ result, history }) => {
     return (
          <>
               <h3>Último resultado: { result } </h3>
               <h4>Resultados históricos</h4>
               <ul>
                    { history.map( ( res, index ) => (
                         <li key={ index }>{ res }</li>
                    ) ) }
               </ul>
          </>
     );
};

export default ResultHistory;