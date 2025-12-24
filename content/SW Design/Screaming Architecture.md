---
title: Screaming Architecture
draft: false
date: 2025-12-22
publish: true
tags:
- software development
- design
- architecture
---

Screaming Architecture is a concept introduced by renowned software developer and thought leader Robert C. Martin, often referred to as "Uncle Bob".

As the name suggests, it is a principle in software design focusing on making the features of your system the primary concern of your architecture. Your software architecture should "scream" its intent and purpose.

# Why "Screaming" Architecture?

The idea is that the structure of your codebase should immediately convey its business purpose. This goes against traditional architectures, as they emphasize the technical aspect of it. Uncle Bob illustrated this with an analogy: if you walk up to a building and see its architecture, you can often tell whether it is a library, school or office instantly. The same should apply to your architecture.

# Business & Domain Logic

In many projects, the file structures can be like this:

```
controllers/
services/
repositories/
models/
```

This structure describes technical roles and tells you that the system uses MVC (Model-View-Controller), but it doesn't tell you how it handles financial data, user management or content creation.

Here is an example of a structure that "screams" its intent using domain-driven principles:

```
/src
    /accounting
        Ledger.cs
        Transaction.cs
        Account.cs
        TaxService.cs
    /sales
        Order.cs
        Invoice.cs
        Customer.cs
        DiscountPolicy.cs
```

or:

```
/src
    /orders
        OrderController.cs
        OrderService.cs
        OrderRepository.cs
        Order.cs
        OrderItem.cs
    /inventory
        InventoryController.cs
        InventoryService.cs
        InventoryRepository.cs
        InventoryItem.cs
```

