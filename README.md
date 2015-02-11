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



(A Tutorial using Redis with Node.js)


## Which Node.js Module?

A search for "redis" on **NPM**: https://www.npmjs.com/search?q=redis returns *many* results!


![npm-search-redis](https://cloud.githubusercontent.com/assets/194400/7214943/35380b5c-e5b9-11e4-9995-9992efd13f81.png)

Don't be overwhelmed by the *quantity* of modules, focus on *quality*:

### The 2 Modules we Use and Recommend

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
