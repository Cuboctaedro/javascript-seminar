# Αντικείμενα - Objects

Ο αντικειμενοστρεφής προγραμματισμός είναι μία μεθοδολογία που εμφανίστικε στα τέλη της δεκαετίας του 1960. Πλέον αποτελεί την πιο συνηθισμένη μεθοδολογία οργάνωσης κώδικα. Υπάρχουν γλώσσες, όπως η Java, που προορίζονται, σχεδόν μόνο για αυτό το είδος προγραμματισμού. Η JavaScript δεν είναι μια αυστηρά Object Oriented γλώσσα. Παρ΄όλα αυτά, στα "παρασκήνια" της JavaScript τα αντικείμενα χρησιμοποιούνται παντού.

Στην καθημερινή χρήση της JavaScript τα αντικείμενα χρησιμεύουν πάνω απ' όλα σαν τρόπος οργάνωσης δεδομένων.

## Τι είναι ένα αντικείμενο

Το object είναι μία συλλογή μεταβλητών (key - value), με απλές ή σύνθετες τιμές. Γράφεται έτσι:

```js
    let user = {
        name: 'John',
        age: 23,
    };
```
Όπως είπαμε μπορεί να έχει και σύνθετες τιμές:

```js
    let user = {
        name: {
            first: 'John',
            last: 'Snow',
        },
        getFullName: function() {
            return `${this.name.first} ${this.name.last}`;
        },
        age: 23,
        isAdmin: true,
    };
```

## Δημιουργία objects

```js

    let user1 = new Object();  // "object constructor" 
    let user2 = {};            // "object literal"

    let user3 = {              // "object literal" με properties
        age: 30,
    }; 

```


## Object properties

Για να πάρουμε την τιμή μία ιδιότητας:

```js
    let userAge = user.age;
    let name = user.getFullName();
    let firstName = user.name.first;
```

Αλλαγές στα properties:

```js
    const user = {
        name: 'John',
        age: 23,
    };

    user.name = 'George';  // αλλάζουμε
    user.isAdmin = true;   // προσθέτουμε
    delete user.age;       // αφαιρούμε

```

Συνήθως γράφουμε τα όνοματα (keys) των ιδιοτήτων χωρίς κενά αλλά δεν είναι απαραίτητο:

```js
    let user = {
        name: 'John',
        age: 23,
        "is admin": true,
    };

    let isAdmin = user["is admin"];

    let name = user['name'];
```

Μπορούμε να χρησιμοποιήσουμε `[]` όταν έχουμε το key που θέλουμε σαν μεταβλητή:

```js
    let user = {
        name: 'John',
        age: 23,
        isAdmin: true,
    };

    const IS_ADMIN_KEY = 'isAdmin';

    let isAdmin = user[IS_ADMIN_KEY];
    // true

    let isAdmin = user.IS_ADMIN_KEY;
    // undefined !!!
```

Μπορούμε να χρησιμοποιήσουμε `[]` και για να ορίσουμε ιδιότητες:

```js
    const IS_ADMIN_KEY = 'isAdmin';

    let user = {
        name: 'John',
        age: 23,
    };

    user[IS_ADMIN_KEY] = true;

```

```js
    const IS_ADMIN_KEY = 'isAdmin';

    let user = {
        name: 'John',
        age: 23,
        [IS_ADMIN_KEY]: true,
    };

```

Μπορούμε να χρησιμοποιήσουμε keywords της JavaScript σαν property keys:

```js
    let return = true; /// No, no, no!!!

    let user = {       /// Yes
        name: 'John',
        return: true,
        let: false,
        for: 'Jane',
        if: 'married',
    }
```
Το ότι μπορούμε δεν σημαίνει ότι είναι και καλή ιδέα.


Όταν παίρνουμε την τιμή ενός property από μία μεταβλητή που έχει ίδιο όνομα με το key του property μπορούμε να κάνουμε αυτό:

```js
    /*
    property value shorthand
    */
    
    let user1 = {
        name: 'John',
        age: 23,
        isAdmin: true,
    };

    let name = 'George';
    let age = 30;
    let isAdmin = false;

    let user2 = {
        name,       // name: name,
        age,        // age: age,
        isAdmin,    // isAdmin: isAdmin,
    };

    console.log(user2.name);
    // 'George'

```

Τι γίνεται όταν προσπαθούμε να προσσεγγίσουμε μία ιδιότητα που δεν υπάρχει:

```js
    let user = {
        name: 'John',
        age: 23,
    };

    console.log(user.address);
    // udefined

    console.log(user.address.street);
    // TypeError: Cannot read properties of undefined (reading 'street')
```

Η λυση είναι το optional chaining `?.`.

```js
    let user = {
        name: 'John',
        age: 23,
    };

    console.log(user?.address);
    // udefined

    console.log(user?.address?.street);
    // udefined
```

Πως μπορούμε να ελέγξουμε αν υπάρχει ένα property:

```js
    let user = {
        name: 'John',
        age: 23,
    };

    console.log('address' in user);
    // false

    console.log('age' in user);
    // true
```

Γιατί χρειάζεται το in:

```js
    let user = {
        name: 'John',
        age: undefined,
    };

    if (user.age) {
        console.log('It exists');
    } else {
        console.log('Its missing');
    }

    if ('age' in user) {
        console.log('It exists');
    } else {
        console.log('Its missing');
    }
```

### Loop object properties

Υπάρχει μία διαφορετική χρήση του keyword `for` για objects.

```js
    let user = {
        name: 'John',
        age: 23,
        isAdmin: true,
    };

    for (let key in user) {
        console.log(`User ${key} is ${user[key]}`);
    }

```

Επήσης μπορούμε να πάρουμε τα keys ή τις τιμές ή και τα δύο σαν arrays:

```js
    let user = {
        name: 'John',
        age: 23,
        isAdmin: true,
    };

    console.log(Object.keys(user));     // [ 'name', 'age', 'isAdmin' ]
    console.log(Object.values(user));   // [ 'John', 23, true ]
    console.log(Object.entries(user));  // [ [ 'name', 'John' ], [ 'age', 23 ], [ 'isAdmin', true ] ]
```

## Object methods

Οπως είδαμε ένα object μπορεί να περιλαμβάνει και functions.

```js
    let user = {
        name: 'John',
        age: 23,
        isAdmin: true,
        sayHi: function() {
            console.log("Hello");
        }

        user.sayHi();
        // Hello
    };
```

```js
        function sayHi() {
            console.log("Hello");
        }
        
        let user = {
        name: 'John',
        age: 23,
        isAdmin: true,
        sayHi: sayHi,
    };
```

```js
    let user = {
        name: 'John',
        age: 23,
        isAdmin: true,
        sayHi() {
            console.log("Hello");
        }
    };
```

Πολύ συχνά σε μία μέθοδο χρειαζόμαστε να προσσεγγίσουμε μία άλλη ιδιότητα του object. Αυτό γίνεται με το `this`.

```js
    let user = {
        name: 'John',
        age: 23,
        isAdmin: true,
        sayName() {
            console.log(this.name);
        }
    };
```

Το `this` παίρνει σαν τιμή το object από το οποίο καλείται (όχι από το που ορίζεται όπως συμβαίνει σε άλλες γλώσσες).

```js
    let user1 = { name: 'John' };
    let user2 = { name: 'Mary' };


    function sayName() {
        console.log(this.name);
    }

    user1.sayName = sayName;
    user2.sayName = sayName;

    user1.sayName();
    // John

    user2.sayName();
    // Mary

    sayName();
    // undefined
```

Τα arrow functions δεν έχουν `this`.

```js
    let user = {
        name: 'John',
        age: 23,
        isAdmin: true,
        sayName: () => {
            console.log(this.name);
        }
    };

    user.sayName();
    // undefined
```

## Δημιουργία objecs

Συνήθως ενδιαφερόμαστε να έχουμε πολλά διαφορετικά objects που να έχουν την ίδια δομή (ίδια properties).
Αυτό θα μπορούσαμε να το πετύχουμε με ένα function:

```js
    function makeUser(name, age) {
        return {
            name,
            age,
            isAdmin: false,
        };
    }

    const user1 = makeUser('John', 35);
    console.log(user1.name);
```

Υπάρχει όμως έτοιμος τρόπος στη JavaScript για να γίνει το ίδιο με το keyword `new`.

```js
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.isAdmin = false;
    }

    const user1 = new User('John', 35);
    console.log(user1.name);
```

Δηλαδή όταν καλούμε ένα function με new συμβαίνει κάτι τέτοιο:

```js
    function User(name, age) {
        //let this = {};  (implicitly)
        this.name = name;
        this.age = age;
        this.isAdmin = false;
        // return this;  (implicitly);
    }
```

Τι γίνεται αν χρησιμοποιήσουμε return μέσα σε ένα τέτοιο function.

```js
    function AdminUser() {
        this.isAdmin = false;
        return { isAdmin: true }; // Θα μας δώσει αυτό
    }

    let admin = new AdminUser();

    console.log(admin.isAdmin);
    // true

    function User() {
        this.isAdmin = false;
        return; // Θα μας δώσει το this
    }
```

Μέσα σε ένα constructor function μπορούμε να προσθέσουμε ότι χρειαζόμαστε να έχει ένα object.

```js
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.isAdmin = false;
        this.sayName = function() {
            console.log('My name is ' + this.name);
        }
    }

    const user1 = new User('John', 23);
    user1.sayName();
    // 'My name is John'
```

## Object copies

Σε αντίθεση με τις απλές τιμές, τα objects δεν δημιουργούν αντίγραφο όταν τα δίνουμε σε μια νέα μεταβλητή:

```js
    let message = "Hello!";
    let phrase = message;

    message = 'Hi';

    console.log(message); // Hi
    console.log(phrase); // Hello
```

```js
    let user = { name: 'John' };

    let admin = user;

    user.name = 'Mary';

    console.log(user.name);
    console.log(admin.name);
```
https://javascript.info/object-copy

Αυτό σημαίνει ότι δύο objects είναι ίσα μόνο όταν πρόκειται για το ίδιο object:

```js
    let user = { name: 'John' };

    let admin = { name: 'John' };

    console.log(user == admin); // false

    let user2 = user;

    console.log(user == user2); // true
    console.log(user === user2); // true
```

Πώς μπορούμε λοιπόν να δημιουργήσουμε ανεξάρτητα αντίγραφα ενός object:

```js
    let user = {
        name: 'John',
        age: 30,
    };

    let admin = {};

    for (let key in user) {
        admin[key] = user[key];
    };

    user.name = 'Mary';

    console.log(user.name);
    console.log(admin.name);
```
Υπάρχει επίσης και το `Object.asign` που μεταφέρει σε ένα object όλα τα properties άλλων:

```js
    let user = {
        name: 'John',
        age: 30,
    };

    let permissions = { canView: true };

    let admin = {};

    Object.assign(admin, user, permissions);

    user.name = 'Mary';

    console.log(user);
    console.log(admin);
```

Αν το object στο οποίο μεταφέρουμε τα στοιχεία έχει ήδη property με το ίδιο key αυτό θα πάρει την καινούρια τημή

```js
    let user = {
        name: 'John',
        age: 30,
    };

    let admin = {
        age: 40
    };

    Object.assign(admin, user);

    console.log(admin.age); // 30
```

Οπότε με το `Object.asign` μπορούμε να κάνουμε αντίγραφα:

```js
    let user = {
        name: 'John',
        age: 30,
    };

    let admin = Object.assign({}, user);
```

### Deep copy

```js
    let user = {
        name: {
            first: 'John',
            last: 'Show',
        },
        age: 30,
    };

    let admin = Object.assign({}, user);

    user.name.first = 'George';

    console.log(admin.name.first); // 'George'
```

Για αυτή την περίπτωση υπάρχει το `structuredClone`.

```js
    let user = {
        name: {
            first: 'John',
            last: 'Show',
        },
        age: 30,
    };

    let admin = structuredClone(user);

    user.name.first = 'George';

    console.log(admin.name.first); // 'George'
```

## Ασκήσεις

Γράψτε ένα function που να "καθαρίζει" ένα object από ιδιότητες που δεν θέλουμε:

```js
    function objectClean(object, property) {
        // your function
    }

    let user = {
        name: 'John',
        age: 30,
        isAdmin: false,
    };

    objectClean(user, 'age');
    // Θα πρέπει να μας δώσει:
    // { name: 'John', isAdmin: false }

```

Γράψτε ενα function `printUser(user)` που να γράφει στην κονσόλα τα στοιχεία του χρήστη με αυτόν τον τρόπο: 

"Smith, John, 34. Address: 23, Main, Athens. Not Admin" 

για object με την παρακάτω δομή:

```js
    const user = {
        name: {
            first: 'John',
            last: 'Smith',
        },
        age: 34,
        address: {
            street: 'Main',
            number: 23,
            city: 'Athens',
        },
        isAdmin: false,
    }

```