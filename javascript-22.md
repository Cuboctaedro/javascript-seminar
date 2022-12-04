# NodeJS

Η Node είναι ένα περιβάλλον που μπορεί να τρέξει JavaScript έξω από το browser. Μπορούμε δηλαδή να τρέξουμε Node στον υπολογιστή μας για να κάνουμε κάποιες εργασίες (για παράδειγμα το npm και το Parcel τρέχουν σε Node). Μπορούμε όμως και να τρέξουμε Node σε ένα υπολογιστή που θα λειτουργήσει σαν server και θα φιλοξενεί το backend μίας εφαρμογής ή μία μονολιθική εφαρμογή.

Πέρα από τα modules που μπορούμε να εγκαταστήσουμε μέσω npm η Node μας προσφέρει και μια σειρά από Built-in modules για διάφορες εργασίες.
https://nodejs.dev/en/api/v19/documentation/

## Διαφορές με το browser

Επειδή η Node τρέχει εκτός browser δεν έχουμε πρόσβαση σε objects και functions που αφορούν το browser. Ετσι στη Node δεν έχουμε:

* document
* window
* alert, prompt, confirm
* localStorage, sessionStorage

Θα δούμε μερικά από τα πιο χρήσιμα modules της Node

## path

Το path μας επιτρέπει να δουλεύουμε με filepaths για να μπορούμε να βρούμε ή να σώσουμε αρχεία στο σύστημα μας.

Όπως όλα τα modules της Node, μπορούμε να το φορτώσουμε με δύο τρόπους 

```js
    import * as path from 'node:path';

    const path = require('node:path');
```

Μπορούμε να πάρουμε στοιχεία για ένα filepath

```js
    const notes = '/users/joe/notes.txt';

    path.dirname(notes); // /users/joe
    path.basename(notes); // notes.txt
    path.extname(notes); // .txt
```

Πως γράφουμε paths:
```js
    '/home/docs/mydoc.txt' // Absolute path ξεκινάει από το κεντρικό μας directory

    '.' // Το folder στο οποίο βρσκόμαστε
    '..' // Parent folder
```
Αν έχουμε τα παρακάτω folders
```
    project
        file.js
        functions
            func1.js
        objects
        data
            users
                user1.js
                user2.js
                userdata
                    data.js
            posts
                post1.js
```

Τότε ξεκινόντας από το αρχείο `user1.js`
```js
    './user2.js'
    './userdata/data.js'
    '../posts/post1.js'
    '../../project/functions/func1.js'
    '../../project/file.js'
```
Πως παίρνουμε πληροφορίες για ένα path σαν object

```js
    path.parse('/home/user/dir/file.txt');
    // Returns:
    // { root: '/',
    //   dir: '/home/user/dir',
    //   base: 'file.txt',
    //   ext: '.txt',
    //   name: 'file' }
```

```
    ┌─────────────────────┬────────────┐
    │          dir        │    base    │
    ├──────┬              ├──────┬─────┤
    │ root │              │ name │ ext │
    "  /    home/user/dir / file  .txt "
    └──────┴──────────────┴──────┴─────┘
```

Το αντίθετο του `path.parse()`  είναι το `path.format(pathObject)` που παίρνει σαν παράμετρο ένα path objectόπως το παραπάνω και μας επιστρέφει το path σαν string


Πως δημιουργούμε ένα absolute path από strings

```js
    path.resolve('joe.txt'); // '/Users/joe/joe.txt' if run from my home folder
    path.resolve('tmp', 'joe.txt'); // '/Users/joe/tmp/joe.txt' if run from my home folder
```

Πως ενώνουμε strings σε ένα path
```js
    path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
    // Returns: '/foo/bar/baz/asdf'
```

## file

Το module fs (file system) μας δίνει εργαλεία για να διαβάζουμε και να γράφουμε αρχεία στο σύστημα μας. Το διάβασμα αρχείων είναι μία ενέργεια που παίρνει χρόνο για αυτό και συνηθίζουμε να την κάνουμε ασύγχρονα. Σήμερα η Node μας δίνει τη δυνατότητα να δουλέψουμε με Promises και async / await.

```js
    import * as fs from 'node:fs/promises';
```

Το fs μας δίνει πολλές μεθόδους για να δουλέψουμε με αρχεία:

```js
    fs.writeFile(fileName, data); // Για να γράψουμε το περιεχόμενο data στο αρχείο fileName

    fs.appendFile(fileName, data); // Για να προσθέσουμε το περιεχόμενο data στο τέλος του αρχείου fileName

    fs.readFile(filePath); // Για να διαβάσουμε τα περιεχόμενα του αρχείου που βρίσκεται στο filePath. Syn;huvw uα πρέπει να τα μετατρέψουμε σε string

    fs.rename(from, to); // Για να αλλάξουμε όνομα σε ένα αρχείο

    fs.copyFile(from, to); // Για να αντιγράψουμε ένα αρχείο

    fs.unlink(filePath); // Για να σβήσουμε ένα αρχείο

    fs.mkdir(path); // Για να φτιάξουμε ένα folder 

    fs.readdir(path); // Για να διαβάσουμε τα περιεχόμενα ενός folder (να έχουμε τα ονόματα των αρχείων σε array)
```
Αυτές είναι οι βασικές μέθοδοι αλλά το module fs έχει αρκετές ακόμα.

## url 

Το module url μας δίνει τη δυνατότητα να δουλέψουμε με urls. Εχει πολλές μεθόδους αλλά όλες βασίζονται στο url object. Αν καταλάβουμε αυτό μετά μπορούμε εύκολα να βρούμε τη μέθοδο που χρειαζόμαστε:

```
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │          host          │           path            │ hash  │
│          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │    hostname     │ port │ pathname │     search     │       │
│          │  │                     │                 │      │          ├─┬──────────────┤       │
│          │  │                     │                 │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          ├─────────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
└──────────┴──┴──────────┴──────────┴────────────────────────┴──────────┴────────────────┴───────┘

```

