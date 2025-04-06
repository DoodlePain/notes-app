# 🛣️ Roadmap di Sviluppo - Note-Taking App

## ⚙️ Struttura temporale: 3 settimane (estendibile a 4 per polishing/testing)

---

## 🗓️ Settimana 1 - Setup e Fondamenta Tecniche

### 🎯 Obiettivi

- Struttura di progetto pronta
- Database funzionante
- API CRUD operative

### 📌 Task

- [x] Inizializzare progetto Next.js con TypeScript
- [x] Installare e configurare TailwindCSS
- [x] Configurare struttura cartelle (`components/`, `pages/`, `web-components/`, `db/`, `lib/`)
- [x] Creare file `db.sqlite` e script SQL iniziale
- [x] Creare wrapper TypeScript per SQLite (usare `better-sqlite3` o `sqlite3`)
- [x] Creare endpoints:
  - [x] `GET /api/notes`
  - [x] `POST /api/notes`
  - [x] `PUT /api/notes/:id`
  - [x] `DELETE /api/notes/:id`
- [x] Testare gli endpoint con `Postman` o `curl`

### 🧱 Milestone

✅ Progetto base con DB e API completamente funzionanti

---

## 🗓️ Settimana 2 - UI/UX e Web Component

### 🎯 Obiettivi

- UI React per gestione note
- Web Component Lit integrato

### 📌 Task

- [ ] Creare Web Component `NoteCard` con Lit:
  - [ ] Props: `title`, `content`, `updatedAt`
  - [ ] Design responsive con Shadow DOM
- [ ] Integrare `NoteCard` in React con `@lit/react`
- [ ] Creare UI React:
  - [ ] Elenco note (`pages/index.tsx`)
  - [ ] Modale o pagina per creazione/modifica nota
  - [ ] Pulsanti di modifica e cancellazione
- [ ] Integrare chiamate API (fetch o `SWR`)
- [ ] Implementare stato client (hook o store semplice)
- [ ] Styling con TailwindCSS

### 🧱 Milestone

✅ UI funzionante con rendering note tramite Web Component + interazioni CRUD complete

---

## 🗓️ Settimana 3 - Refinement, Test e Deploy

### 🎯 Obiettivi

- Ottimizzazione
- Testing
- Deploy

### 📌 Task

- [ ] Testing:
  - [ ] Test unitari API (`Jest`)
  - [ ] Test componenti React (`@testing-library/react`)
  - [ ] Test Lit Component (`@web/test-runner`)
- [ ] UX polishing:
  - [ ] Loading states
  - [ ] Error handling
  - [ ] Validazioni input
- [ ] Ottimizzazione performance (`next build`, `next lint`)
- [ ] Setup deploy:
  - [ ] Configurazione Vercel (env vars, DB path)
  - [ ] Alternativamente: Dockerfile per deploy containerizzato
- [ ] Scrivere `README.md` dettagliato:
  - [ ] Istruzioni di setup
  - [ ] Dipendenze
  - [ ] Architettura

### 🧱 Milestone

✅ App pronta per produzione e deployata online

---

## 🗓️ (Facoltativa) Settimana 4 - Miglioramenti Extra

### 🎯 Obiettivi

- Feature aggiuntive e fine-tuning

### 📌 Task

- [ ] Modalità dark/light con Tailwind
- [ ] Filtro/search note
- [ ] Backup su `localStorage` (offline support)
- [ ] Versionamento storico delle modifiche

---

## ✅ Deliverables Finali

- [ ] Codice pulito e documentato
- [ ] App deployata online (Vercel o Docker)
- [ ] Documentazione completa (`README.md`)
- [ ] Test automatici base
- [ ] Esperienza utente fluida
