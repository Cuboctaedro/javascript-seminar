# Functions (συναρτήσεις)

Μία συνάρτηση μας δίνει τη δυνατότητα να δώσουμε όνομα σε ένα block κώδικα και να το επαναχρησιμοποιούμε όπου χρειάζεται.

Υπάρχουν διάφοροι τρόποι να ορίσουμε μία συνάρτηση, ο κλασσικός είναι:

```js
    function name(parameter1, parameter2, ... parameterN) {
        // body
    }
```
Χρησιμοποιούμε το keyword `function`, μετά δηλώνουμε το όνομα (name) που θα δώσουμε στη συνάρτηση, μετά μέσα στις παρενθέσεις έχουμε μία προαιρετική λίστα από παραμέτρους που θα χρησιμοποιήσουμε (οι παρενθέσεις είναι υποχρεωτικές) και τέλος ανάμεσα σε άγκιστρα το block του κώδικα.

```js
    function addTwo(number) {
        console.log(number + 2);
    }

    addTwo(3);
    // 5

    addTwo(4);
    // 6
```

## Variable scope

Οι συναρτήσεις λειτουργούν όπως κάθε block κώδικα: 
* Μπορούν να 'δουν' τις μεταβλητές που έχουν οριστεί έξω από αυτές (global).
* Μπορούν να μεταβάλλουν την τιμή των global variables.
* Μπορούν να ορίσουν δικές τους μεταβλητές που δεν είναι ορατές στον υπόλοιπο κώδικα.

```js
    let greeting = 'Hello';
    const ending = '!';

    function greet(name) {
        const ending = '!!!';
        console.log(`${greeting} ${name}${ending}`);
        greeting = 'Goodbye';
        console.log(`${greeting} ${name}${ending}`);
    }

    greet('John');
    // 'Hello John!!!'
    // 'Goodbye John!!!'
```

## Παράμετροι

Οι παράμετροι λειτουργούν σαν local variables, μπορούμε να τους αλλάξουμε την τιμή.

```js
    function multiply(number1, number2) {
        console.log( number1 * number2);
    }

    multiply(4, 5);
    // 20

    function multiplyDoubles(number1, number2) {
        number1 = number1 + 2;
        number2 = number2 + 2;
        console.log( number1 * number2);
    }

    multiplyDoubles(4, 5);
    // 80

```

Μπορούμε να έχουμε δώσει μία προκαθορισμένη (default) τιμή σε κάποιες παραμέτρους:

```js
    function multiplyOrDouble(number1, number2 = 2) {
        console.log( number1 * number2);
    }

    multiplyOrDouble(3, 4);
    // 12

    multiplyOrDouble(3);
    // 6

    multiplyOrDouble(3, 4, 5);
    // 12
```

Το function εκτελείται όσες παραμέτρους και αν του περάσουμε.

```js
    function multiplyOrDouble(number1, number2) {
        console.log( number1 * number2);
    }

    multiplyOrDouble(3, 4);
    // 12

    multiplyOrDouble(3);
    // NaN

    multiplyOrDouble(3, 4, 5);
    // 12
```

Οπότε μπορούμε να δώσουμε default values και μέσα στο function:

```js
    function multiplyOrDouble(number1, number2) {
        number2 = number2 ?? 2;
        console.log( number1 * number2);
    }

    multiplyOrDouble(3, 4);
    // 12

    multiplyOrDouble(3);
    // 6

    multiplyOrDouble(3, 4, 5);
    // 12
```

## Return vs Side effects

Ένα function μπορεί κατά την εκτέλεση του να μας δίνει μία τιμή που μπορούμε να χρησιμοποιήσουμε ή να κρατήσουμε σε μεταβλητή.

```js
    function multiply(number1, number2) {
        return number1 * number2;
    }

    const result = multiply(4, 5);
    
    // result is 20
```

Η εκτέλεση του κώδικα μέσα σε ένα function σταματάει μόλις εκτελεστεί το return.

Όπως είδαμε ένα function μπορεί και να μην επιστρέφει κάποια τιμή αλλά να εκτελεί μια ενέργεια (να έχει ένα side effect).

```js
    function multiply(number1, number2) {
        console.log(number1 * number2);
    }

    multiply(4, 5);
    // 20
    const result = multiply(4, 5);
    // result is undefined

```
Ή μπορεί να κάνει και τα δύο:

```js
    function multiply(number1, number2) {
        console.log(number1 * number2);
        return number1 * number2;
    }

    const result = multiply(4, 5);
    // 20
    // result is 20
```
Τα functions που μόνο επιστρέφουν μία τιμή χωρίς να έχουν side effects τα λέμε pure functions.

## Καλογραμμένες συναρτήσεις

* Μία συνάρτηση πρέπει να είναι κατα το δυνατόν σύντομη
* Μία συνάρτηση πρέπει να κάνει μία και μόνο δουλειά
* Από το προηγούμενο προκύπτει ότι μία συνάρτηση πρέπει ή να επιστρέφει μία τιμή ή να έχει side effects αλά όχι και τα δύο
* Το όνομα της συνάρτησης πρέπει να περιγράφει αυτή τη μία ενέργεια
* Ένας καλός τρόπος ονομασίας είναι το ρήμαYποκείμενο: showMessage, getDate, calcTotal, κλπ

## Αλλος τρόπος ορισμού, function expression

```js
    function sayHi() {
        alert('Hi!');
    }
```
```js
    let sayHi = function() {
        alert('Hi!');
    };
```

Οπως βλέπουμε η συνάρτηση είναι και αυτή μία τιμή. Έχει την ιδιαιτερότητα ότι μπορούμε να την "καλέσουμε" αλλά κατα τα άλλα λειτουργεί σαν τιμή.

```js
    function sayHi() {
        alert('Hi!');
    }

    let greet = sayHi;

    greet();  // Hi!
```

Μία συνάρτηση μπορεί να χρησιμοποιηθεί και σαν παράμετρος σε άλλες συναρτήσεις:

```js
    const askAndReply = function(question, yes, no) {
        if (confirm(question)) {
            yes();
        } else {
            no();
        }
    };

    const sayThanks = function() {
        alert('Thank you!');
    };

    const sayOhNo = function() {
        alert('Oh no!!');
    };

    askAndReply("Do you agree?", sayThanks, sayOhNo);
```

Μια τέτοια συνάρτηση λέγεται callback function. 

### Διαφορά function declaration με function expression

Τα function declarations μεταφέρονται στην αρχή τυο κώδικα.

```js

    add(3, 2);
    // 5

    function add(num1, num2) {
        console.log(num1 + num2);
    }

```

```js

    add(3, 2);
    // ReferenceError: Cannot access 'add' before initialization

    const add = function(num1, num2) {
        console.log(num1 + num2);
    }

```
## Arrow functions αντί για function expressions

```js
    const add = (num1, num2) => {
        console.log(num1 + num2);
    }
```
Μπορεί να γραφτεί και πιο συνοπτικά:

```js
    const add = (num1, num2) =>  console.log(num1 + num2);
```

Και ακόμα περισσότερο αν έχουμε μόνο μία παράμετρο:

```js
    const addTwo = num =>  console.log(num + 2);
```

Θα δούμε αργότερα και άλλες διαφορές που έχουν τα arrow functions από τις άλλες συναρτήσεις.
Για την ώρα μπορούμε να τα χρησιμοποιούμε και προτιμάμε να τα γράφουμε με () και {}.

## Recursion

Μία συνάρτηση μπορεί να καλέσει τον εαυτό της:

```js
    function countDown(number) {
        console.log(number);
        let newNumber = number - 1;
        if (newNumber > 0) {
            countDown(newNumber);
        }
    }

    countDown(10);
```

Το recursion θέλει περισσότερη μνήμη από ένα loop αλλά σε πολλές περιπτώσεις είναι η κατάλληλη ή και η μοναδική λύση.

## Ασκήσεις

Γράψτε δύο συναρτήσεις, μία που να μετατρέπει βαθμούς Κελσίου σε Φάρεναϊτ και μία για το ανάποδο. Το πως γίνεται η μετατροπή μπορέιτε να το βρείτε εδώ: https://www.mathsisfun.com/temperature-conversion.html

Γράψτε μια συνάρτηση που να ελέγχει αν ένα έτος είναι δίσεκτο. Ένα έτος είναι δίσκτο άμα διαιρείται με το 4 αλλά όχι με το 100 ή αμα διαιρείται με το 400.

Γράψτε μια συνάρτηση που να ελέγχει αν ένας αριθμός είναι πρώτος (αν δεν διαρείται με κανένα άλλο αριθνό εκτός από το 1 και τον εαυτό του).

