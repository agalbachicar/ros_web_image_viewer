# ROS WEB IMAGE VIEWER

## Description

This sample app shows how to run a Python ROS node that grabs a sample image and then it published into a topic. A sample web app is used to grab the image and display it on a canvas. ROS Kinetic Docker image is used, and just a couple of packages are installed to provide full support to run this code.

## How do I run it?

Go to docker/ directory and change the path of the volume in the Makefile to be the full path of you app/ directory and then run:

'''
make run
'''

Inside the docker image try:

'''
cd app/
launch.sh
'''

## How can I see the image?

In your favourite web browser try openning the web page and then load 'localhost' as the host and '9090' as the port. Click on 'Connect' and then you should see Leo Messi on the box. The counter should start increasing.