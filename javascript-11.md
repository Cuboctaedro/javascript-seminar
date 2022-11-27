# Αλλαγές στο html

## Εισαγωγή περιεχομένου

### Σαν element

Το κάθε node του html έχει μία σειρά από μεθόδους για να εισάγουμε περιεχόμενο μέσα ή δίπλα του.

* `node.append(...nodes or strings)` Εισαγωγή περιεχομένου *στο τέλος του node*
* `node.prepend(...nodes or strings)` Εισαγωγή περιεχομένου *στην αρχή του node*
* `node.before(...nodes or strings)` Εισαγωγή περιεχομένου *πριν από το node*
* `node.after(...nodes or strings)` Εισαγωγή περιεχομένου *μετά από το node*
* `node.replaceWith(...nodes or strings)` Εισαγωγή περιεχομένου *σε αντικατάσταση του node*

```html
    <ol id="ol">
        <li>0</li>
        <li>1</li>
        <li>2</li>
    </ol>

    <script>
        const ol = document.getElementById('ol');

        ol.before('before');
        ol.after('after');

        let liFirst = document.createElement('li');
        liFirst.innerHTML = 'prepend';
        ol.prepend(liFirst);

        let liLast = document.createElement('li');
        liLast.innerHTML = 'append';
        ol.append(liLast);

        /*
        before
            1. prepend
            2. 0
            3. 1
            4. 2
            5. append
        after
        */
    </script>

```

 ![Insert to node in DOM](images/before-after.svg)

### Σαν string

Με τις παραπάνω μεθόδους πρέπει να "κατασκευάσουμε" ένα html node πριν το εισάγουμε. Υπάρχει και τρόπος να εισάγουμε το html σαν string με τη μέθοδο `elem.insertAdjacentHTML(where, html)`. Το `html` θα είναι ένα string του τύπου '<p>Hello</p>' και το `where` θα μας δώσει τη θέσε σε σχέση με το `elem`.

Το `where` μπορεί να είναι:

* `beforebegin` αμέσως πριν από το elem
* `afterbegin` στην αρχή του elem
* `beforeend` στο τέλος του elem
* `afterend` αμέσως μετά από το elem

```html
    <ol id="ol">
        <li>0</li>
        <li>1</li>
        <li>2</li>
    </ol>

    <script>
        const ol = document.getElementById('ol');

        ol.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>');
        ol.insertAdjacentHTML('afterbegin', '<li>afterbegin</li>');
        ol.insertAdjacentHTML('beforeend', '<li>beforeend</li>');
        ol.insertAdjacentHTML('afterend', '<p>afterend</p>');

        /*
        before
            1. prepend
            2. 0
            3. 1
            4. 2
            5. append
        after
        */
    </script>

```

## Αφαίρεση node


```html
    <ol id="ol">
        <li>0</li>
        <li>1</li>
        <li>2</li>
    </ol>

    <script>
        const ol = document.getElementById('ol');

        ol.firstElementChild.remove();
        /*
            1. 1
            2. 2
        */
    </script>

```

## Μετακίνηση node

Όταν μετακινούμε ένα node δεν χρειάζεται remove

```html
    <ol id="ol">
        <li>first</li>
        <li>second</li>
        <li>third</li>
    </ol>

    <script>
        const ol = document.getElementById('ol');

        const first = ol.firstElementChild;

        ol.append(first);
        /*
            second
            third
            first
        */
    </script>

```

## Αντιγραφή node

Μπορούμε να δημιουργήσουμε αντίγαφο ενός node με το `element.cloneNode()`

* `element.cloneNode(true)` deep clone με όλα τα attributes και τα elements που περιέχει
* `element.cloneNode(false)` deep clone χωρίς τα elements που περιέχει

```html
    <ol id="ol">
        <li id="first">
          first
          <ul>
            <li>first subitem</li>
            <li>first subitem</li>
          </ul>
        </li>
        <li id="second">
          second
          <ul>
            <li>second subitem</li>
            <li>second subitem</li>
          </ul>
        </li>
        <li>third</li>
    </ol>

    <script>
        const ol = document.getElementById('ol');

        const deepClone = document.getElementById('first').cloneNode(true);
        const shallowClone = document.getElementById('second').cloneNode(false);

        ol.append(deepClone);
        ol.append(shallowClone);
        /*
            1. first
                * first subitem
                * first subitem
            2. second
                * second subitem
                * second subitem
            3. third
            4. first
                * first subitem
                * first subitem
            5.
        */
    </script>

```

## Ομαδοποίηση

Μπορούμε να συγκεντρώσουμε elements μέσα σε ένα `DocumentFragment` το οποίο όταν εισαχθεί στο html εξαφανίζεται και αφήνει μόνο τα elements

```html
    <ul id="ul"></ul>

    <script>
        const ul = document.getElementById('ul');

        function getListContent() {
        let fragment = new DocumentFragment();

        for(let i=1; i<=3; i++) {
            let li = document.createElement('li');
            li.append(i + '-item');
            fragment.append(li);
        }

        return fragment;
        }

        ul.append(getListContent());
    </script>

```

## Class

Ο πιο εύκολος τρόπος να επιρρεάσουμε ένα html είναι να αλλάξουμε το class σε κάποια στοιχεία και να κάνουμε τα υπόλοιπα με CSS.

Πρόσβαση στο class σαν string έχουμε με το `className`

```html
     <div id="div" class="one two three"></div>

     <script>
        const div = document.getElementById('div');

        alert(div.classList);
        // one two three

        div.classList = 'four';

        alert(div.classList);
        // four
    </script>
```

Αν θέλουμε να προσθέσουμε ή να αφαιρέσουμε κάποιο class αλλά όχι όλα τότε χρησιμοποιούμε το `classList`

* `elem.classList.add('new')` προσθέτει το class new στο elem
* `elem.classList.remove('new')` αφαιρεί το class new από το elem
* `elem.classList.toggle('new')` προσθέτει το class new στο elem αν δευ πάρχει ή το αφαιρεί άμα υπάρχει
* `elem.classList.contains('new')` ελέγχει αν υπάρχει το class new στο elem

Μπορούμε να χρησιμοποιήσουμε το `classList` σε for loop

```html
     <div id="div" class="one two three"></div>

     <script>
        const div = document.getElementById('div');

        for (let name of div.classList) {
            alert(name); // one two three
        }
    </script>
```

## style

Το property style αντιστοιχεί στο περιεχόμενο του style attribute και όχι στα styles που εφαρμόζονται μέσω css.

Το style είναι ένα object με keys όλα τα properties που υπάρχουν στο style attribute. Properties που είναι δύο λέξεις με παύλα μετατρέπονται σε camelCase.

```html
     <div id="div" style="background-color: yellow; color: blue; height:100px;">Content</div>

     <script>
        const div = document.getElementById('div');

        div.style.backgroundColor = 'green';
        div.style.color = 'white';
    </script>
```
Για να κάνουμε reset ένα css property που έχουμε θέσει μέσω javascript αντί να το σβήσουμε, του δίνουμε τιμή `''`.

```html
     <div id="div" style="background-color: yellow; color: blue; height:100px;">Content</div>

     <script>
        const div = document.getElementById('div');

        div.style.display = 'none';
        div.style.display = '';
    </script>
```

Αν θέλουμε να αντικαταστήσουμε όλο το περιεχόμενο του style attribute με ένα νέο string χρησιμοποιούμε το `style.cssText`.

```html
     <div id="div" style="background-color: yellow; color: blue; height: 100px;">Content</div>

     <script>
        const div = document.getElementById('div');

        div.style.cssText = `
            background-color: blue;
            color: yellow;
            height: 200px;
        `;
    </script>
```

Αν θέλουμε να διαβάσουμε την τελική τιμή ενός css property όπως έχει εφαρμοστεί στο στοιχείο τότε χρησιμοποιούμε το `getComputedStyle(elem)`.

```html
    <style>
        #div {
            width: 50%;
        }
    </style>
     <div id="div" style="background-color: yellow; color: blue; height: 100px;">Content</div>

     <script>
        const div = document.getElementById('div');

        ak
        alert(getComputedStyle(div).width);
        // θα μας δώσει το width σε px
    </script>
```
## Ασκήσεις

### Browser tools
Μία εύκολη άσκηση για να συνηθίσετε να δουλεύετε με τα εργαλεία του browser:
* Ανοίξτε δύο tabs στο browser, ένα στο google.com και ένα στο yahoo.com
* Στο tab του yahoo ανοίξτε με δεξί κλικ το inspector, βρείτε το img tag με το logo του yahoo και αντιγράψτε το
* Στο tab του google βρείτε το img tag του logo με τον ίδιο τρόπο, σβήστε το και βάλτε στη θέση του αυτό του yahoo
* Ή δοκιμάστε να κάνετε το ίδιο σε όποιες σελίδες προτιμάτε

### Add to list
Προσθέστε τα στοιχεία του `fruitList` σαν items μέσα στη λίστα.

```html
     <ul></ul>

     <script>
        const fruitList = ["apple", "banana", "tomato"];
    </script>
```

### Add to table

Γράψτε μία συνάρτηση που να προσθέτει στοιχεά σε ένα πίνακα.

```html
     <table id="table-1">
        <tr>
            <td>Row1 cell1</td>
            <td>Row1 cell2</td>
        </tr>
        <tr>
            <td>Row2 cell1</td>
            <td>Row2 cell2</td>
        </tr>
    </table>

     <script>
        function addRow(cell1, cell2) {

        }
    </script>
```

### Show alert

Γράψτε μία συνάρτηση που να εμφανίζει μία ειδοποίηση στην αρχή της σελίδας. Το css θα υπάρχει στη σελίδα από την αρχή αλλά το div με την ειδοποίηση όχι.

```html
    <style>
        .alert {
            padding: 15px;
            border: 1px solid #d6e9c6;
            border-radius: 4px;
            color: #3c763d;
            background-color: #dff0d8;
        }
    </style>

    <div class="alert">
        Hi there! You've read an important message.
    </div>

    <script>
        function showAlert(alertText) {

            // setTimeout(() => alert.remove(), 3000);
        }
    </script>

```

### Tasks app, συνέχεια

Κατεβάστε τα αρχεία από εδώ:
https://github.com/Cuboctaedro/todo-app
Γράψτε τον απαραίτητο κώδικα ωστε να γεμίσει το table με τα δεδομένα που υπάρχουν στο αρχείο data.js (έχει φορτωθεί ήδη στο html και η μεταβλητή tasks είναι διαθέσιμη). Εμφανίστε τα με τη μορφή που έχουν τα δυο `<tr>` που υπάρχουν σαν παράδειγμα.
