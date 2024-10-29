export function saveChartData(symbol, data) {
    localStorage.setItem(symbol, JSON.stringify(data));
}

export function loadChartData(symbol) {
    const data = localStorage.getItem(symbol);
    return data ? JSON.parse(data) : [];
}
