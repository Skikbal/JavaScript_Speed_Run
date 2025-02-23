# Introduction to javascript

JavaScript is a high-level, dynamic programming language primarily used for web development. Initially, it could only run inside browsers, but with the advancement of JavaScript engines, it can now be executed outside browsers as well.

## 📜 Evolution of JavaScript Execution

- Earlier, JavaScript was embedded in browsers, and there was no standalone software/exicution environment to run JavaScript.
- To write and test JavaScript code, it had to be executed in the browser console or included in an HTML file using a script tag.
- Nowadays, JavaScript engines have been extracted from browsers, with the most well-known being the V8 engine. It was originally part of chrome but was later used indipendently.
- ### V8 Engine

  - written in C++ and Backed by google.
  - it compiles javscript to machine code using JIT(just in time compiler) making it fast and high-performing.
  - V8 is open-source and powers modern JavaScript applications.

## 🌍 The Rise of Node.js
### What is Node.js?
- Node.js is a JavaScript runtime environment built on the V8 engine.
- it allowing JavaScript to be executed outside the browser enabling server-side development. 
- it extends js features like file system access,networking and event driven architecture.
- With Node.js, JavaScript has become a standalone exicution environment, enabling backend development.
- Node.js doesnot interprets JavaScript,The V8 engine inside the node js insted of interpreting the javscript code it compile the code in to machine code using JIT just before exicution which makes it much faster than interpreted language..
