---
title: Cloudflare Workers
pageTitle: Edge - Cloudflare Workers - SUI
description: Using Cloudflare Workers in order to rewrite contents of HTML response based on grid carbon intensity value in visitor's region.
---

In addition to headless client-side solution that is [SUI Headless for React](/docs/sui-headless-for-the-web#react-library), there are other approaches to achieving carbon awareness in UIs. One of them was proposed by [Fershad Irani](https://fershad.com/carbon-aware-site/). Fershad has leveraged powers of global edge network of Cloudflare Workers in order to rewrite contents of HTML response based on grid carbon intensity value in visitor's region.

This solution was inspired by the [Branch Magazine](https://branch.climateaction.tech) which initially inspired SUI as well. The difference is that in this case, graceful degradation is happening in the backend. This variety of approaches to building carbon aware UIs communicates that concept is not tied to any specific software architecture. As long as developers are in full control of their application, it is possible to incorporate carbon awareness.