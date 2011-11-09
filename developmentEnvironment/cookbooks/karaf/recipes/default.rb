KARAF_VERSION="2.2.4"
KARAF="apache-karaf-#{KARAF_VERSION}"
KARAF_HOME="/home/vagrant/#{KARAF}"

remote_file "/tmp/#{KARAF}.tar.gz" do
  action :create_if_missing
  source "http://mirror.arcor-online.net/www.apache.org/karaf/2.2.4/#{KARAF}.tar.gz"
  mode "0644"
  checksum "a09f85142e9bb8290cdf332af8201b31ba6d993a"
end

bash "install_karaf" do
  user "vagrant"
  cwd "/home/vagrant"
  code <<-EOH
  tar -zxf /tmp/#{KARAF}.tar.gz
  EOH
end

cookbook_file "#{KARAF_HOME}/etc/jre.properties" do
  mode "0644"
end


template "#{KARAF_HOME}/etc/com.opitz_consulting.cameldemo.cfg" do
  mode "0644"
  source "com.opitz_consulting.cameldemo.cfg.erb"
end

