/**
 * TESTI LEGALI
 *
 * Redatti sulla base di come il sito e il servizio funzionano oggi.
 * Non costituiscono un parere legale: le eventuali correzioni del
 * consulente vanno applicate qui, senza toccare le pagine.
 *
 * Il blocco di tipo `open` resta disponibile per evidenziare in pagina
 * un punto ancora aperto durante una revisione.
 *
 * Aggiornare `LEGAL_UPDATED` a ogni modifica.
 */

export const LEGAL_UPDATED = "16 agosto 2026";

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "definitions"; items: { term: string; text: string }[] }
  /** Riquadro evidenziato: decisione o verifica ancora aperta. */
  | { type: "open"; title: string; text: string; items?: string[] };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

/* ================================================================== */
/* PRIVACY POLICY                                                      */
/* ================================================================== */

export const PRIVACY_POLICY: LegalDoc = {
  title: "Privacy Policy",
  intro:
    "Informativa sul trattamento dei dati personali resa ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679 (GDPR) a chi visita questo sito, richiede informazioni o intraprende un percorso di coaching.",
  sections: [
    {
      title: "1. Titolare del trattamento",
      blocks: [
        {
          type: "paragraph",
          text: "Il titolare del trattamento è Francesca Collarile, i cui dati identificativi e di contatto sono riportati in fondo a questa pagina. Per qualunque questione relativa ai dati personali è possibile scrivere all'indirizzo email indicato.",
        },
        {
          type: "paragraph",
          text: "Non è stato nominato un Responsabile della Protezione dei Dati (DPO), non ricorrendo i presupposti di obbligatorietà previsti dall'art. 37 del GDPR.",
        },
      ],
    },
    {
      title: "2. Quali dati vengono raccolti",
      blocks: [
        {
          type: "paragraph",
          text: "Questo sito non contiene moduli di contatto, non richiede registrazione e non raccoglie dati direttamente. I dati personali vengono acquisiti soltanto quando sei tu a fornirli, attraverso i canali di contatto indicati nel sito o nel corso del rapporto di coaching.",
        },
        {
          type: "definitions",
          items: [
            {
              term: "Dati di contatto",
              text: "Nome, cognome, indirizzo email, numero di telefono, eventuale profilo social, comunicati spontaneamente via email, telefono, WhatsApp, Instagram o al momento della prenotazione della chiamata conoscitiva.",
            },
            {
              term: "Dati raccolti durante la call conoscitiva e l'analisi iniziale",
              text: "Obiettivi, esperienza di allenamento, conformazione corporea, contesto e disponibilità di allenamento, attrezzatura a disposizione, abitudini e preferenze.",
            },
            {
              term: "Informazioni su infortuni o problematiche fisiche",
              text: "Notizie relative a infortuni pregressi, limitazioni funzionali o condizioni di salute che dichiari spontaneamente perché rilevanti per la costruzione del programma.",
            },
            {
              term: "Contenuti inviati durante il percorso",
              text: "Video e fotografie delle tue esecuzioni, misurazioni, carichi utilizzati, feedback scritti o vocali, messaggi scambiati nel corso del coaching.",
            },
            {
              term: "Dati di navigazione",
              text: "I sistemi informatici e le procedure software che fanno funzionare il sito acquisiscono, nel normale esercizio, alcuni dati tecnici la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet (ad esempio indirizzo IP, tipo di browser e sistema operativo, data e ora della richiesta). Questi dati sono trattati dal fornitore di hosting nei log di sistema per finalità di sicurezza e diagnostica.",
            },
          ],
        },
      ],
    },
    {
      title: "3. Dati relativi alla salute",
      blocks: [
        {
          type: "paragraph",
          text: "Le informazioni su infortuni, limitazioni fisiche o condizioni di salute rientrano tra le categorie particolari di dati personali disciplinate dall'art. 9 del GDPR e ricevono una tutela rafforzata.",
        },
        {
          type: "paragraph",
          text: "Vengono trattate esclusivamente sulla base del tuo consenso esplicito, al solo scopo di costruire una programmazione che ne tenga conto, e non vengono comunicate a terzi. Puoi revocare il consenso in qualsiasi momento: la revoca non pregiudica la liceità del trattamento effettuato prima, ma può rendere impossibile la prosecuzione del percorso in condizioni di adeguata prudenza.",
        },
        {
          type: "paragraph",
          text: "Il servizio di coaching non ha finalità diagnostiche, terapeutiche o riabilitative e non sostituisce la valutazione di professionisti sanitari qualificati.",
        },
      ],
    },
    {
      title: "4. Finalità del trattamento e basi giuridiche",
      blocks: [
        {
          type: "definitions",
          items: [
            {
              term: "Rispondere alle richieste di informazioni e gestire la call conoscitiva",
              text: "Base giuridica: esecuzione di misure precontrattuali adottate su tua richiesta (art. 6.1.b GDPR).",
            },
            {
              term: "Erogare il servizio di coaching online o One To One",
              text: "Base giuridica: esecuzione del contratto di cui sei parte (art. 6.1.b GDPR).",
            },
            {
              term: "Costruire e adattare la programmazione tenendo conto di infortuni o problematiche dichiarate",
              text: "Base giuridica: consenso esplicito al trattamento di categorie particolari di dati (art. 9.2.a GDPR).",
            },
            {
              term: "Adempiere agli obblighi contabili, fiscali e amministrativi",
              text: "Base giuridica: obbligo legale al quale è soggetto il titolare (art. 6.1.c GDPR).",
            },
            {
              term: "Accertare, esercitare o difendere un diritto in sede giudiziaria",
              text: "Base giuridica: legittimo interesse del titolare (art. 6.1.f GDPR).",
            },
            {
              term: "Pubblicare testimonianze, fotografie o video che ti riguardano",
              text: "Base giuridica: consenso specifico, libero e revocabile, raccolto separatamente rispetto al contratto (art. 6.1.a GDPR). Il rifiuto non ha alcuna conseguenza sull'erogazione del servizio.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "Il conferimento dei dati è facoltativo, ma il rifiuto di fornire quelli necessari a valutare la tua situazione e a costruire la programmazione rende impossibile erogare il servizio.",
        },
      ],
    },
    {
      title: "5. Destinatari dei dati",
      blocks: [
        {
          type: "paragraph",
          text: "I dati non sono oggetto di diffusione né di cessione a terzi per finalità commerciali. Possono essere trattati, per le sole finalità sopra indicate, dai seguenti fornitori, che agiscono come responsabili del trattamento ai sensi dell'art. 28 GDPR:",
        },
        {
          type: "definitions",
          items: [
            {
              term: "Vercel Inc.",
              text: "Fornitore dell'infrastruttura sulla quale è ospitato questo sito. Tratta esclusivamente i dati tecnici di navigazione registrati nei log di sistema.",
            },
            {
              term: "Zoom Communications, Inc.",
              text: "Piattaforma utilizzata per la chiamata conoscitiva. Tratta i dati necessari alla programmazione e allo svolgimento della videochiamata.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "I dati possono inoltre essere comunicati alle autorità competenti nei casi previsti dalla legge.",
        },
      ],
    },
    {
      title: "6. Trasferimento dei dati fuori dall'Unione Europea",
      blocks: [
        {
          type: "paragraph",
          text: "Vercel e Zoom sono società con sede negli Stati Uniti e possono trattare i dati anche al di fuori dello Spazio Economico Europeo. Il trasferimento avviene in presenza delle garanzie previste dal Capo V del GDPR — decisione di adeguatezza relativa al EU-U.S. Data Privacy Framework e Clausole Contrattuali Standard approvate dalla Commissione Europea — secondo quanto dichiarato dai rispettivi fornitori nelle proprie informative.",
        },
        {
          type: "paragraph",
          text: "Al di fuori di questi casi non viene effettuato alcun trasferimento di dati verso Paesi terzi.",
        },
      ],
    },
    {
      title: "7. Conservazione dei dati",
      blocks: [
        {
          type: "paragraph",
          text: "Questo sito non dispone di alcun archivio: non contiene moduli, non prevede registrazione e non memorizza dati personali. I dati relativi alla prenotazione della chiamata conoscitiva restano sulla piattaforma Zoom e sono conservati secondo le politiche di quest'ultima.",
        },
        {
          type: "paragraph",
          text: "I dati e i materiali scambiati nel corso di un percorso di coaching sono conservati per la sola durata del rapporto e cancellati al termine. Fanno eccezione i documenti contabili e fiscali, che devono essere conservati per dieci anni in forza di un obbligo di legge.",
        },
      ],
    },
    {
      title: "8. I tuoi diritti",
      blocks: [
        {
          type: "paragraph",
          text: "In qualità di interessato puoi esercitare in qualsiasi momento i diritti previsti dagli articoli da 15 a 22 del GDPR, e in particolare:",
        },
        {
          type: "list",
          items: [
            "ottenere la conferma dell'esistenza di un trattamento e accedere ai tuoi dati;",
            "chiedere la rettifica dei dati inesatti o l'integrazione di quelli incompleti;",
            "chiedere la cancellazione dei dati, nei casi previsti dall'art. 17;",
            "chiedere la limitazione del trattamento, nei casi previsti dall'art. 18;",
            "ricevere i dati in un formato strutturato, di uso comune e leggibile da dispositivo automatico, e trasmetterli a un altro titolare;",
            "opporti al trattamento fondato sul legittimo interesse;",
            "revocare in ogni momento il consenso prestato, senza pregiudizio per la liceità del trattamento precedente.",
          ],
        },
        {
          type: "paragraph",
          text: "Le richieste vanno inoltrate all'indirizzo email del titolare indicato in fondo alla pagina. Il riscontro è fornito senza ingiustificato ritardo e comunque entro un mese dal ricevimento, prorogabile di due mesi in caso di particolare complessità.",
        },
      ],
    },
    {
      title: "9. Reclamo all'autorità di controllo",
      blocks: [
        {
          type: "paragraph",
          text: "Se ritieni che il trattamento dei tuoi dati violi la normativa vigente, hai diritto di proporre reclamo al Garante per la protezione dei dati personali (Piazza Venezia 11, 00187 Roma — garanteprivacy.it) oppure di ricorrere all'autorità giudiziaria.",
        },
      ],
    },
    {
      title: "10. Modifiche a questa informativa",
      blocks: [
        {
          type: "paragraph",
          text: "Questa informativa può essere aggiornata per adeguarla a modifiche normative o a cambiamenti nei servizi offerti. La versione pubblicata su questa pagina è sempre quella vigente; la data dell'ultimo aggiornamento è indicata in cima al documento.",
        },
      ],
    },
  ],
};

/* ================================================================== */
/* COOKIE POLICY                                                       */
/* ================================================================== */

export const COOKIE_POLICY: LegalDoc = {
  title: "Cookie Policy",
  intro:
    "Informativa sull'uso dei cookie e di tecnologie analoghe, resa ai sensi dell'art. 122 del Codice Privacy e delle Linee guida del Garante sull'uso dei cookie del 10 giugno 2021.",
  sections: [
    {
      title: "1. Che cosa sono i cookie",
      blocks: [
        {
          type: "paragraph",
          text: "I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. Tecnologie analoghe, come i web beacon o l'archiviazione locale del browser, possono svolgere funzioni simili.",
        },
        {
          type: "paragraph",
          text: "Si distinguono in cookie tecnici, necessari al funzionamento del sito e installabili senza consenso, e cookie di profilazione o di terze parti, che richiedono invece il consenso preventivo dell'utente.",
        },
      ],
    },
    {
      title: "2. Cookie utilizzati da questo sito",
      blocks: [
        {
          type: "paragraph",
          text: "Allo stato attuale questo sito non installa alcun cookie sul dispositivo dell'utente. Non sono presenti strumenti di analisi statistica, non vengono utilizzati pixel di tracciamento o strumenti pubblicitari, non viene svolta alcuna attività di profilazione.",
        },
        {
          type: "paragraph",
          text: "Il sito non richiede registrazione, non contiene moduli di contatto, non gestisce carrelli o pagamenti e non necessita quindi di cookie di sessione. Per questa ragione non è presente alcun banner di consenso: non essendoci strumenti sottoposti a consenso, un banner sarebbe privo di oggetto.",
        },
        {
          type: "paragraph",
          text: "I caratteri tipografici e tutte le risorse grafiche sono ospitati direttamente sul dominio del sito e non comportano alcuna chiamata a server di terze parti durante la navigazione.",
        },
      ],
    },
    {
      title: "3. Dati tecnici di navigazione",
      blocks: [
        {
          type: "paragraph",
          text: "Indipendentemente dai cookie, il fornitore di hosting registra nei propri log di sistema alcuni dati tecnici trasmessi automaticamente dal browser, come l'indirizzo IP, il tipo di dispositivo e la data e l'ora della richiesta. Tali dati sono trattati per finalità di sicurezza, diagnostica e continuità del servizio e non vengono utilizzati per identificare gli utenti né per profilarli.",
        },
      ],
    },
    {
      title: "4. Servizi di terze parti raggiungibili dal sito",
      blocks: [
        {
          type: "paragraph",
          text: "Alcuni collegamenti presenti nel sito conducono a piattaforme esterne: la piattaforma di prenotazione della chiamata conoscitiva, WhatsApp, Instagram e il client di posta elettronica. Questi servizi non sono incorporati nelle pagine e non installano cookie finché resti su questo sito.",
        },
        {
          type: "paragraph",
          text: "Nel momento in cui segui uno di quei collegamenti abbandoni questo sito e accedi a una piattaforma gestita da un soggetto terzo, che applica le proprie informative sulla privacy e sui cookie. Ti invitiamo a consultarle direttamente.",
        },
      ],
    },
    {
      title: "5. Come gestire i cookie dal browser",
      blocks: [
        {
          type: "paragraph",
          text: "Anche in assenza di cookie installati da questo sito, puoi in qualsiasi momento configurare il tuo browser per bloccare o eliminare i cookie dei siti che visiti. Le istruzioni sono disponibili nelle pagine di supporto dei principali browser: Chrome, Safari, Firefox, Microsoft Edge e Opera.",
        },
      ],
    },
  ],
};

/* ================================================================== */
/* TERMINI E CONDIZIONI                                                */
/* ================================================================== */

export const TERMS: LegalDoc = {
  title: "Termini e condizioni",
  intro:
    "Condizioni generali che regolano i servizi di coaching online e di allenamento individuale offerti da Francesca Collarile. Il sito ha finalità informativa e promozionale: non consente l'acquisto diretto dei servizi, che vengono concordati individualmente dopo una chiamata conoscitiva.",
  sections: [
    {
      title: "1. Oggetto",
      blocks: [
        {
          type: "paragraph",
          text: "Le presenti condizioni disciplinano il rapporto tra Francesca Collarile, di seguito «la coach», e la persona che sottoscrive un percorso di coaching, di seguito «l'allievo». Costituiscono parte integrante dell'accordo e si intendono accettate al momento dell'avvio del percorso.",
        },
      ],
    },
    {
      title: "2. Servizi offerti",
      blocks: [
        {
          type: "definitions",
          items: [
            {
              term: "Full Coaching",
              text: "Percorso online che comprende programmazione personalizzata, video esecutivi degli esercizi, audio esplicativi delle scelte effettuate, invio di video degli allenamenti da parte dell'allievo per tutta la durata del percorso, monitoraggio continuo e adattamento della programmazione.",
            },
            {
              term: "Coaching Ridotto",
              text: "Percorso online che comprende programmazione personalizzata, video esecutivi, audio esplicativi e una finestra di confronto sui video degli allenamenti della durata di una settimana, con indicazioni e correzioni iniziali.",
            },
            {
              term: "One To One",
              text: "Sessioni individuali di allenamento svolte in presenza presso GPC Power Academy, a Caronno Pertusella.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "I percorsi online sono disponibili nelle durate di sei settimane, tre mesi e sei mesi. La durata e la modalità vengono concordate durante la chiamata conoscitiva.",
        },
      ],
    },
    {
      title: "3. Natura del servizio e limiti",
      blocks: [
        {
          type: "paragraph",
          text: "Il servizio ha natura esclusivamente tecnico-sportiva e ha per oggetto la programmazione e la supervisione dell'allenamento. Non costituisce prestazione sanitaria, non ha finalità diagnostiche, terapeutiche o riabilitative e non sostituisce in alcun modo la valutazione, la diagnosi o il trattamento di medici, fisioterapisti o altri professionisti sanitari.",
        },
        {
          type: "paragraph",
          text: "La coach non fornisce piani alimentari né indicazioni di natura nutrizionale personalizzata, attività riservate alle figure professionali abilitate.",
        },
        {
          type: "paragraph",
          text: "Nessun risultato specifico è garantito. L'esito di un percorso dipende dal punto di partenza, dalla costanza nell'applicazione, dal riposo, dall'alimentazione, dal contesto di vita e da variabili individuali che esulano dal controllo della coach.",
        },
      ],
    },
    {
      title: "4. Conclusione del contratto",
      blocks: [
        {
          type: "paragraph",
          text: "Il percorso ha inizio con una chiamata conoscitiva gratuita e senza impegno, finalizzata a valutare gli obiettivi dell'allievo e l'adeguatezza del servizio alle sue necessità. A seguito della call la coach formula una proposta indicando modalità, durata e corrispettivo.",
        },
        {
          type: "paragraph",
          text: "Il contratto si intende concluso al momento dell'accettazione della proposta da parte dell'allievo e del pagamento del corrispettivo secondo le modalità concordate. La coach si riserva la facoltà di non accettare la richiesta qualora ritenga che il servizio non sia adatto alla situazione della persona.",
        },
      ],
    },
    {
      title: "5. Corrispettivi e pagamenti",
      blocks: [
        {
          type: "paragraph",
          text: "I corrispettivi vengono comunicati individualmente in sede di proposta, in funzione della modalità e della durata scelte. A fronte del pagamento viene emesso regolare documento fiscale.",
        },
      ],
    },
    {
      title: "6. Obblighi dell'allievo",
      blocks: [
        {
          type: "list",
          items: [
            "fornire informazioni veritiere, complete e aggiornate su obiettivi, esperienza, condizione fisica ed eventuali infortuni o patologie;",
            "comunicare tempestivamente qualsiasi variazione del proprio stato di salute che possa incidere sull'allenamento;",
            "essere in possesso di idonea certificazione medica per l'attività fisica svolta, ove prevista dalla normativa vigente;",
            "eseguire gli esercizi secondo le indicazioni ricevute, interrompendo l'attività in caso di dolore o malessere;",
            "utilizzare attrezzature idonee e in buono stato di manutenzione, in ambienti sicuri;",
            "non condividere con terzi i materiali ricevuti.",
          ],
        },
        {
          type: "paragraph",
          text: "L'allievo dichiara di essere consapevole che l'attività fisica comporta un rischio intrinseco di infortunio e si assume la responsabilità della propria idoneità a svolgerla.",
        },
      ],
    },
    {
      title: "7. Diritto di recesso",
      blocks: [
        {
          type: "paragraph",
          text: "Quando l'allievo agisce come consumatore ai sensi del Codice del Consumo e il contratto è concluso a distanza, gli spetta il diritto di recedere entro quattordici giorni dalla conclusione del contratto, senza doverne indicare la ragione e senza penalità, comunicandolo alla coach con dichiarazione esplicita inviata all'indirizzo email indicato.",
        },
        {
          type: "paragraph",
          text: "Se l'allievo chiede espressamente che l'esecuzione del servizio inizi prima della scadenza del termine di recesso, tale diritto viene meno una volta che il servizio sia stato interamente eseguito. In caso di recesso esercitato a esecuzione iniziata ma non conclusa, è dovuto un importo proporzionale alla parte di servizio già fornita.",
        },
      ],
    },
    {
      title: "8. Sospensione e interruzione del percorso",
      blocks: [
        {
          type: "paragraph",
          text: "In caso di infortunio, malattia o impedimenti gravi e documentati, l'allievo può richiedere la sospensione temporanea del percorso. La sospensione viene concordata tra le parti e comporta lo slittamento del termine finale per un periodo pari a quello di sospensione.",
        },
        {
          type: "paragraph",
          text: "La coach può risolvere il contratto, restituendo la quota corrispondente alla parte di percorso non usufruita, qualora l'allievo tenga comportamenti gravemente scorretti, fornisca informazioni non veritiere sul proprio stato di salute o renda impossibile la prosecuzione del rapporto.",
        },
      ],
    },
    {
      title: "9. Proprietà intellettuale",
      blocks: [
        {
          type: "paragraph",
          text: "Le programmazioni, i video esecutivi, gli audio esplicativi, i documenti e ogni altro materiale fornito nel corso del percorso restano di proprietà esclusiva della coach e sono concessi all'allievo in licenza d'uso personale, non esclusiva e non trasferibile, per la sola durata e per le sole finalità del percorso.",
        },
        {
          type: "paragraph",
          text: "È vietata la riproduzione, la diffusione, la condivisione con terzi, la pubblicazione anche parziale e qualsiasi utilizzo a scopo commerciale dei materiali ricevuti. Sono altresì protetti i contenuti, i testi, le immagini e gli elementi grafici di questo sito.",
        },
      ],
    },
    {
      title: "10. Immagini, video e testimonianze",
      blocks: [
        {
          type: "paragraph",
          text: "I video e le fotografie inviati dall'allievo nel corso del percorso sono utilizzati esclusivamente per l'analisi tecnica e non vengono pubblicati né condivisi con terzi.",
        },
        {
          type: "paragraph",
          text: "L'eventuale pubblicazione di immagini, risultati o testimonianze sul sito o sui canali social avviene soltanto previo consenso specifico, espresso e liberamente revocabile, raccolto separatamente rispetto al contratto. Il rifiuto non produce alcun effetto sull'erogazione del servizio; la revoca comporta la rimozione dei contenuti nel più breve tempo possibile.",
        },
      ],
    },
    {
      title: "11. Limitazione di responsabilità",
      blocks: [
        {
          type: "paragraph",
          text: "La coach risponde dell'esecuzione della prestazione secondo la diligenza professionale richiesta. Non risponde di danni derivanti da informazioni incomplete o non veritiere fornite dall'allievo, dall'esecuzione degli esercizi in difformità dalle indicazioni ricevute, dall'utilizzo di attrezzature inidonee o in cattivo stato, o da condizioni di salute non dichiarate.",
        },
        {
          type: "paragraph",
          text: "Nessuna disposizione delle presenti condizioni limita o esclude la responsabilità nei casi in cui ciò non sia consentito dalla legge, in particolare in caso di dolo o colpa grave.",
        },
      ],
    },
    {
      title: "12. Modifiche alle condizioni",
      blocks: [
        {
          type: "paragraph",
          text: "Le presenti condizioni possono essere modificate. Ai rapporti in corso si applicano le condizioni vigenti al momento della conclusione del contratto, salvo diverso accordo tra le parti.",
        },
      ],
    },
    {
      title: "13. Legge applicabile e foro competente",
      blocks: [
        {
          type: "paragraph",
          text: "Il rapporto è regolato dalla legge italiana. Per ogni controversia, quando l'allievo agisce come consumatore, è competente in via esclusiva il foro del luogo di sua residenza o domicilio elettivo, se ubicato nel territorio dello Stato. Negli altri casi si applicano le ordinarie regole di competenza.",
        },
        {
          type: "paragraph",
          text: "Il consumatore residente nell'Unione Europea può inoltre ricorrere alla piattaforma di risoluzione delle controversie online messa a disposizione dalla Commissione Europea.",
        },
      ],
    },
  ],
};
