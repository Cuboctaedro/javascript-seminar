# Events

Το event είναι ένα σημάδι πως κάτι έχει συμβεί στην εφαρμογή μας. Πρώτα απ' όλα είναι ο τρόπος που έχουμε να καταλαβαίνουμε τις ενέργειες που κάνει ο χρήστης σε μία ιστοσελίδα. Οι περισσότερες ενέργειες του χρήστη δημιουργούν events αλλά events μπορούν να υπάρξουν και από άλλους παράγοντες.

Το event είναι διαθέσιμο σαν ένα object τύπου Event το οποίο μας δίνει πληροφορίες για το συνέβει και δυνατότητες να το επεξεργαστούμε.

## Τα σημαντικότερα events
Μία λίστα με τα events που χρησιμοποιούμε πιο συχνά.

* `click` όταν κάνουμε κλικ με το mouse ή tap σε ένα touch screen
* `contextmenu` δεξί κλικ με το mouse
* `mouseover / mouseout` όταν το mouse περνάει πάνω από ένα element
* `mousedown / mouseup` όταν πατάμε καιόταν αφήνουμε το κουμπί του mouse
* `mousemove` όταν κινούμε το mouse
* `keydown / keyup`όταν πατάμε ένα πλήκτρο
* `submit` όταν υποβάλλουμε μία φόρμα
* `focus` όταν ο χρήστης εστιάζει σε ένα πεδίο μίας φόρμας
* `DOMContentLoaded` όταν ο browser έχει φορτώσει και διαβάσει όλο το html και τα scripts
* `load` όταν ο browser έχει φορτώσει και διαβάσει όλο το περιεχόμενο της σελίδας, μαζί με εικόνες, css, iframes και ότι άλλο

## Event handlers

Για να αντιδράσουμε σε ένα event πρέπει να ορίσουμε ένα handler, μια συνάρτηση που θα τρέχει όταν συμβαίνει το event

Μπορούμε να ορίσουμε το handler κατευθείαν σε ένα attribute ή σε ένα property.

```html
    <button id="button" type="button" onclick="alert('Click!')">Click me!</button>

```

```html
    <button id="button" type="button">Click me!</button>

    <script>
        const button = document.getElementById('button'); 
        button.onclick = function() {
            alert('Click!');
        }
    </script>

```

```html
    <button id="button" type="button" onclick="clickResponse()">Click me!</button>

    <script>
        const clickResponse = function() {
            alert('Click!');
        }
    </script>

```

```html
    <button id="button" type="button">Click me!</button>

    <script>
        const button = document.getElementById('button'); 

        const clickResponse = function() {
            alert('Click!');
        }
        
        button.onclick = clickResponse;
    </script>

```

## Πρόσβαση στο event

Η JavaScript μας περνάει αυτόματα μία παράμετρο ση συνάρτηση handler ενός event που μας δίνει πρόσβαση στο Event object.


```html
    <button id="button" type="button" onclick="clickResponse(event)" data-message="Click!">Click me!</button>

    <script>
        const clickResponse = function(event) {
            const button = event.currentTarget;
            alert(button.dataset.message);
        }
    </script>

```

## Event listeners

Οι handlers είναι ένας απλός και εύκολος τρόπος να αντιδρούμε σε events αλλά είναι σχετικά περιορισμένος γιατί μας αναγκάζει να έχουμε μόνο ένα handler ανά event.

Για αυτό ένας καλύτερος τρόπος να χειριζόμαστε τα events είναι οι μέθοδοι `addEventListener` και `removeEventListener`.

```
    element.addEventListener(event, handler, [options]);

    element.removeEventListener(event, handler, [options]);

```
* `event` είναι το είδος του event, για παράδειγμα, 'click'
* `handler` είναι το function που θα εκτελεστεί
* `options` προεραιτικά μπορούμε να έχουμε και ένα object που θα καθορίσει κάποια πράγματα στο πως θα εφαρμοστεί το handler

```html
    <button id="button" type="button">Click me!</button>

    <script>
        const button = document.getElementById('button'); 

        const clickResponse = function() {
            alert('Click!');
        }

        const clickResponse2 = function(event) {
            event.currentTarget.style.background = 'red';
        }

        button.addEventListener('click', clickResponse);
        button.addEventListener('click', clickResponse2);
    </script>

```

Στο `removeEventListener` πρέπει να περάσουμε ανριβώς το ίδιο function όπως και στο add

Αυτό δεν θα δουλέψει:
```js
    elem.addEventListener( "click" , () => alert('Thanks!'));

    elem.removeEventListener( "click", () => alert('Thanks!')); // Δεν δουλεύει

```

Θα πρέπει να γίνει αυτό:

```js
    function handler() { alert( 'Thanks!' ); }

    elem.addEventListener("click", handler);
    elem.removeEventListener("click", handler);

```
Αν θέλουμε μπορούμε να δόσουμε σαν handler ένα object αντί για function αρκεί αυτό το object να έχει μία μέθοδο `handleEvent`.

```html
    <button id="button" type="button">Click me!</button>

    <script>
        const button = document.getElementById('button'); 

        const clickHandler = {
            message: 'Click!',
            handleEvent(event) {
                alert(this.message);
            }
        }

        button.addEventListener('click', clickHandler);
    </script>

```

## Event Bubbling

Όταν συμβαίνει ενα event ενεργοποιεί τους handlers όχι μόνο στο element όπου συνέβη αλλά και σε όλα τα parent elements μέχρι το document

```html
    <style>
        form, div {
            margin: 10px;
            padding: 10px;
            border: 1px solid blue;
        }
    </style>

    <form onclick="alert('form')">FORM
        <div onclick="alert('div')">DIV
            <button onclick="alert('button')">button</button>
        </div>
    </form>

    <!-- button -->
    <!-- div -->
    <!-- form -->
```

Στο event object έχουμε δύο σχετικά properties, το target που είναι το αρχικό element από όπου ξεκίνησε το event και το currentTarget που μας δίνει το element από το οποίο τρέχει το συγκεκριμένο handler


```html
    <style>
        form, div {
            margin: 10px;
            padding: 10px;
            border: 1px solid blue;
        }
    </style>

    <form onclick="handleBubbling(event)" data-name="form">FORM
        <div onclick="handleBubbling(event)" data-name="div">DIV
            <button onclick="handleBubbling(event)" data-name="button">button</button>
        </div>
    </form>

    <script>
        const handleBubbling = (event) => {
            const originalElement = event.target.dataset.name;
            const currentElement = event.currentTarget.dataset.name;

            alert(`Originator: ${originalElement}
            Current element: ${currentElement}`);
        }

    </script>

```

Αν σε κάποιο σημείο του bubbling θέλουμε να σταματήσουμε την αλυσίδα μπορούμε να καλέσουμε το `event.stopPropagation()`


```html
    <style>
        form, div {
            margin: 10px;
            padding: 10px;
            border: 1px solid blue;
        }
    </style>

    <form onclick="handleBubbling(event)" data-name="form">FORM
        <div onclick="handleBubbling(event)" data-name="div">DIV
            <button onclick="handleBubbling(event)" data-name="button">button</button>
        </div>
    </form>

    <script>
        const handleBubbling = (event) => {
            const originalElement = event.target.dataset.name;
            const currentElement = event.currentTarget.dataset.name;

            alert(`Originator: ${originalElement}
            Current element: ${currentElement}`);
            if (currentElement === 'div') {
                event.stopPropagation();
                // Δεν θα φανεί το alert από το form
            }
        }

    </script>

```

Το `event.stopPropagation()` σταματάει μόνο το συγκεκριμένο handler. Αν θέλουμε να σταματήσουμε όλα τα handlers που μπορεί να υπάρχουν σε ένα event χρησιμοποιούμε το `event.stopImmediatePropagation()`.

## Event delegation

Το bubbling δίνει τη δυνατότητα να οργανώσουμε κεντρικά το handling κάποιων events:

```html
    <style>
    .item {
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        width: 300px;
    }
    </style>

    <div class="container" onclick="handleClicks(event)">
        <button class="item" data-name="one">1</button>
        <button class="item" data-name="two">2</button>
        <button class="item" data-name="three">3</button>
        <button class="item" data-name="four">4</button>
        <button class="item" data-name="five">5</button>
        <button class="item" data-name="six">6</button>
        <button class="item" data-name="seven">7</button>
        <button class="item" data-name="eight">8</button>
        <button class="item" data-name="nine">9</button>
    </div>

    <script>
    const handleClicks = (event) => {
        alert(event.target.dataset.name);
    }
    </script>

```

Μπορούμε να εκμεταλευτούμε αυτή δυνατότητα για να φιάξουμε στοιχεία που λειτουργούν σαν components:

```html
    Counter: <input type="button" value="1" data-counter>
    One more counter: <input type="button" value="1" data-counter>

    <script>
    document.addEventListener('click', function(event) {
        if (event.target.dataset.counter != undefined) {// Αν το click έγινε σε element με data-counter
            event.target.value++;
        }
    });
    </script>
```

Με αυτή τη μέθοδο μπορούμε να έχουμε πολύ λιγότερους listeners που σημαίνει καλυτερο performance και να κάνουμε τον κώδικα μας πιο modular.
Πρέπει όμως να είμαστε σίγουροι ότι δεν θα υπάρχει κάποιο ενδιάμεεσο στοιχείο πριν το τελικό container το οποίο να καλεί `event.stopPropagation()` και να προσέξουμε ότι θα γίνονται register όλα τα κλικ ακόμα και σε στοιχεία που δεν μας ενδιαφέρουν. Συνήθως όμως το κέρδος σε performance από τους λιγότερους listeners είναι μεγαλύτερο από την απώλεια λόγω των "αχρηστων" events.

## Ασκήσεις

### Show - hide alert

```html
    <style>
    .alert {
        padding: 16px;
        border: 1px solid #d6e9c6;
        border-radius: 4px;
        color: #3c763d;
        background-color: #dff0d8;
        position: relative;
        min-height: 24px;
    }
    .close {
        width: 24px;
        height: 24px;
        position: absolute;
        top: 16px;
        right: 16px;
        background: #fff;
        border: none;
        cursor:pointer;
    }

    .content {
        padding: 24px;
    }
    .show {
        width: 120px;
    }
    </style>
    <div class="alert">
        Hi there! You've read an important message.
        <button type="button" class="close">x</button>
    </div>

    <div class="content">
        <button type="button" class="show">Show Alert</button>
    </div>

```

## Ασκήσεις

### Alert
Κατεβάστε τον κώδικα από εδώ:
https://github.com/Cuboctaedro/alert

Γράψτε τον απαραίτητο κώδικα έτσι ώστε να εμφανίζεται το notification όταν πατάμε ένα από τα buttons.
Βάλτε το κάθε button να προσθέτει το σωστό class στο notification για να έχει την αντίστοιχη εμφάνιση.
Τέλος κάντε να δουλεύει και το close button που υπάρχει μέσα στο notification.

### Tasks app, συνέχεια
Κατεβάστε τα αρχεία από εδώ:
https://github.com/Cuboctaedro/todo-app/tree/sorting
Γράψτε τον απαραίτητο κώδικα έτσι ώστε να δουλεύουν τα buttons για sorting και filtering