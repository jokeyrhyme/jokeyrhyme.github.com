---
layout: post
title: "How-To: Disable OS X's Touch Delay"
subtitle: for impatient track-pad users like me
date: 2014-03-06
nth: 1
permalink: /blog/2014/03/06/1/disable-os-x-touch-delay.html
summary: "Apple's default track-pad settings drive me up the wall. Here's how to fix them. Bandwidth-warning: this post has 1.4MB of screenshots."
author: Ron
---

## {{ page.title }}

## _{{ page.subtitle }}_

{{ page.summary }}

Web developers have been talking about [disabling the 300ms click delay](http://ftlabs.github.io/fastclick/)
behaviour on devices with touch screens for a while now. In fact, [Chrome and
other browsers have recently started eliminating the delay](http://updates.html5rocks.com/2013/12/300ms-tap-delay-gone-away)
for web sites that don't need to react to double-taps.

This isn't just a web page or smartphone problem, however. Many desktop
(or laptop) operating systems implement drag-and-drop with similar touch
delays.

By default, you can tap and then immediately tap-and-hold to trigger
drag-and-drop mode (simulating holding your finger down on a mouse button).

### OS X's solution

Apple's OS X has offered excellent track-pad gestures for sometime now, so we
have a superior implementation of drag-and-drop within our grasp!

1. open System Preferences, found in the Apple menu in the top-left corner

    ![OS X 10.9 Mavericks: System Preferences](//lh5.googleusercontent.com/-CPBNSKWxvo8/UxeHYKdUOlI/AAAAAAAAJNk/4doaeDWJ7k4/w781-h596-no/system-preferences.png)

2. open Trackpad, found on the second row, next to Mouse

    ![OS X 10.9 Mavericks: System Preferences: Accessibility: Mouse & Trackpad: Trackpad Options](//lh4.googleusercontent.com/-N0OJeLXxh9Y/UxeHWJPkDGI/AAAAAAAAJNc/x59PCeUrHTY/w874-h596-no/accessibility-trackpad.png)

3. **enable the "Three finger drag" checkbox**

4. go back to the main System Preferences screen, by clicking "Show All"

5. open Accessibility, found on the fourth row, on the right

6. in the list on the left, click "Mouse & Trackpad"

7. click "Trackpad Options..."

    ![OS X 10.9 Mavericks: System Preferences: Trackpad: Point & Click](https://lh3.googleusercontent.com/-28QKLuxXk_Y/UxeHZa-bBvI/AAAAAAAAJNs/5ShIqNgG1jU/w875-h596-no/trackpad-touch.png)

8. **disable the "Enable dragging" checkbox**

### Why do I do this?

With these settings, every single-finger-tap on my trackpad is interpretted as
a click. Tapping twice is unambiguously a double-click, with no need to wait
a moment to see if I am actually attempting a drag-and-drop manoeuvre.

When I do want to drag something, I explicitly use three fingers to do so.
There is no confusion or miscommunication. I know what I want to do, and OS X
knows exactly what I'm trying to achieve.

Further, this is actually an option in OS X. This tells me that at least a few
engineers at Apple feel as strongly as I do about unambigious touch input.

### Why isn't this a good idea?

This is not the default behaviour for any version of OS X (at least as far as
10.9 Mavericks. This means that each time you encounter the default settings,
you may be frustrated and accidentally drag things all over the place.

However, this is an opportunity to direct the uneducated masses to this post
and convert them. :)

This also is not an options on operating systems where gestures are less mature
(e.g. Linux, Windows, etc). That means you'll still need to switch back to the
weird am-I-double-clicking-or-am-I-dragging dance when using those systems.

### What could I do instead?

Buy a mouse. Mice already offer a way to unambiguously perform the
drag-and-drop manoeuvre, so there's no weird touch-to-click detection
necessary.

[Razer's Ouroboros](http://www.razerzone.com/gaming-mice/razer-ouroboros) is my
next mouse, by the way.

### conclusion

So, join my cult, and switch your drag-and-drop-via-touch settings today!
