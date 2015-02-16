/**
 * BASIC Example using node_redis - https://github.com/mranney/node_redis
 * since many of the examples on StackOverflow use the "original" module
 * node_redis (was first) this is a good place to start
 */

var redis  = require("redis");
var client = redis.createClient();

client.set("Hello", "World", redis.print);

client.get("Hello", function(err, reply) {
   // reply is null when the key is missing
   console.log('Hello ' + reply);
});
