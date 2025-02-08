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

const table = document.createElement("table")//table elem létrehozása
document.body.appendChild(table)//table appendChildolása a bodyhoz

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
thszerelem.colSpan = 2//összevonjuk a két cellát ha üres a második szerelme
tablehead.appendChild(thszerelem)//cella hozzá adása a fejléc sorához

//táblázat törzsének létrehozása
const tbody = document.createElement('tbody')//törzs létrehozása
table.appendChild(tbody)//törzs hozzáadása a táblázashoz

//ciklus a tömb elemeinek bejárására
for (const adat of adatok) {//adatok tömb elemeinek bejárása
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
    sor.appendChild(tdszerelem1)//harmadik cella hozzáadása a sorhoz

    const tdszerelem2 = document.createElement('td')//negyedik cella létrehozása
    tdszerelem2.innerHTML = adat.szerelem2|| ''//negyedik cella tartalmának beállítása 
    sor.appendChild(tdszerelem2)//negyedik cella hozzáadása a sorhoz

  }
