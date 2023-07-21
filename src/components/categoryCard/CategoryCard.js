function CategoryCard(props) {
    return (
        <div className="category__data">
            <img src={props.imgSrc} alt="" className="category__img" />
            <h3 className="category__title">{props.cardHeading}</h3>
            <p className="category__description">{props.cardDesc}</p>
        </div>
    );
}

export default CategoryCard;