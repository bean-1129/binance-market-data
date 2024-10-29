// TradingViewChart.js
import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

function TradingViewChart({ data }) {
    const chartContainerRef = useRef();

    useEffect(() => {
        // Create the chart instance
        const chart = createChart(chartContainerRef.current, { width: 600, height: 400 });
        const candlestickSeries = chart.addCandlestickSeries();

        // Set data for the chart
        candlestickSeries.setData(data);

        // Resize the chart on window resize
        const handleResize = () => {
            chart.resize(chartContainerRef.current.clientWidth, 400);
        };
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }, [data]);

    return <div className='tradingChart' ref={chartContainerRef} style={{ position: 'relative' }} />;
}

export default TradingViewChart;
