import React from 'react';
import Header from './components/Header';
import PortfolioGrid from './components/PortfolioGrid';
import Footer from './components/Footer';
import './styles/main.css';

function App() {
    return (
        <div className="App">
            <Header />
            <PortfolioGrid />
            <Footer />
        </div>
    );
}

export default App;