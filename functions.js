//függvény bevezetése
/**
 * táblázat létrehozása
 * @param {string} szerzo szerző neve
 * @param {string} korszak korszak neve
 * @param {string} szerelem1 első szerelme
 * @param {string} szerelem2 második szerelme
 * @returns {void}
 * 
 */
function rendermenu() {//táblázat létrehozása a függvényben
    tbody.innerHTML = ""//törzs tartalmának törlése
    //ciklus a tömb elemeinek bejárására
    for (let i = 1; i < adatok.length; i++) {//adatok tömb elemeinek bejárása
      const adat = adatok[i]//adatok tömb aktuális eleme
      const sor = document.createElement('tr')//sor létrehozása
      tbody.appendChild(sor)//sor hozzáadása a törzshez
  
      const tdszerzo = document.createElement('td')//cella létrehozása
      tdszerzo.innerHTML = adat.szerzo//cella tartalmának megadása
      sor.appendChild(tdszerzo)//cella hozzáadása a sorhoz
  
      const tdkorszak = document.createElement('td')//második cella létrehozása
      tdkorszak.innerHTML = adat.korszak//második cella tartalmának megadása
      sor.appendChild(tdkorszak)//második cella hozzáadása a sorhoz
  
      const tdszerelem1 = document.createElement('td')//harmadik cella létrehozása
      if (adat.szerelem1 === " " && adat.szerelem2 ===  " ") {//ha nincs elso és masodik szerelme se akkor vonja össze a 2 cellát és "-" jelet irja ki
        tdszerelem1.colSpan = 2//összevonja a két cellát
        tdszerelem1.innerHTML = " - "//ha nincs elso és masodik szerelme se akkor vonja össze a 2 cellát és "-" jelet irja ki
      } else {
        tdszerelem1.innerHTML = adat.szerelem1 || "" // harmadik cella tartalmának megadása
        if (adat.szerelem2 === undefined) { // ha nincs második szerelme
          tdszerelem1.colSpan = 2; // összevonja a két cellát
        }
      }
      sor.appendChild(tdszerelem1)//harmadik cella hozzáadása a sorhoz
  
      //ha van második szerelme akkor külön cellába kerül
      if (adat.szerelem2 !== undefined) {//ha van második szerelme akkor külön cellába kerül
        const tdszerelem2 = document.createElement('td')//negyedik cella létrehozása
        tdszerelem2.innerHTML = adat.szerelem2//negyedik cella tartalmának megadása
        sor.appendChild(tdszerelem2)//negyedik cella hozzáadása a sorhoz
      }
  
    }
  }
  
/**
 * Mezők létrehozása
 * @param {string} labelText mező szövege
 * @param {string} inputId mező id-je
 * @param {string} inputName mező name-je
 * @param {string} type  mező típusa
 * 
 */
function createFormField(labelText, inputId, inputName, type = 'text') {
  const label = document.createElement('label'); // label elem létrehozása
  label.htmlFor = inputId; // label for attribútum beállítása
  label.innerHTML = labelText; // label szöveg beállítása
  const input = document.createElement('input'); // input elem létrehozása
  input.type = type; // input típus beállítása
  input.id = inputId; // input id beállítása
  input.name = inputName; // input name beállítása
  const errorDiv = document.createElement('div'); // hibauzenet hely létrehozása
  errorDiv.id = `${inputId}-error`; // hibauzenet id beállítása
  errorDiv.className = 'error'; // hibauzenet osztály beállítása
  form.appendChild(label); // label hozzáadása a formhoz
  form.appendChild(document.createElement('br')); // új sor létrehozása
  form.appendChild(input); // input hozzáadása a formhoz
  form.appendChild(document.createElement('br')); // új sor létrehozása
  form.appendChild(document.createElement('br')); // új sor létrehozása
  form.appendChild(errorDiv); // hibauzenet hely hozzáadása
  form.appendChild(document.createElement('br')); // új sor létrehozása
}

// Form létrehozása
const form = document.createElement('form'); // form elem létrehozása
form.id = 'form'; // form id beállítása
form.action = '#'; // form action beállítása

// Form elemeinek létrehozása
createFormField('Költő neve:', 'kolto_nev', 'kolto_nev'); // költő neve mező létrehozása
createFormField('Korszak:', 'korszak', 'korszak'); // korszak mező létrehozása
createFormField('Szerelme:', 'szerelem1', 'szerelem1'); // első szerelem mező létrehozása

const checkboxLabel = document.createElement('label'); // checkbox label létrehozása
checkboxLabel.htmlFor = 'masodik'; // checkbox label for attribútum beállítása
checkboxLabel.innerHTML = 'Volt másik szerelme?'; // checkbox label szöveg beállítása
const checkbox = document.createElement('input'); // checkbox létrehozása
checkbox.type = 'checkbox'; // checkbox típus beállítása
checkbox.id = 'masodik'; // checkbox id beállítása
checkbox.name = 'masodik'; // checkbox name beállítása
form.appendChild(checkboxLabel); // checkbox label hozzáadása a formhoz
form.appendChild(checkbox); // checkbox hozzáadása a formhoz
form.appendChild(document.createElement('br')); // új sor létrehozása
form.appendChild(document.createElement('br')); // új sor létrehozása

createFormField('Szerelme:', 'szerelem2', 'szerelem2'); // második szerelem mező létrehozása

// Gomb hozzáadása
const button = document.createElement('button'); // gomb létrehozása
button.innerHTML = 'Hozzáadás'; // gomb szöveg beállítása
form.appendChild(button); // gomb hozzáadása a formhoz

// Form hozzáadása a dokumentumhoz
document.body.appendChild(form); // form hozzáadása a body-hoz

/**
 * 
 * @param {string} bemenet // bemeneti érték
 * @param {HTMLElement} errorField // hibauzenet helye 
 * @param {string} error // hibauzenet
 * @returns {boolean}// igaz vagy hamis érték
 */
function validateField(bemenet, errorField, error) { // validálás függvény
    let valid = true; // validálás igaz értékkel kezdődik
    if (bemenet.trim() === "") { // ha nincs érték akkor hiba
      errorField.innerHTML = error; // hiba kiírása
      valid = false; // ha nincs érték akkor hamis lesz
    }
    return valid; // igaz érték visszaadása
  }
  /**
   * 
   * @param {HTMLInputElement} checkbox checkbox elem
   * @param {string} bemenet bemeneti érték 
   * @param {HTMLElement} errorField hibauzenet helye
   * @param {string} error hibauzenet
   * @returns {boolean} igaz vagy hamis érték
   */
  function validateCheckbox(checkbox, bemenet, errorField, error) { // checkbox validálás függvény
    if (checkbox.checked && (bemenet === undefined || bemenet.trim() === "")) { // ha a checkbox be van jelölve és nincs érték
      errorField.innerHTML = error; // hiba kiírása
      return false; // ha nem validált akkor hamis lesz
    }
    return true; // igaz érték visszaadása
  }