import './Timer.css';

const Timer = ({ date }) => {
     return (
          <div className='timer'>{date.toLocaleTimeString()}</div>
     );
};

export default Timer;