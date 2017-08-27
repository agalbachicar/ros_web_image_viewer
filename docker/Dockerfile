FROM osrf/ros:kinetic-desktop-full-xenial

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y \
       nano \
       ros-kinetic-rosbridge-server \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir /app
VOLUME /app
EXPOSE 9090