import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Hallo Er Du Der?'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Hjemmeside for KommIt og for undervisningsministeriumet'} />
      </Helmet>
      <App />
    </>
  );
};
