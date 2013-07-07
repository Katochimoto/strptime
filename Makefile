TESTS=test/spec/*.js

all: npm build

npm:
	npm install

build:
	./node_modules/requirer/bin/requirer index.js strptime.js

prod: build
	./node_modules/uglify-js/bin/uglifyjs -o strptime.min.js strptime.js

test:
	./node_modules/mocha/bin/mocha --reporter dot $(TESTS)

.PHONY: all test