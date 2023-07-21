import treat1 from './assets/images/trick-treat1-img.png';
import treat2 from './assets/images/trick-treat2-img.png';
import treat3 from './assets/images/trick-treat3-img.png';
import treat4 from './assets/images/trick-treat4-img.png';
import treat5 from './assets/images/trick-treat5-img.png';
import treat6 from './assets/images/trick-treat6-img.png';
import new1 from './assets/images/new1-img.png';
import new2 from './assets/images/new2-img.png';
import new3 from './assets/images/new3-img.png';

import './css/style.css';

import Header from './components/header/Header';
import Section from './components/section/Section';
import Category from './components/category/Category';
import About from './components/about/About';
import TrickAndTreat from './components/trickAndTreat/TrickAndTreat';
import Discount from './components/discount/Discount';
import NewArivals from './components/newArivals/NewArivals';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Category />
      <About />
      <section class="section trick" id="trick">
        <h2 class="section__title">Trick Or Treat</h2>

        <div class="trick__container container grid">
          <TrickAndTreat imgSrc={treat1} cardName="Toffee" cardDesc="Candy" cardPrice="$12.99"/>
          <TrickAndTreat imgSrc={treat2} cardName="Bone" cardDesc="Accessory" cardPrice="$13.99"/>
          <TrickAndTreat imgSrc={treat3} cardName="Scarecrow" cardDesc="Accessory" cardPrice="$14.99"/>
          <TrickAndTreat imgSrc={treat4} cardName="Candy Cane" cardDesc="Candy" cardPrice="$15.99"/>
          <TrickAndTreat imgSrc={treat5} cardName="Pumpkin" cardDesc="Candy" cardPrice="$16.99"/>
          <TrickAndTreat imgSrc={treat6} cardName="Ghost" cardDesc="Accessory" cardPrice="$17.99"/>
        </div>
      </section>
      <Discount />
      <section class="section new" id="new">
        <h2 class="section__title">New Arrivals</h2>

        <div class="new__container container">
            <div class="swiper new-swiper">
                <div class="swiper-wrapper">
                    <NewArivals imgSrc={new1} prodName="Witch Broom" prodDesc="Accessory" prodPrice="$4.99" prodPriceOff="$12.99"/>
                    <NewArivals imgSrc={new2} prodName="Hounted House" prodDesc="Accessory" prodPrice="$5.99" prodPriceOff="$13.99"/>
                    <NewArivals imgSrc={new3} prodName="Halloween Candle" prodDesc="Accessory" prodPrice="$6.99" prodPriceOff="$14.99"/>
                </div>
            </div>
        </div>
      </section>
      <Newsletter />
      <Footer />



    </div>
  );
}

export default App;
