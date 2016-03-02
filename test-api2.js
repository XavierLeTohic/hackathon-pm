 var request = require('request'),
    url = 'http://www.priceminister.com/completion?q=gs_ps4&c=frc',
    method = 'GET',
    headers = [{name: 'content-type',value: 'application/json'},{name: 'User-Agent',value: 'HACKATHON Q1.2016'}];

console.log('--------------------------');
console.log('Test API 2 with url :');

console.time('request');

request.get(url,{'headers':headers})
       .on('error', function(err) {console.log(err)})
       .on('body', function(body) {
					console.timeEnd('request');
    			console.log('--------------------------');
    			console.log(body);
    			console.log('--------------------------');
  				});
