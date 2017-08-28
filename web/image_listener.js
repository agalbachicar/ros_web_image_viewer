// Connecting to ROS
// -----------------
function initROS() {
  host = document.getElementById("hostTextInput").value;
  port = document.getElementById("portTextInput").value;
  url = 'ws://' + host + ':' + port;
  console.log('URL:' + url);
  var ros = new ROSLIB.Ros({
    url : url
  });

  ros.on('connection', function() {
    var message = 'Connected to websocket server.';
    console.log(message);
    document.getElementById("connectionStatus").innerHTML = message;
  });

  ros.on('error', function(error) {
    var message = 'Error connecting to websocket server.';
    console.log('Error connecting to websocket server: ', error);
    document.getElementById("connectionStatus").innerHTML = message;
  });

  ros.on('close', function() {
    var message = 'Connection to websocket server closed.';
    console.log(message);
    document.getElementById("connectionStatus").innerHTML = message;
  });

  // Subscribing to a Topic
  // ----------------------
  var imageListener = new ROSLIB.Topic({
    ros : ros,
    name : '/image_node/image',
    messageType : 'sensor_msgs/CompressedImage'
  });

  var imageCounter = 0;
  imageListener.subscribe(function(message) {
    imageCounter = imageCounter + 1;
    var messageStr = 'Received ' + imageCounter + ' images';
    console.log(messageStr);
    document.getElementById("imageStatus").innerHTML = messageStr;

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "data:image/png;base64," + message.data; // base64;
    img.onload = function () {
        console.log("Image Onload");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.onerror = function (stuff) {
        console.log("Img Onerror:", stuff);
    };
  });
}
