// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Consiglio
// Pensate bene a come strutturare i dati prima di implementare il codice.



const app = new Vue({
    el: '#app',
    data: {
        activeIndex: 0,
        textUser: '',
        profileUser: {
            nome: 'Martino',
            Image: "avatar_3.jpg",
            ora: '',
        },
        contacts: [{
                nome: 'Michele',
                Image: "avatar_1.jpg",
                accesso: 'Ultimo messaggio inviato',
                ora: '',
                messaggis: [{
                        text: 'ciao',
                        data: '12/12/2012',
                        inviato: true,
                    },
                    {
                        text: 'prova',
                        data: '12/12/2012',
                        inviato: true,
                    }
                ]
            },
            {
                nome: 'Fabio',
                Image: "avatar_2.jpg",
                accesso: 'Ultimo messaggio inviato',
                ora: '',
                messaggis: [{
                    text: 'come stai',
                    data: '12/12/2012',
                    inviato: true,
                }]
            },
            {
                nome: 'Samuele',
                Image: "avatar_3.jpg",
                accesso: 'Ultimo messaggio inviato',
                ora: '',
                messaggis: [{
                    text: 'hey',
                    data: '12/12/2012',
                    inviato: true,
                }]
            },
            {
                nome: 'Alessandro B.',
                Image: "avatar_4.jpg",
                accesso: 'Ultimo messaggio inviato',
                ora: '',
                messaggis: [{
                    text: 'hola',
                    data: '12/12/2012',
                    inviato: true,
                }]
            },
            {
                nome: 'Alessandro L.',
                Image: "avatar_5.jpg",
                accesso: 'Ultimo messaggio inviato',
                ora: '',
                messaggis: [{
                    text: 'ci sei',
                    data: '12/12/2012',
                    inviato: true,
                }]
            },
            {
                nome: 'Claudia',
                Image: "avatar_6.jpg",
                accesso: 'Ultimo messaggio inviato',
                ora: '',
                messaggis: [{
                    text: 'buon giorno',
                    data: '12/12/2012',
                    inviato: true,
                }]
            },
            {
                nome: 'Federico',
                Image: "avatar_7.jpg",
                accesso: 'Ultimo messaggio inviato',
                ora: '',
                messaggis: [{
                    text: 'buona notte',
                    data: '12/12/2012',
                    inviato: true,
                }]
            },
            {
                nome: 'Davide',
                Image: "avatar_8.jpg",
                accesso: 'Ultimo messaggio inviato',
                ora: '',
                messaggis: [{
                    text: 'arrivederci',
                    data: '12/12/2012',
                    inviato: true,
                }]
            },
        ]
    },
    methods: {
        changeCurrentChat(index) {
            this.activeIndex = index;
        },
        invio(activeIndex) {
        if(this.textUser != '' ){
            this.contacts[activeIndex].messaggis.push({
                text: this.textUser,
                data: '12/12/2012',
                inviato: true
            });
            this.textUser = '';
        }
        },
        messageReceved(trova){
            if(this.textUser != ''){
                let message = 'ok';
                setTimeout(() => {
                    this.contacts[trova].messaggis.push({
                        text: message,
                        data: '12/12/2012',
                        inviato: false
                    });
                },1000)
            }
        }
    }

});