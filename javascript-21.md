# Git

Όταν δουλεύουμε σε ένα project και είδικα όταν συνεργαζόμαστε με άλλους χρειαζόμαστε έναν τρόπο να γνωρίζουμε τι αλλαγές κάνουμε στον κώδικα μας, να μπορούμε να αντιστρέψουμε αλλαγές ή να επιστρέψουμε σε κάποια προηγούμενη κατάσταση καθώς και να μπορούμε να συνδυάζουμε τη δουλειά διαφορετικών ατόμων χωρίς να χαλάει ο ένας ότι φτιάχνει ο άλλος. Για να γίνει αυτό υπάρχουν εργαλεία που ονομάζονται Verison Control Systems. Σήμερα σε αυτο τον τομέα κυριαρχεί απόλυτα το Git οπότε θα είναι και το μόνο που θα ασχοληθούμε.

Με το git μπορούμε να κρατάμε ένα "ημερολόγιο" των αλλαγών που γίνονται στον κώδικα μας και να επιστρέφουμε σε όποιο σημείο θέλουμε. Επίσης μπορούμε να διατηρούμε παράλληλα διαφορετικές εκδοχές του κώδικα μας και αν θέλουμε να τις ενώνουμε σε μία.

Το git μας προσφέρει τα εργαλεία για να το χρησιμοποιήσουμε μέσα από το command line (κονσόλα). Μπορούμε όμως να το χρησιμοποιήσουμε πιο εύκολα μέσω του user interface που μας προσφέρει το VS Code ή όποιος άλλος code editor χρησιμοποιούμε.

## Εργαλέια
Πρώτα απ' όλα πρέπει να εγκαταστήσουμε το Git στον υπολογιστή μας.

Για windows:
https://gitforwindows.org/

Για mac:
https://git-scm.com/download/mac

Το VS Code έχει από μόνο του πολύ καλή υποστήριξη για Git αλλά μπορούμε να προσθέσουμε το παρακάτω extension:
https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens

Τέλος για να μπορούμε να διατηρούμε τον κώδικα μας ασφαλή κάπου εκτός του υπολογιστή μας χρειαζόμαστε ένα account στο GitHub
https://github.com/

## Βασικές έννοιες

![Git diagram](/images/git.png "Git diagram")

### Working directory
Το folder μέσα στο οποίο βρίσκεται όλος ο κώδικας του project.

### repository ή repo
Το repository είναι το σύνολο του κώδικα που έχουμε διατηρήσει στο Git για ένα project. Εχει ως βάση το Working directory. Δημιουργούμε ένα repo τρέχοντας την εντολή `git init` μέσα στο folder του project μας. Μπορούμε επίσης αντί να ξεκινήσουμε από το μηδέν να πάρουμε κάποιο έτοιμο repository και να δημιουργήσουμε ένα αντίγραφο του με το `git clone /path/to/repository`.

### remote repo
Είναι ένα αντίγραφο του repository έξω από τον υπολογιστή μας, συνήθως στο GitHub ή σε κάποια άλλη αντίστοιχη υπηρεσία (πχ GitLab).

### staging area / Index
Δεν αντιστοιχεί σε κάποιο folder, είναι το σύνολο των αρχειών από αυτά που υπάρχουν στο Working directory τα οποία προορίζονται για να "σωθούν" στο repository.

### branch
Μπορούμε μέσα στο ίδιο repo και στο ίδιο Working directory να διατηρούμε παράλληλα διαφορετικές "εκδόσεις" του κώδικα μας δημιουργόντας branches (κλαδιά). Αν για παράδειγμα θέλουμε να δοκιμάσουμε μία εναλλακτική λύση σε κάτι που έχουμε ήδη φτιάξει μπορούμε να δημιουργήσουμε ένα branch, στο οποίο θα δώσουμε ένα όνομα και να δουλέψουμε σε αυτό. Οποιαδήποτε στιγμή μπορούμε να μεταφερθούμε από ένα branch σε άλλο και το git θα ενημερώσει αυτόματα όλα τα αρχεία στο Working directory.

## Βασικές εντολές

### git add
Βάζουμε κάποια αρχεία από το Working directory στο staging για να μπορούμε να τα σώσουμε.

### git commit
Σώζουμε μία ομάδα αλλαγών σε αρχεία (ότι υπάρχει στο staging area) στο repo. Στην πράξη, πολύ συχνά, κάνουμε `add` και `commit` σε ένα βήμα. Στο κάθε commit σώζεται, μαζί με τις αλλαγές στον κώδικα, το ποιός τις έκανε και πότε και ένα commit message που περιγράφει σύντομα τί αλλαγές έχουν γίνει.

### git push
Με το push ενημερώνουμε το remote repo στο GitHub για τις τελευταίες αλλαγές που έχουν γίνει.

### git pull
Αν στο remote repo υπάρχουν αλλαγές που δεν τις έχουμε στο τοπικό (είτε γιατί τις έκανε κάποιος άλλος, είτε γιατί τις κάναμε εμείς από άλλη συσκευή) ενημερώνουμε το local με git pull

### git checkout
Μεταφερόμαστε από το branch που είμαστε σε κάποιο άλλο. Το Working directory αλλάζει περιεχόμενο για να ανταποκριθεί στο καινούριο branch

### git merge
Φέρνουμε όλα τα δεδομένα από ένα άλλο branch μέσα στο branch που βρισκόμαστε. Το git προσπαθεί να κάνει αυτόματα τη συνένωση παρακολουθόντας τις αλλαγές σε κάθε αρχείο. Σε πολλές περιπτώσεις μπορεί να μας ρωτήσει τι να κάνει προκειμένου να λυσει κάποια `conflicts` όταν δηλαδή δεν γίνεται να συνυπάρξουν τα αρχεία των δύο branch και πρέπει να γίνει μία επιλογή.