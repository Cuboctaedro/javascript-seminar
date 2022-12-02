# Forms

Οι φόρμες είναι ο βασικός τρόπος που έχουμε να παίρνουμε δεδομένα από το χρήστη. Πριν δούμε πως δουλεύουν οι φόρμες στη JavaScript πρέπει να έχουμε μία εικόνα από τα elements και attributes που χρησιμοποιούνται σε μία φόρμα.

```html

    <form action="https://example.com" method="post" name="subscribe">

        <label for="name">Your Name</label>
        <input type="text" name="fullname" id="name" required /><br>

        <label for="email">Your Email</label>
        <input type="email" name="email" id="email" required /><br>

        <label for="color">Your favourite color</label>
        <select name="color" id="color">
            <option value="">--Please choose an option--</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="black">Black</option>
            <option value="white">White</option>
        </select>

        <fieldset name="superheroes">
            <legend>Favourite Superheroes</legend>

            <input type="checkbox" id="superman" name="superman" />
            <label for="superman">Superman</label><br>

            <input type="checkbox" id="spiderman" name="spiderman" />
            <label for="spiderman">Spiderman</label><br>

            <input type="checkbox" id="batman" name="batman" />
            <label for="batman">Batman</label><br>

            <input type="checkbox" id="ironman" name="ironman" />
            <label for="ironman">Ironman</label>
        </fieldset>

        <fieldset>
            <legend>Gender</legend>

            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">Male</label><br>

            <input type="radio" id="female" name="gender" value="female" />
            <label for="female">Female</label><br>

            <input type="radio" id="other" name="gender" value="other" />
            <label for="other">Other</label>
        </fieldset>

        <label for="story">Your story</label>
        <textarea name="story" id="story"></textarea>

        <input type="checkbox" id="gdpr" name="gdpr" required />
        <label for="gdpr">Do you agree with the terms?</label><br>

        <button type="submit">Subscribe</button>

    </form>
```

Κάθε πεδίο της φόρμας πρέπει να έχει ένα όνομα και να μπορεί να πάρει μια τιμή (value). Στην περίπτωση του checkbox το value είναι αυτόματα `on` όταν είναι τσεκαρισμένο ή απουσιάζει από τα data αν δεν είναι. Στην περίπτωση ενός group από radio buttons πρέπει όλα να έχουν το ίδιο name και διαφορετικά values.

Καθε πεδίο πρέπει να έχει ένα label. Το property `for` του label "δείχνει" το `id` του αντίστοιχου πεδιού, οπότε γενικά τα πεδία πρέπει να έχουν και id.

Αν ένα πεδίο έχει attribute `required` τότε πρέπει να συμπληρωθεί για να μπορούμε να υποβάλλουμε τη φόρμα.

Η φόρμα, χωρίς JavaScript, πρέπει να έχει attributes `action` και `method` που καθορίζουν που και πως θα σταλούν τα δεδομένα.

```html
    <form action="https://google.com/search" method="get" target="_blank" name="search">

        <label for="term">Search: </label>
        <input type="text" name="q" id="term" required /><br>
    
        <button type="submit">Google Search</button>

    </form>
```

Χωρίς JavaScript, η φόρμα υποβάλλεται αυτόματα μόλις πατήσουμε το button με type `submit` που βρίσκεται μέσα στη φόρμα ή πατώντας enter μέσα σε ένα input.

```html
    <button type="submit">Submit</button>

    <input type="submit" value="Submit" />
```

## Φόρμες και JavaScript

Οι δύο βασικές ενέργειες που μπορούμε να κάνουμε με τη JavaScript κατά τη χρήση μίας φόρμας είναι:

* Validation (έλεγχος της ορθότητας των στοιχείων που υποβάλλει ο χρήστης)
* Submit (ορισμός του τι θα συμβαίνει κατά την υποβολή της φόρμας)

### Πως βρίσκουμε φόρμες και inputs

```html

    <form action="https://example.com" method="post" name="subscribe" id="subscribe-form">

        <label for="name">Your Name</label>
        <input type="text" name="fullname" id="name" required /><br>

        <fieldset name="superheroes">
            <legend>Favourite Superheroes</legend>

            <input type="checkbox" id="superman" name="superman" />
            <label for="superman">Superman</label><br>

            <input type="checkbox" id="spiderman" name="spiderman" />
            <label for="spiderman">Spiderman</label><br>

            <input type="checkbox" id="batman" name="batman" />
            <label for="batman">Batman</label><br>

            <input type="checkbox" id="ironman" name="ironman" />
            <label for="ironman">Ironman</label>
        </fieldset>

        <button type="submit">Subscribe</button>

    </form>

    <script>
        const form = document.forms.subscribe;
        const fullname = form.elements.fullname;
        const superheroes = form.elements.superheroes;

        const superman1 = superheroes.elements.superman;
        const superman2 = form.elements.superman;
        alert(superman1 === superman2); // true
        alert(form === fullname.form); // true

        const subscribeForm = document.getElementById('subscribe-form');
        alert(form === subscribeForm); // true
    </script>

```

### Πως βρίσκουμε values

Στα inputs και textarea μπορούμε να πάρουμε το value σαν string:

```html
    <input type="text" name="fullname" />

    <input type="email" name="email" />

    <input type="number" name="age" />

    <textarea name="story"></textarea>

    <script>
        fullname.value = 'John Smith';
        email.value = 'test@example.com';
        age.value = '36';
        story.value = 'My story is...';
    </script>

```
Στο select:

```html
    <select id="select">
        <option value="apple">Apple</option>
        <option value="pear">Pear</option>
        <option value="banana">Banana</option>
    </select>

    <script>
        // all three lines do the same thing
        select.options[2].selected = true;
        select.selectedIndex = 2;
        select.value = 'banana';
    </script>
```

Στο multi-select:

```html
    <select id="select" multiple>
        <option value="apple" selected>Apple</option>
        <option value="pear" selected>Pear</option>
        <option value="banana">Banana</option>
    </select>

    <script>
        let selected = Array.from(select.options)
            .filter(option => option.selected)
            .map(option => option.value);

        alert(selected);
    </script>
```

### Input events: focus/blur

Το `focus` event σημαίνει ότι ο χρήστης έχει κάνει κλικ στο πεδίο ή έχει εστιάσει σε αυτό με το `Tab` key και είναι έτοιμος να γράψει.
Το `blur` event σημαίνει ότι ο χρήστης έχει απομακρυνθεί από το πεδίο αφού είχε κάνει πρώτα focus οπότε ολοκλήρωσε την εισαγωγή στοιχείων.

Μπορούμε να χρησιμποιήσουμε αυτά τα δύο events για να κάνουμε validation:

```html
    <style>
        .invalid { border-color: red; }
        #error { color: red }
    </style>

    <label for="email">Your Email</label>
    <input type="email" name="email" id="email" required /><br>
    <div id="error"></div>

    <script>
        const email = document.getElementById('email');
        const error = document.getElementById('error');

        email.onblur = function() {
            if (!email.value.includes('@')) {
                email.classList.add('invalid');
                error.innerHTML = 'Please enter a correct email.'
            }
        };

        email.onfocus = function() {
            if (this.classList.contains('invalid')) {
                this.classList.remove('invalid');
                error.innerHTML = "";
            }
        };
    </script>
```

#### focus/blur σε άλλα στοιχεία

Όλοι οι browsers υποστηρίζουν τα events `focus` και `blur` σε στοιχεία με τα οποία ο χρήστης έχει κάποια διάδραση όπως `button`, `input`, `a`, `select` κλπ. Στοιχεία που δεν προορίζονται για διάδραση με το χρήστη όπως `div`, `span`, `li` κλπ δεν μπορούν να έχουν `focus` και `blur`.

Αν θέλουμε να προσθέσουμε τη δυνατότητα αυτή σε κάποιο στοιχείο μπορούμε να το κάνουμε με το attribute `tabindex`. Η τιμή που παίρνει το `tabindex` είναι ένας ακαίρεος. Για θετικούς ακαίρεους τα στοιχεία θα μπούν πρώτα στη σειρά στο `document` πριν από κάθε άλλο element που έχει δυνατότητα focus. Για την τιμή `0` το στοιχείο θα μπει κανονικά στη σείρα με τα στοιχεία που δέχονται focus. Για την τιμή `-1` το στοιχείο δεν θα μπει καθόλου στη σειρά αλλά θα μπορεί να δεχτεί focus μέσω JavaScript.

```html
    <style>
        li { cursor: pointer; }
        :focus { outline: 1px dashed green; }
    </style>

    <ul>
        <li tabindex="1">One</li>
        <li tabindex="0">Zero</li>
        <li tabindex="2">Two</li>
        <li tabindex="-1">Minus one</li>
    </ul>

```

Σε γενικές γραμμές:
* Δεν χρησιμοποιούμε θετικό `tabindex` εκτός και αν ειμαστε πολύ σίγουροι ότι αυτό θέλουμε.
* Χρησιμοποιούμε `tabindex="0"` σε ένα στοιχείο που έχουμε προσθέσει event listener για `click` ή `focus`.
* Χρησιμοποιούμε `tabindex="-1"` ότνα πρόκειται να μεταφέρουμε το focus σε κάποιο στοιχείο μόνο μέσω JavaScript, για παράδειγμα σε μία φόρμα που βρίσκεται σε κάποιο popup ή άλλο στοιχείο που αρχικά είναι εκτός document.


### Input events: change / input

Δύο άλλα χρήσιμα events στα inputs είναι τα `change` και `input`.

Σε ένα input ή textarea το `change` γίνεται μαζί με το `blur`, όταν ολοκληρώνουμε την εισαγωγή κειμένου και μεταφέρουμε το focus. Σε ένα select το `change` γίνεται αμέσως μόλις επιλέξουμε.

Το `input` event σημβαίνει σε κάθε αλλαγή του value, σε ένα text input δηλαδή συμβαίνει για κάθε χαρακτήρα που προσθέτουμε ή σβήνουμε.


### Form events - submit

Το βασικό event που μας ενδιαφέρει σε μία φόρμα είναι το `submit` το οποίο γίνεται είται όταν ο χρήστης πατήσει το button με `type="submit"` ή όταν πατήσει enter ενώ είναι σε focus ένα input (το Enter θα ενεργοποιήσει το `click` event στο submit).

```html
    <form onsubmit="alert('submit!');return false">
        First: Enter in the input field <input type="text" value="text"><br>
        Second: Click "submit": <input type="submit" value="Submit">
    </form>
```

Μπορούμε να θέσουμε ένα listener στο `submit` και με `event.preventDefault()` να εμποδίσουμε την προβλεπόμενη δράση. Επίσης μπορούμε να προκαλέσουμε το `submit` event με `form.submit()`.

```js
    let form = document.createElement('form');
    form.action = 'https://google.com/search';
    form.method = 'GET';

    form.innerHTML = '<input name="q" value="test">';

    // the form must be in the document to submit it
    document.body.append(form);

    form.submit();

```

## Form Data

Ενας τρόπος να στείλουμε τα δεδομένα μίας φόρμας είναι να τα μεταρέψουμε σε JSON, ένας άλλος είναι το `FormData` object. Κάθε φορά εξαρτάται από τις προδιαγραφές που μας θέτει ο server ή το API με το οποίο δουλεύουμε. Το `FormData` χρησιμοποιέιται συχνά σε φόρμες που έχουν και file upload.

```html
    <form id="formElem">
        <input type="text" name="name" value="John">
        <input type="text" name="surname" value="Smith">
        <input type="submit">
    </form>

    <script>
        const formElem = document.getElementById('formElem');

        formElem.onsubmit = async (e) => {
            e.preventDefault();

            let response = await fetch('/some/url', {
                method: 'POST',
                body: new FormData(formElem)
            });

            let result = await response.json();

            alert(result.message);
        };
    </script>
```
Αν περάσουμε στο `FormData` σαν παράμετρο ένα form element τότε θα διαβάσει κατευθείαν τα values και θα τα προσθέσει στα data.
Το `FormData` object έχει τις παρακάτω μεθόδους:

* `formData.append(name, value)` προσθέτει ένα πεδίο με όνομα `name` και τιμή `value`
* `formData.append(name, blob, fileName)` προσθέτει ένα πεδίο σαν `<input type="file">` με όνομα `name`, περιεχόμενο αρχείου `blob` και όνομα αρχείου `fileName`.
* `formData.delete(name)` αφαιρεί από τη φόρμα το πεδίο με όνομα `name`
* `formData.get(name)` μας επιστρέφει το value του πεδίου με όνομα `name`
* `formData.has(name)` τσεκάρει αν υπάρχει στη φόρμα πεδίο με όνομα `name`
* `formData.set(name, value)` προσθέτει ένα πεδίο με όνομα `name` και τιμή `value`, σβήνοντας όμως όποιο προηγούμενο πεδίο υπήρχε με το ίδιο όνομα (θεωρητικά μπορούμε να έχουμε πολλά πεδία με το ίδιο όνομα σε μία φόρμα)


## Ασκήσεις 

### Validation
Πάρτε τον κώδικα από εδώ:
https://github.com/Cuboctaedro/simple-form-validation
Προσθέστε validation στη φόρμα. Αν το όνομα είναι πολύ μικρό ή αν το email δεν έχει @ εμφανίστε μετά το submit μήνυμα όπως στο email. αν όλα είναι σωστά προχωρίστε το submit και εμφανίστε τα δεδομένα που έδωσε ο χρήστης στο message που υπάρχει πάνω από τη φόρμα.

### POST submit
Πάρτε τον κώδικα από εδώ:
https://github.com/Cuboctaedro/form-post
Στείλτε το περιεχόμενο της φόρμας στο url που υπάρχει στο script. Εμφανίστε το notification με το κατάλληλο class και περιεχόμενο ανάλογα με το αποτέλεσμα που θα λάβετε.
https://jsonplaceholder.typicode.com/guide/

### Tasks App
https://github.com/Cuboctaedro/todo-app/tree/form
Προσθέστε τη φόρμα στην εφαρμογή έστι ώστε να προσθέτει καινούρια task στη λίστα.
