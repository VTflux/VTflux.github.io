// Aktuelles Jahr im Footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Tipp-Animation für die "whoami"-Antwort im Terminal
const outputText = 'Simon — Schüler, baut eigene Sprachen, Netze und Spiele.';
const outputEl = document.getElementById('typed-output');

function typeOutput() {
    if (!outputEl) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        outputEl.textContent = outputText;
        return;
    }

    let i = 0;
    const speed = 28; // ms pro Zeichen

    function step() {
        outputEl.textContent = outputText.slice(0, i);
        i++;
        if (i <= outputText.length) {
            setTimeout(step, speed);
        }
    }
    step();
}

window.addEventListener('DOMContentLoaded', typeOutput);