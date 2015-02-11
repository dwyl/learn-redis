# Learn Redis

Need to store/access your data as ***fast*** as possible? Try Redis!

![Redis Logo](http://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg "Redis Logo")

## [Why?](https://youtu.be/zeXv4bav54M?t=9s)

**Storing data** is a ***necessity*** for *all* (but the *simplest*) web applications. &nbsp;
:computer: :iphone: :watch: :camera: :video_camera: &nbsp; > &nbsp;
:floppy_disk: & :open_file_folder: &nbsp; > &nbsp; :smile:  
*Often* ***accessing*** that data *can be* the ***biggest bottleneck***
in an app causing it to be ***slow and painful experience***. :hourglass: :zzz: :cry:  
**Redis** is ***designed*** to be the ***fastest*** way to store and retrieve data. :rocket:  
Which means ***less waiting*** for the people using your app! :clap: :grinning:


## What?

Redis is the *closest* you can get to direct access (to your computer's) memory.  
[**Written in C**](https://github.com/antirez/redis/tree/unstable/src)
and weighing in at less than a Megabyte
(*smaller is better when it comes to executable size*),
Redis is ***built for speed***.  

### Key-Value (KV) Store



There are *many* KV Stores to chose from: http://en.wikipedia.org/wiki/NoSQL#Key-value_stores
our *favourites* are:
+ [**Riak**](http://en.wikipedia.org/wiki/Riak) - great for fault tolerance and data replication
+ [**LevelDB**](http://leveldb.org/) - Bundled with node.js so always available, but limited on heroku.
+  and *of course* [***Redis***](http://redis.io/) - *fast, free and fun*!

We're here to focus on Redis because it has the *right balance* of
simplicity (great for beginners and pros alike) and speed.


### Many Features (Learn/Use the *Basics First*)

Redis has *many* fantastic *features*

### Name: what does Redis mean/stand for?

The name Redis means **RE**mote **DI**ctionary **S**erver

A Dictionary (see: http://xlinux.nist.gov/dads/HTML/dictionary.html) is another
way of saying "Key-Value Store";  
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
this will output:



### Use Case

***sessions*** in your app (which require a DB/io read on *every request* but don't much
in the way of *content*)

### Can't I Just Use MongoDB for Everything?

> "We are *already using MongoDB* to store our records, can't we just put ***everything in one place***?"

![which-tool-job-hammer-mongodb-fry-futurama-millionaire](https://cloud.githubusercontent.com/assets/194400/7215011/e3afc952-e5bb-11e4-9216-7b385d37c093.jpg)

MongoDB is a good tool. We like to think of it as
[the ***Hammer*** of Databases](http://en.wiktionary.org/wiki/if_all_you_have_is_a_hammer,_everything_looks_like_a_nail)  
... a *general purpose* Datastore that works well for *most* NoSQL situations.  
But if you need to save/access ***Millions of Records Per Second*** (*yes, you read that right!*)  
then there's ***only one*** place to store your data.

![there can be only one](https://izeeshan.files.wordpress.com/2014/08/there-can-only-be-one.jpg)

## How?

(A Tutorial using Redis with Node.js)





## Which Node.js Module?

A search for "redis" on **NPM**: https://www.npmjs.com/search?q=redis returns *many* results!


![npm-search-redis](https://cloud.githubusercontent.com/assets/194400/7214943/35380b5c-e5b9-11e4-9995-9992efd13f81.png)

Don't be overwhelmed by the *quantity* of modules, focus on *quality*.

### The 2 Modules we *Use* and *Recommend*

+ **redis** https://www.npmjs.com/package/redis written in "*Pure JavaScript*"
this is *by far* the ***most popular*** node module for redis.
+ **hiredis-node** https://github.com/redis/hiredis-node is a JS wrapper
around the [hiredis](https://github.com/redis/hiredis) **C Library**.  
This means its ***much faster*** than "*Pure JavaScript*" code.
Its faster, so what's the catch?  
![npm-install-hiredis](https://cloud.githubusercontent.com/assets/194400/7214808/c859ae5a-e5b3-11e4-8c2f-bd7ec74fe82b.png)

> If you (or anyone on your *team*) using [*Microsoft Windows*](https://youtu.be/WTYet-qf1jo?t=56s)
> (*stop hitting yourself!*)
> will need to install a
> [*compiler*](http://stackoverflow.com/questions/5691795/how-to-compile-c-programming-in-windows-7)  
> to get redis *working* and that can sometimes take *hours*! But, for the rest of us on UNIX/Linux **hiredis** is ***great***!





## Background Reading

+ ***What is Redis*** and what do I **use it for**? (good list of **usecases**)  
http://stackoverflow.com/questions/7888880/what-is-redis-and-what-do-i-use-it-for
+ Storing ***hundreds of millions*** of simple key-value pairs in Redis **INSTAGRAM ENGINEERING** Blog:  
http://instagram-engineering.tumblr.com/post/12202313862/storing-hundreds-of-millions-of-simple-key-value
+ Redis Labs Achieves Over ***1.2 Million Transactions per Second*** on a **Single** Amazon Web Services (AWS) **Instance**:  
http://www.marketwired.com/press-release/redis-labs-achieves-over-12-million-transactions-per-second-on-single-amazon-web-services-1965269.htm
+ Redis Wikipedia: http://en.wikipedia.org/wiki/Redis (history and background)
+ Good **comparison** of **NoSQL** datastores: http://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis
+ Why ***Redis beats Memcached*** for caching:  
http://www.infoworld.com/article/2825890/application-development/why-redis-beats-memcached-for-caching.html
+ ***Why*** **Redis is Awesome**:
http://www.robupcraft.com/why-redis-is-awesome
+ Memcached vs. Redis? (good list feature/comparison)
http://stackoverflow.com/questions/10558465/memcached-vs-redis
+ What are the differences between MongoDB and Redis? (v. basic)
http://stackoverflow.com/questions/6445899/what-are-the-differences-between-mongodb-and-redis
