---
title: SUI headless for the web
description: Headless library is an abstraction for implementing sustainable UIs.
---

As mentioned in the previous page, SUI has started as a [React headless library](https://github.com/sustainableui/sui-headless-react). The library automatically selects [Carbon Component](/docs/carbon-component) variant from the 3 components that developer provides. This selection is made based on grid carbon intensity in area where the user is located at the time of interaction with the app. At the same time, library provides an interface for implementing a switch that enables [user control](/docs/green-mode-design#user-control).

Headless library is an abstraction for implementing sustainable UIs. It is a universal interface that lives below the visual components that users interact with. Headless libraries do not do anything on their own, thus they require components in order to do something.

## React library

{% callout title="Under development" %}
React library has not been made production-ready yet. Right now, we are working on achieving this status. Latest progress can be observed in the [GitHub repository](https://github.com/sustainableui/sui-headless-react).
{% /callout %}

SUI headless library for React is the first SUI open-source tool. That is due to popularity of the React library among web developers and it's widespread use. This way, SUI can be adopted by the most visited websites in the world.

## Further work

SUI is a very generic concept and the aim is to support all popular libraries, frameworks and metaframeworks on the web in the near future. Furthermore, SUI could be applied even beyond the web since user-facing applications are being built on desktops and mobiles as well.