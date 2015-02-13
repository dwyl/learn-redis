# detailed instructions for installing
$script = <<SCRIPT
# update ubuntu (security etc.)
apt-get update
# nodejs
sudo apt-get -y install build-essential tcl8.5 g++ git git-core nodejs npm
# use https://github.com/visionmedia/n to get latest node+npm
# sudo npm install n -g
# sudo n stable
# node -v
# install Redis following http://redis.io/topics/quickstart
wget http://download.redis.io/redis-stable.tar.gz
tar xvzf redis-stable.tar.gz
cd redis-stable
# sudo make me a sandiwch --> https://xkcd.com/149/
sudo make
sudo make install
redis-server

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
