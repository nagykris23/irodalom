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
  //vonujk össze a szerelmek fejléc sorát 
  if(i === 'Szerelmek'){//ha a fejléc sor szerelmek akkor egybe vonja a két cellát
    th.colSpan = 2//összevonja a két cellát
  }
}
//táblázat törzsének létrehozása
const tbody = document.createElement('tbody')//törzs létrehozása
table.appendChild(tbody)//törzs hozzáadása a táblázashoz

// Form létrehozása
const form = document.createElement('form');// form elem létrehozása
form.id = 'form';// form id beállítása
form.action = '#';// form action beállítása


// Form elemeinek létrehozása
createForm('Költő neve:', 'kolto_nev', 'kolto_nev');// költő neve mező létrehozása
createForm('Korszak:', 'korszak', 'korszak');// korszak mező létrehozása
createForm('Szerelme:', 'szerelem1', 'szerelem1'); // első szerelem mező létrehozása

const checkboxLabel = document.createElement('label');// checkbox label létrehozása
checkboxLabel.htmlFor = 'masodik';// checkbox label for attribútum beállítása
checkboxLabel.innerHTML = 'Volt másik szerelme?';// checkbox label szöveg beállítása
const checkbox = document.createElement('input');// checkbox létrehozása
checkbox.type = 'checkbox';// checkbox típus beállítása
checkbox.id = 'masodik';// checkbox id beállítása
checkbox.name = 'masodik';// checkbox name beállítása
form.appendChild(checkboxLabel);// checkbox label hozzáadása a formhoz
form.appendChild(checkbox);// checkbox hozzáadása a formhoz
form.appendChild(document.createElement('br'));// új sor létrehozása
form.appendChild(document.createElement('br'));// új sor létrehozása

createForm('Szerelme:', 'szerelem2', 'szerelem2');// második szerelem mező létrehozása

// Gomb hozzáadása
const button = document.createElement('button');// gomb létrehozása
button.innerHTML = 'Hozzáadás';// gomb szöveg beállítása
form.appendChild(button);// gomb hozzáadása a formhoz

// Form hozzáadása a dokumentumhoz
document.body.appendChild(form);// form hozzáadása a body-hoz

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();// esemény megállítása

  const active = e.currentTarget;// aktuális elem
  const errormezo = active.querySelectorAll(".error");// error mező lekérése

  const szerzovalue = document.getElementById("kolto_nev").value;// szerző input értékének lekérése
  const korszakvalue = document.getElementById("korszak").value;// korszak input értékének lekérése
  const szerelem1value = document.getElementById("szerelem1").value;// első szerelme input értékének lekérése
  const szerelemcheckbox = document.getElementById("masodik").checked;// második szerelme input mezőjének lekérése
  const szerelem2value = szerelemcheckbox ? document.getElementById("szerelem2").value : undefined;// második szerelme input értékének lekérése

  let validated = true;// validálás igaz értékkel kezdődik
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


rendermenu(); // függvény meghívása
