export const filterOptions: FilterOption[] = [
  {
    name: "Купе",
    options: [
      "Всички",
      "Седан",
      "Хечбек",
      "Комби",
      "Купе",
      "Кабрио",
      "Джип",
      "Пикап",
      "Ван",
    ],
  },
  {
    name: "Цена",
    options: ["До 10 000", "10 000 - 20 000", "20 000 - 30 000", "Над 30 000"],
  },
  {
    name: "Година",
    options: ["2000-2010", "2011-2015", "2016-2020", "Нови"],
  },
  {
    name: "Мощност",
    options: [
      "До 100 к.с.",
      "100 - 150 к.с.",
      "150 - 200 к.с.",
      "Над 200 к.с.",
    ],
  },
  {
    name: "Гориво",
    options: [
      "Всички",
      "Бензин",
      "Дизел",
      "Газ/Бензин",
      "Метан/Бензин",
      "Хибрид",
      "Електричество",
    ],
  },
  { name: "Скорости", options: ["Всички", "Ръчни", "Автоматични"] },
  {
    name: "Къде",
    options: [
      "Всички",
      "София",
      "Варна",
      "Пловдив",
      "Враца",
      "Бургас",
      "Дупница",
      "Стара Загора",
      "Монтана",
      "Хасково",
      "Русе",
      "Плевен",
      "Сливен",
      "Шумен",
      "Велико Търново",
      "Добрич",
      "Перник",
      "Пазарджик",
      "Благоевград",
      "Габрово",
      "Казанлък",
      "Разград",
      "Кюстендил",
      "Силистра",
      "Троян",
      "Търговище",
      "Димитровград",
      "Видин",
      "Кърджали",
      "Ямбол",
      "Петрич",
      "Лясковец",
      "Гоце Делчев",
      "Асеновград",
      "Карлово",
      "Провадия",
      "Елин Пелин",
      "Горна Оряховица",
      "Панагюрище",
      "Септември",
      "Смолян",
      "Луковит",
      "Ловеч",
      "Карнобат",
      "Свищов",
      "Нови пазар",
      "Велинград",
      "Харманли",
      "Бяла Слатина",
      "Костенец",
      "Драгичево",
    ],
  },
  {
    name: "Пробег",
    options: [
      "Без значение",
      "До 50 000 км",
      "50 000 - 100 000 км",
      "100 000 - 150 000 км",
      "150 000 - 200 000 км",
      "200 000 - 250 000 км",
      "250 000 - 300 000 км",
      "Над 300 000 км",
    ],
  },
  {
    name: "От",
    options: [
      "Всички",
      "Частни лица",
      "Автокъщи/Търговци",
      "Официални вносители",
    ],
  },
  {
    name: "Брой врати",
    options: ["Без значение", "2/3", "4/5"],
  },
  {
    name: "Цвят",
    options: [
      "Без значение",
      "Бежов",
      "Бордо",
      "Бронзов",
      "Бял",
      "Виолетов",
      "Жълт",
      "Зелен",
      "Златен",
      "Кафяв",
      "Оранжев",
      "Сив",
      "Син",
      "Сребърен",
      "Червен",
      "Черен",
      "Лилав",
      "Охра",
      "Перла",
      "Розов",
      "Хамелеон",
      "Светло зелен",
      "Светло сив",
      "Светло син",
      "Тъмно зелен",
      "Тъмно сив",
      "Тъмно син",
    ],
  },
  {
    name: "Екстри",
    options: [
      "Без значение",
      "Климатик",
      "Климатроник",
      "Кожен салон",
      "Ел.стъкла",
      "Ел.огледала",
      "Ел.седалки",
      "Подгряване на седалки",
      "Шибедах",
      "Стерео уредба",
      "Алуминиеви джанти",
      "DVD/TV",
      "Мултифункционален волан",
      "4x4",
      "ABS",
      "ESP",
      "Airbag",
      "Ксенонови фарове",
      "Халогенни фарове",
      "ASR/Тракшън контрол",
      "Парктроник",
      "Аларма",
      "Имобилайзер",
      "Центр. заключване",
      "Застраховка",
      "Брониран",
      "Старт-Стоп система",
      "Безключово палене",
      "Типтроник/Мултитроник",
      "Автопилот",
      "Серво управление",
      "Бордови компютър",
      "Сервизна книжка",
      "Гаранция",
      "Навигационна система",
      "Десен волан",
      "Тунинг",
      "Панорамен покрив",
      "TAXI",
      "Ретро",
      "Теглич",
      "7 места (6+1)",
      "Хладилен",
      "Възможност за бартер",
      "Възможност за лизинг",
      "Право на данъчен кредит",
      "Нов внос",
    ],
  },
  { name: "Волан", options: ["Всички", "Ляв волан", "Десен волан"] },
];

export const brandModelOptions: BrandModelOption = {
  name: "Марка",
  options: [
    {
      brand: "VW",
      models: [
        "Amarok",
        "Amarok DoubleCab",
        "Arteon",
        "Arteon SB",
        "Atlas",
        "Beetle",
        "Bora",
        "Buggy",
        "Caddy",
        "Caddy Kasten",
        "Caddy Kombi",
        "Caddy Life",
        "Caddy Maxi Kasten",
        "Caddy Maxi Kombi",
        "Caddy Maxi Life",
        "Caravelle",
        "CC",
        "Country",
        "Crafter",
        "Eos",
        "Fox",
        "Golf",
        "Golf Plus",
        "Golf Sportsvan",
        "Golf Variant",
        "ID.3",
        "ID.4",
        "ID.5",
        "Jetta",
        "Karmann Ghia",
        "LT",
        "Lupo",
        "Multivan",
        "New Beetle",
        "Passat",
        "Passat Alltrack",
        "Passat CC",
        "Passat Variant",
        "Phaeton",
        "Polo",
        "Santana",
        "Scirocco",
        "Sharan",
        "T-Cross",
        "T-Roc",
        "T4",
        "T4 Caravelle",
        "T5",
        "T5 Multivan",
        "T5 Shuttle",
        "Taigo",
        "Tiguan",
        "Touareg",
        "Touran",
        "Transporter",
        "up!",
        "Vento",
      ],
    },
    { brand: "Mercedes-Benz", models: ["C-Class", "E-Class", "S-Class"] },
    { brand: "BMW", models: ["3 Series", "5 Series", "X5"] },
    { brand: "Audi", models: ["A3", "A4", "Q5"] },
    { brand: "Opel", models: ["Corsa", "Astra", "Insignia"] },
    { brand: "Peugeot", models: ["208", "308", "3008"] },
    { brand: "Toyota", models: ["Corolla", "Camry", "RAV4"] },
    { brand: "Renault", models: ["Clio", "Megane", "Kadjar"] },
    { brand: "Ford", models: ["Focus", "Fiesta", "Kuga"] },
    { brand: "Citroen", models: ["C3", "C4", "Berlingo"] },
    { brand: "Nissan", models: ["Micra", "Qashqai", "X-Trail"] },
    { brand: "Honda", models: ["Civic", "Accord", "CR-V"] },
    { brand: "Mazda", models: ["Mazda3", "Mazda6", "CX-5"] },
    { brand: "Fiat", models: ["500", "Panda", "Tipo"] },
    { brand: "Hyundai", models: ["i20", "i30", "Tucson"] },
    { brand: "Skoda", models: ["Octavia", "Superb", "Kodiaq"] },
    { brand: "Seat", models: ["Ibiza", "Leon", "Ateca"] },
    { brand: "Kia", models: ["Rio", "Ceed", "Sportage"] },
    { brand: "Mitsubishi", models: ["Outlander", "ASX", "Eclipse Cross"] },
    { brand: "Suzuki", models: ["Swift", "Vitara", "S-Cross"] },
    { brand: "Volvo", models: ["S60", "XC40", "XC90"] },
    { brand: "Subaru", models: ["Impreza", "Forester", "Outback"] },
    { brand: "Dacia", models: ["Sandero", "Duster", "Logan"] },
    { brand: "Chevrolet", models: ["Spark", "Cruze", "Equinox"] },
    { brand: "Alfa Romeo", models: ["Giulia", "Stelvio"] },
    {
      brand: "Land Rover",
      models: ["Range Rover", "Discovery", "Defender"],
    },
    { brand: "Jeep", models: ["Cherokee", "Renegade", "Wrangler"] },
    { brand: "Mini", models: ["Cooper", "Countryman"] },
    { brand: "Porsche", models: ["911", "Cayenne", "Panamera"] },
    { brand: "Daihatsu", models: ["Cuore", "Sirion", "Terios"] },
    { brand: "Chrysler", models: ["300C", "Voyager"] },
    { brand: "Lancia", models: ["Ypsilon", "Delta"] },
    { brand: "Jaguar", models: ["XE", "F-Type", "I-PACE"] },
    { brand: "Ssangyong", models: ["Tivoli", "Korando", "Rexton"] },
    { brand: "Smart", models: ["ForTwo", "ForFour"] },
    { brand: "Lexus", models: ["IS", "NX", "RX"] },
    { brand: "Lada", models: ["Niva", "Granta", "Vesta"] },
    { brand: "Saab", models: ["9-3", "9-5"] },
    { brand: "Rover", models: ["75", "Streetwise"] },
    { brand: "Daewoo", models: ["Matiz", "Nubira", "Lanos"] },
    { brand: "Dodge", models: ["Challenger", "Durango", "Journey"] },
    { brand: "Infiniti", models: ["Q50", "QX80"] },
    { brand: "Great wall", models: ["Haval H6", "Wingle 5"] },
    { brand: "Tesla", models: ["Model 3", "Model S", "Model X"] },
    { brand: "Isuzu", models: ["D-Max", "Trooper", "MUX"] },
    { brand: "Range Rover", models: ["Velar", "Sport", "Evoque"] },
    { brand: "UAZ", models: ["Patriot", "Hunter", "Bukhanka"] },
    { brand: "Moskvich", models: ["2140", "408", "Aleko"] },
    { brand: "Cadillac", models: ["CTS", "Escalade", "XT5"] },
    { brand: "Maserati", models: ["Ghibli", "Levante", "Quattroporte"] },
    { brand: "Tata", models: ["Harrier", "Nexon", "Tiago"] },
    { brand: "Trabant", models: ["601", "P601", "P50"] },
    { brand: "Lincoln", models: ["Continental", "Navigator", "Aviator"] },
    { brand: "Hummer", models: ["H2", "H3"] },
    { brand: "Bentley", models: ["Continental GT", "Bentayga"] },
    { brand: "DS", models: ["DS3", "DS7 Crossback"] },
    { brand: "DR", models: ["DR3", "DR5"] },
    { brand: "Wartburg", models: ["311", "353"] },
    { brand: "Pontiac", models: ["Firebird", "GTO", "Grand Prix"] },
    { brand: "MG", models: ["MG3", "MG ZS", "MG HS"] },
    { brand: "Volga", models: ["3110", "Siber"] },
    { brand: "GAZ", models: ["Volga", "Siber", "Gazel"] },
    { brand: "Haval", models: ["H6", "H9"] },
    { brand: "Zaz", models: ["Vida", "Sens", "Forza"] },
    { brand: "GMC", models: ["Sierra", "Canyon"] },
    { brand: "Mahindra", models: ["XUV500", "Thar", "Bolero"] },
    { brand: "Lamborghini", models: ["Huracan", "Aventador", "Urus"] },
    { brand: "Ferrari", models: ["488", "F8 Tributo", "Portofino"] },
    { brand: "ВАЗ", models: ["2101", "2107", "Niva"] },
    { brand: "Aston Martin", models: ["DB11", "Vantage", "DBX"] },
    { brand: "Acura", models: ["NSX", "RDX", "MDX"] },
    { brand: "Варшава", models: ["M20", "M21"] },
    { brand: "Rolls Royce", models: ["Phantom", "Cullinan", "Ghost"] },
    { brand: "Zastava", models: ["Yugo", "Florida"] },
    { brand: "Yogomo", models: ["Yogomo 330", "Yogomo 350"] },
    { brand: "Iveco", models: ["Daily", "EuroCargo"] },
    { brand: "Buick", models: ["Encore", "Enclave", "LaCrosse"] },
    { brand: "Simca", models: ["1000", "1307", "1308"] },
    { brand: "Maybach", models: ["57", "62"] },
    { brand: "Datsun", models: ["Go", "mi-DO", "on-DO"] },
    { brand: "DFSK", models: ["Glory 580", "AX3", "AX4"] },
    { brand: "Piaggio", models: ["Vespa", "MP3", "Typhoon"] },
    { brand: "Scion", models: ["xB", "tC"] },
    { brand: "София", models: ["София 20", "София 30"] },
    { brand: "Cupra", models: ["Ateca", "Leon"] },
    { brand: "Aixam", models: ["City", "Crossline", "Coupé"] },
    { brand: "Oxford", models: ["Oxford 6", "Oxford 9"] },
    { brand: "Oldsmobile", models: ["Cutlass", "88", "Bravada"] },
    { brand: "Barkas", models: ["B1000", "Barkas"] },
    { brand: "Aro", models: ["240", "244", "10"] },
    { brand: "Ligier", models: ["JS50", "X-Too", "Optimax"] },
    { brand: "BYD", models: ["Tang", "Han", "Song"] },
    { brand: "Talbot", models: ["Horizon", "Solara"] },
    { brand: "Excalibur", models: ["Series V", "Phaeton"] },
    { brand: "Lotus", models: ["Elise", "Evora", "Exige"] },
    { brand: "Brilliance", models: ["BS4", "BS6", "V3"] },
    { brand: "Asia Motors", models: ["Rocsta", "Hi-Topic", "Topic"] },
    { brand: "Austin", models: ["Mini", "A40", "Seven"] },
    { brand: "McLaren", models: ["720S", "GT", "570S"] },
    { brand: "Alpina", models: ["B3", "B4", "B5"] },
    { brand: "LDV", models: ["D90", "T60", "EV80"] },
  ],
};
