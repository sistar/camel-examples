#!/usr/bin/env ruby
require 'rubygems'
require 'net/ssh'

HOST = 'localhost'
USER = 'karaf'
PASS = 'karaf'
FEATURE_URL ='mvn:camel/jaxDemo/1.0.0/xml/features'
FEATURE = 'jaxDemo'
ROUTE = 'backendAsync'


Net::SSH.start(HOST, USER, :password => PASS, :port => 8101) do |ssh|
  result = ssh.exec!('features:listurl')
  puts result
  if result =~ /#{Regexp.escape(FEATURE_URL)}/
  	puts "yes"
    result = ssh.exec!("features:refreshurl")
    puts result
  else
  	puts "no"
    result = ssh.exec!("features:addurl #{FEATURE_URL}")
    puts result
  end
  result = ssh.exec!('features:uninstall jaxDemo')
  puts "uninstall #{result}"
  result = ssh.exec!('features:install jaxDemo')
  puts "install #{result}"
end