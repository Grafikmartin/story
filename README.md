# Story Website

Eine moderne, responsive React/TypeScript-Website mit den gewünschten Farben und Design.

## Farbpalette

- **Dunkelrot**: #670915
- **Hellrot**: #C00C24  
- **Orange**: #E67F22
- **Hellgrün**: #EFE7AC
- **Grün**: #96C27F

## Features

- ✅ Responsive Design für alle Bildschirmgrößen
- ✅ Roboto-Font von Google Fonts
- ✅ Header mit Logo und Navigation
- ✅ Scroll-Funktionalität von oben nach unten
- ✅ Modulare Komponentenstruktur
- ✅ TypeScript-Unterstützung
- ✅ Vite als Build-Tool

## Installation

1. Abhängigkeiten installieren:
```bash
npm install
```

2. Entwicklungsserver starten:
```bash
npm run dev
```

3. Im Browser öffnen: `http://localhost:5173`

## Build für Produktion

```bash
npm run build
```

## Projektstruktur

```
src/
├── components/
│   ├── Header.tsx          # Header-Komponente mit Logo und Navigation
│   ├── Header.css          # Styles für Header
│   ├── MainContent.tsx     # Hauptinhalt der Seite
│   └── MainContent.css     # Styles für Hauptinhalt
├── App.tsx                 # Haupt-App-Komponente
├── App.css                 # Globale Styles und CSS-Variablen
├── main.tsx                # Einstiegspunkt der Anwendung
└── vite-env.d.ts          # Vite-Typdefinitionen
```

## Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 480px  
- **Mobile**: < 480px
