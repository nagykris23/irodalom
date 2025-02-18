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
      tdszerelem1.innerHTML = adat.szerelem1//harmadik cella tartalmának megadása
      //ha nincs második szerelme akkor egybe vonja a 2 cellát
      if (adat.szerelem2 === undefined) {//ha nincs második szerelmek akkor egybe vonja a 2 cellát
        tdszerelem1.colSpan = 2// összevonja a két cellát
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
  
  
// Mezők létrehozása
/**
 * 
 * @param {string} labelText 
 * @param {string} inputId 
 * @param {string} inputName 
 * @param {string} type 
 */
function createForm(labelText, inputId, inputName, type = 'text') {
    const label = document.createElement('label');// label elem létrehozása
    label.htmlFor = inputId;// label for attribútum beállítása
    label.innerHTML = labelText;// label szöveg beállítása
    const input = document.createElement('input');// input elem létrehozása
    input.type = type;// input típus beállítása
    input.id = inputId;// input id beállítása
    input.name = inputName; // input name beállítása
    const errorDiv = document.createElement('div');// hibauzenet hely létrehozása
    errorDiv.id = `${inputId}-error`;// hibauzenet id beállítása
    errorDiv.className = 'error';// hibauzenet osztály beállítása
    form.appendChild(label);// label hozzáadása a formhoz
    form.appendChild(document.createElement('br'));// új sor létrehozása
    form.appendChild(input);// input hozzáadása a formhoz
    form.appendChild(document.createElement('br'));// új sor létrehozása
    form.appendChild(document.createElement('br'));// új sor létrehozása
    form.appendChild(errorDiv);// hibauzenet hely hozzáadása
    form.appendChild(document.createElement('br'));// új sor létrehozása
}
/**
 * 
 * @param {string} bemenet 
 * @param {string} errorField 
 * @param {string} error 
 * @returns 
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
   * @param {HTMLInputElement} checkbox 
   * @param {string} bemenet 
   * @param {string} errorField 
   * @param {string} error 
   * @returns 
   */
  function validateCheckbox(checkbox, bemenet, errorField, error) { // checkbox validálás függvény
    if (checkbox && (bemenet === undefined || bemenet.trim() === "")) { // ha a checkbox be van jelölve és nincs érték
      errorField.innerHTML = error; // hiba kiírása
      return false; // ha nem validált akkor hamis lesz
    }
    return true; // igaz érték visszaadása
  }