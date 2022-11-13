# H σημασία και ο ρόλος της Javascript, εισαγωγή σε HTML και CSS

## Χρήσεις της Javascript

* Διαδραστικότητα σε ιστοσελίδες
* Εφαρμογές web - mobile
* Εφαρμογές για server
* Games
* Graphics

## Γιατί να μάθει κανείς Javascript

* Είναι εύκολη και κατάλληλη για πρώτη γλώσσα
* Είναι απλό να δημιουργήσεις ένα περιβάλλον εργασίας
* Είναι η πιο διάσημη γλώσσα με τις περισσότερες θέσεις εργασίας
* Μπορεί να χρησιμοποιηθεί για πολλά είδη προγραμματισμού (Object Oriented, Functional, Reactive)

## Βασικά ιστορικά στοιχεία

* Δεν είναι Java
* Δημιουργήθηκε από τον Brendan Eich το 1995
* Φτιάχτικε για να τρέχει στον browser Netscape Navigator
* Αρχικά ονομάστηκε LiveScript γιατί στόχος ήταν "να δίνει ζωή στις ιστοσελίδες"
* Πήρε τελικά το όνομα JavaScript για να εκμεταλευτεί την επιτυχία της Java
* Γρήγορα προστέθηκε και σε άλλους browsers
* Αρχικα δεν την θεωρούσαν σοβαρή γλώσσα και είχε πολλά προβλήματα
* Το 2008 η Google έβγαλε την Chrome V8 όπου μπορούσε να τρέξει  JavaScript πολύ καλύτερα από πριν
* Παράλληλα δημιουργήθηκε η Node.js που έδινε τη δυνατότητα να τρέξει κανείς JavaScript εκτώς του browser
* Το 2015 βγαίνει η ECMAScript 2015 (ES6), μία από τις πιο ανανεωμένες εκδόσεις της JavaScript που είναι πολύ κοντά στη σημερινή
* Από το 2017 η ES6 υποστηρίζεται από όλους τους μεγάλους browsers




## Οι γλώσσες σε μια ιστοσελίδα

| Html                                   | CSS                                           | Javascript |
| -------------------------------------- | --------------------------------------------- | ----------- |
| Το θεμέλιο.                            | Δίνει μορφή στο περιεχόμενο.                  | Διαδραστικότητα
| Δίνει δομή και νόημα στο περιεχόμενο.  | Δημιουργεί όμορφες και εύχρηστες ιστοσελίδες. | Αποστολή δεδομένων (φόρμες).
| Απαραίτητο για προσβασιμότητα και SEO. |                                               | Live Ανανέωση περιεχομένου.


## Εισαγωγή σε HTML και CSS

### HTML Tag

Η γλώσσα html αποτελείται από tags που περικλείουν κομμάτια του περιεχομένου μιας ιστοσελίδας δινόντας τους δομή και νόημα.

```html

    Ένα απλό κομμάτι κειμένου.

    <h1>Ένας τίτλος</h1>

    <p>Μία παράγραφος κειμένου.</p>
```

![Html tag example](/images/html-tag-parts.png "Html tag example")

Τα tags μπορούν να περικλείουν το ένα το άλλο αλλά όχι να τέμνονται.

```html

    <p>Μία παράγραφος κειμένου με <em>inline</em> <strong>tags</strong>.</p>

    <p>
    <strong>Αυτό είναι <em>λάθος</strong> και θα δημιουργήσει</em> πρόβλημα.
    </p>

    <p>
    <strong>Αυτό είναι <em>σωστό</em></strong> <em>και δεν θα δημιουργήσει</em> πρόβλημα.
    </p>

```

https://codepen.io/cuboctaedro/pen/vYrxKga

Σημαντικά attributes
```html
    <p class="green">something ...</p>
    <!--
    Το class μπορεί να εφαρμοστεί σε πολλά διαφορετικά tags 
    και μας επιτρέπει να τα αντιμετοπίζουμε σαν ομάδα
    στο css ή στη js
    -->

    <button id="biggest">Click me</button>
    <!--
    Το id πρέπει να είναι μοναδικό σε κάθε σελίδα
    και μας επιτρέπει να ξεχωρίσουμε ένα element 
    από όλα τα υπόλοιπα
    -->

    <a href="https://www.google.com/">Search it</a>

    <img src="/images/example.jpg" />

    <button type="submit" onclick="alert('Sent!')">Send now</button>
```

### HTML Document

```html
    <!DOCTYPE html> <!--Η έκδοση της html που χρησιμοποιούμε-->
 
    <html lang="en-US"> <!--Το "root element" με πληροφορίες για τη γλώσσα-->

        <head> <!-- Στοιχεία σχετικά με τη σελίδα, φόρτωση css και js και άλλα -->
            <meta charset="utf-8" />
            <title>My test page</title>
        </head>

        <body> <!-- Το περιεχόμενο που βλέπουμε στο browser -->
            <p>This is my page</p>
        </body>

    </html>
```

### Inline / block tags

Τα block tags "κάθονται" το ένα κάτω από το άλλο και πιάνουν όλο το πλάτος της σελίδας.
Τα inline tags "ρέουν" μαζί με το κείμενο σαν λέξεις.

Παραδείγματα inline tags:
* `<a>` link
* `<strong>` έμφαση (με bold)
* `<em>` έμφαση (με italic)
* `<span>` ουδέτερο tag που χρησιμοποιείται μόνο για να ξεχωρίσουμε ένα κομμάτι περιεχομένου για χρήση με css ή js

Παραδείγματα block tags
* `<h1>` έως `<h6>` τίτλοι
* `<p>` παράγραφος
* `<ul>` και `<ol>` λίστες
* `<div>` ουδέτερο tag που χρησιμοποιείται μόνο για να ξεχωρίσουμε ένα κομμάτι περιεχομένου για χρήση με css ή js
* Sectioning tags που οργανώνουν το περιεχόμενο `<header>`, `<main>`, `<footer>`, `<aside>`, `<section>`, `<article>`

### Sectioning tags

![Sectioning tags example](/images/FD7gFAOVIAchAe2.jpg "Sectioning tags example")


### CSS

Το css γράφεται σαν μία σειρά από rules. Κάθε rule αφορά ένα ή περισσότερα στοιχεία της σελίδας και επιρρεάζει κάποιες συγκεκριμένες ιδιότητες τους.

```css
    a {
        color: red;
    }

```

![Anatomy of a CSS rule](/images/anatomy-of-a-css-rule.gif "CSS rule")

#### CSS Selectors

```css
    /* html tag */
    p {
        color: black;
    }

    /* class */
    .black {
        color: black;
    }

    /* id */
    #black {
        color: black;
    }

    /* συνδυασμοί */
    p.black {
        color: black;
    }
```

##### Descendant Selector ( )

```css
    section.black p {
        color: black;
    }

```
```html
    <section class="black">
        <div>
            <h2>This is NOT black</h2>
            <p>This is black</p>
        </div>
    </section>
```


##### Child Selector (>)

```css
    section.black > p {
        color: black;
    }

```
```html
    <section class="black">
        <p>This is black</p>
        <div>
            p>This is NOT black</p>
        </div>
    </section>
```

##### Adjacent Sibling Selector (+)

```css
    section.black + p {
        color: black;
    }

```
```html
    <section class="black">
        <p>This is NOT black</p>
    </section>
    <p>This is black</p>

```

##### Pseudo-class Selector
```css
    a:hover {
        color: blue;
    }
    a:active {
        color: red;
    }
    a:visited {
        color: gray;
    }

```

https://frontend30.com/css-selectors-cheatsheet/

#### CSS Text attributes

https://codepen.io/cuboctaedro/pen/JjZNqPx

#### CSS Box Model

https://codepen.io/cuboctaedro/pen/poKPmjp