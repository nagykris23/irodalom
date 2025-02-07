const table = document.createElement("table")//table elem létrehozása
document.body.appendChild(table)//table appendChildolása a bodyhoz

const tablehead = document.createElement('tr') // tr fejléc létrehozása
table.appendChild(tablehead)// a  sor hozzáadása a táblázasthoz

const thszerzo = document.createElement('th')// fejléc cella létrehozása
thszerzo.innerHTML = 'Szerző neve' // megadjuk a cella tartalmát
tablehead.appendChild(thszerzo)// cella hozzá adása a fejléc sorához

const thkorszak = document.createElement('th')// újabb fejléc cella létrehozása
thkorszak.innerHTML = 'Korszak' //megadjuk a cella tartalmát
tablehead.appendChild(thkorszak)//cella hozzá adása a fejléc sorához

const thszerelem1 = document.createElement('th')//még egy fejléc cella létrehozása
thszerelem1.innerHTML = "Szerelmek"//megadjuk a cella tartalmát
tablehead.appendChild(thszerelem1)//cella hozzá adása a fejléc sorához

const thszerelem2 = document.createElement('th')//második szerelmének a fejléc cella létrehozása
thszerelem2.innerHTML = "Szerelmek"// megadjuk a cella tartalmát
tablehead.appendChild(thszerelem2)//cella hozzá adása a fejléc sorához

const elsosor = document.createElement('tr')//táblázat sorának létrehozása az adatoknak
table.appendChild(elsosor)//hozzá adjuk a táblázathoz a sort

const elsosorSzerzo = document.createElement('td')//cella létrehozása a szerzőnek
elsosorSzerzo.innerHTML = 'Balasi Bálint'//cella tartalmát beállítja
elsosor.appendChild(elsosorSzerzo)//cella hozzá adása az első sorhoz

const elsosorKorszak = document.createElement('td')//cella létrehozása a korszaknak
elsosorKorszak.innerHTML='reformáció'//cella tartalmát beállítja
elsosor.appendChild(elsosorKorszak)//cella hozzá adása az első sorhoz

const elsosorSzerelem1 = document.createElement('td')//cella létrhozása a szerelmének
elsosorSzerelem1.innerHTML='Losonczy Anna'//cella tartalmát beállítja
elsosor.appendChild(elsosorSzerelem1)//cella hozzá adása az első sorhoz

const elsosorSzerelem2 = document.createElement('td')//cella létrehozása a szerelmének
elsosorSzerelem2.innerHTML='Dobó Krisztina'//cellla tartalmát beálítja
elsosor.appendChild(elsosorSzerelem2)//cella hozzá adása az első sorhoz


const masodiksor = document.createElement('tr')//táblázat sorának létrehozása az adatoknak
table.appendChild(masodiksor)//hozzá adjuk a táblázathoz a sort

const masodiksosorSzerzo = document.createElement('td')//cella létrehozása a szerzőnek
masodiksosorSzerzo.innerHTML = 'Csokonai Vitéz Mihály'//cella tartalmát beállítja
masodiksor.appendChild(masodiksosorSzerzo)//cella hozzá adása az második sorhoz

const masodiksorKorszak = document.createElement('td')//cella létrehozása a korszaknak
masodiksorKorszak.innerHTML='felvilágosodás'//cella tartalmát beállítja
masodiksor.appendChild(masodiksorKorszak)//cella hozzá adása az második sorhoz

const masodiksorSzerelem1 = document.createElement('td')//cella létrhozása a szerelmének
masodiksorSzerelem1.innerHTML='Vajda Juliána'//cella tartalmát beállítja
masodiksor.appendChild(masodiksorSzerelem1)//cella hozzá adása az második sorhoz

const masodiksorSzerelem2 = document.createElement('td')//cella létrehozása a szerelmének
masodiksorSzerelem2.innerHTML=''//cellla tartalmát beálítja üres cellát hozunk létre
masodiksor.appendChild(masodiksorSzerelem2)//cella hozzá adása az második sorhoz


const harmadiksor = document.createElement('tr')//táblázat sorának létrehozása az adatoknak
table.appendChild(harmadiksor)//hozzá adjuk a táblázathoz a sort

const harmadiksorSzerzo = document.createElement('td')//cella létrehozása a szerzőnek
harmadiksorSzerzo.innerHTML = 'Petőfi Sándor'//cella tartalmát beállítja
harmadiksor.appendChild(harmadiksorSzerzo)//cella hozzá adása az harmadik sorhoz

const harmadiksorKorszak = document.createElement('td')//cella létrehozása a korszaknak
harmadiksorKorszak.innerHTML='magyar romantika'//cella tartalmát beállítja
harmadiksor.appendChild(harmadiksorKorszak)//cella hozzá adása az harmadik sorhoz

const harmadiksorSzerelem1 = document.createElement('td')//cella létrhozása a szerelmének
harmadiksorSzerelem1.innerHTML='Mednyászky Berta'//cella tartalmát beállítja
harmadiksor.appendChild(harmadiksorSzerelem1)//cella hozzá adása az harmadik sorhoz

const harmadiksorSzerelem2 = document.createElement('td')//cella létrehozása a szerelmének
harmadiksorSzerelem2.innerHTML='Szendrey Júlia'//cellla tartalmát beálítja 
harmadiksor.appendChild(harmadiksorSzerelem2)//cella hozzá adása az harmadik sorhoz

const negyediksor = document.createElement('tr')//táblázat sorának létrehozása az adatoknak
table.appendChild(negyediksor)//hozzá adjuk a táblázathoz a sort

const negyediksorSzerzo = document.createElement('td')//cella létrehozása a szerzőnek
negyediksorSzerzo.innerHTML = 'Ady Endre'//cella tartalmát beállítja
negyediksor.appendChild(negyediksorSzerzo)//cella hozzá adása az negyedik sorhoz

const negyediksorKorszak = document.createElement('td')//cella létrehozása a korszaknak
negyediksorKorszak.innerHTML='20. század'//cella tartalmát beállítja
negyediksor.appendChild(negyediksorKorszak)//cella hozzá adása az negyedik sorhoz

const negyediksorSzerelem1 = document.createElement('td')//cella létrhozása a szerelmének
negyediksorSzerelem1.innerHTML='Léda'//cella tartalmát beállítja
negyediksor.appendChild(negyediksorSzerelem1)//cella hozzá adása az negyedik sorhoz

const negyediksorSzerelem2 = document.createElement('td')//cella létrehozása a szerelmének
negyediksorSzerelem2.innerHTML='Csinszka'//cellla tartalmát beálítja 
negyediksor.appendChild(negyediksorSzerelem2)//cella hozzá adása az negyedik sorhoz
