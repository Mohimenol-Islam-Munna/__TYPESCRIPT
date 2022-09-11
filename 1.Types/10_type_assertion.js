// normal string
var http1 = "GET";
http1 = "POST";
// type assertion
var http2 = "PUT";
// http2 variable only support "PUT" value
// http2 = "ert"; through error
http2 = "PUT";
console.log("http2 ::", http2);
