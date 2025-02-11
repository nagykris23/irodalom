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

const thszerzo = document.createElement('th')// fejléc cella létrehozása
thszerzo.innerHTML = adatok[0].szerzo // megadjuk a cella tartalmát a tömbbünk segítségével
tablehead.appendChild(thszerzo)// cella hozzá adása a fejléc sorához

const thkorszak = document.createElement('th')// újabb fejléc cella létrehozása
thkorszak.innerHTML = adatok[0].korszak //megadjuk a cella tartalmát a tömbbünk segítségével
tablehead.appendChild(thkorszak)//cella hozzá adása a fejléc sorához

const thszerelem = document.createElement('th')//második szerelmének a fejléc cella létrehozása
thszerelem.innerHTML = adatok[0].szerelem// megadjuk a cella tartalmát a tömbbünk segítségével
tablehead.appendChild(thszerelem)//cella hozzá adása a fejléc sorához

//táblázat törzsének létrehozása
const tbody = document.createElement('tbody')//törzs létrehozása
table.appendChild(tbody)//törzs hozzáadása a táblázashoz

//függvény bevezetése
function rendermenu() {
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
e.preventDefault()//esemény megállítása

  const active = e.currentTarget//aktuális elem
  const errormezo = active.querySelector(".error")//error mező lekérése
  for (let i = 0; i < errormezo.length; i++) {//ciklus a hibák kiírására
    errormezo[i].innerHTML = ""//hibák kiírásának törlése
  }
  let validated = true//validálás igaz értékkel kezdődik

  const szerzovalue = document.getElementById("kolto_nev").value//szerző input értékének lekérése
  const korszakvalue = document.getElementById("korszak").value//korszak input értékének lekérése
  const szerelem1value = document.getElementById("szerelem1").value//első szerelme input értékének lekérése
  const szerelem2value = document.getElementById("szerelem2").value//második szerelme input értékének lekérése
  
  //érvényesség tesztelése
  if (szerzovalue ===''){//ha a szerző mező üres
    const parent = document.getElementById("kolto_nev").parentElement//szerző mező lekérése
    const error = parent.querySelector(".error")//hiba lekérése
    error.innerHTML = "Kötelező megadni a Szerzőt"//hiba kiírása
    validated = false//validálás hamis értékkel
  }
  if (korszakvalue === '') {//ha a korszak mező üres
    const parent = document.getElementById("korszak").parentElement//korszak mező lekérése
    const error = parent.querySelector(".error")//hiba lekérése
    error.innerHTML = "Kötelező megadni a korszakot"//hiba kiírása
    validated = false//validálás hamis értékkel
  }
  if (szerelem1value === '') {//ha az első szerelme mező üres
    const parent = document.getElementById("szerelem1").parentElement//első szerelme mező lekérése
    const error = parent.querySelector(".error")//hiba lekérése
    error.innerHTML = "Az első szerelem kötelező mező"//hiba kiírása
    validated = false//validálás hamis értékkel
  }

  if(validated){
  const ujszerzo = {
    szerzo: szerzovalue,//szerző input értékének lekérése
    korszak: korszakvalue,//korszak input értékének lekérése
    szerelem1: szerelem1value,//első szerelme input értékének lekérése
    szerelem2: szerelem2value == '' ? undefined : szerelem2value//második szerelme input értékének lekérése ha nincs akkor undefined
  }
  adatok.push(ujszerzo)//új elem hozzáadása a tömbhöz
  tbody.innerHTML = ""//törzs tartalmának törlése
  rendermenu()//függvény meghívása
}
})
rendermenu()//függvény meghívása