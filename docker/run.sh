#!/bin/bash

CONTAINER=$1
IMAGE_NAME=$2
ADDITIONAL_DOCKER_ARGS=$3

SCRIPTS_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
REPO_DIR=`readlink -f ${SCRIPTS_DIR}/../`

# This if adds the device for Intel drivers when necessary
DEVICE_ARG=""
if [[ $CONTAINER == *"intel"* ]]; then
  DEVICE_ARG="--device /dev/dri/"
else
  DEVICE_ARG=""
fi


DOCKER_MOUNT_ARGS="\
    -v ${REPO_DIR}/app:/app \
    -p 9090:9090"

xhost +
docker run --name ros_web_viewer --rm \
    -w /app ${DOCKER_MOUNT_ARGS} \
    -it image_publisher