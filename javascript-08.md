# Destructuring assignment

Πως μπορούμε να "σπάσουμε" ένα array ή ένα object σε μεταβλητές:

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
    ];

    let [first, second, third] = fruits;
    console.log(first); // Apple
```

```js
    const user = {
        firstName: 'John',
        age: 30,
    };

    let { firstName, age } = user;

    console.log(firstName); // John
```
Αν στο object θέλουμε να δώσουμε άλλα ονόματα στις μεταβλητές:

```js
    const user = {
        firstName: 'John',
        age: 30,
    };

    let {
        firstName: username,
        age,
    } = user;

    console.log(username); // John
```
Αν θέλουμε μόνο κάποια στοιχεία:

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
    ];

    let [first, , third] = fruits;
    console.log(first); // Apple
```

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
    ];

    let [first, ...rest] = fruits;
    console.log(first); // Apple
    console.log(rest); // [ 'Orange', 'Pear' ]
```
```js
    const user = {
        firstName: 'John',
        lastName: 'Snow',
        age: 30,
    };

    let { firstName, lastName } = user;

    console.log(firstName); // John
    console.log(lastName); // Snow

    let { age, ...rest } = user;
    console.log(rest); // { firstName: 'John', lastName: 'Snow' }
```
