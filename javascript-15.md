# Errors

Σε πολλές περιπτώσεις μπορεί να προκύψει στο πρόγραμμα  μας ένα λάθος. Αυτό μπορεί να είνα ένα λάθος στον κώδικα αλλά μπορεί και να οφείλεται σε εξωτερικά αίτια, ένα λάθος input από το χρήστη, μία αποτυχημένη σύνδεση που δεν μας έφερε τα data που περιμέναμε κλπ. 

Για να αντιμετωπίσουμε την εμφάνιση ενός τέτοιου λάθους μπορούμε να κάνουμε έναν έλεγχο μέσα στη συνάρτηση που κάνει τη συγκεκριμένη ενέργεια και να επιστρέφουμε μία default τιμή αν συμβεί το λάθος, πχ null, undefined, -1 ή κάτι τέτοιο.

Όταν η JavaScript συναντήσει ένα λάθος για το οποίο δεν έχουμε φροντίσει τότε δημιουργεί ένα Error object το οποίο εμφανίζει στην κονσόλα και σταματάει την εκτέλεση του προγράμματος.

```js
let json = "{ bad json }";

console.log(JSON.parse(json));

console.log('After Error');
/*
SyntaxError: Unexpected token b in JSON at position 2
    at JSON.parse (<anonymous>)
    at Object.<anonymous> (c:\00_Javascript_seminar\courses\example.js:3:18)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47

[Done] exited with code=1 in 0.07 seconds
*/

```
Ο τρόπος να αποφύγουμε τέτοια σταματήματα του κώδικα αλλά και να έχουμε τις πληροφορίες που μας δίνει το Error είναι να χρησιμποιήσουμε ένα block `try catch`

```js
    try {
        let json = "{ bad json }";

        console.log(JSON.parse(json));

    } catch (error) {
        console.log(`Name: ${error.name}`);
        console.log(`Message: ${error.message}`);
        console.log(`Stack: ${error.stack}`);
    }

    console.log('After Error');
```

Στο `try catch` μπορούμε να προσθέσουμε και ένα block `finally` που θα συμβαίνει πάντα:

```js

    const parseJSON = (jsonString) => {
        try {
            return JSON.parse(jsonString);
        } catch (error) {
            console.log(`Name: ${error.name}`);
            console.log(`Message: ${error.message}`);
            console.log(`Stack: ${error.stack}`);
        } finally {
            console.log('Tried to parse json');
        }
        
    }

    console.log(parseJSON("{ bad json }"));

    console.log(parseJSON('{ "good": "json" }'));

```

Αν θέλουμε μπορούμε να δημιουργήσουμε και εμείς ένα Error object με το μήνυμα που θέλουμε και να το βρούμε με catch σε άλλο σημείο του κώδικα.

```js
    let json = '{ "age": 30 }';

    try {

        let user = JSON.parse(json);

        if (!user.name) {
            throw new SyntaxError("Incomplete data: no name");
        }

        console.log( user.name );

    } catch (err) {
        console.log( "JSON Error: " + err.message );
    }

    console.log('After Error');
```
