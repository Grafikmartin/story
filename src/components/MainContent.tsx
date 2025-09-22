import React from 'react';
import AnimatedTitle from './AnimatedTitle';
import './MainContent.css';

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <section className="hero-section">
        <AnimatedTitle />
      </section>
      <div className="container">
        
        <section className="content-section" id="bereich-1">
          <p>Darunter folgt der Einleitungstext.</p>
          <p>Er öffnet die Tür zum Inhalt.</p>
          <p>Er erklärt in wenigen Sätzen, worum es geht.</p>
          <p>Er lädt den Leser ein, weiterzulesen – ohne zu viel vorwegzunehmen.</p>
          <p>Ein guter Einleitungstext schafft Orientierung, weckt Interesse und macht den Übergang von der großen Überschrift zum eigentlichen Inhalt leicht.</p>
        </section>
        
        <section className="content-section" id="bereich-2">
          <h2>Bereich 2</h2>
          <p>Darunter folgt der Einleitungstext.</p>
          <p>Er öffnet die Tür zum Inhalt.</p>
          <p>Er erklärt in wenigen Sätzen, worum es geht.</p>
          <p>Er lädt den Leser ein, weiterzulesen – ohne zu viel vorwegzunehmen.</p>
          <p>Ein guter Einleitungstext schafft Orientierung, weckt Interesse und macht den Übergang von der großen Überschrift zum eigentlichen Inhalt leicht.</p>
        </section>
        
        <section className="content-section" id="bereich-3">
          <h2>Bereich 3</h2>
          <p>Dies ist der Inhalt für Bereich 3. Alle Komponenten sind in separate Dateien aufgeteilt.</p>
        </section>
        
        <section className="content-section" id="bereich-4">
          <h2>Bereich 4</h2>
          <p>Dies ist der Inhalt für Bereich 4. Die Farbpalette verwendet die gewünschten Farben: Dunkelrot, Hellrot, Orange, Hellgrün und Grün.</p>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
