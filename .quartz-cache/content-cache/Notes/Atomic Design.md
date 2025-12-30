---
title: Atomic design
draft: false
date: 2025-12-23
publish: true
tags:
- ui design
---

Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner.

The five stages of atomic design are:

1. Atoms
2. Molecules
3. Organisms
4. Templates
5. Pages

**Atomic design is not a linear process**, but rather a mental model to help us think of our user interfaces as both a cohesive whole and a collection of parts _at the same time_. Each of the five stages plays a key role in the hierarchy of our interface design systems.

# Atoms

If atoms are the basic building blocks of matter, then the atoms of our interfaces serve as the foundational building blocks that comprise all our user interfaces.
These atoms include basic HTML elements like form labels, inputs, buttons, and others that can't be broken down any further without ceasing to be functional.

# Molecules

In interfaces, molecules are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule.

# Organisms

Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface.

This header organism is composed of a search form molecule, logo atom, and primary navigation molecule.

# Templates

Templates are page-level objects that place components into a layout and articulate the design's underlying content structure. To build on our previous example, we can take the header organism and apply it to a homepage template.

Another important characteristic of templates is that they focus on the page's underlying content structure rather than the page's final content. Design systems must account for the dynamic nature of content, so it's very helpful to articulate important properties of components like image sizes and character lengths for headings and text passages.

# Pages

Pages are specific instances of templates that show what a UI looks like with real representative content in place. Building on our previous example, we can take the homepage template and pour representative text, images, and media into the template to show real content in action.

The page stage replaces placeholder content with real representative content to bring the design system to life.

In addition to demonstrating the final interface as your users will see it, pages are essential for testing the effectiveness of the underlying design system. It is at the page stage that we're able to take a look at how all those patterns hold up when real content is applied to the design system.

Pages also provide a place to articulate variations in templates, which is crucial for establishing robust and reliant design systems.

# TL;DR:

- **Atoms** are UI elements that can't be broken down any further and serve as the elemental building blocks of an interface.
- **Molecules** are collections of atoms that form relatively simple UI components.
- **Organisms** are relatively complex components that form discrete sections of an interface.
- **Templates** place components within a layout and demonstrate the design's underlying content structure.
- **Pages** apply real content to templates and articulate variations to demonstrate the final UI and test the resilience of the design system.