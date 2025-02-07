const fejlecSzoveg = {
    szerzo: "Szerző neve",  // Fejléc szövege
    korszak: "Korszak",      // Fejléc szövege
    szerelem: "Szerelmek",   // Fejléc szövege
  }
  
  const sor1 = {
    szerzo: "Balassi Bálint",      // Első cella szövege az első sorban
    korszak: "reformáció",         // Második cella szövege az első sorban
    szerelem1: "Losonczy Anna",    // Harmadik cella szövege az első sorban
    szerelem2: "Dobó Krisztina"    // Negyedik cella szövege az első sorban
  }
  
  const sor2 = {
    szerzo: "Csokonai Vitéz Mihály", // Első cella szövege a második sorban
    korszak: "felvilágosodás",       // Második cella szövege a második sorban
    szerelem1: "Vajda Juliána"       // Harmadik cella szövege a második sorban
  }
  
  const sor3 = {
    szerzo: "Petőfi Sándor",       // Első cella szövege a harmadik sorban
    korszak: "magyar romantika",   // Második cella szövege a harmadik sorban
    szerelem1: "Mednyánszky Berta",// Harmadik cella szövege a harmadik sorban
    szerelem2: "Szendrey Júlia"    // Negyedik cella szövege a harmadik sorban
  }
  
  const sor4 = {
    szerzo: "Ady Endre",           // Első cella szövege a negyedik sorban
    korszak: "20. század",         // Második cella szövege a negyedik sorban
    szerelem1: "Léda",             // Harmadik cella szövege a negyedik sorban
    szerelem2: "Csinszka"          // Negyedik cella szövege a negyedik sorban
  }

const table = document.createElement("table")//table elem létrehozása
document.body.appendChild(table)//table appendChildolása a bodyhoz

const tablehead = document.createElement('tr') // tr fejléc létrehozása
table.appendChild(tablehead)// a  sor hozzáadása a táblázasthoz

const thszerzo = document.createElement('th')// fejléc cella létrehozása
thszerzo.innerHTML = fejlecSzoveg.szerzo // megadjuk a cella tartalmát
tablehead.appendChild(thszerzo)// cella hozzá adása a fejléc sorához

const thkorszak = document.createElement('th')// újabb fejléc cella létrehozása
thkorszak.innerHTML = fejlecSzoveg.korszak //megadjuk a cella tartalmát
tablehead.appendChild(thkorszak)//cella hozzá adása a fejléc sorához

const thszerelem1 = document.createElement('th')//még egy fejléc cella létrehozása
thszerelem1.innerHTML = fejlecSzoveg.szerelem//megadjuk a cella tartalmát
tablehead.appendChild(thszerelem1)//cella hozzá adása a fejléc sorához

const thszerelem2 = document.createElement('th')//második szerelmének a fejléc cella létrehozása
thszerelem2.innerHTML = fejlecSzoveg.szerelem// megadjuk a cella tartalmát
tablehead.appendChild(thszerelem2)//cella hozzá adása a fejléc sorához

const elsosor = document.createElement('tr')//táblázat sorának létrehozása az adatoknak
table.appendChild(elsosor)//hozzá adjuk a táblázathoz a sort

const elsosorSzerzo = document.createElement('td')//cella létrehozása a szerzőnek
elsosorSzerzo.innerHTML = sor1.szerzo//cella tartalmát beállítja
elsosor.appendChild(elsosorSzerzo)//cella hozzá adása az első sorhoz

const elsosorKorszak = document.createElement('td')//cella létrehozása a korszaknak
elsosorKorszak.innerHTML=sor1.korszak//cella tartalmát beállítja
elsosor.appendChild(elsosorKorszak)//cella hozzá adása az első sorhoz

const elsosorSzerelem1 = document.createElement('td')//cella létrhozása a szerelmének
elsosorSzerelem1.innerHTML=sor1.szerelem1//cella tartalmát beállítja
elsosor.appendChild(elsosorSzerelem1)//cella hozzá adása az első sorhoz

const elsosorSzerelem2 = document.createElement('td')//cella létrehozása a szerelmének
elsosorSzerelem2.innerHTML=sor1.szerelem2//cellla tartalmát beálítja
elsosor.appendChild(elsosorSzerelem2)//cella hozzá adása az első sorhoz


const masodiksor = document.createElement('tr')//táblázat sorának létrehozása az adatoknak
table.appendChild(masodiksor)//hozzá adjuk a táblázathoz a sort

const masodiksosorSzerzo = document.createElement('td')//cella létrehozása a szerzőnek
masodiksosorSzerzo.innerHTML = sor2.szerzo//cella tartalmát beállítja
masodiksor.appendChild(masodiksosorSzerzo)//cella hozzá adása az második sorhoz

const masodiksorKorszak = document.createElement('td')//cella létrehozása a korszaknak
masodiksorKorszak.innerHTML= sor2.korszak//cella tartalmát beállítja
masodiksor.appendChild(masodiksorKorszak)//cella hozzá adása az második sorhoz

const masodiksorSzerelem1 = document.createElement('td')//cella létrhozása a szerelmének
masodiksorSzerelem1.innerHTML= sor2.szerelem1//cella tartalmát beállítja
masodiksor.appendChild(masodiksorSzerelem1)//cella hozzá adása az második sorhoz

const masodiksorSzerelem2 = document.createElement('td')//cella létrehozása a szerelmének
masodiksorSzerelem2.innerHTML=''//cellla tartalmát beálítja üres cellát hozunk létre
masodiksor.appendChild(masodiksorSzerelem2)//cella hozzá adása az második sorhoz


const harmadiksor = document.createElement('tr')//táblázat sorának létrehozása az adatoknak
table.appendChild(harmadiksor)//hozzá adjuk a táblázathoz a sort

const harmadiksorSzerzo = document.createElement('td')//cella létrehozása a szerzőnek
harmadiksorSzerzo.innerHTML = sor3.szerzo//cella tartalmát beállítja
harmadiksor.appendChild(harmadiksorSzerzo)//cella hozzá adása az harmadik sorhoz

const harmadiksorKorszak = document.createElement('td')//cella létrehozása a korszaknak
harmadiksorKorszak.innerHTML=sor3.korszak//cella tartalmát beállítja
harmadiksor.appendChild(harmadiksorKorszak)//cella hozzá adása az harmadik sorhoz

const harmadiksorSzerelem1 = document.createElement('td')//cella létrhozása a szerelmének
harmadiksorSzerelem1.innerHTML=sor3.szerelem1//cella tartalmát beállítja
harmadiksor.appendChild(harmadiksorSzerelem1)//cella hozzá adása az harmadik sorhoz

const harmadiksorSzerelem2 = document.createElement('td')//cella létrehozása a szerelmének
harmadiksorSzerelem2.innerHTML=sor3.szerelem2//cellla tartalmát beálítja 
harmadiksor.appendChild(harmadiksorSzerelem2)//cella hozzá adása az harmadik sorhoz

const negyediksor = document.createElement('tr')//táblázat sorának létrehozása az adatoknak
table.appendChild(negyediksor)//hozzá adjuk a táblázathoz a sort

const negyediksorSzerzo = document.createElement('td')//cella létrehozása a szerzőnek
negyediksorSzerzo.innerHTML = sor4.szerzo//cella tartalmát beállítja
negyediksor.appendChild(negyediksorSzerzo)//cella hozzá adása az negyedik sorhoz

const negyediksorKorszak = document.createElement('td')//cella létrehozása a korszaknak
negyediksorKorszak.innerHTML=sor4.korszak//cella tartalmát beállítja
negyediksor.appendChild(negyediksorKorszak)//cella hozzá adása az negyedik sorhoz

const negyediksorSzerelem1 = document.createElement('td')//cella létrhozása a szerelmének
negyediksorSzerelem1.innerHTML=sor4.szerelem1//cella tartalmát beállítja
negyediksor.appendChild(negyediksorSzerelem1)//cella hozzá adása az negyedik sorhoz

const negyediksorSzerelem2 = document.createElement('td')//cella létrehozása a szerelmének
negyediksorSzerelem2.innerHTML=sor4.szerelem2//cellla tartalmát beálítja 
negyediksor.appendChild(negyediksorSzerelem2)//cella hozzá adása az negyedik sorhoz
