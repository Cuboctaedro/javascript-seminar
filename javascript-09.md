# Built-in objects

Όπως έχουμε πει στη JavaScript σχεδόν τα πάντα δυλεύουν σαν objects. Strings, numbers κλπ έχουν δικά τους methods.
Όταν τρέχουμε ένα τέτοιο method η JavaScript δημιουργεί ένα object από την τιμή το οποίο μετά χάνεται αφήνοντας μας πάλι την καθαρή τιμή.

```js
    let greet = 'Hello';

    console.log(greet.toUpperCase()); // HELLO
```

Θεωρητικά μπορούμε να χρησιμοποιήσουμε και εμείς αυτά τα constructors αλλά γενικά είναι κακή ιδέα:

```js
    let string1 = 'Hello';

    let string2 = new String('Hello');

    let string3 = '';

    let string4 = new String('');

    console.log(typeof string1);
    console.log(typeof string2);
    if (string3) {
        console.log('String 3 is not empty');
    }
    if (string4) {
        console.log('String 4 is not empty');
    }
```

## Number

Πως μπορούμε να γράφουμε μεγάλους αριθμούς:

```js
    let billion1 = 1000000000;

    let billion2 = 1_000_000_000;

    let billion3 = 1e9;
```

Και μικρούς:

```js
    let tiny = 0.000001;

    let tiny2 = 1e-6;
```

Από number σε string:

```js
    let num = 255;

    console.log( num.toString(10) );  // 255
    console.log( num.toString(16) );  // ff
    console.log( num.toString(2) );   // 11111111

```

Στρογγυλοποίηση:

```js
    let positive = 2.7;
    let negative = -2.7;

    console.log( Math.floor(positive) ); // 2
    console.log( Math.floor(negative) ); // -3
    console.log( Math.ceil(positive) ); // 3
    console.log( Math.ceil(negative) ); // -2
    console.log( Math.round(positive) ); // 3

    let num = 2.34567;

    console.log( num.toFixed(2) ); // 2.34
```
Λάθη!!;;

```js
    console.log( 0.1 + 0.2 == 0.3 );  // false
    console.log( 0.1 + 0.2 );  // 0.30000000000000004
```

Αριθμοί από strings

```js
    console.log( parseInt('100px') ); // 100
    console.log( parseFloat('12.5em') ); // 12.5

    console.log( parseInt('12.3') ); // 12
```

Μέγιστο και ελάχιστο

```js
    console.log( Math.max(3, 5, -10, 0, 1) ); // 5
    console.log( Math.min(1, 2) ); // 1
```

Τυχαίος αριθμός

```js
    console.log( Math.random() );
```

## String

Εισαγωγικά:

```js
    let string1 = 'Hello';
    let string2 = "Hello";
    let string3 = `Hello`;
```


```js
    let name = 'John';

    let string1 = `Hello ${name}`;
    let string2 = `Hello ${name},
    How are you?`;
    console.log( string2 );
    /*
    Hello John,
    How are you?
    */
```

Σύμβολα:

```js
    let str1 = "Στη JavaScript έχουμε δύο έιδη εισαγωγικών, \nαυτά: \"\" \nκαι αυτά: ''. \nΓια να δείξουμε ειδικούς χαρακτήρες μέσα σε ένα string βάζουμε πρώτα \\.";

    console.log( str1 );
    /*
    Στη JavaScript έχουμε δύο έιδη εισαγωγικών, 
    αυτά: "" 
    και αυτά: ''. 
    Για να δείξουμε ειδικούς χαρακτήρες μέσα σε ένα string βάζουμε πρώτα \.
    */
```

Το string έχει παρόμοιες μεθόδους με το array:

```js
    let str = 'Hello';

    console.log(str.length); // 5
    console.log(str[1]);     // e

    str[1] = 'o'; // ERROR!
```

Κεφαλαία - μικρά:

```js
    console.log( 'Interface'.toUpperCase() ); // INTERFACE
    console.log( 'Interface'.toLowerCase() ); // interface
```

Εύρεση:

```js
    const str = 'Ψάχνω ψύλλους στα άχυρα.';

    console.log(str.indexOf('ψύλλους')); // 6
```

```js
    const str = 'Ψάχνω ψύλλους στα άχυρα.';

    console.log(str.includes('ψύλλους')); // true
    console.log(str.includes('Ψύλλους')); // false
```

```js
    const str = 'Ψάχνω ψύλλους στα άχυρα.';

    console.log(str.startsWith('ψύλλους')); // false
    console.log(str.startsWith('Ψ')); // true
```


```js
    const str = 'Ψάχνω ψύλλους στα άχυρα.';

    console.log(str.slice(6, 14)); // ψύλλους

    console.log(str.substring(6, 14)); // ψύλλους
    console.log(str.substring(14, 6)); // ψύλλους

    console.log(str.substr(6, 7)); // ψύλλους
```


## Date

Το Date είναι ένα object που μας δίνει η JavaScript που μας επιτρέπει να δουλέψουμε με ημερομηνίες.

```js
    let now = new Date();
    console.log( now ); // shows current date/time
```
Μπορούμε να δημιουργήσουμε μια συγκεκριμένη ημερομηνία, δίνοντας παραμέτρους στο Date.


```js
    /*
        Date string
    */
    let today = new Date('2022-11-21'); 
    console.log( today ); // 2022-11-21T00:00:00.000Z
```


```js
    /*
        year, month, date, hours, minutes, seconds, ms
    */
    let today = new Date(2022, 10, 21, 18, 0, 0); 
    console.log( today ); // 2022-11-21T16:00:00.000Z
```

```js
    /*
        timestamp (miliseconds since 01.01.1970 UTC+0)
    */
    let today = new Date(1669036808225); 
    console.log( today ); 
```

### Πως παίρνουμε στοιχεία από το Date

```js
    let now = new Date();

    /*
    Τοπική ώρα
    */
    console.log(now.getFullYear());

    console.log(now.getMonth()); // 0 - 11

    console.log(now.getDate()); // 1 - 31

    console.log(now.getHours());

    console.log(now.getMinutes());

    console.log(now.getSeconds());

    console.log(now.getMilliseconds());

    console.log(now.getDay()); // 0 - 6

    console.log(now.getTime()); // timestamp

    console.log(now.getTimezoneOffset()); // timestamp

    /*
    UTC
    */
    console.log(now.getUTCFullYear());

    console.log(now.getUTCMonth()); // 0 - 11

    console.log(now.getUTCDate()); // 1 - 31

    console.log(now.getUTCHours());

    console.log(now.getUTCMinutes());

    console.log(now.getUTCSeconds());

    console.log(now.getUTCMilliseconds());

```
### Πως αλλάζουμε το Date

```js

    let now = new Date();

    now.setFullYear(2023);

    now.setMonth(11);

    now.setDate(31);

    now.setHours(24);

    now.setMinutes(0);

    now.setSeconds(0);

```

Το Date διορθώνει τις λάθος τιμές:

```js
    let date = new Date(2013, 0, 33, 13, 30, 0); // 33 Jan 2013 ?!?

    console.log(date);
```

Αμα θέλουμε μόνο timestamp

```js
    // Σαν new Date().getTime() αλλά πιο γρήγορο.
    let date = Date.now();
    
    console.log(date);
```
