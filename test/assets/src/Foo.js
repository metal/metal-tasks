'use strict';

import Bar from './Bar';
import core from 'npm:metal/src/core';

class Foo extends Bar {
	hello() {
		return 'Hello ' + core.isString('foo');
	}
}

export default Foo;
