import utils from '../utils';

const StarsDisplay = props => (
    <>
    {
        utils.range(1, props.count).map(starId => <div className="star" key={starId} />)
    }
    </>
);

export default StarsDisplay;