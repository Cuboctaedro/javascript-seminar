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

Όταν δεν δίνουμε ώρα αυτή μπαίνει σαν 00:00:00

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
    console.log( today );
```

```js
    /*
        timestamp (miliseconds since 01.01.1970 UTC+0)
    */
    let today = new Date(1669036808225); 
    console.log( today ); 
```

Διαφορά τοπικής και UTC ημερομηνίας

```js
    /*
        year, month, date, hours, minutes, seconds, ms
    */
    let today1 = new Date(2022, 10, 21, 18, 0, 0); 
    let today2 = new Date(Date.UTC(2022, 10, 21, 18, 0, 0)); 
    console.log( today1 );
    console.log( today2 );
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

Θυμηθείτε ότι οι μήνες και οι μέρες της βδομάδας μετριούνται από το 0. Η ημέρα του μήνα όχι

```js
    let date = new Date(2022, 10, 0, 12); 
    
    console.log(date);
    // 2022-10-31T10:00:00.000Z
```

## Ασκήσεις

### Protect email
Γράψτε μία συνάρτηση που να παίρνει σαν παράμετρο μια διεύθυνση email και να την αλλάζει έτσι ώστε να μπορούμε να τη διαβάζουμε αλλά να μην είναι αυτόματα αναγνωρίσιμη σαν email, για παράδειγμα: john@email.com -> john(a)email.com

### Truncate
Γράψτε μία συνάρτηση που να κόβει ένα string σε ένα συγκεκριμένο αριθμό χαρακτήρων. Πρέπει να έχει τη δυνατότητα να προσθέτει ένα τέλος στο κομμένο string (πχ '...'). Τέλος αλλάξτε τη συνάρτηση έτσι ώστε να μην κόβει λέξεις στη μέση και να κόβει το string σε ένα αριθμό χαρακτήρων όσο πιο κοντά σε αυτόν που δίνεται.

```js
    function truncate(string, characters, ending) {
        // your function
    }

    // Test
    let testString = 'The quick brown fox jumps over the lazy dog';

    truncate(testString, 22, '...');
    // The quick brown fox ju..
    // και στη δεύτερη περίπτωση:
    // The quick brown fox..
```

### Capitalize
Γράψτε ένα function που να παίρνει ένα string και να το επιστρέφει με το πρώτο γράμμα κάθε λέξης κεφαλαίο και τα υπόλοιπα μικρά.

```js
    function capitalize(string) {
        // your function
    }

    let testString1 = 'The quick brown fox jumps over the lazy dog';
    let testString2 = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';
    capitalize(testString1);
    capitalize(testString2);
    // The Quick Brown Fox Jumps Over The Lazy Dog
```

### Percentage
Γράψτε μια συνάρτηση που να μας δίνει το ποσοστό % ενός αριθμού σε ένα σύνολο.

```js
    function percentage(number, total) {
        // your function
    }

    percentage(5, 50);
    // 10%
    percentage(9, 45);
    // 20%

```

### Ζάρι
Γράψτε μια συνάρτηση που να μας δίνει έναν τυχαίο ακέραιο από 1 εώς 6.

Μετά γράψτε μια συνάρτηση που να μας δίνει ένα τυχαίο ακέραιο ανάμεσα σε δύο ακέραιους που θα δίνουμε σαν arguments.

```js
    function dice() {
        // your function
    }

    dice();
    // 1 - 6

    function randomInt(min, max) {
        // your function
    }

    randomInt(3, 12);
    // 3 - 12
```

### Max of array
Γράψτε μια συνάρτηση που να μας δίνει τον μεγαλύτερο αριθμό από ένα array αριθμών.

```js
    function arrayMax(numArray) {
        // your function
    }

    let testArray = [12, -4, 0, 2.3, 3004, 24, 7, -40000, 0];

    arrayMax(testArray);
    // 3004
```

### Ορθογώνιο τρίγωνο
Γράψτε μια συνάρτηση που να της δίνουμε τα μήκη των πλευρών ενός τριγώνου και να μας λέει αν είναι ορθογώνιο.
Το Πυθαγόρειο θεώρημα λέει πως σε ένα ορθογώνιο τρίγωνο το αθροισμα των τετραγώνων των δύο καθέτων πλευρών (των πιο μικρών) είνα ίσο με το τετράγωνο της υποτείνουσας.

```js
    function isRightAngle(a, b, c) {
        // your function
    }

    isRightAngle(3, 4, 5);
    // true

    isRightAngle(3, 4, 6);
    // false
```

### Σαββατοκύριακο
Γράψτε μια συνάρτηση που να ελέγχει αν μία ημερομηνία πέφτει σε Σαββατοκύριακο.

### Ημερομηνία
Γράψτε μια συνάρτηση που να μας επιστρέφει την ημερομηνία με τη παρακάτων μορφή:

"Σήμερα είναι Παρασκευή, 25 Νοεμβρίου του 2022"

```js

    function printDate() {
        // your function
    }

    printDate();
    // "Σήμερα είναι Παρασκευή, 25 Νοεμβρίου του 2022"
```

### Days in month
Γράψτε μια συνάρτηση που να μας δίνει πόσες μέρες έχει ένας μήνας για μία συγκεκριμένη χρονιά.

```js
    function daysInMonth(month, year) {
        // your function
    }

    daysInMonth(12, 2022);
    // 31

    daysInMonth(2, 2023);

```

### Διαφορά σε μέρες
Γράψτε μια συνάρτηση που να μας δίνει τη διαφορά σε μέρες ανάμεσα σε δύο ημερομηνίες

```js
    function diffrenceInDays(date1, date2) {
        // your function
    }

    let d1 = '2022-11-20';
    let d2 = '2022-11-25';

    diffrenceInDays(d1, d2);

```

### Διαφορά ώρας
Γράψτε μια συνάρτηση που να μας δίνει τη διαφορά της τοπικής ώρας απο την UTC με τη μορφή "+02:00"


### Αλλαγή ημερομηνίας 
Γράψτε συναρτήσεις για να προσθέτουμε σε μία ημερομηνία ώρες, μέρες, βδομάδες ή μήνες.

```js
    function addHours(date, hours) {
        // your function
    }

    function addDays(date, days) {
        // your function
    }

    function addWeeks(date, weeks) {
        // your function
    }

    function addMonths(date, months) {
        // your function
    }
```
