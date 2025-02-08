//adatok kiszervezése tömbe 
const adatok = [ 
    {
      szerzo:"Szerző neve",  //szerző neve a fejlécnek
      korszak:"Korszak", //korszak a fejlécnek 
      szerelem:"Szerelmek"//szerelmek a fejlécnek
    },
    {
      szerzo:"Balassi Bálint",//szerző neve az első sorban
      korszak:"reformáció",//korszak az első sorban
      szerelem1:"Losonczy Anna",//első szerelme az első sorban
      szerelem2:"Dobó Krisztina"//második szerelme az első sorban
    },
    {
      szerzo:"Csokonai Vitéz Mihály",//szerző neve a második sorban
      korszak:"felvilágosodás",//korszak a második sorban
      szerelem1:"Vajda Juliána"//szerelme az második sorban
    },
    {
      szerzo:"Petőfi Sándor",//szerző neve a harmadik sorban
      korszak:"magyar romantika",//korszak a harmadik sorban
      szerelem1:"Mednyánszky Berta",//szerelme az harmadik sorban
      szerelem2:"Szendrey Júlia"//második szerelme az harmadik sorban
    },
    {
      szerzo:"Ady Endre",//szerző neve a negyedik sorban
      korszak:"20. század",//korszak a negyedik sorban
      szerelem1:"Léda",//szerelme az negyedik sorban
      szerelem2:"Csinszka"//második szerelme az negyedik sorban
    }
  ]

const table = document.createElement("table")//table elem létrehozása
document.body.appendChild(table)//table appendChildolása a bodyhoz

const tablehead = document.createElement('tr') // tr fejléc létrehozása
table.appendChild(tablehead)// a  sor hozzáadása a táblázasthoz

const thszerzo = document.createElement('th')// fejléc cella létrehozása
thszerzo.innerHTML = adatok[0].szerzo // megadjuk a cella tartalmát
tablehead.appendChild(thszerzo)// cella hozzá adása a fejléc sorához

const thkorszak = document.createElement('th')// újabb fejléc cella létrehozása
thkorszak.innerHTML = adatok[0].korszak //megadjuk a cella tartalmát
tablehead.appendChild(thkorszak)//cella hozzá adása a fejléc sorához

const thszerelem1 = document.createElement('th')//még egy fejléc cella létrehozása
thszerelem1.innerHTML = adatok[0].szerelem//megadjuk a cella tartalmát
tablehead.appendChild(thszerelem1)//cella hozzá adása a fejléc sorához

const thszerelem2 = document.createElement('th')//második szerelmének a fejléc cella létrehozása
thszerelem2.innerHTML = adatok[0].szerelem// megadjuk a cella tartalmát
tablehead.appendChild(thszerelem2)//cella hozzá adása a fejléc sorához

const elsosor = document.createElement('tr')//táblázat sorának létrehozása az adatoknak
table.appendChild(elsosor)//hozzá adjuk a táblázathoz a sort

const elsosorSzerzo = document.createElement('td')//cella létrehozása a szerzőnek
elsosorSzerzo.innerHTML = adatok[1].szerzo//cella tartalmát beállítja
elsosor.appendChild(elsosorSzerzo)//cella hozzá adása az első sorhoz

const elsosorKorszak = document.createElement('td')//cella létrehozása a korszaknak
elsosorKorszak.innerHTML=adatok[1].korszak//cella tartalmát beállítja
elsosor.appendChild(elsosorKorszak)//cella hozzá adása az első sorhoz

const elsosorSzerelem1 = document.createElement('td')//cella létrhozása a szerelmének
elsosorSzerelem1.innerHTML=adatok[1].szerelem1//cella tartalmát beállítja
elsosor.appendChild(elsosorSzerelem1)//cella hozzá adása az első sorhoz

const elsosorSzerelem2 = document.createElement('td')//cella létrehozása a szerelmének
elsosorSzerelem2.innerHTML=adatok[1].szerelem2//cellla tartalmát beálítja
elsosor.appendChild(elsosorSzerelem2)//cella hozzá adása az első sorhoz


const masodiksor = document.createElement('tr')//táblázat sorának létrehozása az adatoknak
table.appendChild(masodiksor)//hozzá adjuk a táblázathoz a sort

const masodiksosorSzerzo = document.createElement('td')//cella létrehozása a szerzőnek
masodiksosorSzerzo.innerHTML = adatok[2].szerzo//cella tartalmát beállítja
masodiksor.appendChild(masodiksosorSzerzo)//cella hozzá adása az második sorhoz

const masodiksorKorszak = document.createElement('td')//cella létrehozása a korszaknak
masodiksorKorszak.innerHTML= adatok[2].korszak//cella tartalmát beállítja
masodiksor.appendChild(masodiksorKorszak)//cella hozzá adása az második sorhoz

const masodiksorSzerelem1 = document.createElement('td')//cella létrhozása a szerelmének
masodiksorSzerelem1.innerHTML= adatok[2].szerelem1//cella tartalmát beállítja
masodiksor.appendChild(masodiksorSzerelem1)//cella hozzá adása az második sorhoz

const masodiksorSzerelem2 = document.createElement('td')//cella létrehozása a szerelmének
masodiksorSzerelem2.innerHTML=''//cellla tartalmát beálítja üres cellát hozunk létre
masodiksor.appendChild(masodiksorSzerelem2)//cella hozzá adása az második sorhoz


const harmadiksor = document.createElement('tr')//táblázat sorának létrehozása az adatoknak
table.appendChild(harmadiksor)//hozzá adjuk a táblázathoz a sort

const harmadiksorSzerzo = document.createElement('td')//cella létrehozása a szerzőnek
harmadiksorSzerzo.innerHTML = adatok[3].szerzo//cella tartalmát beállítja
harmadiksor.appendChild(harmadiksorSzerzo)//cella hozzá adása az harmadik sorhoz

const harmadiksorKorszak = document.createElement('td')//cella létrehozása a korszaknak
harmadiksorKorszak.innerHTML=adatok[3].korszak//cella tartalmát beállítja
harmadiksor.appendChild(harmadiksorKorszak)//cella hozzá adása az harmadik sorhoz

const harmadiksorSzerelem1 = document.createElement('td')//cella létrhozása a szerelmének
harmadiksorSzerelem1.innerHTML=adatok[3].szerelem1//cella tartalmát beállítja
harmadiksor.appendChild(harmadiksorSzerelem1)//cella hozzá adása az harmadik sorhoz

const harmadiksorSzerelem2 = document.createElement('td')//cella létrehozása a szerelmének
harmadiksorSzerelem2.innerHTML=adatok[3].szerelem2//cellla tartalmát beálítja 
harmadiksor.appendChild(harmadiksorSzerelem2)//cella hozzá adása az harmadik sorhoz

const negyediksor = document.createElement('tr')//táblázat sorának létrehozása az adatoknak
table.appendChild(negyediksor)//hozzá adjuk a táblázathoz a sort

const negyediksorSzerzo = document.createElement('td')//cella létrehozása a szerzőnek
negyediksorSzerzo.innerHTML = adatok[4].szerzo//cella tartalmát beállítja
negyediksor.appendChild(negyediksorSzerzo)//cella hozzá adása az negyedik sorhoz

const negyediksorKorszak = document.createElement('td')//cella létrehozása a korszaknak
negyediksorKorszak.innerHTML=adatok[4].korszak//cella tartalmát beállítja
negyediksor.appendChild(negyediksorKorszak)//cella hozzá adása az negyedik sorhoz

const negyediksorSzerelem1 = document.createElement('td')//cella létrhozása a szerelmének
negyediksorSzerelem1.innerHTML=adatok[4].szerelem1//cella tartalmát beállítja
negyediksor.appendChild(negyediksorSzerelem1)//cella hozzá adása az negyedik sorhoz

const negyediksorSzerelem2 = document.createElement('td')//cella létrehozása a szerelmének
negyediksorSzerelem2.innerHTML=adatok[4].szerelem2//cellla tartalmát beálítja 
negyediksor.appendChild(negyediksorSzerelem2)//cella hozzá adása az negyedik sorhoz
