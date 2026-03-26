import { startUssd } from './ussd.js';

const dialInput = document.getElementById('dial-input');

export function appendDial(char) {
    if (dialInput.value === '*363#') {
        dialInput.value = '';
    }
    dialInput.value += char;
}

export function deleteDial() {
    dialInput.value = dialInput.value.slice(0, -1);
}

export function handleCall() {
    if (dialInput.value === '*363#') {
        startUssd();
    } else if (dialInput.value !== '') {
        alert('Calling ' + dialInput.value + '...');
    }
}