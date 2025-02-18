//adatok kiszervezése tömbe 
const adatok = [
  {
    szerzo: "Szerző neve",  //szerző neve a fejlécnek
    korszak: "Korszak", //korszak a fejlécnek 
    szerelem: "Szerelmek"//szerelmek a fejlécnek
  },
  {
    szerzo: "Balassi Bálint",//szerző neve az első sorban
    korszak: "reformáció",//korszak az első sorban
    szerelem1: "Losonczy Anna",//első szerelme az első sorban
    szerelem2: "Dobó Krisztina"//második szerelme az első sorban
  },
  {
    szerzo: "Csokonai Vitéz Mihály",//szerző neve a második sorban
    korszak: "felvilágosodás",//korszak a második sorban
    szerelem1: "Vajda Juliána"//szerelme az második sorban
  },
  {
    szerzo: "Petőfi Sándor",//szerző neve a harmadik sorban
    korszak: "magyar romantika",//korszak a harmadik sorban
    szerelem1: "Mednyánszky Berta",//szerelme az harmadik sorban
    szerelem2: "Szendrey Júlia"//második szerelme az harmadik sorban
  },
  {
    szerzo: "Ady Endre",//szerző neve a negyedik sorban
    korszak: "20. század",//korszak a negyedik sorban
    szerelem1: "Léda",//szerelme az negyedik sorban
    szerelem2: "Csinszka"//második szerelme az negyedik sorban
  }
]

const table = document.createElement("table")//táblázat létrehozása
document.body.appendChild(table)//table appendChildolása a bodyhoz
const thead = document.createElement('thead')//thead elem létrehozása
table.appendChild(thead)//thead appendChildolása a táblázathoz

const tablehead = document.createElement('tr') // tr fejléc létrehozása
table.appendChild(tablehead)// a  sor hozzáadása a táblázasthoz

for(const i of Object.values(adatok[0])){//ciklus az adatok tömb elemeinek bejárására
  const th = document.createElement('th')//th elem létrehozása
  th.innerHTML = i//th elem tartalmának megadása
  tablehead.appendChild(th)//th elem hozzáadása a sorhoz
}
//táblázat törzsének létrehozása
const tbody = document.createElement('tbody')//törzs létrehozása
table.appendChild(tbody)//törzs hozzáadása a táblázashoz

//függvény bevezetése
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
//esemény kezelő függvény bevezetése

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // esemény megállítása

  const active = e.currentTarget; // aktuális elem
  const errormezo = active.querySelectorAll(".error"); // error mező lekérése

  const szerzovalue = document.getElementById("kolto_nev").value; // szerző input értékének lekérése
  const korszakvalue = document.getElementById("korszak").value; // korszak input értékének lekérése
  const szerelem1value = document.getElementById("szerelem1").value; // első szerelme input értékének lekérése
  const szerelemcheckbox = document.getElementById("masodik").checked; // második szerelme input mezőjének lekérése
  const szerelem2value = szerelemcheckbox ? document.getElementById("szerelem2").value : undefined; // második szerelme input értékének lekérése

  let validated = true; // validálás igaz értékkel kezdődik
  for (let i = 0; i < errormezo.length; i++) { // ciklus a hibák kiírására
    errormezo[i].innerHTML = ""; // hibák kiírásának törlése
  }

  // Érvényesség tesztelése
  if (!validateField(szerzovalue, errormezo[0], "Kötelező megadni a szerző nevét")) { // szerző mező validálása
    validated = false; // ha nem validált akkor hamis lesz
  }
  if (!validateField(korszakvalue, errormezo[1], "Kötelező megadni a korszakot")) { // korszak mező validálása
    validated = false; // ha nem validált akkor hamis lesz
  }
  if (!validateField(szerelem1value, errormezo[2], "Kötelező megadni az első szerelmet")) { // első szerelem mező validálása
    validated = false; // ha nem validált akkor hamis lesz
  }
  if (!validateCheckbox(szerelemcheckbox, szerelem2value, errormezo[3], "Kötelező megadni a szerelmet")) { // második szerelem mező validálása
    validated = false; // ha nem validált akkor hamis lesz
  }

  if (validated) {
    const ujszerzo = {
      szerzo: szerzovalue, // szerző input értékének lekérése
      korszak: korszakvalue, // korszak input értékének lekérése
      szerelem1: szerelem1value, // első szerelme input értékének lekérése
      szerelem2: szerelem2value == '' ? undefined : szerelem2value // második szerelme input értékének lekérése ha nincs akkor undefined
    };
    adatok.push(ujszerzo); // új elem hozzáadása a tömbhöz
    tbody.innerHTML = ""; // törzs tartalmának törlése
    rendermenu(); // függvény meghívása
    active.reset(); // mezők törlése
  }
});

function validateField(bemenet, errorField, error) { // validálás függvény
  let valid = true; // validálás igaz értékkel kezdődik
  if (bemenet.trim() === "") { // ha nincs érték akkor hiba
    errorField.innerHTML = error; // hiba kiírása
    valid = false; // ha nincs érték akkor hamis lesz
  }
  return valid; // igaz érték visszaadása
}

function validateCheckbox(checkbox, bemenet, errorField, error) { // checkbox validálás függvény
  if (checkbox && (bemenet === undefined || bemenet.trim() === "")) { // ha a checkbox be van jelölve és nincs érték
    errorField.innerHTML = error; // hiba kiírása
    return false; // ha nem validált akkor hamis lesz
  }
  return true; // igaz érték visszaadása
}

rendermenu(); // függvény meghívása
