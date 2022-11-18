# Εισαγωγή στη γλώσσα

## Πως γράφουμε κώδικα

* Το πρόγραμμα είναι μια σειρά από δηλώσεις (statements), που εκτελούνται η μία μετά από την άλλη.
* Οι δηλώσεις χωρίζονται με ερωτηματικό (`;`) ή/και με αλλαγή γραμμής. - Κάνουμε και τα δύο.
* Μπορούμε να χρησιμοποιούμε όσα κενά θέλουμε.
* Τα σχόλια (comments) είναι επεξηγήσεις για όποιον διαβάζει τον κώδικα και δεν εκτελούνται.
* Σχόλια μιας γραμμής ξεκινάνε με `//`
* Σχόλια πολλών γραμμών μπαίνουν ανάμεσα σε `/*` και `*/`

```js
    /*
    Πώς γράφουμε JavaScript
    */
    let a;
    let b;
    let c;        // Δηλώνουμε τρείς μεταβλητές
    a = 5;        // Δίνουμε στο a την τιμή 5
    b = 6;        // Δίνουμε στο b την τιμή 6
    c = a + b;    // Δίνουμε στο c την τιμή του αθροίσματος a και b
    alert(c);     // Δείχνουμε το c σε μήνυμα
```

```js
    /*
    Πώς αποφεύγουμε να γράφουμε JavaScript
    */
    let a;
    let b;let c;a=5;
    b
    =
    6;
    c          =               a      +                b;alert(c);
``` 

## Τι μπορεί να είναι ένα statement

```js
    /*
    Παραδείγματα statements
    */
    1;
    'Hello';
    1 + 1;
    let name = 'John';
    alert('Hello ' + name);
```

## Βασικά στοιχεία που μπορεί να υπάρχουν σε ένα statement

* Τιμές (values), `1, 'John'`
* Τελεστές (operators) `+, -, =, ||, &&`
* Keywords `let, const, function, if, else`
* Μεταβλητές

## Μεταβλητές

Οι μεταβλητές (variables) είναι ονόματα που δίνουμε εμείς σε κάποιες τιμές. Ορίζονται με τρεις τρόπους `var`, `let`, `const`.

```js
    var a = 1;
    let b = 2;
    const c = 3;
    a = 4;
    b = 5;
    c = 6; // ERROR!!
```
Αποφεύγουμε να χρησιμοποιούμε `var`.
Το `let` μας επιτρέπει να αλλάξουμε την τιμή της μεταβλητής ή ακόμα και να την δηλώσουμε χωρίς αρχική τιμή.
Το `const` (constant) δηλώνεται εξ αρχής με μία τιμή και δε αλλάζει.

## Τύποι δεδομένων

### Number

* Ακαίραιοι
* Δεκαδικοί
* Άπειρο (Infinity)
* Λάθος σε πράξη, όχι αριθμός (NaN)

```js
    let a = 1;
    let b = 1.5;
    let c = 2 / 0;
    let d = 'Hello' / 2;
```

### String

Κείμενο ανάμεσα σε `' '` ή σε  `" "`.

```js
    let name = 'John';
    let surname = "Snow";
    let fullname = `${surname}, ${name}`;
    let text = "Try to show an alert with the string 'Hello World!' inside.";
```

### Boolean

Σωστο ή λάθος (true - false);

```js
    let right = 2 < 3;
    let wrong = 3 < 2;
```

### Null

Μία άγνωστη τιμή.

```js
    let age = null;
```

### Undefined

Χωρίς τιμή.

```js
    let age;

    // Μπορούμε να κάνουμε αυτό:
    age = undefined;
    // Αλλά προτιμούμε αυτό:
    age = null;
```

### Object

Μια συλλογή από δεδομένα.

```js
    const person = {
        firstName: 'John',
        lastName: 'Snow',
        getFullName() {
            return `${firstName} ${lastName}`;
        },
    };
```

### Array

Μία σειρά τιμών. Τυπικά είναι object.

```js
    const days = [
        'Δευτέρα',
        'Τρίτη',
        'Τετάρτη',
        'Πέμπτη',
        'Παρασκευή',
        'Σάββατο',
        'Κυριακή',
    ];

    const mix = ['Hello', 1, , true, { name: 'John'}, [1, 2, 3]];
```

### Function

Ένα κομμάτι κώδικα που του δίνουμε ένα όνομα για να το επαναχρησιμοποιούμε.
Όπως και το array, το function θεωρείται object.

```js
    function addOneToOne() {
        return 1 + 1;
    }

    function add(a, b) {
        return a + b;
    }

    add(1, 1);
```

## Type conversions

Πολλές φορές ο κώδικας που γράφουμε προκαλεί μια μετάτροπή του τύπου μιας μεταβλητής.
Αυτό μπορεί να είναι επιθυμητό ή να προκύψει από λάθος.

```js
    let one = 1;
    let two = '2';
    alert(one + two); // '12'
    alert(two - one); // 1
```

## Τελεστές - operators

### Μαθηματικά

```js
    2 + 3; // 5
    2 - 3; // -1
    2 * 3; // 6
    4 / 2; // 2
    5 % 2; // 1
    2 ** 4 // 16

    'a' + 'b'; // ab

    2 + 3 * 3; // 11
    (2 + 3) * 3; // 15

    let n = 2;
    n += 2; // n = 4
```

### Συγκρίσεις

```js
    2 > 1;  // true
    2 >= 2; // true
    2 < 1;  // false
    2 == 1; // false

    2 == '2'; // true
    2 === '2' // false

    '2' > 1;      // true
    1 == true;    // true
    0 == false;   // true
    '' == false;  // true 
    '' === false; // false
    0 === false;  // false
    
    null === undefined // false
    null == undefined  // true
```

### Logical Operators


```js
    // OR ||
    let right = true;
    let wrong = false;

    true || right  // true
    wrong || true  // true
    wrong || false // false

    false || 1    // 1
    '' || 'John'  // 'John'
```

```js
    // AND &&
    let right = true;
    let wrong = false;

    true && true   // true
    false && true  // false
    right && false // false

    true && 0      // 0
    true && 1      // 1
    1 && true      // true
```

```js
    // NOT !
    !true  // false
    !false // true
    !0     // true
    !''    // true

    !!0   // false
    !!1   // true
```

### What is true?

```js
    !!0            // false
    !!1            // true

    !!''          // false
    !!'something' // true

    !!null        // false
    !!undefined   // false
    !!NaN         // false

    !![]          // true!
 ```

### Strings to numbers
```js
    let three = '3';
    let realThree = parseInt(three, 10);

    let twoAndHalf = '2.5';
    let realTwoAndHalf = parseFloat(twoAndHalf);

```

## Βασική επικοινωνία με το χρήστη

### Alert

Δείχνουμε ένα μήνυμα στο χρήστη και περιμένουμε να πατήσει το OK.

```js
    alert("Hello");
```

### Prompt

Ζητάμε από το χρήστη να μας δώσει μία τιμή που μπορούμε να κρατήσουμε σε μια μεταβλητή.

```js
    const result = prompt('What is your name?', '...');
```

### Confirm

Ζητάμε από το χρήστη να μας δώσει μια boolean τιμή.

```js
    const result = confirm('Do you agree?');
```
https://github.com/Cuboctaedro/js-seminar-ex-02-user-interaction
