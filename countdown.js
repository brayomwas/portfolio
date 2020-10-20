const comingDate = new Date('Oct 23, 2020 22:00:00');

const d = document.getElementById('d');
const h = document.getElementById('h');
const m = document.getElementById('m');
const s = document.getElementById('s');

const x = setInterval(() => {
    const now = new Date();
    const des = comingDate.getTime() - now.getTime();
    const days = Math.floor(des/(1000 * 60 * 60 *24));
    const hours = Math.floor(des%(1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const mins = Math.floor(des%(1000 * 60 * 60) / (1000 * 60));
    const secs = Math.floor(des%(1000 * 60) / 1000);

    d.innerHTML = getTrueNumber(days);
    h.innerHTML = getTrueNumber(hours);
    m.innerHTML = getTrueNumber(mins);
    s.innerHTML = getTrueNumber(secs);

    if (des <= 0) clearInterval(x);
}, 1000);

function getTrueNumber(x) {
    if (x < 10) return '0' + x;
    else return x;
}