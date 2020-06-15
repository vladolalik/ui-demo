export const user = {
  id: 1,
  valid: true,
  lang: 1,
  meno: "Jan",
  priezvisko: "Slovak",
  nar: "060989/6583",
  skuska: 1
};
export const sendAwswer = {
  status: "OK"
};

export const getTest = {
  skuska: "1",

  cas: "20",

  pocet: "8",

  sprava: "",

  chyba: "",

  otazky: {
    "1": [
      {
        id: "10",
        text: "Dať prednosť v jazde sa rozumie",
        body: 2,
        obrazok: "",
        druhot: "BASIC",
        klik: 0
      }
    ],

    "2": [
      {
        id: "15",
        text: "Motorové vozidlo musí mať počas jazdy rozsvietené",
        body: 2,
        obrazok: "",
        druhot: "BASIC",
        klik: 2
      }
    ],

    "3": [
      {
        id: "16",
        text: "Na bicykli sa jazdí predovšetkým",
        body: 1,
        obrazok: "",
        druhot: "OTHER",
        klik: 0
      }
    ],

    "4": [
      {
        id: "17",
        text:
          "Vozidlo sa považuje za technicky nespôsobilé na premávku na pozemných komunikáciách, ak:",
        body: 2,
        obrazok: "",
        druhot: "OTHER",
        klik: 0
      }
    ],

    "5": [
      {
        id: "18",
        text: "Táto dopravná značka upozorňuje na",
        body: 1,
        obrazok: "obr/16.jpg",
        druhot: "SIGN",
        klik: 0
      }
    ],

    "6": [
      {
        id: "19",
        text:
          "Vozidlo sa považuje za technicky nespôsobilé na premávku na pozemných komunikáciách, ak:",
        body: 2,
        obrazok: "obr/17.jpg",
        druhot: "SIGN",
        klik: 0
      }
    ],

    "7": [
      {
        id: "25",
        text: "Ako prvé vojde do križovatky",
        body: 3,
        obrazok: "obr/o1-24.jpg",
        druhot: "CROSSING",
        klik: 0
      }
    ],

    "8": [
      {
        id: "11",
        text:
          'Ak má policajt pravú ruku predpaženú a ľavú upaženú, znamená to "Stoj!" pre:',
        body: 3,
        obrazok: "obr/o1-25.jpg",
        druhot: "CROSSING",
        klik: 0
      }
    ]
  },

  odpovede: {
    "1": [
      {
        odpoved:
          "povinnosť účastíka cestnej premávky počínať si tak, aby ten, kto má prednosť v jazde nemusel náhle zmeniť smer alebo rýchlosť jazdy",
        oznac: "A"
      },

      {
        odpoved:
          "povinnosť účastníka cestnej premávky počínať si tak, aby ten, kto má prednosť v jazde nemusel zmeniť smer jazdy, môže však zmeniť rýchlosť jazdy",
        oznac: "B"
      },

      {
        odpoved:
          "povinnosť účastníka cestnej premávky počínať si tak, aby ten, kto má prednosť v jazde nemusel zmeniť rýchlosť jazdy, môže však zmeniť smer jazdy",
        oznac: "C"
      }
    ],

    "2": [
      { odpoved: "svetlá vo vnútri vozidla", oznac: "A" },

      { odpoved: "diaľkové svetlomety", oznac: "B" },

      {
        odpoved:
          "stretávacie svetlomety alebo im na roveň postavené osvetlenie",
        oznac: "C"
      }
    ],

    "3": [
      { odpoved: "po chodníku", oznac: "A" },

      { odpoved: "po cestičke pre cyklistov", oznac: "B" },

      { odpoved: "po ľavej krajnici", oznac: "C" }
    ],

    "4": [
      {
        odpoved: "sú na tej istej náprave použite rôzne pneumatiky",
        oznac: "A"
      },

      {
        odpoved:
          "najnižší bod činnej svietiacej plochy obrysových svetiel je vyššie ako 350mm nad rovinou vozovky",
        oznac: "B"
      },

      {
        odpoved:
          "diaľkové svetlomety nie je možné prepnúť na obrysové svietidlá",
        oznac: "C"
      }
    ],

    "5": [
      { odpoved: "železničné priecestie bez závor", oznac: "A" },

      { odpoved: "kríženie cesty s električkovou koľajou", oznac: "B" },

      {
        odpoved: "križovatku, kde nie je prednosť v jazde upravená značkami",
        oznac: "C"
      }
    ],

    "6": [
      { odpoved: "vjazd motorovým aj nemotorovým vozidlám", oznac: "A" },

      { odpoved: "vjazd vozidlám vyznačených druhov", oznac: "B" },

      { odpoved: "predchádzanie voziel vyznačených druhov", oznac: "C" }
    ],

    "7": [
      { odpoved: "zelené vozidlo", oznac: "A" },

      { odpoved: "modré vozidlo", oznac: "B" },

      { odpoved: "červené vozidlo", oznac: "C" }
    ],

    "8": [
      { odpoved: "vodiča zeleného vozidla", oznac: "A" },

      { odpoved: "vodiča červeného a vodiča žltého vozidla", oznac: "B" },

      { odpoved: "chodcov prechádzajúcich za chrbtom policajta", oznac: "C" }
    ]
  },

  okruhy: {
    "1": [{ txt: "Prvý okruh zzz.", zacina: "1" }],

    "2": [{ txt: "Druhý okruh.", zacina: "3" }],

    "3": [{ txt: "Tretí okruh, popiska.", zacina: "5" }]
  }
};
export default getTest;
