import '../../css/style.css';
import logo from '../../assets/images/logo.png';
import footer1 from '../../assets/images/footer1-img.png';
import footer2 from '../../assets/images/footer2-img.png';
function Footer() {
    return (
        <footer class="footer section">
            <div class="footer__container container grid">
                <div class="footer__content">
                    <a href="#" class="footer__logo">
                        <img src={logo} alt="" class="footer__logo-img" />
                        Halloween
                    </a>

                    <p class="footer__description">Enjoy the scariest night <br/> of your life.</p>
                    
                    <div class="footer__social">
                        <a href="https://www.facebook.com/" target="_blank" class="footer__social-link">
                            <i class='bx bxl-facebook'></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" class="footer__social-link">
                            <i class='bx bxl-instagram-alt' ></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank" class="footer__social-link">
                            <i class='bx bxl-twitter' ></i>
                        </a>
                    </div>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">About</h3>
                    
                    <ul class="footer__links">
                        <li>
                            <a href="#" class="footer__link">About Us</a>
                        </li>
                        <li>
                            <a href="#" class="footer__link">Features</a>
                        </li>
                        <li>
                            <a href="#" class="footer__link">News</a>
                        </li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Our Services</h3>
                    
                    <ul class="footer__links">
                        <li>
                            <a href="#" class="footer__link">Pricing</a>
                        </li>
                        <li>
                            <a href="#" class="footer__link">Discounts</a>
                        </li>
                        <li>
                            <a href="#" class="footer__link">Shipping mode</a>
                        </li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Our Company</h3>
                    
                    <ul class="footer__links">
                        <li>
                            <a href="#" class="footer__link">Blog</a>
                        </li>
                        <li>
                            <a href="#" class="footer__link">About us</a>
                        </li>
                        <li>
                            <a href="#" class="footer__link">Our mision</a>
                        </li>
                    </ul>
                </div>
            </div>

            <span class="footer__copy">&#169; Bedimcode. All rigths reserved</span>

            <img src={footer1} alt="" class="footer__img-one" />
            <img src={footer2} alt="" class="footer__img-two" />
        </footer>
    );
}

export default Footer;