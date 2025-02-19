// Fejléc generálása
/**
 * Fejléc generálása
 */
function generateTableHeader() {
  const thead = document.querySelector("thead"); // thead lekérése
  thead.innerHTML = ""; // törzs tartalmának törlése
  const tablehead = document.createElement('tr'); // tr fejléc létrehozása
  thead.appendChild(tablehead); // a sor hozzáadása a táblázathoz

  // Fejléc elemeinek hozzáadása
  const fejlec = ['Szerző', 'Korszak', 'Szerelmek']; // fejléc elemeinek létrehozása
  for (const fejleclista of fejlec) { // fejléc elemeinek bejárása
    const th = document.createElement('th'); // th elem létrehozása
    th.innerHTML = fejleclista; // th elem tartalmának beállítása
    if (fejleclista === 'Szerelmek') { // ha a fejléc eleme szerelmei akkor két cellát foglaljon el
      th.colSpan = 2; // ha a fejléc eleme szerelmei akkor két cellát foglaljon el
    }
    tablehead.appendChild(th); // th elem hozzáadása a sorhoz
  }
}

// Táblázat frissítése
/**
 * táblázat létrehozása
 * @param {string} szerzo szerző neve
 * @param {string} korszak korszak neve
 * @param {string} szerelem1 első szerelme
 * @param {string} szerelem2 második szerelme
 * @returns {void}
 */
function rendermenu() { // táblázat létrehozása a függvényben
  const tbody = document.querySelector("tbody"); // tbody lekérése  
  tbody.innerHTML = ""; // törzs tartalmának törlése
  // ciklus a tömb elemeinek bejárására
  for (let i = 1; i < adatok.length; i++) { // adatok tömb elemeinek bejárása
    const adat = adatok[i]; // adatok tömb aktuális eleme
    const sor = document.createElement('tr'); // sor létrehozása
    tbody.appendChild(sor); // sor hozzáadása a törzshez

    const tdszerzo = document.createElement('td'); // cella létrehozása
    tdszerzo.innerHTML = adat.szerzo; // cella tartalmának megadása
    sor.appendChild(tdszerzo); // cella hozzáadása a sorhoz

    const tdkorszak = document.createElement('td'); // második cella létrehozása
    tdkorszak.innerHTML = adat.korszak; // második cella tartalmának megadása
    sor.appendChild(tdkorszak); // második cella hozzáadása a sorhoz

    const tdszerelem1 = document.createElement('td'); // harmadik cella létrehozása
    if (!adat.szerelem1 && !adat.szerelem2) { // ha nincs első és második szerelme se akkor vonja össze a 2 cellát és "-" jelet írja ki
      tdszerelem1.colSpan = 2; // összevonja a két cellát
      tdszerelem1.innerHTML = " - "; // ha nincs első és második szerelme se akkor vonja össze a 2 cellát és "-" jelet írja ki
    } else if (adat.szerelem1 && !adat.szerelem2) { // ha csak az első szerelme van akkor csak egy cellába kerül
      tdszerelem1.colSpan = 2; // ha csak az első szerelme van akkor csak egy cellába kerül
      tdszerelem1.innerHTML = adat.szerelem1; // harmadik cella tartalm
    } else {
      tdszerelem1.innerHTML = adat.szerelem1 || ""; // harmadik cella tartalmának megadása
    }
    sor.appendChild(tdszerelem1); // harmadik cella hozzáadása a sorhoz

    // ha van második szerelme akkor külön cellába kerül
    if (adat.szerelem2) { // ha van második szerelme akkor külön cellába kerül
      const tdszerelem2 = document.createElement('td'); // negyedik cella létrehozása
      tdszerelem2.innerHTML = adat.szerelem2; // negyedik cella tartalmának megadása
      sor.appendChild(tdszerelem2); // negyedik cella hozzáadása a sorhoz
    }
  }
}

// Mezők létrehozása
/**
 * Mezők létrehozása
 * @param {string} labelText mező szövege
 * @param {string} inputId mező id-je
 * @param {string} inputName mező name-je
 * @param {string} type mező típusa
 */
function createFormField(form, labelText, inputId, inputName, type = 'text') {
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

// Validációs függvények
/**
 * 
 * @param {string} bemenet bemeneti érték
 * @param {HTMLElement} errorField hibauzenet helye 
 * @param {string} error hibauzenet
 * @returns {boolean} igaz vagy hamis érték
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