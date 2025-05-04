import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from './Header/page';
import Ingredients from './Ingredients/page';
import Footer from '../../components/Footer/Footer';
import Picture from './Pictures/page';

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}