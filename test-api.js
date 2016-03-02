var request = require('request'),
    url = 'http://www.priceminister.com/completion?q=gs_ps4&c=frc',
    method = 'GET';

console.log('--------------------------');
console.log('Test API with url :');

console.time('request');

request({
  // will be ignored
  method: method,
  uri: url,

  // HTTP Archive Request Object
  har: {
    url: url,
    method: method,
    headers: [
      {
        name: 'content-type',
        value: 'application/json'
      },
      {
        name: 'User-Agent',
        value: 'HACKATHON Q1.2016'
      }
    ]
  }
}, function(error, response, body) {

  if(error) {
    console.error(error);
  }
  else {

    console.timeEnd('request');
    console.log('--------------------------');
    console.log(body);
    console.log('--------------------------');
  }
});