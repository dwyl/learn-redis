# Learn Redis
[![Build Status](https://travis-ci.org/dwyl/learn-redis.svg?branch=master)](https://travis-ci.org/dwyl/learn-redis)
[![Code Climate](https://codeclimate.com/github/dwyl/learn-redis/badges/gpa.svg)](https://codeclimate.com/github/dwyl/learn-redis)
[![Node version](https://img.shields.io/node/v/esta.svg?style=flat)](http://nodejs.org/download/)
[![Dependency Status](https://david-dm.org/dwyl/learn-redis.svg)](https://david-dm.org/dwyl/learn-redis)
[![HitCount](https://hitt.herokuapp.com/dwyl/learn-redis.svg)](https://github.com/dwyl/learn-redis)

Need to store/access your data as ***fast*** as possible? Try Redis!

![Redis Logo](http://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg "Redis Logo")

## [Why?](https://youtu.be/zeXv4bav54M?t=9s)

> "*40% of people will leave your site if it takes longer than 3 seconds to load...*"  
https://econsultancy.com/blog/10936-site-speed-case-studies-tips-and-tools-for-improving-your-conversion-rate  
> ***Never make people wait***; *Learn how to* ***cache your content/app with Redis***.


**Storing data** is a ***necessity*** for *all* (but the *simplest*) web applications.  
*Often* ***accessing*** that data *can be* the ***biggest bottleneck***
in an app causing it to be ***slow and painful experience***.  
**Redis** is ***designed*** to be the ***fastest*** way to store and retrieve data.  
Which means ***less waiting*** for the people using your app!


## What?

Redis is the *closest* you can get to **direct access** (to your computer's) **memory**.  
[**Written in C**](https://github.com/antirez/redis/tree/unstable/src)
the entire server is *less than a Megabyte*
(*smaller is better when it comes to executable size*),
Redis is ***built for speed***.

### Use Case

+ ***sessions*** in your app (which require a DB/io read on *every request* but
  don't contain *content*) should be checked/set as quickly as possible.
+ ***list online people*** in a chat application the list of people/devices
that are connected changes frequently (as people join/leave). Wouldn't it be
useful to be able to *subscribe* to this list and be notified when it changes?
+ ***content cache*** given that Redis can store any size of string,
it can store any *content* you need to serve in your app; from simple components to entire pages.

## How?

### First Learn the *Fundamentals*

***First thing*** you need to do - if you haven't already - is ***go through*** the
***online tutorial***: http://try.redis.io/ (30mins to learn and take notes)

#### Make Sure you *Understand*

You can learn/practice all these commands [*online*](http://try.redis.io)
***before*** installing Redis:

+ [**SET**](http://redis.io/commands/set) - SET a the value for a given key.
+ [**GET**](http://redis.io/commands/get) - GET the value of a key.
+ [**INCR**](http://redis.io/commands/incr) increment a counter (*integer*)
+ [**DECR**](http://redis.io/commands/decr) decrement a counter (decremented key needs to already exist)
```sh
redis> SET count 10
redis> GET count
"10"
redis> INCR count
(integer) 11
redis> DECR count
(integer) 10
```

*Easy*, ***Right***? lets *keep moving*.


### Installation

If you don't already have Redis installed on your machine -
*why would you if you're reading an introductory tutorial, right?* -
there are ~~two~~ ***three ways to install Redis***:

> The guys who *make* Redis suggest *compiling* it from source (this requires a working GCC compiler and libc)
> see: **Quick Start**: http://redis.io/topics/quickstart  
> If you are running Linux/Mac or prefer not to use Vagrant, try the download & compile described in the quickstart.  

#### installing using (home)brew (*Mac Only*)

Once you have [homebrew](http://brew.sh/) installed, simply run this command in your terminal:
```sh
brew install redis
```
![brew-install-redis](https://cloud.githubusercontent.com/assets/194400/8672886/38cf0e2c-2a2a-11e5-9869-bf6d876dc8b1.png)


> For people *stuck* on Windows (if you don't already have a **C Compiler**)
> and people who prefer to "contain" their ,
***we recommend*** using [***Vagrant***](https://github.com/docdis/learn-vagrant)
to run Redis (and your app) in a (Linux) Virtual Machine (VM).
> We have included a Vagrantfile in this repo which you can use to
get Redis & Node.js working on ***any*** machine. simply:

```sh
git clone https://github.com/nelsonic/learn-redis.git && cd learn-redis
vagrant up
vagrant ssh
```
These three commands will
1. Clone the repo and move into the new directory
2. Download and install the Ubuntu VM and latest Redis and Node.js
(and start Redis server on TCP Port 6379)
3. SSH into the Vagrant (Ubuntu) VM so you can use the vagrant CLI


To boot the VM with Redis open a new terminal window/tab (in the learn-redis directory) and issue the command: `vagrant up`  
![learn-redis-vagrant-up](https://cloud.githubusercontent.com/assets/194400/7217523/747eeb3c-e627-11e4-8289-0b82c0fff909.png)

After a few minutes of downloading & installing you will see that Redis is running:  
![learn-vagrant-redis-running](https://cloud.githubusercontent.com/assets/194400/7218144/febe2b56-e653-11e4-88cf-859a65ccd9f2.png)

on **Port 6379** and **PID** (process ID) **5786**  
![learn-redis-vagrant-ssh-redis-running](https://cloud.githubusercontent.com/assets/194400/7217526/748d0fdc-e627-11e4-8075-56c1f5e8ca22.png)

To use Redis from the **command line** (open a new terminal window/tab and) log into the VM using `vagrant ssh`:  
![learn-redis-vagrant-ssh](https://cloud.githubusercontent.com/assets/194400/7217524/7486d3e2-e627-11e4-8e28-e2fa05c8d431.png)

Then confirm that the **CLI** is working by issuing the command `redis-cli ping`:  http://stackoverflow.com/questions/10137857/is-redis-just-a-cache
![learn-redis-vagrant-ssh-redis-ping](https://cloud.githubusercontent.com/assets/194400/7217525/7489c638-e627-11e4-9ca6-ca710dd54915.png)

To **exit** the VM you just logged into, simply type `exit` in the terminal and hit the [return] key.  
![learn-redis-exit-vagrant-vm](https://cloud.githubusercontent.com/assets/194400/7218297/3bd595b4-e65f-11e4-8b3a-108a8243d486.png)

To **close** the Redis **server** runing on the VM, press the [ctrl] + [C] keys on your keyboard (*twice*).  
![learn-redis-exit-redis](https://cloud.githubusercontent.com/assets/194400/7218303/8e4f314c-e65f-11e4-8961-8dbfe4442883.png)

And to **shut down** the Vagrant VM (to free up the memory on your computer),  
issue the `vagrant halt` command in your terminal:  
![learn-redis-vagrant-halt](https://cloud.githubusercontent.com/assets/194400/7218308/e881bcc0-e65f-11e4-8d0d-fe8559fe45f0.png)

**Note**: your **VM** is ***preserved*** (still saved on your hard drive) so you can use it again for further redis-development simply by issuing the `vagrant up` command (from within a working directory that has the Vagrantfile and .vagrant)
If you are short on disk space, you can always **delete** the VM *completely* by issuing the `vagrant destroy` command.
**Note**: If you are *running Linux* on your laptop/dev machine
and prefer not to have the overhead of running Vagrant
you can simply **copy** the **installation commands** from the Vagrantfile
and **paste** them **into** your **terminal**.

<br />


### Which Node.js Module?

A search for "redis" on **NPM**: https://www.npmjs.com/search?q=redis returns *many* results!


![npm-search-redis](https://cloud.githubusercontent.com/assets/194400/7214943/35380b5c-e5b9-11e4-9995-9992efd13f81.png)

Don't be overwhelmed by the *quantity* of modules, focus on *quality*.

#### The 2 modules we *use* and *recommend* for connecting to Redis

+ **redis** https://www.npmjs.com/package/redis written in "*Pure JavaScript*"
this is *by far* the ***most popular*** node module for Redis,
*and*... if you install it with: `npm install redis hiredis` then it will *use*
the C binding for speed.
+ **hiredis-node** https://github.com/redis/hiredis-node is a JS wrapper
around the [hiredis](https://github.com/redis/hiredis) **C Library**.  
This means its ***much faster*** than "*Pure JavaScript*" code.
Its faster, so what's the catch?  
![npm-install-hiredis](https://cloud.githubusercontent.com/assets/194400/7214808/c859ae5a-e5b3-11e4-8c2f-bd7ec74fe82b.png)

> If you (or anyone on your *team*) using [*Microsoft Windows*](https://youtu.be/WTYet-qf1jo?t=56s)
> (*stop hitting yourself!*)
> will need to install a
> [*compiler*](http://stackoverflow.com/questions/5691795/how-to-compile-c-programming-in-windows-7)  
> to get Redis *working* and that can sometimes take *hours*!

#### Update: Our *experience* lead us to create `redis-connection`

Given that it easy to open ***too many connections to redis***
we created [https://github.com/dwyl/***redis-connection***](https://github.com/dwyl/redis-connection) to re-use the connection across all files/modules in our project.
The [***redis-connection***](https://github.com/dwyl/redis-connection)
module is just a few lines you can read/understand in 5 mins and takes
the hassle out of creating connections
see:

Our ***recommendation*** is to **use** the **redis** module
for simple apps, but for anything more interesting
(*e.g: an app that has handlers spread across several files*)
we recommend using [***redis-connection***](https://github.com/dwyl/redis-connection)

Install:
```sh
npm install redis-connection --save
```
Use:
```js
var redisClient = require('redis-connection')();
redisClient.set('hello', 'world');
redisClient.get('hello', function (err, reply) {
  console.log('hello', reply.toString()); // hello world
});
```



### Basic Example

See: **examples/basic.js**

Paste hand-type (or copy-paste) this code into a file called **basic.js**

```js
var redisClient = require('redis-connection')();

redisClient.set("Hello", "World", redis.print);

redisClient.get("Hello", function(err, reply) {
   // reply is null when the key is missing
   console.log('Hello ' + reply);
});
```

Run the script in your terminal by issuing the command: `node basic.js`
You should expect to see:
```sh
$ node basic.js
Reply: OK
Hello World
```




### Also Good To Know but *Not Essential* for *this* Introductory Tutorial


Redis has *many* fantastic *features* not limited to just SET/GET/DELETE
key:value pairs. You can also ***atomically***

+ [***append***](http://redis.io/commands/append) lets us *add* data to record
without having to read it first. ()

```sh
redis> EXISTS mykey
(integer) 0
redis> APPEND mykey "Hello"
(integer) 5
redis> APPEND mykey " World"
(integer) 11
redis> GET mykey
"Hello World"
```

+ [**incr**ment](http://redis.io/commands/incr) a value (e.g a ***counter***) no
delay having to *read* the current value *before* you can increase it by one.

```sh
redis> SET mykey "10"
OK
redis> INCR mykey
(integer) 11
redis> GET mykey
"11"
```

If you don't get *overwhelmed* by lots of new words and want a sneak peek  
at the all the cool commands you can use in Redis check: http://redis.io/commands
But we're getting *ahead of ourselves*, lets focus on the basics first.


+ [**EXPIRE**](http://redis.io/commands/expire) means you can delete data after a specified amount of time.
e.g: expire a key after 10 seconds
```sh
redis> SET mykey "Hello"
OK
redis> EXPIRE mykey 10
(integer) 1
redis> TTL mykey
(integer) 10
# wait for 10 seconds then
redis> TTL mykey
(integer) -2
```
+ TTL (time to live) lets you check how long it will be before a key
(and its associated value) will expire from the cache. (see *expire* example above)


+ **Lists** - A list is a series of ordered values (comparable to an Array in JS)
  + [**RPUSH**](http://redis.io/commands/rpush)
  + [**LPUSH**]()
  + [**LRANGE**]()

```sh
RPUSH fruits "Apple"
RPUSH fruits "Banana"
LPUSH fruits "Mango"
LRANGE fruits 0 -1 => 1) "Mango", 2) "Apple", 3) "Banana"
LRANGE fruits 0 1 => 1) "Mango", 2) "Apple"
LRANGE fruits 1 2 => 1) "Apple", 2) "Banana"
LLEN fruits => 3
```

+ **Sets** - Redis Sets are an unordered collection of Strings.
It is possible to add, remove, and test for existence of members in O(1)
(*constant time* regardless of the number of elements contained inside the Set).
SISMEMBER tests if the given value is in the set.
It returns 1 if the value is there and 0 if it is not.

+ Data Types: http://redis.io/topics/data-types

+ [***Transactions***](http://redis.io/topics/transactions) allow the execution
of a group of commands in a single step, with ***two important guarantees***:
1. All the commands in a transaction are serialized and executed sequentially.
It can never happen that a request issued by another client is served in the
middle of the execution of a Redis transaction. This guarantees that the
**commands** are **executed as** a ***single isolated operation***.
2. Either **all** of the commands ***or none*** are processed,
so a Redis transaction is also
[***atomic***](http://en.wikipedia.org/wiki/Atomicity_%28database_systems%29).

+ [***PubSub***](http://redis.io/commands/pubsub) lets you "listen" for changes
in the value of a key.
Useful if you ant to know when something has been changed by someone.
e.g: you have two devices (Desktop & Mobile) logged into an app,
something gets updated on one of them, how do we reflect this change on the other?
Answer: all devices "*subscribe*" to the change event and receive the latest
values as a result.

## Advanced (*Real*) Example

> For a more complete example see our Chat App:
https://github.com/dwyl/hapi-socketio-redis-chat-example

## Background Reading

#### General

+ ***What is Redis*** and what do I **use it for**? (good list of **usecases**)  
http://stackoverflow.com/questions/7888880/what-is-redis-and-what-do-i-use-it-for
+ Redis Wikipedia: http://en.wikipedia.org/wiki/Redis (history and background)
+ Good **comparison** of **NoSQL** datastores: http://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis
+ Why ***Redis beats Memcached*** for caching:  
http://www.infoworld.com/article/2825890/application-development/why-redis-beats-memcached-for-caching.html
+ ***Why*** **Redis is Awesome**:
http://www.robupcraft.com/why-redis-is-awesome
+ Memcached vs. Redis? (good list feature/comparison)
http://stackoverflow.com/questions/10558465/memcached-vs-redis
+ Is Redis "just" a cache? http://stackoverflow.com/questions/10137857/is-redis-just-a-cache
+ What are the differences between MongoDB and Redis? (v. basic)
http://stackoverflow.com/questions/6445899/what-are-the-differences-between-mongodb-and-redis
+ How to Pipeline in node.js to Redis:
http://stackoverflow.com/questions/21416529/how-to-pipeline-in-node-js-to-redis
+ List of Redis Features:
https://redis-docs.readthedocs.org/en/latest/Features.html
+ 11 Common Web Use Cases Solved In Redis:  
http://highscalability.com/blog/2011/7/6/11-common-web-use-cases-solved-in-redis.html
+ How to Install and use Redis on Ubuntu
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-redis

### Publish / Subscribe

Probably the most useful feature of Redis for building real-time apps is
publish/subscribe. Thankfully, Thoughtbot have written a good post
explaining it: https://robots.thoughtbot.com/redis-pub-sub-how-does-it-work

Their article uses Ruby (_they are **still** a rails shop..._)
but our **Practical** tutorial uses node.js, so after you have read the
intro, checkout: https://github.com/dwyl/hapi-socketio-redis-chat-example


#### Which Redis-as-a-Service (Heroku Addon)?

There are a few options for hosted Redis on Heroku: https://addons.heroku.com/?q=redis

+ https://addons.heroku.com/rediscloud ***free*** plan is **30mb**
+ https://addons.heroku.com/redistogo *free* plan is **5mb** (paid plans are quite expensive per MB, but they have great service - hence being the #1 provider...)
+ https://addons.heroku.com/redisgreen *no free* plan. #fail (also quite expensive per MB and no distinguishing features)
+ https://addons.heroku.com/openredis *no free* plan. #fail (commitment to use the latest version of redis is good. notifications when reaching 90% of memory.

> ***Conclusion***: **rediscloud**!

#### Get your RedisCloud Instance

The easiest way to get your RedisCloud instance is to create a Heroku app
and add the RedisCloud Addon to it.

In your heroku app, click on `Resources`, type `redis` into the search box:
![learn-redis-01-find-addon](https://cloud.githubusercontent.com/assets/194400/9439757/c51197a4-4a61-11e5-82f6-c84e84a55437.png)

Select RedisCloud Free plan and add to your heroku app:
![learn-redis-02-select-rediscloud](https://cloud.githubusercontent.com/assets/194400/9439767/d53c1b5e-4a61-11e5-8874-3c6418700166.png)

Confirm its been enabled
![learn-redis-03-enabled](https://cloud.githubusercontent.com/assets/194400/9439776/e58c1248-4a61-11e5-817b-7d865a2cf7ef.png)

Go to `Settings` and Click to view the `Config Vars` then grab the `REDISCLOUD_URL` Config Variable so you can use it:
![learn-redis-04-config-vars](https://cloud.githubusercontent.com/assets/194400/9439779/ed4d12e8-4a61-11e5-9d05-ff4ad322bb0e.png)

Now you can export it and use it in your node.js app:
```sh
export REDISCLOUD_URL=redis://rediscloud:yourpassword@pub-redis-12345.eu-west-1-2.1.ec2.garantiadata.com:12345
```
Which you can then access in your node.js app using `process.env.REDISCLOUD_URL`


#### Tips and Tricks

+ Redis Tips (Mozilla): https://developer.mozilla.org/en-US/docs/Mozilla/Redis_Tips
+ Using Redis as an LRU cache: http://redis.io/topics/lru-cache
+ Travis-CI gives you access to Redis:
http://docs.travis-ci.com/user/database-setup/#Redis
(see: **.travis.yml** *this* repo for an example)

#### Performance & Benchmarks

+ How fast is Redis? http://redis.io/topics/benchmarks
+ Storing ***hundreds of millions*** of simple key-value pairs in Redis **INSTAGRAM ENGINEERING** Blog:  
http://instagram-engineering.tumblr.com/post/12202313862/storing-hundreds-of-millions-of-simple-key-value
+ Redis Labs Achieves Over ***1.2 Million Transactions per Second*** on a **Single** Amazon Web Services (AWS) **Instance**:  
http://www.marketwired.com/press-release/redis-labs-achieves-over-12-million-transactions-per-second-on-single-amazon-web-services-1965269.htm

#### Persistence

Because Redis is an in-memory datastore, persistence is not immediate.
if you want to be sure that your data is saved,
(incase your server/instance is re-booted) read about using the ***SAVE*** command.

+ Redis **persistence** ***demystified***: http://oldblog.antirez.com/post/redis-persistence-demystified.html


#### Graphical User Interface (GUI) for Viewing/Setting Data

+ Redis Commander https://github.com/joeferner/redis-commander is
a node module (express app) you can install and run,
then open a web browser to View/Set your Data

##### Alternative GUIs

+ Redis Desktop Manager https://github.com/uglide/RedisDesktopManager (an installed desktop app)
+ List of others: https://redislabs.com/blog/so-youre-looking-for-the-redis-gui

#### Key-Value (KV) Store

There are *many* KV Stores to chose from: http://en.wikipedia.org/wiki/NoSQL#Key-value_stores
our *favourites* are:
+ [**Riak**](http://en.wikipedia.org/wiki/Riak) - great for fault tolerance and data replication
+ [**LevelDB**](http://leveldb.org/) - Bundled with node.js so always available, but limited on heroku.
+ [**RethinkDB**](http://www.rethinkdb.com/) - Probably the coolest real-time database on the planet! :sunglasses:
+  and *of course* [***Redis***](http://redis.io/) - *fast, free and fun*!

We're here to focus on Redis because it has the *right balance* of
simplicity (great for beginners and pros alike) and speed.


## Frequently Asked Questions (FAQ)

### Q: What does Redis mean/stand for?

The name Redis is an acronym for: **RE**mote **DI**ctionary **S**erver

A Dictionary (see: http://xlinux.nist.gov/dads/HTML/dictionary.html) is another
way of saying "Key-Value Store";  
In other programming languages a dictionary is known as a "*map*"
or ["*associative array*"](http://en.wikipedia.org/wiki/Associative_array#Example)
and would *look* like this:
```js
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 25,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "children": [],
  "spouse": null
}
```
The *observant* reader will notice that this looks *exactly* like a
[**JSON**](http://en.wikipedia.org/wiki/JSON) Object; that's because it *is*!
This is how we represent a set of key:value pairs in JS.

It can be easy to think of the real-world
dictionary, *words* are the **keys** and their definitions are the ***values***.  
Imagine you are the person writing the definitions in a dictionary,  
you would specify the **key** (e.g: 'everything') for your item in the dictionary
and "**SET**" the **value** (e.g: 'awesome').  
Then, when you **read** (or "**GET**") record for the 'everything' ***key***
the **value** would be 'awesome'.

```js
// basic key:value lookup in JavaScript. Try it: http://repl.it/jYk
var dictionary = {
  'everything':'awesome'
}
for (var k in dictionary) {
  console.log(k + ' is ' + dictionary[k]); // everything is awesome
} // whaaaat? >> https://youtu.be/StTqXEQ2l-Y
```

Or, sticking with the dictionary metaphor, here's a *better* example:

```js
// basic key:value dictionary lookup in JavaScript. Try it: http://repl.it/jYk/4
var dictionary = {
  'bycycle':'A bicycle, often called a bike or cycle, is a human-powered, \
pedal-driven, single-track vehicle, having two wheels attached to a frame, \
one behind the other.'
}
for (var k in dictionary) {
  console.log(k +': ' +dictionary[k] );
}
```
output:

![bicycle-definition](https://cloud.githubusercontent.com/assets/194400/7215446/4bbc5fd8-e5d0-11e4-80ca-a52d9265186f.png)


### Q: Can't I Just Use MongoDB for Everything?

> "We are *already using MongoDB* to store our records, can't we just put ***everything in one place***?"

![which-tool-job-hammer-mongodb-fry-futurama-millionaire](https://cloud.githubusercontent.com/assets/194400/7215011/e3afc952-e5bb-11e4-9216-7b385d37c093.jpg)

MongoDB is a good tool. We like to think of it as
[the ***Hammer*** of Databases](http://en.wiktionary.org/wiki/if_all_you_have_is_a_hammer,_everything_looks_like_a_nail)  
... a *general purpose* Datastore that works well for *most* NoSQL situations.  
But if you need to save/access ***Millions of Records Per Second*** (*yes, you read that right!*)  
then there's ***only one*** place to store your data; ***Redis***.

![there can be only one](https://izeeshan.files.wordpress.com/2014/08/there-can-only-be-one.jpg)


### Q: Can we use Redis as *Primary* Datastore?

***Yes***! Do it! *Discover* the power of data structures and the
speed of an in-memory datastore!


### Q: How should we store JSON?

Redis **strings _vs_** Redis **hashes** to represent **JSON**: efficiency? [Stackoverflow: Redis strings vs Redis hashes to represent JSON: efficiency?](http://stackoverflow.com/questions/16375188/redis-strings-vs-redis-hashes-to-represent-json-efficiency)

Alternately, use [flat](https://github.com/hughsk/flat) as described in [Store Javascript objects in Redis with Node.js the right way](https://medium.com/@stockholmux/store-javascript-objects-in-redis-with-node-js-the-right-way-1e2e89dbbf64).

# Last But *Not Least*

Highly recommend reading ***Redis In Action*** to anyone wanting to use Redis _professionally_.
see: http://www.amazon.com/Redis-Action-Josiah-L-Carlson/dp/1617290858
For *educational purposes* see: http://www.it-ebooks.info/book/2447/
