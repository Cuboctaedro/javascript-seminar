# Είδη εφαρμογών

Στις περισσότερες εφαρμογές που ξεφεύγουν από την στατική ιστοσελίδα προς κάτι πιο διαδραστικό η JavaScript παίζει κεντρικό ρόλο. Το τι ρόλο μπορεί να παίξει η JavaScript όμως εξαρτάται από το είδος της εφαρμογής. Παρακάτω θα δούμε τις βασικές "αρχιτεκτονικές" εφαρμογών και το ρόλο της JavaScript στην κάθε μία. Θα εξετάσουμε μόνο την περίπτωση των online εφαρμογών που ο χρήστης τις προσσεγγίζει μέσω browser και όχι native εφαρμογές για κινητά ή και desktops που μπορεί να λειτουργούν κυρίως offline.

## Τα βασικά στοιχεία μίας εφαρμογής

Ξεκινόντας από το χρήστη και πηγαίνοντας προς τα πίσω μία εφαρμογή έχει:

* **Front end:** html, css, javascript και εικόνες ή άλλα media που δημιουργούν ένα user interface στο browser με το οποίο χρησιμοποιούμε την εφαρμογή
* **Back end** γραμμένο σε οπόιαδήποτε server-side γλώσσα (Python, PHP, Node, Ruby, Go, Java...) φροντίζει να τροφοδοτεί το front end με δεδομένα και να δέχεται τα δεδομένα που στέλνει ο χρήστης
* **CMS** ένα ακόμα user interface που επιτρέπει στον ιδιοκτήτη της εφαρμογής να τη διαχειρίζεται, να ανανεώνει το περιεχόμενο κλπ..
* **Persistence** κάποια δυνατότητα να διατηρεί δεδομένα για μεγάλο χρονικό διάστημα και να τα ανακτά. Σχεδόν πάντα γίνεται με μία database
* **Messaging** Δυνατότητα να επικοινωνεί με το χρήστη με άλλα μέσα εκτός του user interface, με email, sms, κλπ.
* **API** Σε περίπτωση που κάποιες από αυτές τις λειτουργίες γίνονται ξεχωριστά θα πρέπει να υπάρχει μεταξύ τους επικοινωνία. Ο ορισμός του τρόπου (του προτοκόλου) επικοινωνίας, αλλά και η τεχνική του υλοποίηση, είναι το API. 

Με βάση αυτά μπορούμε να δούμε τους διαφορετικούς τρόπους που μπορεί να φτιαχτεί μία εφαρμογή.

## Μονολιθική

Σε αυτή την περίπτωση όλες οι λειτουργίες γίνονται από τον ίδιο server. Είναι το πιο παλιό και ακόμα και σήμερα το πιο διαδεδομένο είδος εφαρμογής, ειδικά όταν μιλάμε για ιστοσελίδες. Μία τέτοια εφαρμογή είναι χτισμένη γύρω από το back end. Συνήφως χρησιμοποιεί κάποιο back end framework ή κάποιο cms που δίνει μαζί και δυνατότητες διαχείρησης στον ιδιοκτήτη της εφαρμογής. Πιο γνωστή περίπτωση είναι το WordPress, ένα cms γραμμένο κυρίως σε PHP, το οποίο δημιουργεί σελίδες html μέσω php templates που τα τροφοδοτεί με data η PHP επικονωνόντας με μια βάση δεδομένων. Σε αυτή την περίπτωση η JavaScript φορτώνεται από το html και λειτουργεί επικουρίκα για να προσθέσει διαδραστικότητα στο user interface.

Πέρα από τα cms, που αποτελούν "έτοιμες" λύσεις υπάρχει η περίπτωση να δημιουργηθεί μια custom μονολιθική εφαρμογή. Συνήθως αυτό γίνεται χρησιμοποιόντας κάποio framework για μία backend γλώσσα, πχ Laravel για PHP, Django για Python και άλλα. ένα τέτοιο framework θα προσφέρει συνήθως έτοιμες λύσεις για βασικές λειτουργίες όπως authentication, messaging, html templates, σύνδεση με database και άλλα.

## Ξεχωριστό Front και Back

Μπορούμε να έχουμε χωριστά το Front end από την υπόλοιπη εφαρμογή. Τότε το front end είναι ένα σύνολο αρχείων html, css και javascript όπου παίρνουν περιεχόμενο, συνήθως με μορφή JSON, επικοινωνόντας με το back end μέσω διαδικτύου. Υπάρχουν διάφορες παραλλαγές τόσο στο front όσο και στο back end.

### Custom API

Μπορούμε να φτιάξουμε ένα custom back end API χρησιμοποιόντας κάποια server side γλώσσα προγραμματισμού όπως και στην περίπτωση της μονολιθικής εφαρμογής. Η μόνη διαφορά είναι ότι το back end δεν θα δημιουργεί html σελίδες αλλά θα στέλνει τα data κάθε σελίδας με τη μορφή JSON. Επίσης θα δέχεται data με τον ίδιο τρόπο και θα αναλαμβάνει να τα σώσει. Η λύση αυτή μπορεί να γίνει είται εντελώς custom είται με κάποιο cms, όπως το WordPress. Τα CMS που δεν δημιουργούν html views αλλά επικοινωνούν μόνο μέσω ενός API με json τα αποκαλούμε headless.

### Backend as service

Πλέον υπάρχουν υπηρεσίες που μας προσφέρουν ένα headless cms το οποίο μπορούμε να σετάρουμε εμείς για το είδος περιεχομένου που θέλουμε. Δεν χρειάζεται όμως να ασχοληθούμε καθόλου με το server και τον προγραμματισμό του. Εισάγουμε data μέσω ενός έτοιμου user interface και διαβάζουμε αυτά τα data με requests σε ένα api που μας δίνει json

### SPA front end

Μια αρχιτεκτονική που χρησιμοποιείται συχνά για το front end σε περιπτώσεις εφαρμογών είναι το SPA (single page app). Αυτό λειτουργεί με την ίδια λογική που είχε η άσκηση με τα Tabs στο κεφάλαιο των Events. Έχουμε δηλαδή ένα αρχείο html που περιλαμβάνει το σκελετό της εφαρμογής μας και τα στοιχέια που είναι κοινά σε όλες τις σελίδες, header, footer, navigation menu, logo κλπ. Το navigation είναι ουσιαστικά μία σειρά από buttons με τα οποία αλλάζουμε το περιεχόμενο της σελίδας κάνοντας κάθε φορά ένα request στο backend για νέα δεδομένα ή παρουσιάζοντας κάποια σταθερά δεδομένα όπου δεν χρειάζεται ανανέωση. Αν και δεν αλλάζουμε ουσιαστικά σελίδα μπορούμε να αλλάζουμε τη διεύθυνση στη μπάρα του browser για κάθε αλλαγή περιεχομένου έτσι ώστε να μπορεί ο χρήστης να την κρατήσει σε bookmark ή να την κάνει share και όταν χρησιμοποιηθεί να επαναφέρει το χρήστη στο συγκεκριμένο σημείο. Σε αυτή την περίπτωση όλη η βασική λειτουργία της εφαρμογής γίνεται μεσώ JavaScript και χωρίς JavaScript θα δούμε μόνο τον σκελετό χωρίς περιεχόμενο.

### Static generated front end

Σε περιπτώσεις που το περιεχόμενο της εφαρμογής δεν χρειάζεται πολύ συχνή ανανέωση μπορούμε να χρησιμοποιήσουμε ένα static site generator (ssg). Αυτό είναι παρόμοιο με ένα build tool αλλά μας δίνει περισσότερες δυνατότητες. Μπορούμε να δημιουργήσουμε όλες τις σελιδες της εφαρμογής μας σαν αρχεία html κάνοντας τα request από τον υπολογιστή μας την ώρα που γίνεται το build. Εχοντας φτιάξει ένα template για κάθε είδος σελίδας, καθοδηγούμε με τον κώδικα μας το ssg να κάνει τα σωστά request για να πάρει τα δεδομένα για κάθε σελίδα και να δημιουργήσει το αντίστοιχο αρχείο. Ετσι τελικά έχουμε ένα σύνολο αρχείων html μέσα σε folders που λειτουργούν ως ένα στατικό site. Έτσι στην τελική εφαρμογή έχουμε κάτι παρόμοιο με τη μονολιθική λύση όπου η JavaScript παίζει συμπληρωματίκό ρόλο. Βέβαια, τις πιο πολλές φορές το ssg λειτουργεί και αυτό με Node.js οπότε η JavaScript είναι βασική κατα τη διαδικασία του build.

### SSR με JavaScript framework

Τα SPA και SSG έχουν σημαντικά πλεονεκτήματα και μειονεκτήματα:

|           | SPA                                             | SSG |
|-----------|-------------------------------------------------|-----|
| Ανανέωση περιεχόμενου  | Μπορούμε να έχουμε live data οποιαδήπτε στιγμή  | Για να ανανεώσουμε το περιεχόμενο πρέπει να ξαναγίνει build όλης της εφαρμογής και να ανέβουν τα καινούρια αρχεία στο server |
| Αλλαγή σελίδας | Αν έχουμε φορτώσει τα δεδομένα η αλλαγή σελίδας είναι άμεση ή με ότι εφέ θέλουμε | Έχουμε κανονικές αλλαγές σελίδας όπως σε μάι μονολιθική εφαρμογή αλλά πιο γρήγορες επειδή δουλεύουμε με σκέτο html |
| SEO | Οι σελίδες δεν υπάρχουν στο server, το Google "βλέπει" μόνο το σκελετό της εφαρμογής | Όλο το περιεχόμενο είναι διαθέσιμο για indexing από μηχανές αναζήτησης |

Ο τρόπος να συνδυάσουμε τα θετικά των δύο συστημάτων είναι το Server Side Rendering (SSR) όπου χρησιμοποιούμε κάποιο tool φτιαγμένο για ένα συγκεκριμένο JavaScript framework όπως React, Vue, Angular, Svelte, κλπ. Για τα περισσότερα framework υπάρχουν static site generators όπου δημιουργούν κάτι ανάμεσα σε SPA και Static Site. Αν και δημιουργούνται html για κάθε σελίδα, όταν ο χρήστης επισκέπτεται την εφαρμογή φορτώνει μόνο το πρώτο html και οι υπόλοιπες ανανεώσεις γίνονται με request στον front end server που κρατάει όλα τα δεδομένα της κάθε σελίδας σε αρχεία json. Σε όποιες σελίδες θέλουμε μπορούμε να φορτώνουμε live data με request στο backend. Έτσι πετυχαίνουμε καλύτερο performance, δυνατότητα για άμεση ανανέωση, εμπείρία παρόμοια με αυτή του SPA, αλλά και σωστό SEO. Το πρόβλημα είναι ότι αυξάνεται πολύ η πολυπλοκότητα του κώδικα και ότι πλέον η εφαρμο΄γη μας εξαρτάται και από το βασικό framework (React, Vue, κλπ) αλλά και από το αντίστοιχο SSG (Next, Nuxt, SvelteKit, Gatsby κλπ).

## Microservices 

Μια πιο σύγχονη αρχιτεκτονική προσσέγγιση είναι αυτή των microservices. Σε αυτή την περίπτωση δεν μας ενδιαφέρει τόσο ο χωρισμός σε front και back όσο ο χωρισμός σε λειτουργίες. Μπορούμε για παράδειγμα να ορίσουμε ως μία λειτουργία το authentication, ως μία άλλη την προβολή μίας σειράς από άρθρα και ως μία τρίτη τη λειτουργία μιας φόρμας επικοινωνίας. Η κάθε λειτουργία αναπτύσσεται όσο το δυνατόν ανεξάρτητα, με δικό της front και back και τελικά δημιουργείται μία κεντρική εφαρμογή που συντονίζει τις υπόλοιπες. Η κάθε λειτουργία μπορεί να τρέχει σε διαφορετικό server,ακόμα και να είναι γραμμένη σε άλλη γλώσσα. Η επικοινωνία μεταξύ τους γίνεται μόνο μέσω κάποιου API. 

Είναι μία αρχιτεκτονική που έχει νόημα κυρίως σε μεγάλες εφαρμογές αφού δίνει τη δυνατότητα να αναπτυχθεί κάθε μέρος της εφαρμογής ανεξάρτητα απο διαφορετικές ομάδες και να ανανεώνεται ή να βελτιώνεται ανάλογα με τις ανάγκες χωρίς να επηρεάζει το σύνολο της εφαρμογής. Κατα τα άλλα είναι ένας τρόπος ανάπτυξης με μεγάλη πολυπλοκότητα και κόστος.
