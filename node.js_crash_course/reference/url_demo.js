const url = require('url');
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//Hostname
console.log(myUrl.host);

//Pathname
console.log(myUrl.pathname);

//Serialized querry
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);
//Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
//Loop params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
