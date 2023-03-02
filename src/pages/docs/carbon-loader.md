---
title: Carbon Loader
description: About Carbon Loader primitive.
---

Based on technical implementation, carbon aware UI may not work without access to the precise user location. Until the user location and its grid carbon intensity is known, the Carbon Loader lets the user know that localization is happening. Fallback display mode shall be provided when a user decides to skip the localization process. In ideal case scenario, the Carbon Loader won't be displayed to the user at all to prevent rise of site's bounce rate.

Based on our UX analysis, we suggest to avoid using a carbon loader until it's really necessary. When user visits the website, it should be usable as soon as possible. Endless stream of popups at majority of today's websites is a great example of a bad UX practice. SUI recommends to localize user in the background based on IP address. For better precision, localization should be implemented client-side, worsening the UX experience.