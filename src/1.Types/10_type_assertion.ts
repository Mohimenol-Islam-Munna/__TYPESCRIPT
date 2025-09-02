// normal string
let http1 = "GET";
http1 = "POST";

// type assertion
let http2 = "PUT" as "PUT";

// http2 variable only support "PUT" value

// http2 = "POST"; through error
http2 = "PUT";

console.log("http2 ::", http2);
