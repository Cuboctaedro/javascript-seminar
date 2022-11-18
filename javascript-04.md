# Δομή και έλεγχος της ροής του προγράμματος

## Code blocks

Η βασική ιδέα του ελέγχου της ροής είναι να ορίσουμε ένα block κώδικα που θα εκτελείται μόνο σε συγκεκριμένες συνθήκες.

```js
    {
        let username = 'John';
        alert('Hello ' + username);
    }
```

## Variable scope

Όταν ορίζουμε μία μεταβλητή με `let` μέσα σε ένα block αυτή υπάρχει μόνο μέσα στο block.
Δεν συμβαίνει το ίδιο όταν χρησιμοποιούμε `var` και αυτός είναι ο βασικός λόγος που το αποφεύγουμε.

### Διαφορά let με var

```js
    {
        let username = 'John';
        console.log('Inside username: ' + username);
        // 'Inside username: John'
    }

    console.log('Outside username: ' + username);
    // Uncaught ReferenceError: username is not defined
```

```js
    {
        var username = 'John';
        console.log('Inside username: ' + username); // 'Inside username: John'
    }

    console.log('Outside username: ' + username); // 'Outside username:  John'
```

### Διαφορά let με const

```js
    let username = 'John';

    console.log('Outside username: ' + username); // 'Outside username: John'

    {
        username = 'Mary';
        console.log('Inside username: ' + username); // 'Inside username: Mary'
    }

    console.log('Outside username: ' + username); // 'Outside username: Mary'
```

```js
    const nameOne = 'John';

    console.log('Outside nameOne: ' + nameOne); // 'Hello John'

    {
        console.log('Inside nameOne: ' + nameOne); // 'Hello John'

        // nameOne = 'Jane'; Δεν γίνεται!

        const nameTwo = 'Mary';
        console.log('Inside nameTwo: ' + nameTwo); // 'Hello Mary'
    }

    console.log('Outside nameOne: ' + nameOne); // 'Hello John'

    console.log('Outside nameTwo: ' + nameTwo); // Uncaught ReferenceError: nameTwo is not defined
```



Ο δεύτερος λόγος που δεν χρησιμοποιούμε `var`.

```js
    /*
        Με let ή const δεν μπορούμε να χρησιμοποιήσουμε μια μεταβλητή πριν την ορίσουμε.
    */
    console.log('Hello ' + nameTwo);
    // Uncaught ReferenceError: can't access lexical declaration 'nameTwo' before initialization
    const nameTwo = 'Jane';  
```

Με let ή const δεν μπορούμε να χρησιμοποιήσουμε μια μεταβλητή πριν την ορίσουμε. Που είναι και το λογικό.

```js

    console.log('Hello ' + nameOne);
    // 'Hello undefined'

    var nameOne = 'John'; 
```

Με var μπορούμε αλλά δεν θα έχει τιμή. Η δήλωση της μεταβλητής με var μετατίθεται στην αρχή του κώδικα μας αλλά η τιμή της δίνεται αργότερα.
Στην πραγματικότητα δηλαδή ο παραπάνω κώδικας όταν τρέξει θα γίνει έτσι:

```js
    var nameOne

    console.log('Hello ' + nameOne);

    nameOne = 'John'; 
```

Αποφεύγουμε το `var` και ελέγχουμε αν οι μεταβλητές μας έχουν τιμή πριν τις εμφανίσουμε για να αποφύγουμε καταστάσεις όπως αυτή:

![Screen with code errors](/images/screen-with-error.jpg "Screen with code errors")

## if else

Το `if else` μας δίνει την δυνατότητα να εκτελέσουμε ένα block κώδικα μόνο όταν είναι αληθής μια συνθήκη.

```js
    let hour = 12;

    if (hour < 10) {
        console.log("Good morning");
    } else if (hour < 20) {
        console.log("Good day");
    } else {
        console.log("Good evening");
    } 
```

## If με ?

```js
    let hour = 12;

    (hour < 10) ? console.log("Good morning") : console.log("Good evening");

    (hour < 10) ? console.log("Good morning") : ((hour < 20) ? console.log("Good day") : console.log("Good evening"));
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

    console.log('Today is ' + day);
```

Πρέπει να έχουμε και το `break` αλλιώς όταν βρεθεί ένα σωστό `case` θα εκτελεστεί και αυτό και όλα τα επόμενα χωρίς να γίνεται έλεγχος.

## Loops 1, while

Τα loops είναι ο τρόπος που έχουμε για να επαναλάβουμε την εκτέλεση ενός block κώδικα με βάση κάποια συνθήκη.

Το `while` θα επαναλάβει την εκτέλεση του block όσο η συνθήκη βγαίνει αληθής. Αν η συνθήκη βγαίνει πάντα αληθής το block θα επαναλαμβάνεται συνεχώς οδηγώντας σε κρασάρισμα. Για αυτό πάντα φροντίζουμε να υπάρχει μέσα στο block ένα statement που θα μεταβάλει την αρχική συνθήκη.


```js
    let i = 1;

    while (i < 11) {
        console.log( i );
        i += 1;
    }
    // 1 ... 10
```

## Loops 2, do while

Στην περίπτωση του `while` αν η αρχική συνθήκη δεν βγει αληθής το block δεν θα τρέχει ποτέ. Με το `do while` ο έλεγχος μετατίθεται στο τέλος του block.

```js
    let i = 1;

    do {
        console.log( i );
        i += 1;
    }  while (i < 11);
    // 1 ... 10
```

```js
    let i = 12;

    while (i < 11) {
        console.log( i );
        i += 1;
    }
```

```js
    let i = 12;

    do {
        console.log( i );
        i += 1;
    }  while (i < 11);
    // 12
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
        console.log(i);
    }
    // 1 ... 10
```

| begin     | `let i = 1`      | Γίνεται μία φορά όταν ξεκινάει το loop.
| condition | `i < 11`         | Ελέγχεται στην αρχή ξάθε loop, αν είναι false το loop σταματάει
| body      | `console.log(i)` | Εκτελείται όσο το condition είναι true
| step      | `i += 1`         | Εκτελείται κάθε φορά μετά από το body

Μπορούμε να δηλώσουμε την μεταβλητή και έξω από το loop:

```js
    let i = 1;

    for (; i < 11; i += 1) { 
        console.log(i);
    }
    // 1 ... 10

    console.log(i);
    // 11
```

Μπορούμε να αποφύγουμε και το step:

```js
    let i = 1;

    for (; i < 11;) { 
        console.log(i++);
    }
    // 1 ... 10
```

### Break the loop

Μπορούμε να σταματήσουμε το loop σε κάποια συνθήκη με το break:

```js
    let i = 1;

    for (; ;) { 
        console.log(i++);

        if (i > 10) break;
    }
    // 1 ... 10
```
Μπορούμε να προσπεράσουμε ένα itteration (ένα κύκλο του loop) με το continue:

```js
    for (let i = 1; i < 11; i += 1) {
        if (i % 2 == 0) continue;

        console.log(i++);
    }
    // 1  3 5 7 9
```


## Ασκήσεις

### Conditionals
Γράψτε ένα πρόγραμμα που ξεκινά με μιά αρχική μεταβλητή hour και να γράφει στην κονσόλα έναν από 4 διαφορετικούς χαιρετισμούς.

Δοκιμάστε και με if / else και με conditional operator (? :).

Μετά δοκιμάστε να βρείτε λύση για την περίπτωση που η αρχική τιμή της μεταβλητής hour είναι μεγαλύτερη από 24.

Μετά βρείτε και μία λύση για την περίπτωση που η αρχική τιμή δεν είναι αριθμός.

Τέλος μπορείτε να αλλάξετε το πρόγραμμα έτσι ώστε να δίνεται η αρχική τιμή της μεταβλητής από το χρήστη μέσω prompt και να επιστρέφεται ο χαιρετισμός με alert. Για αυτή την περίπτωση χρησιμοποιήστε αυτά τα αρχεία: 
https://github.com/Cuboctaedro/js-seminar-ex-01-setup

Μην ξεχνάτε ότι η τιμή που θα πάρετε από το prompt είναι string!!

### Loops + Conditionals
Γράψτε ένα πρόγραμμα που θα δείχνει με console.log τους αριθμούς από το 1 μέχρι το 100. Αν ένας αριθμός είναι πολλαπλάσιο του 3 να δείχνει τη λέξη 'Fizz' αντί για τον αριθμό και αν είναι πολλαπλάσιο του 5 τη λέξη 'Buzz'.

Μετά αλλάξτε το πρόγραμμα έτσι ώστε να δείχνει και τη λέξη 'FizzBuzz' όταν ένας αριθμός είναι πολλαπλάσιο και του 3 και του 5.

Τέλος δείτε πως μπορεί να γίνει πιο εύκολο να αλλάξει το πρόγραμμα και να χρησιμοποιεί άλλους αριθμούς αντί των 3 και 5 (για παράδειγμα 4 και 7).