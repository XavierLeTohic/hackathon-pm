var fs = require('fs');

var cache = {

  init: function() {

    return this;
  },

  newCacheGroup: function(group) {
    'use strict';

    let dir = __dirname + '/tmp/cache/' + group;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(__dirname + '/tmp/cache/' + group);
    }

    return this;
  },

  newCacheValue: function(group, key, datas) {
    'use strict';

    let dir = __dirname + '/tmp/cache/' + group;

    if (fs.existsSync(dir)) {

      fs.writeFile(dir + '/' + key + '.json', datas, function (err, data) {

        if(err) {
          console.log('CACHE ERROR : Failed to cache "' + key + '.json" from group "' + group + '"');
        }
      });
    }
  },

  getCacheValue: function(group, key, callback) {
    'use strict';

    let dir = __dirname + '/tmp/cache/' + group + '/' + key + '.json';

    if (fs.existsSync(dir)){

      fs.readFile(dir, "utf8", function(err, data) {

        if(err) {
          callback(null);
        }
        else {
          callback(data);
        }
      });
    }
    else {
      callback(null);
    }
  },

  checkCache: function(group, key, callback) {
    'use strict';

    let dir = __dirname + '/tmp/cache/' + group;

    if (fs.existsSync(dir)){

      let files = fs.readdirSync(__dirname + '/tmp/cache/' + group);


      if(files.length > 0) {

        let index = files.indexOf(key + '.json');

        if(index !== -1) {

          callback(files[index]);
        }
        else {
          callback(null);
        }
      }
      else {
        callback(null);
      }
    }
    else {
      callback(null);
    }

    return this;
  }
};

module.exports = cache;
