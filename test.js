var padding = require("./index");
var assert = require('assert');

describe('Left Padding', function () {
    it('shoud run *test', function() {
        var val = padding.lpad("test", "*");
        assert.equal(val, "*test");
    });

});

console.log ( padding.lpad("test", "*"));
//Output:	*test

console.log ( padding.lpad("test", "*", 10));
//Output:	**********test

console.log ( padding.lpad("test", "*", 3, 15));
//Output:	***test

console.log ( padding.lpad("test", "*", 3, 5));
//Output:	*test


console.log ( padding.lpad("test", "*", 0, 15));
//Output:	***********test


console.log ( padding.lpad());
//Output:	undefined

console.log ( padding.lpad("test"));
//Output:	test




console.log ( padding.rpad("test", "*"));
//Output:	test*

console.log ( padding.rpad("test", "*", 10));
//Output:	test**********

console.log ( padding.rpad("test", "*", 3, 15));
//Output:	test***

console.log ( padding.rpad("test", "*", 3, 5));
//Output:	test*


console.log ( padding.rpad("test", "*", 0, 15));
//Output:	test***********


console.log ( padding.rpad());
//Output:	undefined

console.log ( padding.rpad("test"));
//Output:	test
