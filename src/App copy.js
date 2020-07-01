import React from 'react';
import logo from './logo.svg';
import { homepage } from './homepage.const.js';
import './App.css';
import './index.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

// https://getbootstrap.com/docs/4.4/components/alerts/

function App() {
  return (
    <div className="container">
      <Navigation menus={homepage.navigation} />
      <Hero image={homepage.hero.images[0]} data={homepage.hero} />
      Hej <br />
      stronka: <a href="https://startbootstrap.com/previews/creative/">https://startbootstrap.com/previews/creative/</a>
      <p>Chciałbym abyście  spróbowali  zrobić stronę domową  ala "bootstrap", u  góry macie przykładową stronę. Ja w pliku homepage.const.js przygotowałem dla was przykładowe dane abyście nie musieli szukać obrazków etc. Poniej przykład uzycia  ikonki:</p>
      <img style={{ width: "50px" }} src={homepage.ourServices.service[0].icon} />
      <br />
      <br />
      <p> Dorzuciłem równie bootstrapa, mozecie ale nie musicie go uzyć ;)</p>
      <div className="jumbotron">
        <h1 className="display-4">{homepage.hero.title}</h1>
        <p className="lead">{homepage.hero.subtitle}</p>
        <hr className="my-4" />
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">{homepage.hero.button}</a>
      </div>

      <br />
    Chciałbym aby strona składała  się  z sekcji:
      <ul>
        <li>Nawigacja górna</li>
        <li>Hero section z obrazkiem  w tle
        <ul>
            <li>
              dla chetnych z karuzela w tle
            </li>
          </ul>
        </li>
        <li>
          Sekcja Call to action - tekst na środku, w tle obrazek z opacity
        </li>
        <li>
          Sekcja z  our service
        </li>
        <li>
          Sekcja z  our projects
        </li>
        <li>
          CTA2
        </li>
        <li>
          Lista wpisów na blogu. tylko 3 sie wyswietlaja. po klikneciu w guzik "read more", wyświetla się reszta w gridzie
        </li>
        <li>
          Kontakt
        </li>
        <li>
          Stopka z nazwa firmy, danymi kontaktowymi, i  menu z góry. taka klasyczna stopka ;)
        </li>
      </ul>

      To mozecie usunąć  ;)
       powodzenia

    </div>

  );
}

export default App;
