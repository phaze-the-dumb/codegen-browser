let cache = {};
let setAppData = ( appID, data ) => cache[appID] = data;

module.exports = { cache, setAppData };