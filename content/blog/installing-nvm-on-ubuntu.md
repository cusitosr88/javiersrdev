---
title:  'Step-by-Step Guide: Installing NVM on Ubuntu 22.04 for Efficient Node.js Management'
description: 'In this article, we provide a thorough, step-by-step guide on how to install and set up NVM (Node Version Manager) on Ubuntu 22.04 for easy and efficient management of Node.js versions.'
img: /images/posts/nvm-ubuntu.webp
date: 2023-03-22
---
# Step-by-Step Guide: Installing NVM on Ubuntu 22.04 for Efficient Node.js Management

**NVM** (Node Version Manager) is a powerful tool that allows for seamless installation and management of multiple **Node.js** versions on a single system. With NVM's flexibility, developers are able to easily switch between Node.js versions for different applications, as well as automatically select the ideal version using the .nvmrc configuration file. In this tutorial, we will walk you through the step-by-step process of Installing and Configuring NVM on Ubuntu 22.04, complete with useful examples that demonstrate how to leverage NVM for efficient Node.js management.

## Prerequisites

- You must have a running Ubuntu 22.04 Linux system with shell access.
- Log in with a user account to which you need to install node.js.

## Installing NVM

Installing NVM on Ubuntu 22.04 can be a tedious process, but fortunately, a shell script exists for streamlined installation. To get started, open a terminal on your system or connect to a remote system using SSH. Next, you'll need to install curl by running a set of commands to enable secure transfer of data between servers. Finally, you can run the nvm installer script to complete the installation process.

``` bash
sudo apt install curl 
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
```

After installing nvm on Ubuntu 22.04, the installer script creates an environment entry to the login script of the current user. In order for the environment to fully take effect, users may need to either log out and log in again or execute a command to activate the environment.

One option is to manually update the login script to include the nvm environment at startup, thereby ensuring that the nvm utility remains active for all new shell sessions. Alternatively, users can manually execute the command line prompt to activate the environment.

``` bash
source ~/.profile 
```
## Installing Node using NVM

Using **nvm**, you have the flexibility to install multiple versions of Node.js based on your specific requirements. This enables you to select the appropriate version for your application from the list of installed **Node.js** versions.

You should install the latest version available. In this case, using the alias "node" will automatically install the latest version for you.

``` bash
nvm install node 
```

If you need to install a specific version of node.js:

``` bash
nvm install v16.19.0
```
You have the option to select and install any desired version of node.js using the aforementioned command. However, it's important to note that the first version you install will automatically become the default version. As a result, any newly opened shells will default to the first installed node version (you can set this as the default version for nvm by using the command 'nvm alias default').

## Managing Node.js and working with NVM

To view a list of currently installed Node.js versions for the current user, simply run this command.

``` bash
nvm ls 
```

Display a list of available Node.js versions for installation using this command.

``` bash
nvm ls-remote 
```

If you need to use a specific version for the current session, simply select it using 'nvm use *version*'. This will set the chosen version as the active version for the current shell session only.

``` bash
nvm use v16.19.0
```

Throughout this tutorial, you have gained a comprehensive understanding of how to successfully install NVM on your Ubuntu 22.04 LTS (Jammy Jellyfish) Linux system. Additionally, you now possess a foundational knowledge of the primary use cases for NVM.