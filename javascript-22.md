# Classes

Όταν δουλεύουμε σε ένα σχετικά μεγάλο project συνήθως το μεγαλύτερο κομμάτι του κώδικα μας οργανώνεται με βάση κάποιο πρότυπο προγραμματισμού. Το πιο απλό είναι αυτό που έχουμε ακολουθήσει μέχρι τώρα, που λέγεται **Procedural programming**. Η βασική ιδέα είναι ότι απλά ορίζουμε μια σειρά από βήματα που πρέπει να ακολουθηθούν για να επιτευχθεί ο στόχος μας και αυτά εκτελούνται το ένα μετά το άλλο. Σε ένα μεγάλο project όμως αυτός ο τρόπος οργάνωσης κώδικα αρχίζει και γίνεται προβληματικός γιατί οδηγεί σε μεγάλη πολυπλοκότητα.

Μία άλλη μεθοδολογία είναι το **Functional programming**. Εδώ βασιζόμαστε σε μικρά functions τα οποία μπορούν να συνδυάζονται και να καλούνται αλυσιδωτά. Προσπαθούμε να γράψουμε το μεγαλύτερο μέρος του κώδικα σε pure functions  τα οποία δεν θα έχουν side effects. Ετσι προτιμάμε να χρησιμοποιούμε παντού σταθερές, `const`, και να μην μεταβάλλουμε τα δεδομένα μας. Το Functional programming είναι μία πολύ σημαντική μεθοδολογία και η JavaScript είναι μί αρκετά κατάλληλη γλώσσα για αυτό. Υπάρχουν γλώσσες, όπως η Haskell, που είναι ειδικά φτιαγμένες για αυτό τον τρόπο προγραμματισμού. Οι αρχές του Functional programming χρησιμοποιούνται στη δημιουργία πολλών libraries και frameworks που χρησιμοποιούμε συχνά όπως η React. Παρ' όλα αυτά το Functional programming είναι μία αυστηρή και πολλές φορές δυσνόητη μεθοδολογία για αυτό και σπάνια θα τη δούμε να χρησιμοποιείται σε πραγματικά project.

Η μεθοδολογία που κυριαρχεί στην αγορά και σε πραγματικά projects είναι το **Object Oriented Programming**. Εδώ οργανώνουμε τον κώδικα μας γύρω από objects και από πρότυπα δημιουργίας objects που τα ονομάζουμε classes. Κάθε class αντιστοιχεί σε ένα τύπο οντότητας που θα έχουμε στο πρόγραμμα μας. Για μία ειδησιογραφική ιστοσελίδα για παράδειγμα θα έχουμε ένα class που αντιστοιχεί στο άρθρο, άλλο για τον συγραφέα, άλλο για κάθε θεματική ενότητα κλπ. Επίσης μπορούν να υπάρχουν classes που δεν αντιστοιχούν σε οντότητες του κόσμου εκτός εφαρμογής αλλά σε εργασίες που πρέπει να γίνουν στην εφαρμογή, για παράδειγμα ένα class για authentication που θα ορίζει το πως αναγνωρίζονται οι χρήστες, ή ένα class για messaging που θα περιέχει τις λειτουργίες αποστολής email.

## Class syntax

Η βασική σύνταξη του πως δημιουργούμε classes δεν διαφέρει και πολύ από τα functions που χρησιμοποιούμε σαν object constructors. Και είναι αλήθεια ότι στα παρασκήνια, η JavaScript βλέπει τα Classes σαν functions. Όμως όπως θα δούμε παρακάτω η χρήση του `class` μας ανοίγει πολλές νέες δυνατότητες.

```js
    class MyClass {
        constructor() { ... }

        property1 = value1;
        property2 = value2;

        method1() { ... }
        method2() { ... }
        method3() { ... }
    }

```

## Κληρονομικότητα

Μία βασική χρήση των classes είναι η δυνατότητα να "επεκτείνουμε" ένα class δημιουργόντας "παιδιά".

```js
    class Animal {
        constructor(name) {
            this.speed = 0;
            this.name = name;
        }
        run(speed) {
            this.speed = speed;
            alert(`${this.name} runs with speed ${this.speed}.`);
        }
        stop() {
            this.speed = 0;
            alert(`${this.name} stands still.`);
        }
    }

    let animal = new Animal("My animal");

```

```js
    class Rabbit extends Animal {
        hide() {
            alert(`${this.name} hides!`);
        }
    }

    let rabbit = new Rabbit("White Rabbit");

    rabbit.run(5); // White Rabbit runs with speed 5.
    rabbit.hide(); // White Rabbit hides!
```

Χρησιμοποιόντας το extends δημιουργούμε ένα καινούριο class που έχει όλα τα methods και το constructor του αρχικού συν ότι του προσθέσουμε.

Μπορούμε, αν θέλουμε να επαναορίσουμε κάποια μέθοδο (override).

```js
    class Rabbit extends Animal {
        hide() {
            alert(`${this.name} hides!`);
        }

        stop() {
            this.speed = 0;
            alert(`Rabbit ${this.name} stopped.`);
        }
    }
```

Συνήθως όμως προτιμάμε να μην ξαναγράψουμε από την αρχή μία μέθοδο αλλά να την επεκτείνουμε, να αφήσουμε να γίνει η αρχική ενέργεια και να προσθέσουμε κάτι:

```js
    class Rabbit extends Animal {
        hide() {
            alert(`${this.name} hides!`);
        }

        stop() {
            super.stop(); 
            this.hide();
        }
    }
```

Μπορούμε σε ένα child class να κάνουμε override και στο constructor:

```js
    class Animal {

        constructor(name) {
            this.speed = 0;
            this.name = name;
        }
    }

    class Rabbit extends Animal {

        constructor(name, earLength) {
            super(name);
            this.earLength = earLength;
        }
    }
```

Πρέπει πάντα όταν κάνουμε override τον constructor να καλούμε πρώτα το `super()` πριν από κάθε άλλη ενέργεια έτσι ώστε να υπάρχει το `this`.

## static

Μπορούμε να δώσουμε σε ένα class properties και methods που δεν θα ανήκουν στα instances, δηλαδή στα objects που δημιουργούνται, αλλά στο ίδιο το class.

```js
    class User {
        static staticMethod() {
            alert(this === User);
        }
    }

    User.staticMethod(); // true

```

Τέτοια methods χρησιμοποιούνται για να εκτελέσουν ενέργειες που έχουν να κάνουν με το class γενικότερα και όχι με κάθε μέλος του.

```js
    class Article {
        constructor(title, date) {
            this.title = title;
            this.date = date;
        }

        static compare(articleA, articleB) {
            return articleA.date - articleB.date;
        }
    }

    // usage
    let articles = [
        new Article("HTML", new Date(2019, 1, 1)),
        new Article("CSS", new Date(2019, 0, 1)),
        new Article("JavaScript", new Date(2019, 11, 1))
    ];

    articles.sort(Article.compare);

    alert( articles[0].title ); // CSS

```
Η μέθοδος `compare` δεν ανήκει σε ένα άρθρο αλλά είναι μία λειτοργία που αφορά τα αρθρα γενικότερα. Θα μπορούσε να δημιουργηθεί και ως ένα αυτόνομο function. Ανάλογα με την περίπτωση το να δημιουργούμε static methods μπορεί να οδηγεί σε πιο σωστά οργανωμένο κώδικα.

Μία συνηθισμένη χρήση των static methods είναι για να ορίσουμε factory functions, δηλαδή functions που δημιουργούν νέα objects όπως ο constructor. Αυτό είναι χρήσιμο άμα θέλουμε να έχουμε μία εναλλακτική μέθοδο που θα μας δώσει ένα συγκεκριμένο τύπο object.

```js
    class Article {
        constructor(title, date) {
            this.title = title;
            this.date = date;
        }

    static createTodays() {
        return new this("Today's digest", new Date());
    }
    }

    let article = Article.createTodays();

    alert( article.title ); // Today's digest

```

Οι στατικές μέθοδοι ΔΕΝ είναι διαθέσιμες στα objects που δημιουργούνται από το class αλλά μόνο στο ίδιο το class.

```js
    let article2 = new Article('New Title', new Date());

    article2.createTodays(); /// Error: article2.createTodays is not a function

```

Οι στατικές μέθοδοι κληρονομούνται στα child classes

```js
    class Animal {
        static planet = "Earth";

        constructor(name, speed) {
            this.speed = speed;
            this.name = name;
        }

        run(speed = 0) {
            this.speed += speed;
            alert(`${this.name} runs with speed ${this.speed}.`);
        }

        static compare(animalA, animalB) {
            return animalA.speed - animalB.speed;
        }
    }

    class Rabbit extends Animal {
        hide() {
            alert(`${this.name} hides!`);
        }
    }

    let rabbits = [
        new Rabbit("White Rabbit", 10),
        new Rabbit("Black Rabbit", 5),
    ];

    rabbits.sort(Rabbit.compare);

    rabbits[0].run(); // Black Rabbit runs with speed 5.

    alert(Rabbit.planet); // Earth

```

## get / set

Σε ένα object μπορούμε να έχουμε properties τα οποία δεν προσσεγγίζουμε άμεσα αλλά μόνο μέσω κάποιων methods (accessor properties), αυτό γίνεται με τα keywords `get` και `set`.

```js
    let user = {
        name: "John",
        surname: "Smith",

        get fullName() {
            return `${this.name} ${this.surname}`;
        },

        set fullName(value) {
            [this.name, this.surname] = value.split(" ");
        }
    };

    alert(user.fullName); // John Smith

    user.fullName = 'George Taylor';
    alert(user.name);  // George
```

Τα accessor properties μπορούν να έχουν διάφορες χρήσεις. Μπορεί να χρησιμοποιούνται ως validation:

```js
    let user = {
        get name() {
            return this._name;
        },

        set name(value) {
            if (value.length < 4) {
                alert("Name is too short, need at least 4 characters");
                return;
            }
            this._name = value;
        }
    };

    user.name = "Pete";
    alert(user.name); // Pete

    user.name = ""; // Name is too short...
```

Ή μπορούν να χρησιμποιηθούν σε προβλήματα συμβατότητας, όταν θέλουμε να συνδέσουμε τον κώδικά μας με κάποιο άλλο module που χρησιμοποιεί λίγο διαφορετικά objects.

Αν και τα accessor properties είναι διαθέσιμα και σε απλά objects, τα χρησιμποιούμε περισσότερο σε classes.


## Encapsulation

Η έννοια του Encapsulation είναι από τις βασικότερες στο Object Oriented Programming, ίσως περισσότερο και από την κληρονομικότητα. Η κεντρική ιδέα είναι ότι αν έχουμε ένα class που εκτελεί πολύπλοκες ενέργειες και υπολογισμούς μπορούμε να "κρύψουμε" αυτή την πολυπλοκότητα πίσω από μια ομάδα απλών methods που θα είναι η μόνη επικοινωνία που θα έχει ο υπόλοιπος κώδικας με αυτό το class. Στην πραγματικότητα πρόκειται για μί βασική αρχή του βιομηχανικού σχεδιασμού που συναντάμε καθημερινά σε κάθε συσκευή. Ένα ωραίο παράδειγμα από το javascript.info:

![Coffee machine outside](/images/coffee.jpg "Coffee machine outside")

![Coffee machine inside](/images/coffee-inside.jpg "Coffee machine inside")

Η καφετιέρα κρύβει μέσα της ένα πολύπλοκο μηχανισμνό αλλά αυτό που εκτίθεται στον χρήστη είναι κάποιοα απλά κουμπιά και το υπόλοιπο μένει κρυμμένο. Στόχος μας στο Object Oriented Programming είναι να δημιουργούμε classes με αυτό τον τρόπο. Ο υπόλοιπος κώδικας που επικοινωνεί με το class είναι σαν τον χρήστη της συσκευής, δεν χρειάζεται να ξέρει την πολυπλοκότητα του εσωτερικού.

Ένας τρόπος που έχουμε να εφαρμόσουμε αυτή τη λογική στη JavaScript είναι τα `get` και `set`.

```js
    class CoffeeMachine {
        _waterAmount = 0;

        constructor(power) {
            this._power = power;
        }

        get power() {
            return this._power;
        }

        set waterAmount(value) {
            if (value < 0) {
            value = 0;
            }
            this._waterAmount = value;
        }

        get waterAmount() {
            return this._waterAmount;
        }
    }
```

Έτσι διατηρούμε τα properties κρυφά και ορίζουμε μόνο συγκεκριμένους τρόπους προσσέγγισης τους. Παρακάτω όταν μιλήσουμε για TypeScript θα δούμε ότι εκεί έχουμε πολύ περισσότερες δυνατότητες.

## Native classes

Όπως καταλαβαίνουμε τώρα έχουμε ήδη χρησιμοποιήσει διάφορα classes που υπάρχουν διαθέσιμα στη JavaScript όπως, Object, Array, Date, Error κλπ.

Έιναι δυνατόν, και σε κάποιες περιπτώσεις είναι και πολύ χρήσιμο, να κάνουμε extend από αυτά τα classes:

```js
    class SuperArray extends Array {
        isEmpty() {
            return this.length === 0;
        }
    }

    let arr = new PowerArray(1, 2, 5, 10, 50);
    alert(arr.isEmpty()); // false
```

Το πολύ χρήσιμο εδώ είναι ότι όλα τα array methods αν τα καλέσουμε από ένα SuperArray θα μας επιστρέψουν SuperArray.

```js
    let filteredArr = arr.filter(item => item >= 10);
    alert(filteredArr); // 10, 50
    alert(filteredArr.isEmpty()); // false
```

Μία από τις πιο συχνές χρήσεις αυτής της δυνατότητας που θα τη βρούμε να συμβαίνει σε πολλά modules είναι η δημιουργία custom Error.

```js
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = "ValidationError";
        }
    }

    function readUser(json) {
        let user = JSON.parse(json);

        if (!user.age) {
            throw new ValidationError("No field: age");
        }
        if (!user.name) {
            throw new ValidationError("No field: name");
        }

        return user;
    }

    try {
        let user = readUser('{ "age": 25 }');
    } catch (err) {
        if (err instanceof ValidationError) {
            alert("Invalid data: " + err.message); // Invalid data: No field: name
        } else if (err instanceof SyntaxError) { // (*)
            alert("JSON Syntax Error: " + err.message);
        } else {
            throw err; // unknown error, rethrow it (**)
        }
    }
```

## instanceof

Με τον operator instanceof μπορούμε να τσεκάρουμε αν ένα object ανήκει σε κάποιο class:

```js

    class Animal {}
    class Rabbit extends Animal {}

    let rabbit = new Rabbit();
    alert(rabbit instanceof Rabbit); // true
    alert(rabbit instanceof Animal); // true

```
