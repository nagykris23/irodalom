function render(array) {
    tbody.innerHTML = '';



    for (let adat of array) {
        let sor = document.createElement('tr');


        const szerzo = document.createElement('td');
        szerzo.innerHTML = adat.Szerző_neve;
        sor.appendChild(szerzo);


        const korszak = document.createElement('td');
        korszak.innerHTML = adat.Korszak;
        sor.appendChild(korszak);


        const szerelem1 = document.createElement('td');
        szerelem1.innerHTML = adat.Szerelmek1;
        sor.appendChild(szerelem1);

        if (adat.Szerelmek2 != undefined) {
            const szerelem2 = document.createElement('td');
            szerelem2.innerHTML = adat.Szerelmek2;
            sor.appendChild(szerelem2);
        } else {
            szerelem1.colSpan = 2;
        }

        tbody.appendChild(sor);
    }
}
function validatefields(nev, korszak) {
    let result = true

    if (nev.value == '') {
        const error = document.getElementById('nev_error')
        error.innerHTML = 'kötelező'

        result = false

    }
    if (korszak.value == '') {
        const error = document.getElementById('korszak_error')
        error.innerHTML = 'kötelező'

        result = false

    }
    return result
}