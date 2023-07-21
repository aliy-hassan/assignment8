import '../../css/style.css';

function TrickAndTreat(props) {
    return (
        <div className="trick__content">
            <img src={props.imgSrc} alt="" className="trick__img" />
            <h3 className="trick__title">{props.cardName}</h3>
            <span className="trick__subtitle">{props.cardDesc}</span>
            <span className="trick__price">{props.cardPrice}</span>
            <button className="button trick__button">
                <i className='bx bx-cart-alt trick__icon'></i>
            </button>
        </div>
    );
}

export default TrickAndTreat;