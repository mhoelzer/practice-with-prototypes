# Activity: Practice with Prototypes

As soon as we started writing React, you were exposed to this funky `class`
keyword, which has been paired with another new `extends` keyword. These are
__not__ exclusive to React, and were instead introduced to JavaScript via ES6.
They are essentially [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)
on top of prototypes, which you learned about way back when we talked about
[object-oriented javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS).

For this activity, we wanted to formally introduce you to the class-based syntax
and have you practice by converting between prototypes and classes.


## Prerequisite Knowledge

You'll need to understand a few concepts before you can understand the activity
completely (though you might be able to complete it by fumbling around). Below,
we give a whirl-wind tour of some underlying concepts that will deepen your
understanding of what's happening as you work through the activity.

### Inheritence

The idea behind inheritance is that it should be possible to define new objects
that inherit properties of other so-called parent objects. For instance, you
might define a `Desert` object that describes something that is `sweet`, and can
be configured with a `flavor`. You might then want to make so-called child
objects that, whilst still being desserts, have their own qualities, such as a
`Pastry` or `Custard`.

We've listed some resources below that dig a little deeper into the topic of
prototypes and inheritance. We recommend that rather than pausing completely to
read or watch the resources, you attempt the activity until you reach unfamiliar
territory, then consume resources until the territory becomes familiar. It is
important to write code when learning new concepts, and we find that this
approach allows you to apply what you've learned immediately, rather than having
to retain a ton of content and try to apply them all from memory.

- read: [Inheritance in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
- read [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- watch: [JavaScript Prototypes and Inheritance](https://app.pluralsight.com/player?course=javascript-objects-prototypes&author=jim-cooper&name=javascript-objects-prototypes-m3&clip=0&mode=live)

### Guided Practice

For this first one, we've walked you through step-by-step and explained not only
what each line of code does, but also how to convert it to an ES6 class. We
invite you to type out each step in an editor or on [repl.it](https://repl.it/languages/javascript) to solidify your
understanding. Later, we'll have you do some conversions on your own.

### Autonomous Practice: Conversion

It's time to get your hands dirty. Please convert the next three objects into
classes, including inherited methods and calls to the parent's constructor.

TODO: Write three prototypes to be converted: A parent, and 2 children.


### Autonomous Practice: Prototype from Scratch

Next, we want you to write a constructor function for a parent and child class
that meets these criteria:
- TODO: write description of prototype that they are supposed to write? Perhaps
    make it fill-in-the-blank like this:

    ```javascript
    function Dessert(){

    }

    Dessert.prototype = undefined; // FIX ME 

    function Pastry() {
        Desert.call(/* FIX ME */)
    }
    ```

Not sure if the above is too hands-holdy. It's an activity, so I'm not super
worried, but I could be swayed either way.

### Autonomous Practice: Class from Scratch
Finally, convert the prototype you wrote above into a class with identical
behavior. 

TODO: Should we add an empty javascript file to encourage them to write runnable
code? I like how I can intersperse prose with code in markdown, so I don't want
to write all these comments in a js comment, but I also don't want them updating
the readme.
