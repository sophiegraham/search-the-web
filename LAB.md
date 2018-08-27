Search The Web
===

Use `fetch` and VueJS to read data from a third-party API.

## Code Kata

Complete [today's Kata](https://www.codewars.com/kata/nice-array)

## Choose an API

This lab will have you evaluate an API and read the docs to deduce what is required to display data. You will
likely need to sign up for an api key.
(Remember, be skeptical of API until you test it out!)

_Possible_ API choices:

* https://service.civicpdx.org/
* https://newsapi.org/
* https://developers.google.com/books/
* https://www.goodreads.com/api
* https://pokeapi.co/api/v2/

API Requirements:

* Has to support CORS (search from AJAX call) verify [here](test-cors.org) (but sometimes this site is flakey, try a 
call from then browser console or your Vue app.)
* Supports searching or some type of parameter
* You most likely will need to sign up for an API "key"

## App Requirements

### Part 1

Use a default `GET` (or hard-code a query parameter) and display data.

#### Router

Add in a router and create a `path` for your search that loads your `List` component.

```
App
  |
  +- router-view
  
List (use domain name)
```

#### Model

1. Encapsulate API call to service in a module
1. Import module to (`List`) component. Use the `created` life-cycle method to initiate the search.
1. Set the data when returned from the callback
1. Test by display {{ list.length }} in your `List` component

#### View

```
App
  |
  +- router-view
  
List (use domain name)
     |
     +- [Item] (use domain name)
```

1. Display for `List` component of results and a component for each list item


### Part 2


```
App
  |
  +- router-view
  
List (use domain name)
  |
  +- Search
  |
  +- [Item] (use domain name)
```

Instead of data search functionality being initiated by component loading, use a method that
runs the search in response to a search form. You will need to add a parameter that takes the search term. 
Pass the method as a callback prop to the child `Search` component.

## Bonus

### Detail View

```
App
  |
  +- router-view
  
List (use domain name)
  |
  +- Search
  |
  +- [Item] (use domain name)
  
Detail (use domain name)
```

Add routes to your app, and add a detail view! When the user clicks on an item, go to `/items/:id` and fetch additional information about the clicked item.

### Second Search

Add another searchable resource!

```
App
  |
  +- router-view
  
List (use domain name)
  |
  +- Search
  |
  +- [Item] (use domain name)
  
OtherList (use domain name)
  |
  +- OtherSearch
  |
  +- [OtherItem] (use domain name)
```

## Rubric

* Expose API via service module (`fetch`, async callback, etc.) **3pts**
* Display Results **4pts**
* Implement Search **3pts**
