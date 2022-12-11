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

## Πως να σώζουμε δεδομένα σε αρχεία αντί για database, YAML και Markdown

Ξέρουμε ότι μπορούμε να σώσουμε δεδομένα από τη Javacript σε μορφή JSON και να τα διατηρήσουμε σε αρχείο. Χρησιμποιόντας τη Node μπορούμε να σώσουμε τα data μιας εφαρμογής με αυτό τον τρόπο. Επίσης αν θέλουμε να έχουμε κάποιο μορφοποιημένο περιεχόμενο (με bold, italic, τιτλους, κλπ) μπορούμε να το σώσουμε ως html. Και οι δύο μέθοδοι όμως χρειάζονται κάποιο user interface για να δημιουργούμε τα δεδομένα καθώς είναι αρκετά δύσκολο να γράφουμε εμείς σε αρχεία JSON ή html και πρακτικά αδύνατο για χρήστες χωρίς γνώσεις προγραμματισμού.

Υπάρχει ένας τρόπος να σώζουμε αντίστοιχα δεδομένα σε αρχεία που να είναι πιο εύκολο να τα ανανεώσουμε άμεσα σε έναν text editor. Ακόμα και αν δεν είναι ένας ρεαλιστικός τρόπος για να φτιάξετε μία εφαρμογή για πελάτες είναι ένας τρόπος που χρησιμοποιείται συχνά από developers για να φτιάχνουν τα προσωπικά τους site και blog.

### Markdown

Το Markdown είναι ένας τρόπος να γράφουμε κείμενο και με κάποια σύμβολα να χαρακτηρίζουμε κομμάτια του έτσι ώστε μετά να μπορούν να "μεταφραστούν" σε κανονικό html. Όλες αυτές οι σημειώσεις, καθώς και όλα τα αρχεία readme στο GitHub είναι γραμμένα με αυτό τον τρόπο. Οι βασικές αρχές είναι οι παρακάτω:

```md
    # Τίτλος h1
    ## Τίτλος h2
    ### Τίτλος h3
    #### Τίτλος h4
    ##### Τίτλος h5
    ###### Τίτλος h6

    Ανάμεσα στις παραγράφους αφήνουμε μία κενή σειρά.

    Όπως εδώ. Για να έχουμε *em tag, δηλαδή italics* και για να έχουμε *strong tag, δηλαδή bold*. Και μπορούμε να έχουμε ***και τα δύο***.
    
    1. Έτσι μπορούμε να
    2. έχουμε μια
    3. Ordered list (ol)

    * Και έτσι
    * μπορούμε να έχουμε
    * μία unordered list (ul)

    Αν θέλουμε μαρκάρουμε μία λέξη σαν `code`.

    Μπορούμε να έχουμε rules

    ---

    Και να έχουμε και [Links](http://example.com)

```

Υπάρχουν και πολλά άλλα που μπορούν να γίνουν με markdown όπως code blocks, tables και img tags.

Η Node μπορεί να διαβάσει Markdown και να το μετατρέψει σε html string μέσω  modules όπως το Marked και το markdown-it.

### YAML

Το YAML είναι μία μορφή σειριοποίησης δεδομένων παρόμοια με το JSON αλλά είναι πολύ πιο εύκολο να γραφτεί.

```json
    {
        "title": "My first website",
        "date": "2022-12-11T10:44:14.931Z",
        "author": {
            "name": "John Smith",
            "email": "smith@example.com"
        },
        "tags": [
            "web development",
            "javascript"
        ],
        "id": 001
    }
```

```yaml
    title: "My first website"
    date: "2022-12-11T10:44:14.931Z"
    author:
        name: "John Smith"
        email: "smith@example.com"
    tags:
      - "web development"
      - "javascript"
    id: 001
```

Η Node μπορεί να μετατρέψει ένα αρχείο YAML σε JavaScript object μέσω modules όπως το yaml.

### Συνδυασμός markdown και yaml

Μπορούμε να συνδυάσουμε τις δύο γλώσσες σε ένα αρχεί με τον παρακάτω τρόπο:

```
---
title: "My first website"
date: "2022-12-11T10:44:14.931Z"
author:
    name: "John Smith"
    email: "smith@example.com"
tags:
    - "web development"
    - "javascript"
id: 001
---

# My first website

This is my first website. I made it using *node.js*, *markdown* and *yaml*.
```
Μπορούμε να σώσουμε τα παραπάνω σε ένα αρχείο όπως `post-01.md` ή `post-01.yaml`. Το κομμάτι ανάμεσα στα `---` είναι yaml και ονομάζεται συνήθως  front matter και το υπόλοιπο είναι markdown και είναι το content. Υπάρχουν modules για τη Node που μας επιρέπουν να διαβάσουμε εύκολα τέτοια αρχεία όπως το gray-matter.

Στην παραπάνω περίπτωση το gray-matter σε συνδυασμό με το markdown-it θα μας δώσει τελικά κάτιε τέτοιο στη JavaScript:

```js
    const parsedFile = {
        data: {
            title: "My first website",
            date: "2022-12-11T10:44:14.931Z",
            author: {
                name: "John Smith",
                email: "smith@example.com",
            },
            tags: [
                "web development",
                "javascript"
            ],
            id: 001,
        },
        content: `
            <h1>My first website</h1>
            <p>This is my first website. I made it using <em>node.js</em>, <em>markdown</em> and <em>yaml</em>.</p>
        `,
    }
```

Από εκεί και πέρα μπορούμε να γράψουμε ένα script που θα διαβάζει όλα τα αρχεία που θα βρίσκονται σε ένα συγκεκριμένο φάκελο sto 'src' δημιουργόντας τέτοια objects και μετά θα χρησιμποιεί κάποιο έτοιμο html το οποίο θα γεμίζει με αυτά τα data και θα το σώζει τελικά σαν αρχείο html σε έναν φάκελο στο 'dist'. Έτσι θα δημιουργήσουμε ένα στατικό site από μάι σειρά αρχείων.


## Web Server

Η Node περιέχει τα modules http και https που μπορούν να χρησιμοποιηθούν για να δημιουργήσουν ένα web server. 

```js
    const http = require('http');

    http.createServer(function (request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('Hello World!'); //write a response to the client
        response.end(); //end the response
        console.log('Listening on http://localhost:8080/')
    }).listen(8080); //the server object listens on port 8080
```

Οι παράμετροι `req` και `response` είναι αντίστοιχα το request object που δέχεται ο server και το response object που θα δώσει.

Μπορούμε λοιπόν να διαβάσουμε στοιχεία από το request και να τα χρησιμοποιήσουμε στην απάντηση μας:

```js
    const http = require('http');

    http.createServer(function (request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(`
            <h1>Hello!</h1>
            <p>You asked for <code>${request.url}</code></p>`
        );
        response.end();
        console.log('Listening on http://localhost:8080/')
    }).listen(8080);
```
