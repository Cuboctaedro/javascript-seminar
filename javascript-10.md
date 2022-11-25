# DOM

Το DOM (Document Object Model) είναι ο τρόπος που η JavaScrtipt "βλέπει" το περιεχόμενο ενός παραθύρου στο browser.

Το DOM βλέπει το περιεχόμενο σαν ένα σύνολο από objects τα οποία μπορούμε και να διαβάσουμε αλλά και να επεξεργαστούμε.

Το "αρχικό" object από το οποίομπορούμε να ξεκινήσουμε την εξερεύνηση DOM του είναι το document. Όταν γράφουμε JavaScript για το browser έχουμε πάντα διαθέσιμη τη μεταβλητή `document` που μας δίνει πρόσβαση σε αυτό.

```js
    // change the background color to red
    document.body.style.background = "red";
```

Το DOM έχει τη μορφή ενός δέντρου όπου όλα τα περιεχόμενα της σελίδας είναι μέσα στο `document`. Το κάθε html tag είναι ένα node σε αυτό το tree και τα tags που περιέχει είναι τα παιδιά του. Εκτός όμως από τα html tags στο DOM εμφανίζονται και τα comments και όποιο κείμενο υπάρχει μέσα στο html.

https://javascript.info/dom-nodes#an-example-of-the-dom

https://javascript.info/dom-nodes#other-node-types


## Εξερεύνηση του DOM

Για να μπορέσουμε να επιρρεάσουμε το DOM πρέπει πρώτα να φτάσουμε το στοιχείο που μας ενδιαφέρει. Κάθε στοιχείο του DOM έχει μεθόδους που μας επιτρέπουν να φτάσουμε τα γειτονικά του.

 ![Walking the DOM](images/dom-diagram.svg)

 Τα τρία βασικά στοιχεία είναι:

```
    <html> = document.documentElement

    <body> = document.body

    <head> = document.head
```

### Children

Με το `childNodes` έχουμε πρόσβαση σε όλα τα στοιχεά που βρίσκονται άμεσα κάτω από ένα στοιχείο, όχι μόνο tags αλλά και κάθε άλλο στοιχείο.

```html

    <html>
        <body>
            <div>Begin</div>

            <ul>
                <li>Information</li>
            </ul>

            <div>End</div>

            <script>
                for (let i = 0; i < document.body.childNodes.length; i++) {
                    alert( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
                }
            </script>
        </body>
    </html>

```

Με τα `firstChild` και `lastChild` έχουμε πρόσβαση στο πρώτο και στο τελευταίο στοιχείο.

Το `childNodes` μοιάζει με array αλλά δεν είναι. Μπορούμε να χρησιμοποιήσουμε ε΄να `for of` loop αλλά όχι array methods όπως `forEach` και `filter`.

### Element Children

Αν θέλουμε μόνο τα nodes που αντιστοιχούν σε html elements, που είναι και το πιο σύνηθες, υπάρχουν οι μέθοδοι που μας τα δίνουν:

* `element.children` Για τα tags που είναι παιδιά του element
* `firstElementChild`, `lastElementChild` Για πρώτο και τελευταίο
* `previousElementSibling`, `nextElementSibling` Για τα διπλανά στοιχεία
* `parentElemen` Για το στοιχείο που περιέχει το element

Για κάποιες περιπτώσεις elements όπως το `table` υπάρχουν και άλλες ιδιότητες που μας δίνουν τα rows κλπ.

### HTMLCollection

Το `children` μας δίνει μία συλλογή από nodes ου μοιάζει με array αλλά δεν είναι. Για την ακρίβεια είναι ένα HTMLCollection.

Μπορούμε να μετατρέψουμε το `HTMLCollection` σε array για να εργαστούμε πιο άνετα:

```js
    let collection = document.body.childNodes;

    let array1 = Array.from(collection);

    let array2 = Array.prototype.slice.call(collection);

```

### Searching the DOM

Είναι πολύ δύσκολο να δουλέψουμε ξεκινόντας πάντα από το `body` και πηγαίνοντας σκαλί - σκαλί μέχρι το element που θέλουμε. Για αυτό υπάρχουν μέθοδου για να βρούμε άμεσα συγκεκριμένα elements.

#### document.getElementById

```html
    <div id="unique-div">
        <div id="elem-content">Element</div>
    </div>

    <script>
        let elem = document.getElementById('unique-div');

        innerEl.style.background = 'red';
    </script>

```

#### element.querySelectorAll

```html
    <div id="unique-div">
        <p>First</p>
        <div>Div</div>
        <p>Second</p>
    </div>

    <div>
        <p>First</p>
        <div>Div</div>
        <p>Second</p>
    </div>

    <script>
        let div = document.getElementById('unique-div');
        let pars = div.querySelectorAll('p');

        for (let elem of pars) {
            elem.style.background = 'red';
        }
    </script>
```

#### element.querySelector

```html
    <div id="unique-div">
        <p>First</p>
        <div>Div</div>
        <p>Second</p>
    </div>

    <div>
        <p>First</p>
        <div>Div</div>
        <p>Second</p>
    </div>

    <script>
        let div = document.getElementById('unique-div');
        let par = div.querySelector('p');

        par.style.background = 'red';
    </script>
```

#### matches

Η μέθοδος `element.matches(selector)` μας δίνει μία boolean τιμή, true αν υπάρχει το selector, αλλιώς false.

#### closest

Η μέθοδος `element.closest(selector)` μας δίνει τον κοντινότερο πρόγονο του element που ταιριάζει με το selector.

```html

    <h1>Contents</h1>

    <div class="contents">
        <ul class="book">
            <li class="chapter">Chapter 1</li>
            <li class="chapter">Chapter 2</li>
        </ul>
    </div>

    <script>
        let chapter = document.querySelector('.chapter'); // LI

        alert(chapter.closest('.book')); // UL
        alert(chapter.closest('.contents')); // DIV

        alert(chapter.closest('h1')); // null (because h1 is not an ancesto 
    </script>
```

#### getElementsBy

Τρεις μέθοδοι που μας δίνουν collections και σήμερα τείνουν να αντικασταθούν από το `querySelectorAll`.

```js
    const paragraphs = document.getElementsByTagName('p');

    const buyButtons = document.getElementsByName('buy-now');

    const greens = document.getElementsByClassName('green');

```

Αυτές οι μέθοδοι μας δίνουν live collections που ενημερώνονται άμεσα για κάθε αλλαγή στο DOM.

```html
    <div>First div</div>

    <script>
        let divs = document.getElementsByTagName('div');
        alert(divs.length); // 1
    </script>
    
    <div>Second div</div>
    
    <script>
        alert(divs.length); // 2
    </script>
```

Σε αντίθεση με το `querySelectorAll` που είναι στατικό.

```html
    <div>First div</div>

    <script>
        let divs = document.querySelectorAll('div');
        alert(divs.length); // 1
    </script>

    <div>Second div</div>

    <script>
        alert(divs.length); // 1
    </script>
```

https://javascript.info/searching-elements-dom#summary


### Element properties

#### innerHTML 

Μας δίνει όλο το περιεχόμενο ενός element σαν string και μας επιτρέπει να το αλλάξουμε

```html
    <body>
        <p>A paragraph</p>
        <div>A div</div>

        <script>
            alert( document.body.innerHTML ); // read the current contents
            document.body.innerHTML = 'The new BODY!'; // replace it
        </script>

    </body>
```

#### outerHTML

Μας δίνει ότι και το innerHTML μαζί όμως και με το ίδιο το element

```html
    <div id="elem">Hello <b>World</b></div>

    <script>
        alert(elem.outerHTML); // <div id="elem">Hello <b>World</b></div>
    </script>
```

Αν το χρησιμοποιήσουμε για να αλλάξουμε το περιεχόμενο θα προσθέσει το καινούριο στη θέση του παλιού αλλά θα κρατήσει το παλιό στη μεταβλητή.

```html
    <div>Hello, world!</div>

    <script>
        let div = document.querySelector('div');

        // replace div.outerHTML with <p>...</p>
        div.outerHTML = '<p>A new element</p>'; // (*)

        alert(div.outerHTML); // <div>Hello, world!</div> (**)
    </script>
```

#### textContent 

Μας δίνει το περιεχόμενο χωρίς tags

```html

    <div id="news">
        <h1>Headline!</h1>
        <p>Martians attack people!</p>
    </div>

    <script>
        alert(news.textContent);
        // Headline! Martians attack people!
    </script>

```

Το textContent είναι ένας πιο ασφαλής τρόπος να εισάγουμε περιεχόμενο:

```html
    <div id="elem1"></div>
    <div id="elem2"></div>

    <script>
        let name = prompt("What's your name?", "<b>Winnie-the-Pooh!</b>");

        elem1.innerHTML = name;
        elem2.textContent = name;
    </script>
```

#### hidden

Κρύβει ή εμφανίζει ένα element

```html
    <div>Both divs below are hidden</div>

    <div hidden>With the attribute "hidden"</div>

    <div id="elem">JavaScript assigned the property "hidden"</div>

    <script>
        elem.hidden = true;
    </script>

```

### Attributes vs properties

η JavaScript διακρίνει τα standard attributes σε κάθε html tag και τα μεταφέρει ως properties στο αντίστοιχο object στο DOM.

```html
    <input type="text" id="elem" value="value">

    <script>
        alert(elem.type); // "text"
        alert(elem.id); // "elem"
        alert(elem.value); // value
    </script>

```

Αλλά αυτό ισχύει μόνο για τα properties που "ανήκουν" σε ένα tag.

```html
    <body id="test" something="non-standard" type="...">
        <script>
            alert(document.body.id); // test

            alert(document.body.something); // undefined

            alert(document.body.type); // undefined
        </script>
    </body>

```
#### Πως δουλεύουμε άμεσα με τα attributes

* `elem.hasAttribute(attr)` Αν υπάρχει το attribute 'attr'
* `elem.getAttribute(attr)`  Μας δίνει την τιμή του attribute 'attr' (πάντα σαν sting)
* `elem.setAttribute(attr, value)` Δίνει στο 'attr' την τιμή value
* `elem.removeAttribute(attr)` Αφαιρεί το attribute 'attr' από το elem

#### Τα attributes είναι case insensitive

```html
    <input type="text" value="value">

    <script>
        alert(elem.type); // "text"
        alert(elem.id); // "elem"
        alert(elem.value); // value
    </script>

```
