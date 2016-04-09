# jspm-riot
This is a SystemJS/JSPM library for compiling riot tags before requiring them using es6 import syntax. It is implemented in under 5 lines of code, and only depends on the riot compiler.

## Example
You can see an example of a [Riot Redux Boilerplate](https://github.com/markwylde/riot-redux-boilerplate) that uses this library to require in `tag` files.

## Installation
To install simply run:
```shell
jspm install tag=npm:jspm-riot
```

## Usage
To use you can import or require as below. Please note the exlamation point at the end:
```javascript
import 'example.tag!'
```

## License
This project is licensed under the terms of the MIT license.
