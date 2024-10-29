import React, { useState, useEffect } from 'react';
import TradingViewChart from './components/TradingViewChart';
import CoinToggle from './components/CoinToggle';
import './App.css';

function App() {
    const [selectedCoin, setSelectedCoin] = useState('ethusdt');
    const [selectedInterval, setSelectedInterval] = useState('1m');
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Fetch historical candlestick data for initial load
        const fetchData = async () => {
            const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=${selectedCoin.toUpperCase()}&interval=${selectedInterval}`);
            const data = await response.json();
            // Transform data for TradingView's format
            const formattedData = data.map(d => ({
                time: d[0] / 1000,
                open: parseFloat(d[1]),
                high: parseFloat(d[2]),
                low: parseFloat(d[3]),
                close: parseFloat(d[4])
            }));
            setChartData(formattedData);
        };

        fetchData();
    }, [selectedCoin, selectedInterval]);

    return (
        <div className='chart'>
            <CoinToggle
                selectedCoin={selectedCoin}
                onCoinChange={setSelectedCoin}
                selectedInterval={selectedInterval}
                onIntervalChange={setSelectedInterval}
            />
            <TradingViewChart data={chartData} />
        </div>
    );
}

export default App;
