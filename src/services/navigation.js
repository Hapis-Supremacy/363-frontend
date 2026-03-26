import { closeUssd } from './ussd.js';

const mainView = document.getElementById('main-view');
const demoView = document.getElementById('demo-view');

export function showDemo() {
    mainView.classList.add('hidden');
    mainView.classList.remove('flex');

    demoView.classList.remove('hidden');
    demoView.classList.add('flex');
    window.scrollTo(0, 0);
}

export function hideDemo() {
    demoView.classList.add('hidden');
    demoView.classList.remove('flex');

    mainView.classList.remove('hidden');
    mainView.classList.add('flex');
    closeUssd();
    window.scrollTo(0, 0);
}