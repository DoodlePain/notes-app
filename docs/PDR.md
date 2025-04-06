# 📋 Piano di Realizzazione - Note-Taking App

## 🎯 Obiettivo

Sviluppare un'applicazione per prendere appunti con funzionalità di **creazione**, **modifica** e **eliminazione** delle note. Ogni nota deve avere:

- Titolo
- Testo
- Data di ultima modifica

La UI deve essere curata. Le note devono essere renderizzate tramite un **Web Component** realizzato con **Lit**.

---

## 🔧 Stack Tecnologico

- **Frontend**: Next.js (React + Typescript)
- **Componenti riutilizzabili**: Web Components con **Lit**
- **Stilizzazione**: TailwindCSS
- **Backend/DB**: SQLite
- **Deployment**: Vercel o Docker container

---

## 🗂️ Fasi del progetto

### 1. 📁 Setup Iniziale

- [ ] Inizializzare progetto Next.js con TypeScript (`npx create-next-app@latest --typescript`)
- [ ] Aggiungere e configurare TailwindCSS
- [ ] Impostare struttura delle cartelle: `components/`, `pages/`, `lib/`, `db/`, `web-components/`

### 2. 💽 Database

- [ ] Creare file SQLite (`db.sqlite`) e script per inizializzazione
- [ ] Tabella `notes` con campi:
  - `id`: INTEGER, primary key
  - `title`: TEXT
  - `content`: TEXT
  - `updatedAt`: DATETIME
- [ ] Setup di una API locale per operazioni CRUD usando `Next.js API Routes`
- [ ] Creare file `db.ts` per gestire la connessione SQLite usando `better-sqlite3` o `sqlite3`

### 3. 🌐 API

- [ ] API endpoints:
  - `GET /api/notes`: ritorna tutte le note
  - `POST /api/notes`: crea una nuova nota
  - `PUT /api/notes/:id`: aggiorna una nota
  - `DELETE /api/notes/:id`: elimina una nota
- [ ] Validazione input con Zod o simili

### 4. 🧱 Web Component (con Lit)

- [ ] Creare un componente Lit per visualizzare una singola nota (`NoteCard`)
- [ ] Definire proprietà: `title`, `content`, `updatedAt`
- [ ] Costruire bundle dei Web Component da integrare in React (usare `@lit/react`)
- [ ] Integrare il Web Component nella UI React

### 5. 🖼️ UI/UX (con React + Tailwind)

- [ ] Pagina principale con elenco note (`pages/index.tsx`)
- [ ] Form per creare/modificare note (modale o pagina dedicata)
- [ ] Gestione stato locale con `useState`, `useEffect`, o `SWR` per sincronizzazione
- [ ] UI reattiva, leggibile, minimalista (evitare framework CSS predefiniti)

### 6. ⚙️ Funzionalità

- [ ] Visualizzazione elenco note
- [ ] Creazione nuova nota
- [ ] Modifica nota esistente
- [ ] Eliminazione nota
- [ ] Ordinamento note per data di aggiornamento

### 7. 🧪 Testing

- [ ] Test unitari per API con `Jest`
- [ ] Test dei componenti React con `React Testing Library`
- [ ] Test del Web Component con `@web/test-runner`

### 8. 🚀 Deployment

- [ ] Deploy su Vercel (opzione 1) o creare `Dockerfile` per deploy containerizzato (opzione 2)
- [ ] Setup configurazioni env (separare local/prod DB)
- [ ] Controllo performance, SEO, accessibilità (`next lint`, `next export`, `next build`)

---

## 📌 Extra (facoltativi)

- [ ] Modalità dark/light
- [ ] Ricerca tra note
- [ ] Archiviazione locale con `localStorage` come fallback offline
- [ ] Versionamento delle modifiche

---

## ✅ Deliverables finali

- Repository Git pubblico
- README con istruzioni di setup
- App funzionante online
- Codice pulito, commentato e documentato
