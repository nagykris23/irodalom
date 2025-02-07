const fejlecElso = "Szerző neve"; // Fejléc szövege
const fejlecMasodik = "Korszak"; // Fejléc szövege
const fejlecHarmadik = "Szerelmek"; // Fejléc szövege
const elsosrocella1 = "Balassi Bálint"; // Első cella szövege az első sorban
const elsosorcella2 = "reformáció"; // Második cella szövege az első sorban
const elsosorcella3 = "Losonczy Anna"; // Harmadik cella szövege az első sorban
const elsosorcella4 = "Dobó Krisztina"; // Negyedik cella szövege az első sorban
const masodiksorcella1 = "Csokonai Vitéz Mihály"; // Első cella szövege a második sorban
const masodiksorcella2 = "felvilágosodás"; // Második cella szövege a második sorban
const masodiksorcella3 = "Vajda Juliána"; // Harmadik cella szövege a második sorban
const harmadiksorcella1 = "Petőfi Sándor"; // Első cella szövege a harmadik sorban
const harmadiksorcella2 = "magyar romantika"; // Második cella szövege a harmadik sorban
const harmadiksorcella3 = "Mednyánszky Berta"; // Harmadik cella szövege a harmadik sorban
const harmadiksorcella4 = "Szendrey Júlia"; // Negyedik cella szövege a harmadik sorban
const negyediksorcella1 = "Ady Endre"; // Első cella szövege a negyedik sorban
const negyediksorcella2 = "20. század"; // Második cella szövege a negyedik sorban
const negyediksorcella3 = "Léda"; // Harmadik cella szövege a negyedik sorban
const negyediksorcella4 = "Csinszka"; // Negyedik cella szövege a negyedik sorban

const table = document.createElement("table")//table elem létrehozása
document.body.appendChild(table)//table appendChildolása a bodyhoz

const tablehead = document.createElement('tr') // tr fejléc létrehozása
table.appendChild(tablehead)// a  sor hozzáadása a táblázasthoz

const thszerzo = document.createElement('th')// fejléc cella létrehozása
thszerzo.innerHTML = fejlecElso // megadjuk a cella tartalmát
tablehead.appendChild(thszerzo)// cella hozzá adása a fejléc sorához

const thkorszak = document.createElement('th')// újabb fejléc cella létrehozása
thkorszak.innerHTML = fejlecMasodik //megadjuk a cella tartalmát
tablehead.appendChild(thkorszak)//cella hozzá adása a fejléc sorához

const thszerelem1 = document.createElement('th')//még egy fejléc cella létrehozása
thszerelem1.innerHTML = fejlecHarmadik//megadjuk a cella tartalmát
tablehead.appendChild(thszerelem1)//cella hozzá adása a fejléc sorához

const thszerelem2 = document.createElement('th')//második szerelmének a fejléc cella létrehozása
thszerelem2.innerHTML = fejlecHarmadik// megadjuk a cella tartalmát
tablehead.appendChild(thszerelem2)//cella hozzá adása a fejléc sorához

const elsosor = document.createElement('tr')//táblázat sorának létrehozása az adatoknak
table.appendChild(elsosor)//hozzá adjuk a táblázathoz a sort

const elsosorSzerzo = document.createElement('td')//cella létrehozása a szerzőnek
elsosorSzerzo.innerHTML = elsosrocella1//cella tartalmát beállítja
elsosor.appendChild(elsosorSzerzo)//cella hozzá adása az első sorhoz

const elsosorKorszak = document.createElement('td')//cella létrehozása a korszaknak
elsosorKorszak.innerHTML=elsosorcella2//cella tartalmát beállítja
elsosor.appendChild(elsosorKorszak)//cella hozzá adása az első sorhoz

const elsosorSzerelem1 = document.createElement('td')//cella létrhozása a szerelmének
elsosorSzerelem1.innerHTML=elsosorcella3//cella tartalmát beállítja
elsosor.appendChild(elsosorSzerelem1)//cella hozzá adása az első sorhoz

const elsosorSzerelem2 = document.createElement('td')//cella létrehozása a szerelmének
elsosorSzerelem2.innerHTML=elsosorcella4//cellla tartalmát beálítja
elsosor.appendChild(elsosorSzerelem2)//cella hozzá adása az első sorhoz


const masodiksor = document.createElement('tr')//táblázat sorának létrehozása az adatoknak
table.appendChild(masodiksor)//hozzá adjuk a táblázathoz a sort

const masodiksosorSzerzo = document.createElement('td')//cella létrehozása a szerzőnek
masodiksosorSzerzo.innerHTML = masodiksorcella1//cella tartalmát beállítja
masodiksor.appendChild(masodiksosorSzerzo)//cella hozzá adása az második sorhoz

const masodiksorKorszak = document.createElement('td')//cella létrehozása a korszaknak
masodiksorKorszak.innerHTML= masodiksorcella2//cella tartalmát beállítja
masodiksor.appendChild(masodiksorKorszak)//cella hozzá adása az második sorhoz

const masodiksorSzerelem1 = document.createElement('td')//cella létrhozása a szerelmének
masodiksorSzerelem1.innerHTML= masodiksorcella3//cella tartalmát beállítja
masodiksor.appendChild(masodiksorSzerelem1)//cella hozzá adása az második sorhoz

const masodiksorSzerelem2 = document.createElement('td')//cella létrehozása a szerelmének
masodiksorSzerelem2.innerHTML=''//cellla tartalmát beálítja üres cellát hozunk létre
masodiksor.appendChild(masodiksorSzerelem2)//cella hozzá adása az második sorhoz


const harmadiksor = document.createElement('tr')//táblázat sorának létrehozása az adatoknak
table.appendChild(harmadiksor)//hozzá adjuk a táblázathoz a sort

const harmadiksorSzerzo = document.createElement('td')//cella létrehozása a szerzőnek
harmadiksorSzerzo.innerHTML = harmadiksorcella1//cella tartalmát beállítja
harmadiksor.appendChild(harmadiksorSzerzo)//cella hozzá adása az harmadik sorhoz

const harmadiksorKorszak = document.createElement('td')//cella létrehozása a korszaknak
harmadiksorKorszak.innerHTML=harmadiksorcella2//cella tartalmát beállítja
harmadiksor.appendChild(harmadiksorKorszak)//cella hozzá adása az harmadik sorhoz

const harmadiksorSzerelem1 = document.createElement('td')//cella létrhozása a szerelmének
harmadiksorSzerelem1.innerHTML=harmadiksorcella3//cella tartalmát beállítja
harmadiksor.appendChild(harmadiksorSzerelem1)//cella hozzá adása az harmadik sorhoz

const harmadiksorSzerelem2 = document.createElement('td')//cella létrehozása a szerelmének
harmadiksorSzerelem2.innerHTML=harmadiksorcella4//cellla tartalmát beálítja 
harmadiksor.appendChild(harmadiksorSzerelem2)//cella hozzá adása az harmadik sorhoz

const negyediksor = document.createElement('tr')//táblázat sorának létrehozása az adatoknak
table.appendChild(negyediksor)//hozzá adjuk a táblázathoz a sort

const negyediksorSzerzo = document.createElement('td')//cella létrehozása a szerzőnek
negyediksorSzerzo.innerHTML = negyediksorcella1//cella tartalmát beállítja
negyediksor.appendChild(negyediksorSzerzo)//cella hozzá adása az negyedik sorhoz

const negyediksorKorszak = document.createElement('td')//cella létrehozása a korszaknak
negyediksorKorszak.innerHTML=negyediksorcella2//cella tartalmát beállítja
negyediksor.appendChild(negyediksorKorszak)//cella hozzá adása az negyedik sorhoz

const negyediksorSzerelem1 = document.createElement('td')//cella létrhozása a szerelmének
negyediksorSzerelem1.innerHTML=negyediksorcella3//cella tartalmát beállítja
negyediksor.appendChild(negyediksorSzerelem1)//cella hozzá adása az negyedik sorhoz

const negyediksorSzerelem2 = document.createElement('td')//cella létrehozása a szerelmének
negyediksorSzerelem2.innerHTML=negyediksorcella4//cellla tartalmát beálítja 
negyediksor.appendChild(negyediksorSzerelem2)//cella hozzá adása az negyedik sorhoz
