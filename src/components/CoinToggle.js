// components/CoinToggle.js

import React from 'react';

const coins = ['ethusdt', 'btcusdt', 'bnbusdt'];
const intervals = ['1m', '3m', '5m'];

function CoinToggle({ selectedCoin, onCoinChange, selectedInterval, onIntervalChange }) {
    return (
        <div className='coinToggle'>
            <label>Coin: </label>
            <select className='coinSelect' value={selectedCoin} onChange={(e) => onCoinChange(e.target.value)}>
                {coins.map(coin => (
                    <option key={coin} value={coin}>{coin.toUpperCase()}</option>
                ))}
            </select>

            <label> Interval: </label>
            <select className='coinSelect' value={selectedInterval} onChange={(e) => onIntervalChange(e.target.value)}>
                {intervals.map(interval => (
                    <option key={interval} value={interval}>{interval}</option>
                ))}
            </select>
        </div>
    );
}

export default CoinToggle;
