import React from 'react';
import ReactDOM from 'react-dom/client';
import "./globalStyles.scss";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import FeatureItem from './components/FeatureItem/FeatureItem';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Hero
        title={['No fees.', 'No minimum deposit.', 'High interest rates.']}
        subtitle={"Open a savings account with Argent Bank today!"}
      />
      <section className="features">
        <h2 className="sr-only">Features</h2>

        <FeatureItem
          title={"You are our #1 priority"}
          subtitle={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}
          icon={"chat"}
      />
        <FeatureItem
          title={"More savings means higher rates"}
          subtitle={"The more you save with us, the higher your interest rate will be!"}
          icon={"money"}
        />
        <FeatureItem
          title={"Security you can trust"}
          subtitle={"We use top of the line encryption to make sure your data and money is always safe."}
          icon={"security"}
        />
      </section>
      <Footer/>
    </Provider>
  </React.StrictMode>
);


