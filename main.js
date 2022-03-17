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
// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Milestone 5
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato 
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
// Pensate bene a come strutturare i dati prima di implementare il codice.



const app = new Vue({
    el: '#app',
    data: {
        activeIndex: 0,
        cerca: '',
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
                formatData:'2022-03-17T20:32:33',
                ora: '',
                filtro: true,
                messaggis: [{
                        text: 'ciao',
                        data: '12/12/2012',
                        inviato: true,
                        menu: false,
                    },
                    {
                        text: 'prova',
                        data: '12/12/2012',
                        inviato: true,
                        menu: false,
                        
                    }
                ]
            },
            {
                nome: 'Fabio',
                Image: "avatar_2.jpg",
                accesso: 'Ultimo messaggio inviato',
                formatData:'2022-04-17T10:32:32',
                ora: '',
                filtro: true,
                messaggis: [{
                    text: 'come stai',
                    data: '12/12/2013',
                    inviato: true,
                    menu: false,
                }]
            },
            {
                nome: 'Samuele',
                Image: "avatar_3.jpg",
                accesso: 'Ultimo messaggio inviato',
                formatData:'2022-05-19T20:32:33',
                ora: '',
                filtro: true,
                messaggis: [{
                    text: 'hey',
                    data: '12/12/2012',
                    inviato: true,
                    menu: false,
                }]
            },
            {
                nome: 'Alessandro B.',
                Image: "avatar_4.jpg",
                accesso: 'Ultimo messaggio inviato',
                formatData:'2022-07-17T20:33:43',
                ora: '',
                filtro: true,
                messaggis: [{
                    text: 'hola',
                    data: '12/12/2012',
                    inviato: true,
                    menu: false,
                }]
            },
            {
                nome: 'Alessandro L.',
                Image: "avatar_5.jpg",
                accesso: 'Ultimo messaggio inviato',
                formatData:'2022-03-15T20:32:33',
                ora: '',
                filtro: true,
                messaggis: [{
                    text: 'ci sei',
                    data: '12/12/2012',
                    inviato: true,
                    menu: false,
                }]
            },
            {
                nome: 'Claudia',
                Image: "avatar_6.jpg",
                accesso: 'Ultimo messaggio inviato',
                formatData:'2022-03-09T20:42:31',
                ora: '',
                filtro: true,
                messaggis: [{
                    text: 'buon giorno',
                    data: '11/10/2012',
                    inviato: true,
                    menu: false,
                }]
            },
            {
                nome: 'Federico',
                Image: "avatar_7.jpg",
                accesso: 'Ultimo messaggio inviato',
                formatData:'2022-03-04T20:55:33',
                ora: '',
                filtro: true,
                messaggis: [{
                    text: 'buona notte',
                    data: '11/12/2012',
                    inviato: true,
                    menu: false,
                }]
            },
            {
                nome: 'Davide',
                Image: "avatar_8.jpg",
                accesso: 'Ultimo messaggio inviato',
                formatData:'2022-03-13T20:39:33',
                ora: '',
                filtro: true,
                messaggis: [{
                    text: 'arrivederci',
                    data: '12/06/2012',
                    inviato: true,
                    menu: false,
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
                        inviato: false,
                        menu: false,
                    });
                },1000)
            }
        },
        blockPanel(index) {
            console.log(this.contacts[this.activeIndex].messaggis[index].menu )
            this.contacts[this.activeIndex].messaggis[index].menu = !this.contacts[this.activeIndex].messaggis[index].menu 
        },
        cercaNome(){
            this.contacts.forEach(element => {
                if(element.nome.toLowerCase().includes(this.cerca.toLowerCase())){
                    element.filtro = true;
                }else{
                    element.filtro = false;
                }
            });
        },
        getFormattedData(data) {
            let formatStr = 'dd/MM/yyyy HH:mm:ss';
            return luxon.DateTime.fromISO(data).toFormat(formatStr);
        }
    }

});