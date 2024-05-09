# Typescript

## What is typescript?
- Typescript is a superset to javascript that simply means that it extends javascript.
- It builds up on javascript.
- Typescript does not run in the browser. Instead, it has to be compiled to javascript.
- It helps to avoid unwanted errors.
- It adds strict typing.


## Core Types
- `Number`
- `String`
- `Boolean`
- `Object`
- `Array`
- `Any`

### Additional Types
- `Request`: Used for reading a request.
- `Response`: Used for sending a response.

## Union Type
When we want to concatenate two or more data types.
```
function add(num1: Number | String, num2: Number | String){
  ...
}
```


## Generics
A generic is simply a type that interacts with another type.
_Example:_ Array
Array is a data type on its own. It is the list of data, that's the core type. 
But it interacts with another type of data inside of the array.

