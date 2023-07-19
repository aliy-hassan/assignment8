import '../../css/style.css';
import discountImg from '../../assets/images/discount-img.png';
function Discount() {
    return (
        <section class="section discount">
            <div class="discount__container container grid">
                <div class="discount__data">
                    <h2 class="discount__title">50% Discount <br/> On New Products</h2>
                    <a href="#" class="button">Go to new</a>
                </div>

                <img src={discountImg} alt="" class="discount__img" />
            </div>
        </section>
    );
}

export default Discount;