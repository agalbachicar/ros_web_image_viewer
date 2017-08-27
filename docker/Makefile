
all:
	echo "Calling run."
	make run

build:
	echo "Calling build."
	docker build -t image_publisher .

run: build
	echo "Calling run."
	docker run -v ../app:/app -p 9090:9090 -it image_publisher
