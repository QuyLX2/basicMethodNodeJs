const url = require('url');


const adress = 'https://vi.reactjs.org/docs/getting-started.html';

const parseUrl = url.parse(adress, true);

console.log(parseUrl.host);
console.log(parseUrl.pathname);
console.log(parseUrl.query);