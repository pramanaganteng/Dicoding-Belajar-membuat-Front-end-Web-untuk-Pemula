const divs = Array.from(document.getElementsByTagName('div'));

divs.forEach((div) => {
    div.addEventListener('click', () => {
        alert(`ELEMENT ${div.getAttribute('id').toUpperCase()}`);
    }, true);
});