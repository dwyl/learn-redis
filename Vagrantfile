# detailed instructions for installing
$script = <<SCRIPT
# if you have a better way than using sudo to install things, tell me!!
sudo -i

# update ubuntu (security etc.)
apt-get update

# install nodejs + redis from apt
apt-get -y install build-essential tcl8.5 g++ git git-core nodejs npm redis-server redis-tools

# use https://github.com/visionmedia/n to get latest node+npm
sudo npm install n -g
sudo n stable
node -v

# disable init.d from running redis
sudo update-rc.d redis-server disable

# Using Upstart to *Automatically* Start Redis when the VM Boots
git clone https://github.com/dwyl/learn-redis.git cd learn-redis
mv ./redis-server.conf /etc/init/redis-server.conf

# Start Redis for the first time:
sudo start redis-server

# check that node.js can access redis db (from inside learn-redis)
npm install && npm test

SCRIPT


Vagrant.configure("2") do |config|

  # config.vm.box = "base"
  config.vm.box = "ubuntu-nodejs-redis-server"
  config.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box"

  config.vm.network :forwarded_port, guest: 6379, host: 6379
  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network :private_network, ip: "192.168.33.10"
  config.vm.provision :shell, :inline => $script

end
