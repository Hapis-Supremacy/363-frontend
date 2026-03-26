import { showDemo, hideDemo } from './services/navigation.js';
import { appendDial, deleteDial, handleCall } from './services/dialer.js';
import { closeUssd, handleUssdSubmit } from './services/ussd.js';

// ─── Button bindings ──────────────────────────────────────────────────────────
// Since Vite bundles modules, inline onclick="" attributes can't reach these
// functions. We bind everything here via querySelector instead.

document.querySelector('[data-action="show-demo"]')
    ?.addEventListener('click', showDemo);

document.querySelector('[data-action="hide-demo"]')
    ?.addEventListener('click', hideDemo);

document.querySelector('[data-action="call"]')
    ?.addEventListener('click', handleCall);

document.querySelector('[data-action="delete-dial"]')
    ?.addEventListener('click', deleteDial);

document.querySelectorAll('[data-action="close-ussd"]').forEach((btn) => {
    btn.addEventListener('click', closeUssd);
});

document.querySelector('[data-action="submit-ussd"]')
    ?.addEventListener('click', handleUssdSubmit);

// Dial pad digits
document.querySelectorAll('[data-dial]').forEach((btn) => {
    btn.addEventListener('click', () => appendDial(btn.dataset.dial));
});