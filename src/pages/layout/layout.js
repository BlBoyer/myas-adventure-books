import Welcome from '../welcome/welcome';
import About from '../about/about';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useState } from 'react';

export default function Layout() {
  const [currentPage, setPage] = useState('');
  return (
    <div>
      <Header />
      <Welcome />
      <Footer />
    </div>
  );
}
