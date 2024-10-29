// utils/websocket.js

export function createWebSocket(symbol, interval, onMessage) {
    const wsUrl = `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`;
    const socket = new WebSocket(wsUrl);
    
    socket.onmessage = event => {
        const data = JSON.parse(event.data);
        if (data.k) {
            const formattedData = {
                time: {
                    year: new Date(data.k.t).getUTCFullYear(),
                    month: new Date(data.k.t).getUTCMonth() + 1,
                    day: new Date(data.k.t).getUTCDate()
                },
                open: parseFloat(data.k.o),
                high: parseFloat(data.k.h),
                low: parseFloat(data.k.l),
                close: parseFloat(data.k.c)
            };
            onMessage(formattedData);
        }
    };

    return socket;
}
