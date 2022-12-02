# Requests

Σε μία εφαρμογή χρειαζόμαστε συχνά να πάρουμε κάποια δεδομένα από έναν server ή να στείλουμε δεδομένα σε αυτόν, δηλαδή να κάνουμε ένα http request. Χωρίς να μπούμε στις λεπτομέρειες του http θα πρέπει να δούμε κάποιοα βασικά πράγματα για τα request.

Τα βασικά στοιχέια που πρέπει να έχει ένα request έιναι:

* Το url `https://example.com/something/page.html`
* Η μέθοδος `GET` ή `POST`
* Ένα προαιρετικό request body που θα μεταφέρει κάποια δεδομένα

Η μέθοδος `GET` υποδηλώνει ότι ζητάμε από το server να μας δώσει κάποια δεδομένα. Στην περίπτωση ενός απλού στατικού server που έχει μόνο αρχεία html σε φακέλους το παραπάνω url σημαίνει ότι ζητάμε από το server που βρίσκεται στη διεύθυνση `https://example.com` να μας δώσει το αρχείο `page.html` που βρίσκεται μέσα στο φάκελο `something`. Στις περισσότερες ιστοσελίδες που βλέπουμε υπάρχει κάτι περισσότερο από απλά αρχεία html και τότε ο server υποδέχεται όλα τα request, διαβάζει το url και αποφασίζει τι πρέπει να μας στείλει με βάση το πως είναι προγραμματισμένος. Μπορούμε να ζητήσουμε και άλλου τύπου αρχεία, jpg, json, css, κλπ. 

Η μέθοδος `POST` υποδηλώνει ότι στέλνουμε και εμείς κάποια δεδομένα στο server. Σε αυτή την περίπτωση σίγουρα δεν μιλάμε για ένα στατικό server αλλά για server που τρέχει κάποιο πρόγραμμα που μπορεί να υποδεχτεί τα δεδομένα μας και να κάνει κάτι με αυτά.

## Fetch

Ο βασικός τρόπος που έχουμε σήμερα για να στέλνουμε request μέσω JavaScript είναι η μέθοδος `fetch`. Μέχρι σχετικά πρόσφατα το fetch δεν υποστηρίζονταν από όλους τους browsers και για αυτό χρησιμοποιούσαμε κάποιο npm module όπως το Axios.

```js
    let promise = fetch(url, [options]);
```
Το αποτέλεσμα του fetch είναι ένα Promise που όταν γίνει resolved μας δίνει ένα Response object. Αυτό το Response object έχει τις μεθόδους που χρειαζόμαστε για να δούμε κατ αρχήν αν πέτυχε το request και για να πάρουμε τα δεδομένα που θέλουμε.

```js
    let url = 'http://universities.hipolabs.com/search?country=';

    let response = fetch(url);

    async function getUniversities(country) {
        let response = await fetch(url + country, { method: 'GET' }); // To { method: 'GET' } στην πραγματικότητα δεν χρειάζεται καθώς είναι το default
        if (response.ok) {
            let json = await response.json();
            alert(JSON.stringify(json));
        } else {
            alert("HTTP-Error: " + response.status);
        }
    }

    getUniversities('Greece');
```

Αν θέλουμε να στείλουμε ένα POST request

```js
    async function saveUser(data) {
        let response = await fetch('some/url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });

        let result = await response.json();
        alert(result.message);
    }

    let user = {
        name: 'John',
        surname: 'Smith'
    };

    saveUser(user);
```

## Ασκήσεις

Χρησιμοποιήστε τον κώδικα από εδώ:
https://github.com/Cuboctaedro/api-use
και αυτό το API:
https://fakerapi.it/api/v1/books?_quantity=20
Εμφανίστε στην σελίδα έναν αριθμό βιβλίων από το API όπως στην κάτρα που υπάρχει στο παράδειγμα.

Στείλτε ένα POST request εδω:
https://jsonplaceholder.typicode.com/posts
με τα data:
```js
    const post = {
        title: 'My title',
        body: 'The post content',
        userId: 1,
    };
```
Περιμέντε την απάντηση  και αν είναι σωστή εμφανίστε με alert ένα μήνυμα ότι το post σώθηκε και τι id έχει.
https://jsonplaceholder.typicode.com/guide/