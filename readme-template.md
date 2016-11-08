# JavaScript Modern Array Methods

{{TOC}}

## The 5 Methods

### indexOf

You can use `Array.indexOf` to find the index of a value in an Array. Array.indexOf can find either primitive values or JavaScript objects. If the value is not found, `Array.indexOf` will return -1.

Here is an example using `indexOf`:

```javascript
{{ examples/indexof.js }}
```

And the output is:

```
{{ exec(node, examples/indexof.js) }}
```

### filter

The `filter` method creates a new array with all elements that pass the test implemented by the provided function.

Here is an example using `filter`:

```javascript
{{ examples/filter.js }}
```

And the output is:

```
{{ exec(node, examples/filter.js) }}
```

### forEach

The `forEach` method executes a provided function once per array element. Thus we can _iterate_ over an Array without needing an `index` variable (like we had with the classic for loop of `for(var i=0; i<arr.length; i++)`.

Here is an example using `forEach`:

```javascript
{{ examples/foreach.js }}
```

And the output is:

```
{{ exec(node, examples/foreach.js) }}
```

### map

The `map` method creates a new array with the results of calling a provided function on every element in the array. You can think of `map` as _mapping_ the elements of one Array to the elements of a new Array using a mapping function that you provide.

---

Remember `domain` and `range` from Algegra? This is basically what the `map` function does.

![Domain and Range](images/domain-range-codomain.gif
)

---

Here is an example using `map`:

```javascript
{{ examples/map.js }}
```

And the output is:

```
{{ exec(node, examples/map.js) }}
```

### reduce

The `reduce` method applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value. You can think of `reduce` as reducing an Array to a single value using the function you provide.

Here is an example of using `reduce`:

```javascript
{{ examples/reduce.js }}
```

And the output is:

```
{{ exec(node, examples/reduce.js) }}
```

## Summary

Each of these methods provides an easy way to iterate over an Array doing a:

* search - `indexOf`
* filter - `filter`
* basic iteration - `forEach`
* transformation - `map`
* reduction - `reduce`

Note that none of these methods alter (mutate) the original Array. Rather they each return a value or Array of values. The approach of returning new values and not altering the original Array is a part of what is known as _Functional Programming_.

## Resources

* [5 Array Methods That You Should Use Today](http://colintoh.com/blog/5-array-methods-that-you-should-use-today)
