#!/bin/bash

docker run -it --rm --name redis -p 6379:6379 -v $(pwd)/redis-data:/data redis --save 60 1
