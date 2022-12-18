# React και άλλα frameworks

Όπως έχουμε δει, η JavaScript μας δίνει τη δυνατότητα να ανανεώνουμε ένα html με βάση τις ενέργειες του χρήστη. Θα πρέπει να έχουμε δημιουργήσει event listeners για να παρακολουθούμε αυτές τις ενέργειες, να έχουμε εντοπίσει μέσα στο html τα στοιχεία που θέλουμε να αλλάξουμε και να γράψουμε και τον κώδικα που θα κάνει τις αλλαγές γράφοντας όποιο καινούριο html μέσα στη JavaScript είτε σαν strings είτε δημιουργόντας elements και προσθέτοντας attributes και περιεχόμενο. Αυτά τα εργαλεία μας δίνουν από μόνα τους τη δυνατότητα να γράψουμε πλήρεις εφαρμογές βασισμένες σε JavaScript. Όμως αυτό γίνεται γράφοντας πολύ κώδικα ο οποίος δεν είναι ευκολα διαχειρίσιμος όσον αφορά τις ανανεώσεις και τις προσθήκες λειτουργιών στην εφαρμογή. 

Πολλές φορές έχουμε στις εφαρμογές μας επαναλαμβανόμενα στοιχεία όπως για παράδειγμα popups, dropdowns, tabs και άλλα στοιχεία που απαιτούν JavaScript για τη λειτουργία τους. Στόχος μας είναι να κάνουμε τέτοια στοιχεία επαναχρησιμοποιήσιμα. Να έχουμε δηλαδή ένα κώδικα JavaScript που θα μπορεί, για παράδειγμα, να εντοπίζει όλα τα tabs που υπάρχουν στην εφαρμογή μας (πιθανως μέσω κάποιου data-attribute) και να τα ενεργοποιεί. 

Όσο η JavaScript αντιμετοπίζονταν σαν κάτι συμπληρωματικό σε μία ιστοσελίδα, ο στόχος θα ήταν να δημιουργήσουμε ένα σωστό html που να μπορεί να λειτουργήσει ακόμα και χωρίς JavaScript, να προσθέσουμε css, έχοντας τη δομή του html ως δεδομένη και πρσοθέτοντας μόνο κάποια classes. Τέλος η JavaScript θα έμπαινε σαν τρίτο στοιχείο πάνω στο υπάρχον html πρσοθέτοντας είτε classes, είτε, πιο σωστά, data-attributes. Αυτή η λογική οδηγούσε σε μία οργάνωση κώδικα που βασιζόταν στην αυτονομία των γλωσσών. Επρεπε δηλαδή το html να μπορεί να υπάρξει αυτόνομα, το css να γράφεται με τη μορφή frameworks όπως το Bulma ή το Bootstrap που περιμένουν μία απλή και "προφανή" δομή στο html και λίγα classes. Η JavaScript μπορούσε να γραφτεί ως μία σειρά από functions που το κάθε ένα ενεργοποιούσε ένα element, για παράδειγμα τα popups ή τα tabw και θα μπορούσε να επαναχρησιμοποιείται από το ένα project στο άλλο.

Όταν όμως η υποστήριξη των browser στη JavaScript έγινε πιο δεδομένη και αυξήθηκαν οι δυνατότητες των συσκευών αλλά και οι ταχύτητες σύνδεσης στο διαδύκτυο άρχισε να θεωρείται πλέον η JavaScript ως κάτι δεδομένο. Από τη στιγμή λοιπόν που η χρήση JavaScript και μάλιστα αρκετής JavaScript θεωρείται δεδομένη, ο διαχωρισμός σε γλώσσες αρχίζει να μην έχει νόημα. Μπορούμε να γράφουμε html, css και JavaScript θεωρόντας δεδομένο ότι θα είναι όλα διαθέσιμα. Οπότε ο τρόπος να κάνουμε τον κώδικα μας πιο modular και εύκολο να επαναχρησιμοποιηθεί δεν είναι ο διαχωρισμός σε γλώσσες αλλά σε components. Να μαζέψουμε δηλαδή μαζί το html, το css και τη JavaScript για μία λειτουργία, πχ τα tabs, και να μπορούμε απλά να το κάνουμε import σε ένα project και να το τροφοδοτούμε με δεδομένα, ίσως και με κάποιες παραμέτρους που θα επιρρεάσουν την εμφάνιση για να προσαρμοστεί στο υπόλοιπο project.

Όσο είχαμε την λογική του διαχωρισμού των γλωσσών το βασικό framework που χρησιμποιούσαμε ήταν η JQuery. Η JQuery δημιουργήθηκε πριν η JavaScript αποκτήσει όλες τις δυνατότητες που έχει σήμερα και, κυρίως, πριν να έχουμςε μια σταθερή υποστήριξη από όλους τους browsers. Αυτό που προσέφερε ήταν ένας εύκολος και γρήγορος τρόπος να εντοπίζουμε elements μέσα στο html, να προσθέτουμε ή να αφαιρούμε attributes και να προσθέτουμε event listeners. Για κάποια χρόνια ήταν κυρίαρχο εργαλείο και ακόμα έχει ζήτηση καθώς συνεχίζει να υπάρχει σε πάρα πολλά παλιότερα projects.

Σήμερα κυριαρχούν τα frameworks που μας δίνουν τη δυνατότητα να δουλεύουμε με components έτσι όπως τα περιγράψαμε παραπάνω. Υπάρχουν πολλά frameworks για αυτή τη δουλειά και υπάρχει και η δυνατότητα να δημιουργήσουμε components απλά μέσω JavaScript: https://developer.mozilla.org/en-US/docs/Web/Web_Components. Τελικά αυτή τη στιγμή κυριαρχούν στην αγορά η React, Angular, Vue και Svelte.

## JSX
Το jsx είναι ένα από τα βασικά στοιχεία της React. Είναι μία επέκταση του συντακτικού της JavaScript που μας δίνει τη δυνατότητα να γράφουμε html μέσα στη JavaScript.

```jsx
    const element = <h1>Hello, world!</h1>;
```

Το jsx λειτουργεί σαν μία συνάρτηση που δημιουργεί html elements. Συνήθως γράφουμε τέτοιο κώδικα μέσα σε αρχεία με κατάληξη .jsx τα οποία χρειάζονται να περάσουν από κάποιο builder όπως το Parcel πριν χρησιμοποιηθούν στο browser.

Η βασική χρησιμότητα του jsx είναι ότι μπορούμε να το συνδυάσουμε με JavaScript χρησιμοποιόντας μεταβλήτές.

```jsx
    const name = 'John Smith';
    const element = <h1>Hello, {name}</h1>;
```

Αλλά μπορούμε να χρησιμοποιήσουμε όχι μόνο μεταβλητές αλλά οποιοδήποτε expression μας επιστρέφει τελικά ένα string.

```jsx
    const formatName = (user) => {
        return user.firstName + ' ' + user.lastName;
    };

    const user = {
        firstName: 'John',
        lastName: 'Smith'
    };

    const element = (
        <h1>
            Hello, {formatName(user)}!
        </h1>
    );
```

Επίσης μπορούμε να χρησιμοποιήσουμε το ίδιο το jsx σαν expression.

```jsx
    const getGreeting = (user) => {
        if (user) {
            return <h1>Hello, {formatName(user)}!</h1>;
        }
        return <h1>Hello, Stranger.</h1>;
    }
```

Μπορούμε να προσθέσουμε attributes στα tags

```jsx
    const link = <a href="https://reactjs.org">React</a>

    const url = "https://reactjs.org";

    const link2 = <a href={url}>React</a>
```

Πολλά attributes πρέπει να τα μετατρέπουμε σε camelCase.

```jsx
    const tab = <div className="tab" tabIndex={-1}>Tab title</div>

```

Μπορούμε να έχουμε και tags μέσα σε tags:

```jsx
    const element = (
        <div>
            <h1>Title</h1>
            <div>Content</div>
        </div>
    );

```

Αλλά πάντα ένα στοιχείο jsx θα πρέπει να περιλαμβάνεται όλο σε ένα tag ή έστω σε ένα fragment

```jsx
    const wrong = (
        <h1>Title</h1>
        <div>Content</div>
    );
    const right = (
        <>
            <h1>Title</h1>
            <div>Content</div>
        </>
    );

```

Το jsx τελικά αντιστοιχεί σε ένα object που περιγράφει ένα html element.

```jsx
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);
```
Το παραπάνω μπορεί θεωριτικά να γαφτεί και χρησιμοποιόντας τη μέθοδο `React.createElement`.

```js
const element = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, world!'
);
```
Αυτό που θα μας επέστρεφε τελικά το `React.createElement` έχει την παρακάτω μορφή.

```js
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
};
```

## Rendering

Πως εμφανίζουμε ένα element φτιαγμένο με React στη σελίδα μας; Χρειαζόμαστε ένα element, συνήθως ένα `div`, το οποίο θα είναι η βάση, το root. Μέσα σε αυτό μπορούμε να προσθέσουμε το δικό μας element.

```html
<body>
    <div id="root"></div>
</body>
```

```jsx
const root = ReactDOM.createRoot(
    document.getElementById('root')
);

const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);

root.render(element);

```

Αν θέλουμε μπορούμε να έχουμε πολλά διαφορετικά root elements σε μία σελίδα με διαφορετικό περιεχόμενο. Αν δουλεύουμε μία εφαρμογή κυρίως σε html μπορούμε να προσθέτουμε συγκεκριμένα sections που να χρησιμοποιούν React. Συνήθως όμως η τάση είναι να υπάρχει ένα root element που να περιέχει το σύνολο της σελίδας.

## Πως χρησιμοποιούμε τη React

Ο εύκολος τρόπος να προσθέσουμε τη React σε ένα project είναι απλά να φορτώσουμε δύο εξωτερικά scripts.

```html
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
</head>
<body>

</body>
```

Αυτό είναι αρκετό για να πειραματιστούμε και να κάνουμε μικρές εφαρμογές. Σε μία πραγματική εφαρμογή όμως θα προτιμίσουμε να χρησιμοποιήσουμε κάποιο build tool όπως το Parcel. Σε αυτή την περίπτωση θα εγκαταστήσουμε με npm τα modules react και react-dom.

Αν θέλουμε να δημιουργήσουμε μία εφαρμογή που θα είναι γραμμένη όλη σε React μπορούμε να χρησιμοποιήσουμε το [Create React App](https://create-react-app.dev/) που θα μας βοηθήσει να στήσουμε την εφαρμογή μας.

## Components

Ο τρόπος που χρησιμοποιούμε τη React είναι να χωρίζουμε την εφαρμογή μας σε components τα οποία συνθέτουμε σε ένα σύνολο. Υπάρχουν δύο τρόποι να γράψουμε Components στη React, σαν function ή σαν class. Και οι δύο είναι σωστοί και έχουν τελικά το ίδιο αποτέλεσμα. Το class είναι ο παλιότερος τρόπος που θα βρούμε σε έτοιμα projects. Σήμερα για καινούρια projects προτιμούνται τα function.

Ένα functional component είναι ένα function που παίρνει μία παράμετρο props η οποία είναι ένα object.

```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```

Το class component είναι ένα class που κάνει extend το `React.Component` και έχει μία μέθοδο `render` που μας επιστρέφει το τελικό jsx.

```jsx
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

Χρησιμοποιούμε το component μέσα στον κώδικα μας έτσι:

```jsx
<Welcome name="Sara" />
```

Ενα component μπορεί να περιέχει άλλα components.

```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function WelcomeList() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="John" />
            <Welcome name="James" />
        </div>
    );
}
```

Ο πιο βασικός κανόνας στη δημιουργία ενός component είναι ότι **δεν πρέπει να μεταβάλλει τις τιμές των props**. Προφανώς θα χρειαστεί μέσα σε ένα component να αλλάζουμε κάποιες τιμές αλλά αυτό δεν γίνεται ποτέ αλλάζοντας άμεσα τα props αλλά μέσω του state.

## State

Τα πιο πολλά components χρειάζεται να αλλάζουν κάποιες τιμές ή και περιεχόμενο. Ένας τρόπος να καταλάβουμε τη "ζωή" ενός component είναι σαν μία κινηματογραφική ταινία. Αν και η ταινία μας δείχνει τελικά μία κίνηση, αποτελείται από στατικά αμετάβλητα καρέ. Έτσι και ένα component κάθε στιγμή βρίσκεται σε μία σταθερή κατάσταση και όταν με κάποιο τρόπο πυροδοτείται μία αλλαγή τότε γίνεται ξανά render σε μία καινούρια σταθερή κατάσταση. Οι τιμές που μπορούν να μεταβληθούν αποτελούν το **state** του component και μεταβάλλονται μόνο με συγκεκριμένο τρόπο.

Υπάρχουν διαφορετικοί τρόποι χειρισμού του state για functional και class components. Στα class components πρέπει να ορίσουμε το αρχικό state στο constructor και να έχουμε στο class μία σειρά από μεθόδους που τρέχουν σε συγκεκριμένες στιγμές και μεταβάλλουν το state. Στα functional components χρησιμοποιούμε μία σειρά από functions που μας παρέχει η React που ονομάζονται hooks.

Συνήθως το state μεταβάλλεται από κάποια ενέργεια του χρήστη οπότε θα δούμε παράλληλα και πως αντιδρούμε σε events με τη React, όπου συνήθως δεν χρειάζεται να χρησιμοποιήσουμε το `addEventListener`.

```jsx

import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={ function(event) { setCount(count + 1); } }>
                Click me
            </button>
        </div>
    );
};

```

Το hook `useState` μας δίνει τη δυνατότητα να ορίσουμε την αρχική τιμή μίας μεταβλητής και ταυτόχρονα να ορίσουμε και ένα function που θα μας επιτρέπει να αλλάζουμε την τιμή αυτής της μεταβλητής.

Το state είναι εσωτερικό σε κάθε component. Όταν αλλάζει προκαλεί αλλαγές σε αυτό το component. Τα parent components δεν έχουν τρόπο να γνωρίζουν αυτές τις αλλαγές. Τα child components μπορούν να δεχτούν τις τιμές του state σαν props οπότε να ξανακάνουν render σε κάθε αλλαγή του state.

```jsx
const Counter = (props) => {
    const [count, setCount] = useState(props.start);

    return (
        <div>
            <button onClick={ function(event) { setCount(count + 1); } }>
                {count}
            </button>
        </div>
    );
};

const CounterList = (props) => {
    return (
        <div>
            <p>Starting at {props.start}</p>
            <Counter start={props.start} />
            <Counter start={props.start + 5} />
            <Counter start={props.start + 10} />
        </div>
    );
}

```

Στο παραπάνω παράδειγμα το component `CounterList` δεν μπορεί να γνωρίζει τι συμβαίνει στο κάθε `Counter`. Οι αλλαγές είναι εσωτερικές στο κάθε component.

## Events

Είδαμε παραπάνω ότι ο χειρισμός των events είναι αρκετά κοντινός με αυτόν της JavaScript. Η React μας δίνει κάποια attributes όπως τα `onClick`, `onFocus`, `onBlur` στα οποία περνάμε ένα function που παίρνει σαν παράμετρο το event. Το event της React έιναι ένα `SyntheticEvent` που έχει κάποιες ιδιότητες παραπάνω από το `Event` της JavaScript αλλά σε πρώτη φάση δεν θα μας χρειαστούν.

## Conditionals

Μέσα σε ένα component μπορούμε να χρησιμοποιήσουμε `if else` ή άλλα conditionals.

```jsx

const Greeter = (props) => {
    if (!props.user) {
        return (
            <div>Hello!</div>
        );
    } else {
        return (
            <div>Hello {user}</div>
        );
    }
};
```

```jsx
const Greeter = (props) => {
    return (
        <div>
            {props.user ? `Hello ${user}` : 'Hello!'}
        </div>
    );
};

```


Μπορούμε επίσης να χρησιμοποιήσουμε τον operator `&&`.

```jsx
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            {count > 0 && <p>Count is: {count}</p>}
        <div>
            <button onClick={() => {setCount(count + 1);}}>
                {count}
            </button>
        </div>
    );
}
```

## Arrays

Πολλές φορές έχουμε δεδομένα σε arrays με τα οποία θέλουμε να φτιάξουμε λίστες ή πίνακες. Αυτό μπορεί να γίνει με το `array.map()`.

```jsx
const users = [
    { name: 'John', id: 1 },
    { name: 'James', id: 2 },
    { name: 'Peter', id: 3 },
    { name: 'James', id: 4 },
];

const UserList = ({ users }) => {
    return (
        <ul>
            {users.map((user) => {
                return (
                    <li key={user.id.toString()}>{user.name}</li>
                );
            })}
        </ul>
    );
};

```

Σε τέτοιες περιπτώσεις πρέπει να περνάμε στο κάθε element της λίστας ένα attribute `key` που να είναι μοναδικό για κάθε στοιχείο που μας δίνει το map. Η React έχει ανάγκη το `key` για να μπορεί να παρακολουθεί τις αλλαγές που συμβαίνουν στη λίστα.

Αυτό πρέπει να γίνει με τον ίδιο ακριβώς τρόπο αν χρησιμοποιούμε ένα δικό μας component.

```jsx
const UserItem = ({ name }) => {
    return <li>{name}</li>
};

const UserList = ({ users }) => {
    return (
        <ul>
            {users.map((user) => {
                return (
                    <UserItem key={user.id.toString()} name={user.name} />
                );
            })}
        </ul>
    );
};

```

## Children

Ένα prop που μπορούμε να έχουμε σε κάθε component είναι to children που μας επιτρέπει να συνθέτουμε components, βάζοντας το ένα να περικλείει το άλλο.

```jsx
const BorderedBox = (props) => {
    return (
        <div className="big-border">{children}</div>
    );
};

const Content = (props) => {
    return (
        <div>
            <BorderedBox>
                <h1>{props.title}</h1>
            </BorderedBox>
            <BorderedBox>
                <div>{props.content}</div>
            </BorderedBox>
        </div>
    );
}

```

## Forms

Οι φόρμες είναι ένα ιδιαίτερο στοιχείο στη React γιατί τα form inputs είναι στοιχεά που έχουν από μόνα τους ένα state και διατηρούν κάποιες τιμές με βάση το input από το χρήστη. Υπάρχουν δύο τρόποι αντιμετόπισης, ο ένας είναι να αφήσουμε τη φόρμα να δουλεύει σαν απλή html φόρμα και ίσως να κάνουμε κάτι κατά το submit και ο δεύτερος που συνηθίζεται περισσότερο είναι να αφήσουμε τη React να πάρει τον έλεγχο της φόρμας. Στην πρώτη περίπτωση μιλάμε για uncontrolled components και στη δεύτερη για controlled components.

```jsx
const LoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username is ${username} and Password is ${password}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => { setUsername(e.target.value); }} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />

            <button type="submit">Login</button>
        </form>
    );
};
```

## useEffect hook

Η React μας δίνει διάφορα hooks για να δουλέψουμε με functional components. Εκτός από το `useState` που είδαμε ένα δεύτερο που χρειαζόμαστε συχνά είναι το `useEffect`. Το `useEffect` μας επιτρέπει να κάνουμε κάποιες ενέργειες εκτός του component, για παράδειγμα να στέλνουμε κάποιο request ή να αλλάζουμε κάτι στο document, όταν αλλάζει το state, ή να αλλάξουμε το state όταν εκτελείται μία εξωτερική ενέργεια.

```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}


```

Το `useEffect` χρησιμοποιείται συχνά όταν θέλουμε να φορτώσουμε δεδομένα από κάποιο εξωτερικό api. Τότε δημιουργούμε ένα αρχικό state χωρίς τιμές στα δεδομένα μας (με κάποιο κενό array ή κενά string ανάλογα με την περίσταση), καλούμε το api και όταν πάρουμε τα δεδομένα από το api τότε μέσω του `useEffect` αλλάζουμε το state και προκαλούμε έτσι καινούριο render με τα σωστά δεδομένα.
