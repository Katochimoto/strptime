TESTS=test/spec/*.js

all: npm build

npm:
	npm install

build:
	./node_modules/.bin/requirer index.js strptime.js

prod: build
	./node_modules/.bin/uglifyjs -o strptime.min.js strptime.js

test:
	./node_modules/.bin/mocha --reporter dot $(TESTS)
	./node_modules/.bin/jshint .
	./node_modules/.bin/jscs .

.PHONY: all test
