---
layout: post
title: "React, Redux, and Redux-Form"
subtitle: "a review of Redux-Form and how it improves the React+Redux productivity"
date: 2016-06-27
summary: "I played with Redux-Form and loved it!"
author: Ron
---

## {{ page.title }}

## _{{ page.subtitle }}_

{{ page.summary }}

### Overview

I played with Redux-Form on the weekend, building upon my own past experience with React and Redux

- React: [https://facebook.github.io/react/index.html](https://facebook.github.io/react/index.html)

- Redux: [http://redux.js.org/](http://redux.js.org/)

- Redux-Form: [http://redux-form.com/](http://redux-form.com/)

This report is primarily focused on Redux-Form, so you might want to familiarise yourself with React and Redux first. I found Dan Abramov's courses on EggHead.io to be particularly illuminating:

- [https://egghead.io/courses/getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux)

- [https://egghead.io/courses/building-react-applications-with-idiomatic-redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)

Redux-Form has escape-hatches to allow integration with Immutable.js, but it works with vanilla JavaScript data structures by default. Rather than muck about with that integration, I didn’t bother with Immutable.js for this experiment.

Note that I do usually prefer to use Immutable.js, and highly recommend that you go check it out:

- Immutable.js: [https://facebook.github.io/immutable-js/](https://facebook.github.io/immutable-js/)


### What life is like without Redux-Form?

For each form, the following must be done:

1. Pick a unique name for the form

2. Plan where the data for the form (and any validation results) should rest in the app state

3. Create a React component for the form to get started

For each form field, the following must be done:

1. Pick a unique name for the field

2. Plan where the data for the field (and any validation results) should rest in the app state

3. Define Redux actions and/or action creators for this new part of the app state

    - You might just have a “set” action

    - You could have a partial “update” action

    - You can have as many actions for this one new field as appropriate to the app

4. Define Redux reducers for this part of the app state, that react to the new actions, add to store

5. Define Redux selector(s) to “get” the value(s) of this part of the app state

    - Rather than reading directly from the state, this layer of abstraction allows later changes to the shape of the state without having to refactor all the components that depend upon it

    - Useful if you’ll be wiring up computed values, a bit like spreadsheet formulae

6. Update your form’s React component with a new input field, as appropriate

    - This is presentation stuff, so this could be one huge time-consuming step if you want

7. Map the Redux selector(s) and actions (or action creators) to the new input field

    - This establishes the unidirectional flow from view -> action -> dispatch -> reducer -> store -> selector -> view

Now you have an input field in a React component shown to the user, with state managed by Redux


### With Redux-Form?

Once per project / app, the following must be done:

1. Add the Redux-Form integration reducer to your Redux store

For each form, the following must be done:

1. Pick a unique name for the form

2. Create a React component for the form to get started, and add the Redux-Form integration

For each form field, the following must be done:

1. Pick a unique name for the field

2. Update the Redux-Form integration for your form’s React component with the name of the field, and any other options / validators as appropriate

3. Update your form’s React component with a new input field, as appropriate

    - This is presentation stuff, so this could be one huge time-consuming step if you want

4. (optional) Define Redux selector(s) to “get” the value of the new field from the app state

    - Only necessary if you’ll be wiring up computed values, a bit like spreadsheet formulae

So now you have all the functional programming benefits of using Redux to manage app state, but now you can wire up new form fields in a way that lets you focus on the presentation part instead of the Redux part


### Redux-Form downsides?

- Very React-specific, in fact, it might not even work with React Native (??)

- Definitely doesn’t work with Angular 1 or 2, even though Redux by itself can be used with them

- A compelling alternative to Redux is MobX, which Redux-Form understandably doesn’t work with

    - There’s a MobX-Form project, but it seems pretty new / immature


### What else is good about Redux-Form?

Redux-Form has the following additional features:

- Deep forms: forms within forms

- Multi-record forms

- Pages: use multiple views for the same record data, showing a subset of fields at a time

- Dynamic forms: define the set of fields you need at runtime, reacting to runtime context

- It doesn’t care about where the record data comes from or where it is destined to go

- Redux-Form only concerns itself with the most tedious and repetitive parts

    - Avoids anything that is usually app-specific for the most part

    - Avoids the specifics of form / field presentation

        - Which means usage with Material UI components is definitely feasible

- Redux-Form also has occasional input from React and Redux maintainers (i.e. Facebook devs)

    - I’m pretty sure it’s not a Facebook project, or actually used at Facebook


### Closing Thoughts

- Don’t start a React + Redux project without Redux-Form

- It’s a massive time-saver for management of user input fields


## Social Posts

I've cross-posted this on the following social networks, where your comments are welcome:

- [Twitter](https://twitter.com/jokeyrhyme/status/747333795511033860)

- [Google+](https://plus.google.com/+RonWaldon/posts/cpZeZTEtp1Z)

- [LinkedIn](https://www.linkedin.com/hp/update/6153099410109644800)
