#!/usr/bin/env python2.7
import sys
import rospy
import cv2
import numpy as np
from sensor_msgs.msg import CompressedImage
from cv_bridge import CvBridge, CvBridgeError

def create_image_message(img):
	msg = CompressedImage()
	msg.header.stamp = rospy.Time.now()
	msg.format = "jpeg"
	msg.data = np.array(cv2.imencode('.jpg', img)[1]).tostring()
	return msg

def publish_image():
	rospy.init_node('publish_image', anonymous=True)
	publisher = rospy.Publisher('/image_node/image', CompressedImage, queue_size=1)
	bridge = CvBridge()
	rate = rospy.Rate(1)
	cv_image = cv2.imread('leo.jpg')
	while not rospy.is_shutdown():
		try:
			publisher.publish(create_image_message(cv_image))
			print('Published image leo.jpg')
		except CvBridgeError as e:
			print(e)
		rate.sleep()


# Main method.
def main(args):
	try:
		publish_image()
	except rospy.ROSInterruptException:
		print "Shutting down node."

if __name__ == '__main__':
	main(sys.argv)
