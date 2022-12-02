# LocalStorage

Υπάρχουν δίαφοροι τρόποι να σώσουμε δεδομένα στο browser. 

Ένας τρόπος είναι τα cookie τα οποία κυρίως δημιουργούνται από το server μέσω κάποιου response που στέλνει και μετά μπορούν να διαβαστούν με JavaScript. Χρησιμοποιούνται κυρίως για authentication με βάση τις οδηγίες του server και στέλνονται πίσω στο server με κάθε request. 

Ένας άλλος τρόπος να σώσουμε δεδομένα είναι τα `localStorage` και `sessionStorage`. Αυτά δεν είναι προσβάσιμα από τον server αλλά μόνο μέσω JavaScript. Το κάθε πράγμα που σώζουμε ισχύει μόνο για ένα συγκεκριμένο domain και είναι προσβάσιμο μόνο όταν είμαστε σε αυτό το domain. Ετσι διαφορετικά sites και εφαρμογές δεν μπορούν να δουν το `localStorage` του άλλου. Το `localStorage` παραμένει στο browser μέχρι να σβηστεί από το χρήστη.

Τα δεδομένα στο `localStorage` πρέπει να είναι strings και σώζονται σε ζευγάρια key / value. Το `localStorage` object μας δίνει τις παρακάτω μεθόδους για να δουλέψουμε με αυτό:

* `localStorage.setItem(key, value)` για να σώσουμε την τιμή `value` στο property `key`
* `localStorage.getItem(key)` για να πάρουμε την τιμή στο property `key`
* `localStorage.removeItem(key)` για να αφαιρέσουμε το property `key` και το αντίστοιχο value
* `localStorage.clear()` για να σβήσουμε ότι έχει σωθεί από το συγκεκριμένο domain
* `localStorage.length` για να δούμε πόσα keys έχουμε

```js
    localStorage.setItem('username', 'John');

    alert( localStorage.getItem('username') ); // John
```
Αν θέλουμε να σώσουμε άλλες τιμές εκτός από string πρέπει να τις μετατρέψουμε σε string, για παράδειγμα `number.toString()` ή `JSON.stringify(object)`.

```js
    const user = { name: 'John' };

    localStorage.setItem('user', JSON.stringify(user));

    const savedUser = localStorage.getItem('user');

    alert(JSON.parse(savedUser).name);
```

## sessionStorage

Το `sessionStorage` λειτουργεί με παρόμοιο τρόπο αλλά ισχύει μόνο για ένα συγκεκριμένο browser tab και χάνεται όταν κλείσει το tab.
