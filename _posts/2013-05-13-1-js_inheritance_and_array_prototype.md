---
title: Inheritance and the Array Prototype
date: 2013-05-13 00:00:00 Z
permalink: "/blog/2013/05/13/1/js_inheritance_and_array_prototype.html"
layout: post
subtitle: working around weirdness in JavaScript
summary: A quick look at some issues I was having in Node.JS
author: Ron
---

## {{ page.title }}

## _{{ page.subtitle }}_

### A note about compatibility

Caution: the examples in this post all assume ECMAScript 5 compliance. You can
check your environments compliance by running the Test262 suite of unit tests
found [here](http://test262.ecmascript.org/).

You may use something like the [ES5 Shim](https://github.com/kriskowal/es5-shim)
to implement enough ES5 features to get by (with these examples, at least).

### The scenario

I wanted to build a JavaScript constructor to give me objects that were just
like the standard Array object in every way. My project had use for Array-like
objects, and this would allow me to take advantage of built-in functionality
whilst being able to add domain-specific methods on top.

### Research

I came across a terrific article:
[How ECMAScript 5 still does not allow to subclass an array](http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/)

It was written back in 2010, which is quite a long time ago. Still, the advice
was sound and it at least gave me some criteria to evaluate different ways of
inheriting from the Array prototype.

#### Criteria

1. works in Node.JS (in my current project)
2. does not result in modifying the global Array prototype
3. objects begot by the new constructor should identify as Array-like
4. preserve dynamic relationship between length and highest index

### Implementations

I highly recommend you take a look at the article I found, but I'll briefly
mention the approaches that I borrowed from it.

In the below examples, I define the `last` method in order to show (and later
confirm) that my new objects can do more than their prototype (which is the
whole point).

All of these implementations uphold criteria 1, 2, and 4, according to
[my testing](https://github.com/jokeyrhyme/js-sub-array-tests).

#### Naive

This approach just crafts a new constructor, setting the prototype of freshly
minted objects to the Array prototype.

    var SubArray = function () {
      this.push.apply(this, arguments);
      return this;
    };
    SubArray.prototype = Object.create(Array.prototype);

    SubArray.prototype.last = function () {
      return this.length ? this[this.length - 1] : undefined;
    };


The main downside is that the resulting object is identifiable as an Object,
not an Array. I think I like this approach the most, as it sticks with current
best-practice for prototypal-inheritance.

This is only inappropriate if it's extremely important to you that these objects
look just like Arrays.

Important: see the update at the bottom.

#### Stack and Make-Sub-Array

I won't detail them here, but these approaches explicitly preserve the
relationship between the length and the highest index. These are pretty subtle
and crafty, and are probably still necessary in older browsers.

Important: see the update at the bottom.

#### Direct Wrapper

This is a bit like the decorator pattern. Essentially, the new constructor
doesn't return the default object (the new instance), rather it returns a new
Array.

These wrapper approaches are the only ones that pass criteria 3, producing
objects that are indistinguishable from natural Arrays.

    function SubArray() {
      var arr, args;
      args = Array.prototype.slice.apply(arguments);
      arr = [];
      arr.push.apply(arr, args);

      arr.last = function () {
        return this.length ? this[this.length - 1] : undefined;
      };

      return arr;
    }


This constructor creates the `last` method (and any other extensions you may
desire) each and every time its called. Each instance of `SubArray` winds up
with its own private copy of these methods.

This will use a bit more memory than other approaches, especially if you are
creating many of these objects. If you're only creating a few (or if memory is
not a problem) then this is a pretty decent solution.

#### Wrapper with forced Prototype

This is another approach that I won't delve into, other than to say that it
uses the non-standard `__proto__` property. It's otherwise very similar to the
Direct Wrapper approach.

As this manipulates the prototype chain (in a very naughty way), this has the
benefit of using less memory than the direct wrapper approach. Multiple objects
will share the same additional methods.

However, the naughtiness factor pretty much rules this out for me. I'm very
seldom naughty.

### Conclusion

In short, use the standard (naive) approach because its elegant, succinct and
so standard its boring.

However, if you can stand the inefficiency and need perfect Array detection,
then your only game in town is the direct wrapper approach.

Do check out that article, and all code can be found [on GitHub](https://github.com/jokeyrhyme/js-sub-array-tests).

Let me know if I've missed something. I do plan on running these same tests in
older browsers to see if they hold up.

### Update: 2013-05-15

I added a few more tests after re-reading Kangax's article, and I found some
cases where the naive and stack approaches fail. I've updated the results on my
test repository, but here they are:

What's supposed to happen (and this happens when you use a real Array) is that:

- if you do something like `subArray[4] = 'abc'` then `subArray.length === 5`
automatically

- if you do something like `subArray.length === 2` then elements at index 2 and
 higher are dropped and the highest index becomes 1

The only approach that preserves all of the behaviours is the direct wrapper,
which does have some caveats but it does tick all the boxes.
