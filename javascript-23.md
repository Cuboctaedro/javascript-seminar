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

## any

Η TypeScript μας δίνει τον τύπο any που μπορεί να είναι οτιδήποτε και χρησιμεύει για τις περιπτώσεις που έχουμε μία μεταβλητή με άγνωστο τύπο.

```ts
    let obj: any = { x: 0 };
    // None of the following lines of code will throw compiler errors.
    // Using `any` disables all further type checking, and it is assumed 
    // you know the environment better than TypeScript.
    obj.foo();
    obj();
    obj.bar = 100;
    obj = "hello";
    const n: number = obj;
```

Σε περίπτωση που δεν έχουμε ορίσει τον τύπο μίας μεταβλητής και η TypeScript δεν μπορεί να βρει τον τύπο από την χρήση της μεταβλητής τότε τις δίνει αυτόματα τον τύπο `any`.

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
            "sourceMap": true
        },
        "include": ["src/**/*"],
        "exclude": ["node_modules", "**/*.spec.ts"]
    }
```

## Σύνθετοι τύποι

Η TypeScript μας δίνει πολλά εργαλεία για να συνθέσουμε τύπους. Ο πιο συνηθισμένος είναι η ένωση (union).

```ts
    type DeviceState = 'on' | 'off';

    type ID = number | string;

    let userID: ID;

    function printID(id: ID) {
        console.log(id.toUpperCase());
        // Property 'toUpperCase' does not exist on type 'string | number'.
        // Property 'toUpperCase' does not exist on type 'number'.
    }
```

```ts
    function printID(id: ID) {
        if (typeof id === "string") {
            console.log(id.toUpperCase()); // OK
        } else {
            console.log(id); 
        }
    }
```

Μπορούμε επίσης να επεκτείνουμε έναν τύπο. Αυτό γίνεται διαφορετικά για `type` και `interface`.

```ts
    type User = {
        email: string
        password: string
    }

    type Customer = User & {
        name: string
    }
```
```ts
    interface User {
        email: string
        password: string
    }

    interface Customer extends User {
        name: string
    }
```

Η μόνη σημαντική διαφορά ανάμεσα σε `type` και `interface` είναι ότι μόνο στο `interface` μπορούμε να προσθέσουμε attributes:

```ts
    interface Customer {
        email: string
        password: string
    }

    interface Customer {
        name: string
    }
```

```ts
    type Customer = {
        email: string
        password: string
    }

    type Customer = {
        name: string
    }
    // Error: Duplicate identifier 'Customer'
```

## Type Assertions

Μπορούμε αν θέλουμε να επιβεβαιώσουμε εμείς ότι κάτι έχει έναν τύπο, συνήθως για να του δόσουμε ένα πιο συγκεκριμένο τύπο από αυτό που βλέπει η TypeScript.

```ts
    const myCanvas = document.getElementById('contact-form') as HTMLFormElement;
    // Η TypeScript ξέρει ότι το getElementById μας δίνει ένα HTMLElement
```

## Utility Types

Στα objects μπορούμε να έχουμε properties που να μην είναι υποχρεωτικό να υπάρχουν.

```ts
    type User = {
        email: string
        password: string
        address?: string
    }

    const user1: User = {
        email: 'john@example.com',
        password: '1234',
    };

    
    const user2: User = {
        email: 'marry@example.com',
        password: '5678',
        address: 'London, UK',
    };

```
### Partial

Με το Partial κάνουμε όλα τα properties ενός object optional

```ts
    type User = {
        email: string
        password: string
        address: string
    }

    type UserData = Partial<User>;
    
    // type UserData = {
    //     email?: string
    //     password?: string
    //     address?: string
    // }
```

### Required

Το αντίστροφο του Partial

```ts
    type User = {
        email?: string
        password?: string
        address?: string
    }

    type CompleteUser = Required<User>;
    
    // type CompleteUser = {
    //     email: string
    //     password: string
    //     address: string
    // }
```

### Pick

```ts
    type User = {
        email: string
        password: string
        address: string
        name: string
    }

    type LoginData = Pick<User, 'email' | 'password'>;
    
    // type LoginData = {
    //     email: string
    //     password: string
    // }
```

### Omit

```ts
    type User = {
        email: string
        password: string
        address: string
        name: string
    }

    type PublicUser = Omit<User, 'password'>;
    
    // type PublicUser = {
    //     email: string
    //     address: string
    //     name: string
    // }
```

### Awaited

Όταν έχουμε ένα async function το αποτέλεσμα του θα είναι πάντα Promise. Για το τελικό αποτέλεσμα του Promise μπορούμε να χρησιμοποιήσουμε το Awaited.

```ts
    async function getUser(): Promise<User> {
        const user = await userdata;
        return user;
    }

    type UserData = Awaited<Promise<User>>;
    // type UserData = User;
```

## Classes

Με την TypeScript μπορούμε να δουλέψουμε με Classes όπως σε μία πλήρως object oriented γλώσσα. 

Κατ αρχήν μπορούμε να δηλώσουμε properties:

```ts
    class Point {
        x: number;
        y: number;
    }

```

Μπορούμε να έχουμε properties που δεν αλλάζει η τιμή τους:

```ts
    class Greeter {
        readonly greeting: string = 'Hello';

        name: string;

        constructor(name: string) {
            this.name = name;
        }

        greet(): string {
            return `${this.greeting} ${this.name}`;
        }
    }

```

### implements

Μπορούμε να τσεκάρουμε αν ένα class υλοποιέι κάποιο interface. Το implements δεν προσθέτει κάτι στοι class ούτε του αλλάζει τον τύπο, απλά ελέγχει ότι υπάρχουν τα properties και methods που ορίζει.


```ts
    interface Greeter {
        greet(): string
    }

    class GreeterImpl implements Greeter {
        readonly greeting: string = 'Hello';

        name: string;

        constructor(name: string) {
            this.name = name;
        }

        greet(): string {
            return `${this.greeting} ${this.name}`;
        }
    }

    class DefaultGreeter implements Greeter {
        greet(): string {
            return 'Hello Customer';
        }
    }
```

### Ορατότητα και encapsulation

Με την TypeScript μπορούμε να έχουμε πολύ πιο ξεκάθαρο encapsulation ορίζοντας για κάθε property και method αν είναι ορατό:

```ts
    class Greeter {
        private greeting: string = 'Hello';

        protected name: string;

        constructor(name: string) {
            this.name = name;
        }

        public greet(): string {
            return `${this.greeting} ${this.name}`;
        }
    }

    class SpecialGreeter extends Greeter {
        private specialGreeting: string = 'Good Morning';

        public greet(): string {
            return `${this.specialGreeting} ${this.name}`;
        }
    }

    const johnGreeter = new Greeter('John');

    console.log(johnGreeter.greeting); // Property 'greeting' is private and only accessible within class 'Greeter'.

    console.log(johnGreeter.name); // Property 'name' is protected and only accessible within class 'Greeter' and its subclasses.

    console.log(johnGreeter.greet()); // Hello John

    const marrySpecialGreeter = new SpecialGreeter('Marry');

    console.log(marrySpecialGreeter.greet()); // Good Morning Marry

```

Το subclass μπορεί να αφήσει κάποια properties να φαίνονται:

```ts
    class ChristmassGreeter extends Greeter {
        private specialGreeting: string = 'Merry Christmas';

        name: string;

        constructor(name: string) {
            super(name);
            this.name = name;
        }

        public greet(): string {
            return `${this.specialGreeting} ${this.name}`;
        }
    }

    const johnGreeter = new ChristmassGreeter('John');

    console.log(johnGreeter.name); // John

```

### abstract Classes

Ένα class μπορεί να είναι abstract οπότε δεν μπορεί να δημιουργήσει Objects αλλά λειτουργεί μόνο σαν βάση για να γίνει extend από άλλα classes.

```ts
    abstract class Greeter {
        protected greeting: string = 'Hello';

        abstract greet(): string;
    }

    class SpecialGreeter extends Greeter {
        protected name: string;

        constructor(name: string) {
            super();
            this.name = name;
        }

        public greet(): string {
            return `${this.greeting} ${this.name}`;
        }
    }

    const greeter = new SpecialGreeter('John');

    console.log(greeter.greet());

    const greeter2 = new Greeter('John'); // Cannot create an instance of an abstract class.
```

Εκτός από αυτά μπορούμε να έχουμε get και set όπως και στα classes της JavaScript.
