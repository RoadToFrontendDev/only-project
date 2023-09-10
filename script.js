let pins = document.getElementById('pinContainer');
let pin = [...document.querySelectorAll('.pin')];
const cleanClasses = () => {
    pin.forEach(p => p.classList.remove('active'));
};

pins.addEventListener('click', event => {
    let pinElement = null;

    if (event.target.closest('.pin')) {
        pinElement = event.target.closest('.pin')
    } else if (event.target.classList.contains('pin')) {
        pinElement = event.target;
    }
    if (pinElement) {
        pinElement.classList.toggle('active')
    } else {
        cleanClasses();
    }
});