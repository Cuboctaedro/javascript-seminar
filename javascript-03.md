# Δομή και έλεγχος της ροής του προγράμματος

## Code blocks

Η βασική ιδέα του ελέγχου της ροής είναι να ορίσουμε ένα block κώδικα που θα εκτελείται μόνο σε συγκεκριμένες συνθήκες.

```js
    {
        let name = 'John';
        alert('Hello ' + name);
    }
```

## Variable scope

Όταν ορίζουμε μία μεταβλητή με `let` μέσα σε ένα block αυτή υπάρχει μόνο μέσα στο block.
Δεν συμβαίνει το ίδιο όταν χρησιμοποιούμε `var` και αυτός είναι ο βασικός λόγος που το αποφεύγουμε.

```js
    {
        let name = 'John';
        alert('Hello ' + name); // 'Hello John'
    }

    alert('Hello ' + name); // Uncaught ReferenceError: name is not defined
```


```js
    {
        var otherName = 'John';
        alert('Hello ' + otherName); // 'Hello John'
    }

    alert('Hello ' + otherName); // 'Hello John'
```

```js
    const nameOne = 'John';

    {
        const nameTwo = 'Jane';
        alert('Hello ' + nameOne); // 'Hello John'
        alert('Hello ' + nameTwo); // 'Hello Jane'
    }

    alert('Hello ' + nameOne); // 'Hello John'
    alert('Hello ' + nameTwo); // Uncaught ReferenceError: nameTwo is not defined

    const nameTwo = 'Jane';
    alert('Hello ' + nameTwo); // 'Hello Jane'

```

Ο δεύτερος λόγος που δεν χρησιμοποιούμε `var`.

```js
    /*
        Με let ή const δεν μπορούμε να χρησιμοποιήσουμε μια μεταβλητή πριν την ορίσουμε.
    */
    alert('Hello ' + nameTwo);
    // Uncaught ReferenceError: can't access lexical declaration 'nameTwo' before initialization
    const nameTwo = 'Jane';  
```

Με let ή const δεν μπορούμε να χρησιμοποιήσουμε μια μεταβλητή πριν την ορίσουμε. Που είναι και το λογικό.

```js

    alert('Hello ' + nameOne);
    // 'Hello undefined'

    var nameOne = 'John'; 
```

Με var μπορούμε αλλά δεν θα έχει τιμή. Η δήλωση της μεταβλητής με var μετατίθεται στην αρχή του κώδικα μας αλλά η τιμή της δίνεται αργότερα.
Στην πραγματικότητα δηλαδή ο παραπάνω κώδικας όταν τρέξει θα γίνει έτσι:

```js
    var nameOne

    alert('Hello ' + nameOne);

    nameOne = 'John'; 
```

Αποφεύγουμε το `var` και ελέγχουμε αν οι μεταβλητές μας έχουν τιμή πριν τις εμφανίσουμε για να αποφύγουμε καταστάσεις όπως αυτή:

![Screen with code errors](/images/screen-with-error.jpg "Screen with code errors")

## if else

Το `if else` μας δίνει την δυνατότητα να εκτελέσουμε ένα block κώδικα μόνο όταν είναι αληθής μια συνθήκη.

```js
    if (hour < 10) {
        alert("Good morning");
    } else if (hour < 20) {
        alert("Good day");
    } else {
        alert("Good evening");
    } 
```

## switch

Το `switch` λειτουργεί παρόμοια με το `if else` αλλά είναι πιο χρήσιμο όταν θέλουμε να κάνουμε ελέγχους για απόλυτη ισότητα `===` και έχουμε αρκετές εναλλακτικές να ελέγξουμε.

```js
    let day;

    const currentDay = new Date().getDay(); // Αυτό θα μας δώσει τη μέρα της βδομάδας σαν αριθμό απο 0 - 6.

    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }

    alert('Today is ' + day);
```

Πρέπει να έχουμε και το `break` αλλιώς όταν βρεθεί ένα σωστό `case` θα εκτελεστεί και αυτό και όλα τα επόμενα χωρίς να γίνεται έλεγχος.

## Loops 1, while

Τα loops είναι ο τρόπος που έχουμε για να επαναλάβουμε την εκτέλεση ενός block κώδικα με βάση κάποια συνθήκη.

Το `while` θα επαναλάβει την εκτέλεση του block όσο η συνθήκη βγαίνει αληθής. Αν η συνθήκη βγαίνει πάντα αληθής το block θα επαναλαμβάνεται συνεχώς οδηγώντας σε κρασάρισμα. Για αυτό πάντα φροντίζουμε να υπάρχει μέσα στο block ένα statement που θα μεταβάλει την αρχική συνθήκη.


```js
    let i = 1;

    while (i < 11) {
        alert( i );
        i += 1;
    } // 1 ... 10
```

## Loops 2, do while

Στην περίπτωση του `while` αν η αρχική συνθήκη δεν βγει αληθής το block δεν θα τρέχει ποτέ. Με το `do while` ο έλεγχος μετατίθεται στο τέλος του block.

```js
    let i = 1;

    do {
        alert( i );
        i += 1;
    }  while (i < 11); // 1 ... 10
```

```js
    let i = 12;

    do {
        alert( i );
        i += 1;
    }  while (i < 11); // 12
```

## Loops 3, for

Στην περίπτωση του `for` δηλώνουμε μαζί την αρχική κατάσταση, τη συνθήκη που θα ελέγχουμε και τον τρόπο μεταβολής.

```js
    for (begin; condition; step) {
        // ... loop body ...
    }
```

```js
    for (let i = 1; i < 11; i += 1) { 
        alert(i);
    } // 1 ... 10
```