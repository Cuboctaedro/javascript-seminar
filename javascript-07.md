# Arrays

Το array είναι μια λίστα, μία δομή δεδομένων που μας επιρέπει να κρατάμε μια ομάδα τιμών σε μία συγκεκριμένη σειρά.

Γράφεται συνήθως με `[]` αλλά μπορεί να δημιουργηθεί με δύο τρόπους:

```js
    let arr1 = new Array();
    let arr2 = [];

    const fruits = [
        'Apple',
        'Orange',
        'Pear',
    ];
```

Αν και συνήθως χρησιμοποιούμε arrays που έχουν στοιχεία ίδιου τύπου αυτό δεν είναι υποχρεωτικό:

```js
    const mix = [
        'Hello',
        1,
        true,
        { name: 'John'},
        [1, 2, 3],
        function() { console.log('Hi'); },
    ];

    console.log(mix[3].name);
```

Μπορούμε να πάρουμε μία τιμή με βάση τη θέση της μετρώντας από το 0.

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
    ];

    console.log(fruits[0]);
    // Apple

    console.log(fruits[1]);
    // Orange

    console.log(fruits[2]);
    // Pear

    console.log(fruits[3]);
    // undefined
```

Μπορούμε να πάρουμε το μήκος ενός array με το length:

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
    ];

    console.log(fruits.length);
    // 3

    console.log(fruits[fruits.length - 1]);
    // Pear
```

Μπορούμε να αλλάξουμε το περιεχόμενο:

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
    ];

    fruits[1] = 'Lemon';

    console.log(fruits);
    // [ 'Apple', 'Lemon', 'Pear' ]

    fruits[4] = 'Cherry';

    console.log(fruits[3]);
    // undefined
```

## Array Methods

### pop, push, shift, unshift

Συνήθως αντί να αλλάζουμε το περιεχόμενο με βάση τη θέση είναι πιο χρήσιμο να δουλεύουμε με τα άκρα ενός array:

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
    ];

    console.log(fruits.pop());
    // Pear

    console.log(fruits);
    // [ 'Apple', 'Orange' ]
```

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
    ];

    fruits.push('Lemon');

    console.log(fruits);
    // [ 'Apple', 'Orange', 'Pear', 'Lemon' ]
```

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
    ];

    console.log(fruits.shift());
    // Apple

    console.log(fruits);
    // [ 'Orange', 'Pear' ]
```

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
    ];

    fruits.unshift('Lemon');

    console.log(fruits);
    // [ 'Lemon', 'Apple', 'Orange', 'Pear' ]
```

Οι αλλαγές στην αρχή του array "κοστίζουν" πολύ περισσότερο από τις αλλαγές στο τέλος.

### splice

Επειδή τα arrays είναι objects μπορούμε να χρησιμοποιήσουμε μεθόδους των objects αλλά συνήθως δεν είναι ο καλύτερος τρόπος.

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
        'Lemon',
    ];

    delete fruits[2];

    console.log(fruits);
    // [ 'Apple', 'Orange', , 'Lemon' ]
```

Το splice είναι μια πολύ χρήσιμη μέθοδος για αλλαγές σε array:

```js
    arr.splice(start, deleteCount, elem1, ..., elemN)
```
Ξεκινάει από το start, απομακρύνει τόσα στοιχεία όσο το deleteCount και προσθέτει στο ίδιο σημείο τα elem1, ..., elemN

Αντί για delete:

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
        'Lemon',
    ];

    let deleted = fruits.splice(2, 1);

    console.log(fruits);
    // [ 'Apple', 'Orange', 'Lemon' ]

    console.log(deleted);
    // [ 'Pear' ]
```

Για να προσθέσουμε στοιχεία:

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
        'Lemon',
    ];

    fruits.splice(2, 0, 'Cherry');

    console.log(fruits);
    // [ 'Apple', 'Orange', 'Cherry', 'Pear', 'Lemon' ]
```
Για να αντικαταστήσουμε:

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
        'Lemon',
    ];

    fruits.splice(2, 1, 'Cherry');

    console.log(fruits);
    // [ 'Apple', 'Orange', 'Cherry', 'Lemon' ]
```
Μπορούμε να μετρήσουμε και από το τέλος:

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
        'Lemon',
    ];

    fruits.splice(-1, 1, 'Cherry');

    console.log(fruits);
    // [ 'Apple', 'Orange', 'Pear', 'Cherry' ]
```

### slice

Το slice αντιγράφει ένα κομμάτι από ένα array:

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
        'Lemon',
    ];

    const someFruits = fruits.slice(1, 3);

    console.log(someFruits);
    // [ 'Orange', 'Pear' ]

    console.log(fruits);
    // [ 'Apple', 'Orange', 'Pear', 'Lemon' ]
```

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
        'Lemon',
        'Cherry',
    ];

    console.log(fruits.slice(2));
    // [ 'Pear', 'Lemon', 'Cherry' ]

    console.log(fruits.slice(-2));
    // [ 'Lemon', 'Cherry' ]

    console.log(fruits.slice());
    // [ 'Apple', 'Orange', 'Pear', 'Lemon', 'Cherry' ]
```

### concat 

Το concat ενώνει arrays σε ένα:

```js
    arr1 = [1, 2, 3];
    arr2 = [4, 5, 6];

    const newArray = arr1.concat(arr2);

    console.log(newArray);
    // [ 1, 2, 3, 4, 5, 6 ]

    console.log(arr1);
    // [ 1, 2, 3 ]
```

Μπορούμε να ενώσουμε περισσότερα από δύο arrays και μπορούμε να ενώσουμε και στοιχεία:

```js
    arr1 = [1, 2, 3];
    arr2 = [4, 5, 6];
    arr3 = [7, 8];

    const newArray = arr1.concat(arr2, arr3, 9, 10);

    console.log(newArray);
    // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

### Εύρεση στοιχείων σε arrays

Μπορούμε να ελεγξουμε αν υπάρχει μια τιμή μέσα σε ένα array:

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
    ];

    console.log(fruits.includes('Orange'));
    // true

    console.log(fruits.includes('Lemon'));
    // false
```
Μπορούμε να βρούμε σε ποιά θέση είναι ένα στοιχείο:

```js
    const fruits = [
        'Apple',
        'Orange',
        'Pear',
        'Lemon',
        'Orange',
    ];

    console.log(fruits.indexOf('Orange'));
    // 1

    console.log(fruits.lastIndexOf('Orange'));
    // 4
```

Πολλές φορές δουλεύουμε με arrays από objects και εκεί χρειαζόμαστε τα `find` και `findIndex`:


```js
    const users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"},
        {id: 4, name: "John"},
    ];

    const user2 = users.find(function(item) {
        return item.id === 2;
    });

    console.log(user2);
    // { id: 2, name: 'Pete' }
```
Το find 'τρέχει' ένα function για νάθε στοιχείο του array. Όταν σε κάποιο στοιχείο το function μας επιστρέψει την τιμή true τότε το find μας επιστρέφει το αντίστοιχο στοιχείο.

Το `find` και όλες οι αντίστοιχες μέθοδοι είναι μια περιπτώση που συνήθως προτιμούμε τα arrow functions

```js
    const users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"},
        {id: 4, name: "John"},
    ];

    const user2 = users.find((item) => (item.id === 2));

    console.log(user2);
```
Με τον ίδιο τρόπο δουλεύει και το findIndex:

```js
    const users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"},
        {id: 4, name: "John"},
    ];

    const index2 = users.findIndex((item) => (item.id === 2));

    console.log(index2);

```
### Φιλτράρισμα

```js
    const users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"},
        {id: 4, name: "John"},
    ];

    const johns = users.filter((item) => (item.name === "John"));

    console.log(johns);
    // [ { id: 1, name: 'John' }, { id: 4, name: 'John' } ]
```

### Μετατροπές

#### map

Με το map δημιουργούμε ένα νέο array περνόντας όλα τα στοιχεία του αρχικού μέσα από ένα function:

```js
    const users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"},
        {id: 4, name: "John"},
    ];

    const names = users.map((item) => (item.name));

    console.log(names);
    // [ 'John', 'Pete', 'Mary', 'John' ]
```

#### sort

Με το sort αλλάζουμε τη σειρά. Το function που θα χρησιμοποιήσουμε συγκρίνει δύο στοιχεία:

```js
    const numbers = [3, 18, 45, 2, 127, 54];

    function compareNumbers(a, b) {
        if (a > b) return 1;  // μπαίνει το b πριν το a
        if (a == b) return 0; // παραμένουν στην ίδια θέση
        if (a < b) return -1; // μπαίνει το a πριν το b
    }

    numbers.sort(compareNumbers);
    console.log(numbers);
```

Χωρίς function το sort βάζει αλφαβητική σειρά:

```js
    const numbers = [3, 18, 45, 2, 127, 54];

    numbers.sort();
    console.log(numbers);
    // [ 127, 18, 2, 3, 45, 54 ]
```

Μπορούμε να χρησιμοποιήσουμε τα `<` και `>` για να συγκρίνουμε strings αλφαβητικά:

```js
    const users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"},
        {id: 4, name: "John"},
    ];

    users.sort((u1, u2) => {
        if (u1.name > u2.name) {
            return 1;
        }
        if (u1.name < u2.name) {
            return -1;
        }
        return 0;
    });

    console.log(users);
    /*
    [
    { id: 1, name: 'John' },
    { id: 4, name: 'John' },
    { id: 3, name: 'Mary' },
    { id: 2, name: 'Pete' }
    ]
    */
```
Στην πραγματικότητα το function που κάνει τη σύγκριση μπορεί να μας δίνει οποιονδήπτε αριθμό, μεγαλύτερο ή μικρότερο από μηδεν:

```js
    const numbers = [3, 18, 45, 2, 127, 54];

    // function compareNumbers(a, b) {
    //     if (a > b) return 1;  // μπαίνει το b πριν το a
    //     if (a == b) return 0; // παραμένουν στην ίδια θέση
    //     if (a < b) return -1; // μπαίνει το a πριν το b
    // }

    numbers.sort((a, b) => (a - b));
    console.log(numbers);
```

#### reduce

Με το reduce μπορούμε να υπολογίσουμε μία τιμή από τα στοιχεία ενός array:

```js
    let value = arr.reduce(function(accumulator, item, index) {
    // ...
    }, [initial]);
```
initial: μία αρχική τιμή αυτού που θέλουμε να υπολογίσουμε.
item, index: Το στοιχείο του array για το οποιο τρέχει το function και η θέση του.
accumulator: η τιμή που πήραμε από το προηγούμενο στοιχείο. (στο πρώτο στοιχείο είναι ίση με το initial)

```js
    let arr = [1, 2, 3, 4, 5];

    let result = arr.reduce((sum, current) => (sum + current), 0);

    alert(result); // 15
```
https://javascript.info/array-methods#reduce-reduceright

### Loops

Πολλές φορές πρέπει να εκτελέσουμε μία ενέργεια για κάθε στοιχείο ενός array:

```js
    const users = [
        {id: 45, name: "John"},
        {id: 43, name: "Pete"},
        {id: 38, name: "Mary"},
        {id: 95, name: "John"},
    ];

    users.forEach((user, index) => {
        console.log(`${index + 1}:: Name: ${user.name}, ID: ${user.id}`);
    });

    /*
    1:: Name: John, ID: 45
    2:: Name: Pete, ID: 43
    3:: Name: Mary, ID: 38
    4:: Name: John, ID: 95
    */
```

```js
    const users = [
        {id: 45, name: "John"},
        {id: 43, name: "Pete"},
        {id: 38, name: "Mary"},
        {id: 95, name: "John"},
    ];

    for (let user of users) {
        console.log(`Name: ${user.name}, ID: ${user.id}`);
    };

    /*
    Name: John, ID: 45
    Name: Pete, ID: 43
    Name: Mary, ID: 38
    Name: John, ID: 95
    */
```

```js
    const users = [
        {id: 45, name: "John"},
        {id: 43, name: "Pete"},
        {id: 38, name: "Mary"},
        {id: 95, name: "John"},
    ];

    for (let i = 0; i < users.length; i++) {
        console.log(`Name: ${users[i].name}, ID: ${users[i].id}`);
    };

    /*
    Name: John, ID: 45
    Name: Pete, ID: 43
    Name: Mary, ID: 38
    Name: John, ID: 95
    */
```
## Array <-> String

Μπορεί να χρειαστούμε να δημιουργήσουμε ένα array από ένα string ή το ανάποδο:

```js
    const payments = '3, 46, 87, 43, 8';

    const paymentsArray = payments.split(',');
```

```js
    const payments = [3, 46, 87, 43, 8];

    const paymentsString = payments.toString();
```

## Ασκήσεις 
Γράψτε ένα function που να "καθαρίζει" ένα array από τις τιμές που είναι false.

```js
    function arrayCleaner(arrayToClean) {
        // your function
    }

    const someArray = [0, 1, 'John', 2, undefined, '', 3, null, 1, 4, ''];
    arrayCleaner(someArray);
    // Θα πρέπει να μας δώσει:
    // [1, 'John', 2, 3, 1, 4]
```

Γράψτε ένα function που να "καθαρίζει" ένα array από όποιες τιμές του δίνουμε:

```js
    function arrayCleaner(arrayToClean, elementsToRemove) {
        // your function
    }

    const someArray = [0, 1, 'John', 2, undefined, '', 3, null, 1, 4, ''];
    arrayCleaner(someArray, [1, 'John']);
    // Θα πρέπει να μας δώσει:
    // [0, 2, undefined, '', 3, null, 4, '']
```

Γράψτε ένα function που να "καθαρίζει" ένα array από διπλές τιμές:

```js
    function arrayCleaner(arrayToClean) {
        // your function
    }

    const someArray = [0, 1, 'John', 2, undefined, '', 3, null, 1, 4, ''];
    arrayCleaner(someArray);
    // Θα πρέπει να μας δώσει:
    // [0, 1, 'John', 2, undefined, '', 3, null, 4]
```

Γράψτε ένα function που να χωρίζει ένα array σε μικρότερα συγκεκριμένου μεγέθους:

```js
    function arrayChunk(array, size) {
        // your function
    }

    const someArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    arrayChunk(someArray, 3);
    // Θα πρέπει να μας δώσει:
    // [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10]]
```

Έχετε την παρακάτω λίστα από tasks:
```js
    const tasks = [
        {
            id: 1,
            description: 'Learn JavaScript',
            time: 50,
            completed: false,
            difficulty: 7,
        },
        {
            id: 2,
            description: 'Learn Html',
            time: 30,
            completed: false,
            difficulty: 3,
        },
        {
            id: 3,
            description: 'Learn CSS',
            time: 50,
            completed: false,
            difficulty: 6,
        },
        {
            id: 4,
            description: 'Clean house',
            time: 4,
            completed: true,
            difficulty: 3,
        },
        {
            id: 5,
            description: 'Cook dinner',
            time: 2,
            completed: false,
            difficulty: 4,
        },
        {
            id: 6,
            description: 'Go shopping',
            time: 3,
            completed: false,
            difficulty: 2,
        },
    ];
```

Γράψτε ένα function `printList()` που να τα εμφανίζει όμορφα στην κονσόλα σαν πίνακα. Για παράδειγμα κάπως έτσι:
1.  'Learn JavaScript' | time: 50 | not completed | difficulty: 7
2.  'Learn Html' | time: 30 | not completed | difficulty: 3
Ή με κάποιο παρόμοι τρόπο.

Μετά γράψτε ένα function `printOrderedList(property)` που να εμφανίζει την ίδια λίστα αλλά βάζοντας τα στοιχεία σε σείρα με βάση το property που θα δίνουμε, πχ αλφαβητικά ή από το πιο εύκολο στο πιο δύσκολο.

Μετά γράψτε ένα function `printFilteredList(value)` που να εμφανίζει μόνο τα tasks που έχουν γίνει ή μόνο αυτά που δεν έχουν γίνει.

Γράψτε ένα function που να προσθέτει tasks ζητώντας όσο λιγότερες πληροφορίες `addTask(description, difficulty, time)` και μετά να μας δείχνει την ανανεωμένη λίστα.

Γράψτε ένα function που να αλλάζει ένα task σε completed με βάση το id `markCompletedById(id)` και ένα με βάση την περιγραφή `markCompleted(description)` και μετά να μας δείχνει την ανανεωμένη λίστα.

Γράψτε ένα function που να σβήνει ένα task με βάση το id `deleteTaskById(id)` αλλά μόνο αν το task είναι completed αλλιώς να βγάζει κάποιο μήνυμα στην κονσόλα.

Θυμηθείτε τους κανόνες του καλού function!
