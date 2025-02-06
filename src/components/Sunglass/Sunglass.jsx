import add from '../../Utils/calculate';
import Watch from '../Watch/Watch';
import './Sunglass.css';
const Sunglass = () => {

    const first = 55;
    const second = 165;
    const sum = add(first, second);

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;