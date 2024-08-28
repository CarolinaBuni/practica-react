import './ButtonPanel.css';

const ButtonPanel = ({ handleOperation, handleEqual, dispatch }) => {
     return (
          <div>
               <button onClick={ () => handleOperation( dispatch, '+' ) }>+</button>
               <button onClick={ () => handleOperation( dispatch, '-' ) }>-</button>
               <button onClick={ () => handleOperation( dispatch, 'x' ) }>x</button>
               <button onClick={ () => handleOperation( dispatch, '/' ) }>/</button>
               <button onClick={ () => handleOperation( dispatch, '%' ) }>%</button>
               <button onClick={ () => handleEqual( dispatch ) }>=</button>
          </div>
     );
};

export default ButtonPanel;