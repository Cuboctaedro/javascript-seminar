# Typescript

Όταν γράφουμε JavaScript όλες οι μεταβλητές και οι παράμετροι των συανρτήσεων μπορούν να έχουν οιποδήποτε τύπο ή και να αλλάξουν τύπο.

```js
    let a = 'text';
    a = 3;
    a = false;

    function say(b) {
        alert(b);
    }

    say('Yes');
    say(3);
```

Αυτό μπορεί να οδηγήσει σε λάθη για αυτό και είδαμε πολλά παραδείγματα όπου στις συναρτήσεις μας έπρεπε να ελέγχουμε αν έχουμε τη σωστή παράμετρο.

Όταν δουλέυουμε με objects και classes το πρόβλημα είναι πολύ πιο σημαντικό γιατί τότε σε διάφορα σημεία του κώδικα μας θέλουμε οι παράμετροι να έχουν συγκεκριμένα properties. Καθώς οι απαιτήσεις των online εφαρμογών αυξάνονται και η JavaScript βρίσκει όλο και περισσότερες χρήσεις υπάρχει η ανάγκη για μία πιο αυστηρή δομή. Η σημερινή ανάγκη είναι για μία γλώσσα που να έχει όσο πιο πλήρεις object oriented δυνατότητες καθός και τη δυνατότητα ορισμού τύπων. Έχουν εμφανιστεί διάφορες λύσεις αλλά αυτή που τελικα κυριαρχεί σήμερα είναι η TypeScript. 

## Ορισμός types και interfaces

Η TypeScript είναι ουσιαστικά ένα υπερσύνολο της JavaScript. Ότι κώδικα γράψουμε σε JavaScript μπορεί να λειτουργήσει άμεσα σαν TypeScript. Πέρα από αυτό όμως μας προσφέρει μία σειρά από operators που μας βοηθάνε να ορίσουμε τους τύπους των μεταβλητών μας αλλά και εργαλεία για να δουλέψουμε με classes όπως σε μία πιο πλήρη object oriented γλώσσα.

```ts
    let hello = 'Hello';

    hello = 3; // Type 'number' is not assignable to type 'string'
```

```ts
    let hello: string;

    hello = 3; // Type 'number' is not assignable to type 'string'
```
Η TypeScript μπορεί να καταλάβει τον τύπο μίας μεταβλητής από την τιμή του. Σε περίπτωση που αυτό δεν είναι ξεκάθαρο, μπορούμε εμείς να ορίσουμε τον τύπο.
Οι βασικοί τύποι που υπάρχουν στην TypeScript είναι string, number, boolean, null και undefined. Χρησιμποιόντας αυτούς μπορούμε να ορίσουμε όποιον σύνθετο τύπο χρειαζόμαστε.

Έχουμε δύο τρόπους να ορίζουμε arrays:

```typescript
    let stringArray1: Array<string>;

    let stringArray2: string[];
```
Μπορούμε να ονοματήσουμε τύπους με τα type και interface

```typescript
    interface User {
        name: string
        age: number
    }

    let user1: User = {
        name: 'John',
        age: 35,
    };
```

```typescript
    type User = {
        name: string
        age: number
    };

    let user1: User = {
        name: 'John',
        age: 35,
    };
```
Μπορούμε να χρησιμποιήσουμε ένα interface σε class:

```ts
    class UserAccount implements User {
        name: string;
        age: number;
        
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    const user: User = new UserAccount("John", 41);
```

Και μπορούμε να το χρησιμοποιήσουμε σε παραμέτρους από function αλλά και για να ορίσουμε τι τιμή επιστρέφει το function.

```typescript
    function getAdminUser(): User {
    //...
    }
    
    function deleteUser(user: User) {
    // ...
    }
```

Μπορούμε να ορίσουμε πλήρως τον τύπο μίας σύναρτησης.

```typescript
    type Add = (a: number, b: number) => number;

    const add: Add = (a: number, b: number) => {
        return a + b;
    }
```

## Setup

Για να μπορείτε να εκτελείτε αρχεία typescript άμεσα από το VS Code θα πρέπει να έχετε εγκατεστημένη την typescript και το ts-node σαν global modules στον υπολογιστή σας.

```
    npm install -g typescript
    npm install -g ts-node
```

Αν θέλετε να κάνετε εσείς compile ένα αρχείο από ts σε js μπορείτε να το κάνετε μέσω command line αφού έχετε εγκαταστήσει πρώτα την typescript.

```
    tsc myfile.ts
```

Αν χρησιμοποιείτε Parcel αυτό θα αναγνωρίσει αυτόματα τα αρχεία με κατάληξη .ts σαν TypeScript και θα κάνει το compile σε JavaScript. Μπορείτε να εισάγετε άμεσα το αρχείο .ts στο html script tag και το Parcel θα αναλάβει τα υπόλοιπα.

Για πιο πολύπλοκα projects καλό είναι να έχετε στη βάση του project (μαζί με το package.json) ένα αρχείο `tsconfig.json`. Σε αυτό μπορούν να οριστούν πάρα πολλές επιλογές στο πως θα δουλέψει η TypeScript.

```json
    {
        "compilerOptions": {
            "module": "system",
            "noImplicitAny": true,
            "removeComments": true,
            "preserveConstEnums": true,
            "outFile": "../../built/local/tsc.js",
            "sourceMap": true
        },
        "include": ["src/**/*"],
        "exclude": ["node_modules", "**/*.spec.ts"]
    }
```

