import '../../css/style.css';

function NewArivals(props) {
    return (
        <div className="new__content swiper-slide">
            <div className="new__tag">New</div>
            <img src={props.imgSrc} alt="" className="new__img" />
            <h3 className="new__title">{props.prodName}</h3>
            <span className="new__subtitle">{props.prodDesc}</span>
            
            <div className="new__prices">
                <span className="new__price">{props.prodPrice}</span>
                <span className="new__discount">{props.prodPriceOff}</span>
            </div>

            <button className="button new__button">
                <i className='bx bx-cart-alt new__icon'></i>
            </button>
        </div>
    );
}

export default NewArivals;