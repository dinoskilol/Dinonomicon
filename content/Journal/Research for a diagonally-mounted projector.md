---
title: Research for a diagonally-mounted projector
draft: false
date: 2025-12-30
publish: true
tags:
- projector
---

> [!info]+ Scenario description
> A projector is required for a gate corridor, which will be used to project symbols like arrows or brand images/logos on the floor. As it will be held on the ceiling and reflect diagonally, active 24/7 and will have to be bright enough to project clearly during daylight, there is a lot of specific criteria there is to be kept in mind.
![[ProjectorScenario.svg]]

The projector would be mounted on the ceiling at a height of roughly ten meters, projecting diagonally onto the floor. It would run continuously, day and night, and still had to produce a clear, readable image even in broad daylight.

I started by identifying the non negotiable requirements. The throw ratio of around ten meters immediately ruled out many consumer grade devices. In addition, the angled projection meant that image alignment would be an issue if the projector did not support proper optical correction. Since the device would be mounted high above the floor, remote control was mandatory, both for setup and for ongoing adjustments.

Brightness was one of the most important factors, so I focused first on understanding ANSI lumens in real world conditions. I researched how ambient light affects projected images and found that typical recommendations for indoor projectors are completely insufficient in environments with strong daylight. Based on multiple sources, I concluded that for broad daylight scenarios, especially when projecting onto the floor instead of a dedicated screen, a brightness range of roughly six thousand to ten thousand ANSI lumens is required to maintain clarity and contrast.

Next, I looked into different [light source technologies](Projector-light-sources). Traditional lamp based projectors were quickly ruled out due to their shorter lifespan and higher maintenance needs. [LED](Projector-light-sources#LED) options did not offer enough brightness for this use case. [Laser based](Projector-light-sources#Laser) projectors stood out as the most suitable choice because they offer high brightness, consistent color quality, and significantly longer lifetimes.

After that, I revisited projection geometry. [Keystone correction](/Keystone-correction) initially seemed relevant, but further research showed that it is a digital correction method that reduces image quality. Since image sharpness was important and the budget already implied professional grade hardware, I focused instead on [lens shift](Lens-shift-function). Lens shift allows optical adjustment without image loss and is therefore far superior for permanent installations. Given the mounting height, motorised lens shift was required, both vertically and horizontally, to allow precise alignment without physical access.

Throw ratio and [throw correction](Throw-correction) were less of a concern once I narrowed the search to high end projectors, as these features are typically included in this category anyway.

After filtering all available options using these criteria, the [Optoma ZU820T](https://www.optoma.de/product/zu820t) emerged as the best fit. It provides WUXGA resolution, sufficient brightness for daylight projection, a laser light source, motorised lens shift, and remote control functionality. It meets all functional and environmental requirements of the corridor scenario.

To complete the setup, I also identified a suitable ceiling mount, the [Optoma OCMPROSR70 Pro AV](https://www.optoma.de/product/ocmprosr70) ceiling mount in the short variant, which supports secure overhead installation.

Overall, the research process reinforced how important it is to fully understand the physical environment and usage conditions before selecting hardware. Brightness ratings, correction features, and light source technology all mattered far more than brand or headline specifications, and approaching the task methodically made the final decision straightforward.
