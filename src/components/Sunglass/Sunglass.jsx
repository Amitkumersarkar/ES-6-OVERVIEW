// import add from '../../Utils/calculate';
import { add, multiply } from '../../Utils/calculate';
import Watch from '../Watch/Watch';
import './Sunglass.css';
const Sunglass = () => {

    const first = 55;
    const second = 165;
    const sum = add(first, second);
    const mult = multiply(first, second);

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;