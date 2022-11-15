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
    let name = 'John';
    
    {
        let name = 'Jane';
        alert('Hello ' + name); // 'Hello Jane'
    }

    alert('Hello ' + name); // 'Hello John'
```


```js
    var otherName = 'John';

    {
        var otherName = 'Jane';
        alert('Hello ' + otherName); // 'Hello Jane'
    }

    alert('Hello ' + otherName); // 'Hello Jane'
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
    alert('Hello ' + nameTwo);
    // Uncaught ReferenceError: can't access lexical declaration 'nameTwo' before initialization
    const nameTwo = 'Jane';  

    alert('Hello ' + nameOne);
    // 'Hello undefined'

    var nameOne = 'John'; 
```

![Screen with code errors](/images/screen-with-error.jpg "Screen with code errors")
