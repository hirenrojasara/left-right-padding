# left-right-padding

Left and Right Padding with given string with given count or uptill n length


#Installation

```javascript
npm install left-right-padding --save
```

#Integration
```javascript

var padding = require("./left-right-padding");
```



### Argument

```javascript
padding.lpad( inputString, paddingValue, noOfTimes, maxStringLength);
```
* inputString - String to be processed.
* paddingValue - String to be padded.
* noOfTimes (optional) - paddingValue will be repated for value defined in noOfTimes. If maxStringLength defined and if maxStringLength reached, then noOfTimes will be repeated upto maxStringLength.
* maxStringLength - if noOfTimes is zero or less than 1, then padding value will be padded upto inputstring length becomes masStringLength.

```javascript
### Left Padding using lpad
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


### Right Padding using rpad
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

```
