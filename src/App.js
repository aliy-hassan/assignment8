// import logo from './logo.svg';
import './css/style.css';

import Header from './components/header/Header';
import Section from './components/section/Section';
import Category from './components/category/Category';
import About from './components/about/About';
import TrickAndTreat from './components/trickAndTreat/TrickAndTreat';
import Discount from './components/discount/Discount';
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
          <TrickAndTreat />
          <TrickAndTreat />
          <TrickAndTreat />
          <TrickAndTreat />
          <TrickAndTreat />
          <TrickAndTreat />
        </div>
      </section>
      <Discount />

    </div>
  );
}

export default App;
