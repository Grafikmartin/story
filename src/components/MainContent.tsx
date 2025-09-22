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
          <AnimatedTitle />
        </section>
        
        <section className="content-section" id="bereich-2">
          <h2>Bereich 2</h2>
          <p>Dies ist der Inhalt für Bereich 2. Die Seite ist vollständig responsive und scrollt von oben nach unten.</p>
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
