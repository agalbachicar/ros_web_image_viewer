#!/bin/bash

/ros_entrypoint.sh
roscore &
sleep 10
python image_publisher.py &
roslaunch rosbridge_server rosbridge_websocket.launch &
