# Ασύγχρονος κώδικας

Σε μια εφαρμογή υπάρχουν κάποιες ενέργεις που για να ολοκληρωθούν απαιτούν κάποιο χρόνο. Μέχρι τώρα έχουμε δουλέψει με ενέργειες που γίνονται άμεσα και δεν καθυστερούν τη ροή του προγράμματος. Πολλές φορές όμως μπορεί να ξεκινάμε μία ενέργεια, όπως το να ζητάμε δεδομένα από ένα server και να πρέπει να σιγουρευτούμε όχι μόνο ότι αυτή η ενέργεια ξεκίνησε αλλά και ότι ολοκληρώθηκε πριν πάμε παρακάτω.

```js
    // file my-function.js
    function myFunction() {
        alert('Hello');
    }

    // file main.js
    function loadScript(src) {
        // creates a <script> tag and append it to the page
        // this causes the script with given src to start loading and run when complete
        let script = document.createElement('script');
        script.src = src;
        document.head.append(script);
    }

    loadScript('/my-function.js');

    myFunction();
```

Στο παραπάνω παράδειγμα το `loadScript('/my-function.js')` παίρνει κάποιο χρόνο γιατί πρέπει να βρει και να διαβάσει ένα αρχείο. Το `myFunction()` όμως εκτελείται πριν ολοκληρωθεί η φόρτωση του αρχείου με αποτέλεσμα να έχουμε Error.

## Callbacks

Ένας τρόπος να το αντιμετοπίσουμε αυτό είναι τα callbacks, ένα function που θα εκτελεστεί μετά το τέλος του πρώτου:

```js
    // file my-function.js
    function myFunction() {
        alert('Hello');
    }

    // file main.js
    function loadScript(src, callback) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => { callback(script); };

        document.head.append(script);
        
    }

    loadScript('/my-function.js', function() {
        myFunction();
    });

```

Αν θέλαμε να φορτώσουμε δύο scripts το ένα μετά το άλλο:

```js
    loadScript('/script-1.js', function() {

        console.log('Script 1 loaded');

        loadScript('/script-2.js', function() {
            
            console.log('Script 2 loaded');

        });
    });
```
Και αν θέλουμε να φροντίσουμε και για την περίπτωση λάθους στη φόρτωση του script θα έπρεπε το callback να παίρνει δύο παραμέτρους, μία για το script και μία για το error:

```js
    function loadScript(src, callback) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => callback(null, script);
        script.onerror = () => callback(new Error(`Script load error for ${src}`));

        document.head.append(script);
    }

    loadScript('/my/script.js', function(error, script) {
        if (error) {
            // handle error
        } else {
            // script loaded successfully
        }
    });
```
## Promises 

Μια βελτίωση στο παραπάνω που μας παρέχει η JavaScript είναι το `Promise`. Μπορούμε να βάλουμε το function μας μέσα σε ένα Promise object το οποίο μας δίνει τη δυνατότητα να τρέξουμε το callback όταν το Promise ολοκληρωθεί σωστά ή με Error.

```js
    let promise = new Promise(function(resolve, reject) {
        // executor
    });

    promise.then(
        function(result) {
            console.log(result);
        },
        function(error) {
            console.log(error);
        },
    );
```

Ας δούμε το παράδειγμα του `loadScript`.

```js
    function loadScript(src) {
        return new Promise(function(resolve, reject) {
            let script = document.createElement('script');
            script.src = src;

            script.onload = () => resolve(script);
            script.onerror = () => reject(new Error(`Script load error for ${src}`));

            document.head.append(script);
        });
    }
    let promise = loadScript('/my/script.js');

    promise.then(
        function(script) {
            console.log(`${script.src} is loaded!`);
        },
        function(error) {
            console.log(`Error: ${error.message}`);
        },
    );

```

Αν θέλουμε να φορτώσουμε πολλά scripts όπως είδαμε παραπάνω μπορούμε να το κάνουμε με promise chaining για να αποφύγουμε τα then μέσα σε then

```js
    loadScript("/script-1.js")
        .then(function(script1) {
            loadScript("/script-2.js")
                .then(function(script2)  {
                    loadScript("/script-3.js")
                        .then(function(script2) {
                            one();
                            two();
                            three();
                        });
                });
        });
```

```js
    loadScript("/script-1.js")
        .then(function(script) {
            return loadScript("/script-2.js");
        })
        .then(function(script) {
            return loadScript("/script-3.js");
        })
        .then(function(script) {
            one();
            two();
            three();
        });
```

## async / await

Ένας πολύ πιο βολικός τρόπος να χρησιμοποιήσουμε τα Promises έιναι το `async / await`. Το `async` μπαίνει μπροστά από ένα function και μας ορίζει ότι αυτό το function θα επιστρέφει πάντα ένα Promise.

```js
    async function test() {
        return 1;
    }

    test().then((result) => {
        console.log(result); // 1
    })

```

Το await κάνει την JavaScript να περιμένει την ολοκλήρωση ενός Promise και μπορεί να χρησιμοποιηθεί μόνο μέσα σε async functions.

```js
    function loadScript(src) {
        return new Promise(function(resolve, reject) {
            let script = document.createElement('script');
            script.src = src;

            script.onload = () => resolve(script);
            script.onerror = () => reject(new Error(`Script load error for ${src}`));

            document.head.append(script);
        });
    }

    async function runCode() {
        const script1 = await loadScript('script1.js');
        const script2 = await loadScript('script2.js');
        const script3 = await loadScript('script3.js');
        one();
        two();
        three();
    }

    runCode();
```
