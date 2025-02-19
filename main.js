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

//táblázat törzsének létrehozása
const tbody = document.createElement('tbody')//törzs létrehozása
table.appendChild(tbody)//törzs hozzáadása a táblázashoz

createFormField();//függvény meghívása
document.getElementById("form").addEventListener("submit", function (e) {  
  e.preventDefault();// esemény megállítása

  const active = e.currentTarget;// aktuális elem
  const errormezo = active.querySelectorAll(".error");// hibauzenetek lekérése a formról 

  const szerzovalue = document.getElementById("kolto_nev").value;// szerző input értékének lekérése
  const korszakvalue = document.getElementById("korszak").value;// korszak input értékének lekérése
  const szerelem1value = document.getElementById("szerelem1").value// első szerelme input értékének lekérése
  const szerelemcheckbox = document.getElementById("masodik").checked;// második szerelme input mezőjének lekérése
  const szerelem2value = szerelemcheckbox ? document.getElementById("szerelem2").value : '';// második szerelme input értékének lekérése

  let validated = true;// validálás igaz értékkel kezdődik
  for (let i = 0; i < errormezo.length; i++) { // hibák kiírásának törlése
    errormezo[i].innerHTML = ""; // hibák kiírásának törlése
  }

  // Érvényesség tesztelése
  if (!validateField(szerzovalue, errormezo[0], "Kötelező megadni a szerző nevét")) { // szerző mező validálása
    validated = false; // ha nem validált akkor hamis lesz
  }
  if (!validateField(korszakvalue, errormezo[1], "Kötelező megadni a korszakot")) { // korszak mező validálása
    validated = false; // ha nem validált akkor hamis lesz
  }
  if (szerelemcheckbox) {
    if (!validateField(szerelem1value, errormezo[2], "Kötelező megadni az első szerelmet")) { // első szerelem mező validálása
      validated = false; // ha nem validált akkor hamis lesz
    }
  }
  if (szerelemcheckbox && !validateCheckbox(szerelemcheckbox, szerelem2value, errormezo[3], "Kötelező megadni a szerelmet")) { // második szerelem mező validálása
    validated = false; // ha nem validált akkor hamis lesz
  }

  if (validated) {
    const ujszerzo = {//új szerző létrehozása
      szerzo: szerzovalue,//szerző neve
      korszak: korszakvalue,//korszak
      szerelem1: szerelem1value === "" ? undefined : szerelem1value,//első szerelem
      szerelem2:szerelemcheckbox && szerelem2value === "" ? undefined : szerelem2value //második szerelem
    };
  
    adatok.push(ujszerzo); // új elem hozzáadása a tömbhöz
    tbody.innerHTML = ""; // törzs tartalmának törlése
    rendermenu(); // függvény meghívása
    active.reset(); // mezők törlése
  }
});


rendermenu(); // függvény meghívása


