	# -----------------------------------------------------------------------------
# jaxDemo
# -----------------------------------------------------------------------------
# running rake from the command-line:
#   rake --help
#     --help shows all the command-line options, a few are listed here.
#   rake
#     (no arguments, runs the default task)
#     rake uses the script: rakefile, Rakefile, rakefile.rb or Rakefile.rb
#     rake will search parent directories for the file.
#   rake -f build.rb
#     -f specifies the rakefile file to run
#   rake target target2
#     target and target2 are the names of the tasks to run (instead of default)
#   rake -n
#     -n shows a dry-run of which tasks would get called
#   rake -T
#     -T shows all task which have descriptions
#   rake -P
#     -P shows task dependencies

require 'rubygems'
require 'net/ssh'
require 'open3'
require 'virtualbox'
#KARAF SSH SHELL IS FORWARDED BY VAGRANT to localhost..
HOST = 'localhost'
VAGRANT_KARAF_PORT = '48101'
USER = 'karaf'
PASS = 'karaf'
REPOSITORY = "jaxDemoRepository"
FEATURE_REPO_URL ='mvn:camel/jaxDemo/1.0.0/xml/features'
FEATURE = 'jaxDemoFeature'
ROUTE = 'backendAsync'
ORACLE_SERVER = 'OTN Developer Days'


def featureUrlInstalled?(ssh)
  answer = ssh.exec!('features:listurl')
  answer =~ /#{Regexp.escape(FEATURE_REPO_URL)}/
end

def refreshUrl(ssh)
  answer = ssh.exec!("features:refreshurl")
end

def installUrl(ssh)
  result = ssh.exec!("features:addurl #{FEATURE_REPO_URL}")
  fail "repository url could not be installed " unless featureUrlInstalled?(ssh)
end

def installFeature(ssh)
  result = ssh.exec!("features:install #{FEATURE}")
  #fail "could not install feature" unless featureInstalled?(ssh)
end

def uninstallFeature(ssh)
  result = ssh.exec!("features:uninstall #{FEATURE}")
  fail "could not uninstall feature" unless ! featureInstalled?(ssh)
end


def featureInstalled?(ssh)
  answer = ssh.exec!("features:list | grep #{FEATURE}")
  answer =~ /\[installed.* #{Regexp.escape(FEATURE)}/
end


# -----------------------------------------------------------------------------
# Tasks
# -----------------------------------------------------------------------------
desc "maven build and provisioning"
task :default => [:mvn,:provision,:reinstall ]do
end

desc "provision Oracle DB,.."
task :bla do
	desc "provision Oracle DB,.."
end

desc "provision Oracle DB,.."
task :provision => :oracleServerRunning do
	
end

desc "shutdown Oracle DB Server and co"
task :shutdown do
	
	VirtualBox::Global.global.host.network_interfaces.each do |ifce|
		if ifce.interface_type == :host_only 
			puts ifce.ip_address
		end
	end

	vm = VirtualBox::VM.find(ORACLE_SERVER)
	if  vm.running?
		vm.save_state
	end
end

desc "ensure VirtualBox Oracle is running"
task :oracleServerRunning do
	vm = VirtualBox::VM.find(ORACLE_SERVER)
	if ! vm.running?
		vm.start
	end
end

desc "reinstall the Feature Repository and the Feature"
task :reinstall => [:updateFeatureUrl, :routeStopped, :reinstallFeature] do

end

desc "feature repository is registered in Karaf"
task :updateFeatureUrl do
Net::SSH.start(HOST, USER, :password => PASS, :port => VAGRANT_KARAF_PORT) do |ssh|
  if featureUrlInstalled?(ssh)
    refreshUrl(ssh)
  else
    installUrl(ssh)
  end
end
end

desc "stop the camel route"
task :routeStop do
  Net::SSH.start(HOST, USER, :password => PASS, :port => VAGRANT_KARAF_PORT) do |ssh|
    #todo
  end
end

desc "reinstall our feature"
task :reinstallFeature do
  Net::SSH.start(HOST, USER, :password => PASS, :port => VAGRANT_KARAF_PORT) do |ssh|
    if featureInstalled?(ssh) 
    	uninstallFeature(ssh)
    end
   	installFeature(ssh)
   	sleep(10)
   	fail "could not install feature" unless featureInstalled?(ssh)
  end
end

task :mvn => :source do
  sh %{mvn clean install -DskipTests}
end