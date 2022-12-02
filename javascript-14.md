# Modules

Όσο η εφαρμογή μας μεγαλώνει αρχίζει και γίνεται δύσκολο να έχουμε όλο τον κώδικα σε ένα αρχείο. Επίσης μπορέι να έχουμε κομμάτια κώδικα που μας είναι χρήσιμα σε διαφορετικές εφαρμογές, σαν ένα είδος βιβλιοθήκης. Για αυτό θέλουμε ένα τρόπο να εισάγουμε κώδικα από ενα αρχείο στο άλλο. Στη σύγχονη JavaScript ο τρόπος αυτός είναι τα modules. Εχουν υπάρξει και άλλοι τρόποι αλλά σήμερα έχουν ιστορική μ΄νο αξιά ή τους συναντάμε σε παλιότερο κώδικα.

Το module είναι ένα αρχείο JavaScript. Κάθε module μπορεί να "εξάγει" μεταβλητές για να εισαχθούν από άλλα modules ή και να "εισάγει" μεταβλητές από άλλα modules.

## export

```js
    // lib.js
    export const items = ['one', 'two', 'three'];

    export function hi() {
        alert('Hi');
    }

    function hello() {
        alert('Hello');
    }

    const year = 2022;

    export { hello, year };

```

## import 
```js
    import { items, hello } from './lib.js';
    
    hello();
```

```js
    import * as lib from './lib.js';
    
    lib.hello();
```

```js
    import { hello as sayHello } from './lib.js';
    
    sayHello();
```

## export default
```js
    // hello.js
    export default function hello() {
        alert('Hello');
    }
```

```js
    import hello from './hello.js';
    import hi from './hello.js'; 
```

```js
    // hello.js
    export default function() {
        alert('Hello');
    }
```

## import - export
```js
    // hello.js
    export function hello() {
        alert('Hello');
    }
```
```js
    // index.js
    export { hello } from './hello.js';

```

## NPM

Το npm είναι ένα εργαλείο που μας επιτρέπει να εισάγουμε στον κώδικα μας modules γραμμένα από άλλους developers και ταυτόχρονα είναι και η βιβλιοθήκη αυτών των modules.

https://www.npmjs.com/

Μέσω του npmjs.com μπορούμε να ψάξουμε για modules που μας χρειάζονται. Για να εισάγουμε npm modules στον κώδικα μας το πρώτο που χρειάζεται είναι να έχουμε ένα αρχείο `package.json` στο κεντρικό folder. Το αρχείο αυτό μπορούμε να το δημιουργήσουμε αυτόματα τρέχοντας στην κονσόλα την εντολή `npm init`. (Το npm έχει εγκατασταθεί στον υπολογιστή και στην κονσόλα μαζί με τη Node).

```json
    {
        "name": "my-project",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC"
    }
```

Εγκαθιστούμε ένα module μέσω της κονσόλας με την εντολή `npm install module-name`. Με το που θα εγκαταστήσουμε το πρώτο module αυτό θα μπει στο `package.json`

```json
    {
        "name": "my-project",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC",
        "dependencies": {
            "dayjs": "^1.11.6"
        }
    }
```

Δημιουργείται ένα object dependencies με τα ονόματα και τις εκδόσεις για κάθε package που εγκαθιστούμε. Όταν θέλουμε να εγκαταστήσουμε ένα module που είναι ένα προγραμματιστικό εργαλείο έχει χρήση μόνο για όσο γράφουμε κώδικα αλλά δεν χρειάζεται ναπεριλαμβάνεται στο τελικό application το κάνουμε προσθέτοντας στην εντολή `npm install module-name` το `--save-dev`. Σε κάθε περίπτωση με το που θα τρέξει για πρώτη φορά το `npm install` θα δημιουργήσει στη βάση του project ένα φάκελο `node_modules`. Αφήνουμε αυτό το φάκελο να τον διαχειριστεί το npm χωρίς να επέμβουμε εμείς και χωρίς να τον σώζουμε μαζί με τον κώδικα μας (πχ σε git). Μπορεί να επαναδημιουργηθεί όσο υπάρχει το `package.json`, το οποίο πρέπει να διατηρούμε μαζί με τον κώδικα.

Το κάθε module που εγκαθιστούμε από το npm έχει οδηγίες με το τι μπορούμε να κάνουμε import από αυτό.

## Build tools

Αν και οι σύγχονοι browsers καταλαβαίνουν τα imports αποφεύγουμε να τα αφήνουμε στον τελικό μας κώδικα. Προτιμάμε να χρησιμοποιήσουμε κάποιο εργαλείο που θα "διαβάσει" τον κώδικα μας ξεκινόντας από το αρχείο στο οποίο κάνουμε όλα τα imports και θα τα ακολουθήσει δημιουργόντας τελικα ένα μόνο αρχείο που θα έχει όλο τον απαραίτητο κώδικα και τίποτα παραπάνω. Το πιο διαδεδομένο build tool τα τελεταία χρόνια είναι το Webpack. Επειδή είναι αρκετά πολύπλοκο στο πως σετάρεται, έχουν εμφανιστεί και απλούστερες λύσεις όπως το Parcel. 

```
npm install --save-dev parcel
```
Εγκαθιστούμε το Parcel με npm και μετά τρέχουμε την παρακάτω εντόλή

```
npx parcel index.html
```
Όπου στη θέση του index.html μπορούμε να έχουμε το αρχείο από το οποίο ξεκινάει η εφαρμογή μας. Το Parcel μπορεί να δουλέψει για το σύνολο της εφαρμογής μας ή μόνο για τη JavaScript.

Τέλος μπορούμε να προσθέσουμε τα παρακάτω στο `package.json`:

```json
    {
        "source": "index.html",
        "scripts": {
            "start": "parcel",
            "build": "parcel build"
        },
        "devDependencies": {
            "parcel": "latest"
        }
    }
```
Τώρα με την εντολή `npm run start` θα τρέχει ο dev server του Parcel (αντί για το Go Live που χρησιμοποιούσαμε) και παράλληλα το Parcel θα κάνει ένα bundle του κώδικα μας και θα παρακολουθεί τις αλλαγές. Με την εντολή `npm run build` το Parcel θα δημιουργήσει ένα folder με τον τελικό κώδικα της εφαρμογής.

## Άλλα tools

Υπάρχουν πολλά άλλα εργαλεία που μπορείτε να εισάγετε στο project σας σαν devDependencies για να σας βοηθήσουν. Από τα πιο διαδεδομένα είναι το `eslint` που βρίσκει και διορθώνει λάθη στον κώδικα και το `pretier` που φροντίζει αυτόματα να τηρεί ο κώδικας σας κάποια στάνταρ ως προς το formating, (κενά, κόμματα, κλπ).
