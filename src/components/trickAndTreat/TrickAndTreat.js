import '../../css/style.css';
import treat1 from '../../assets/images/trick-treat1-img.png';
function TrickAndTreat() {
    return (
        <div class="trick__content">
            <img src={treat1} alt="" class="trick__img" />
            <h3 class="trick__title">Toffee</h3>
            <span class="trick__subtitle">Candy</span>
            <span class="trick__price">$11.99</span>
            <button class="button trick__button">
                <i class='bx bx-cart-alt trick__icon'></i>
            </button>
        </div>
    );
}

export default TrickAndTreat;