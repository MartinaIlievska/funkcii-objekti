function denarToEuro(c) {
  return c * 0.0163;
}

console.log(denarToEuro(61.4));

function literToCubicMeter(c) {
  return c * 0.001;
}
console.log(literToCubicMeter(256));

function gramsToOunces(c) {
  return c / 28.35;
}
console.log(gramsToOunces(525));

const kniga1 = {
  bookName: "Harry Potter and the Philosopher's Stone",
  Author: "J. K. Rowling",
  PublicationDate: "26.06.1997",
  pages: 223,
  genre: "Fantasy",
  print: function () {
    console.log(
      `Book Name: ${this.bookName}, Author: ${this.Author}, Publication Date: ${this.PublicationDate}, Genre: ${this.genre}`
    );
  },
};
kniga1.print();

const kniga2 = {
  bookName: "Harry Potter and the Chamber of Secrets",
  Author: "J. K. Rowling",
  PublicationDate: "02.07.1998",
  pages: 251,
  genre: "Fantasy",
  print: function () {
    console.log(
      `Book Name: ${this.bookName}, Author: ${this.Author}, Publication Date: ${this.PublicationDate}, Genre: ${this.genre}`
    );
  },
};
kniga2.print();

const kniga3 = {
  bookName: "Harry Potter and the Prisoner of Azkaban",
  Author: "J. K. Rowling",
  PublicationDate: "08.07.1999",
  pages: 317,
  genre: "Fantasy",
  print: function () {
    console.log(
      `Book Name: ${this.bookName}, Author: ${this.Author}, Publication Date: ${this.PublicationDate}, Genre: ${this.genre}`
    );
  },
};
kniga3.print();

const kniga4 = {
  bookName: "Harry Potter and the Goblet of Fire",
  Author: "J. K. Rowling",
  PublicationDate: "08.07.2000",
  pages: 636,
  genre: "Fantasy",
  print: function () {
    console.log(
      `Book Name: ${this.bookName}, Author: ${this.Author}, Publication Date: ${this.PublicationDate}, Genre: ${this.genre}`
    );
  },
};
kniga4.print();

const kniga5 = {
  bookName: "Harry Potter and the Order of the Phoenix",
  Author: "J. K. Rowling",
  PublicationDate: "21.06.2003",
  pages: 766,
  genre: "Fantasy",
  print: function () {
    console.log(
      `Book Name: ${this.bookName}, Author: ${this.Author}, Publication Date: ${this.PublicationDate}, Genre: ${this.genre}`
    );
  },
};
kniga5.print();

const kniga6 = {
  bookName: "Harry Potter and the Half-Blood Prince",
  Author: "J. K. Rowling",
  PublicationDate: "16.07.2005",
  pages: 607,
  genre: "Fantasy",
  print: function () {
    console.log(
      `Book Name: ${this.bookName}, Author: ${this.Author}, Publication Date: ${this.PublicationDate}, Genre: ${this.genre}`
    );
  },
};
kniga6.print();

const kniga7 = {
  bookName: "Harry Potter and the Deathly Hallows",
  Author: "J. K. Rowling",
  PublicationDate: "21.07.2007",
  pages: 607,
  genre: "Fantasy",
  print: function () {
    console.log(
      `Book Name: ${this.bookName}, Author: ${this.Author}, Publication Date: ${this.PublicationDate}, Genre: ${this.genre}`
    );
  },
};
kniga7.print();

const bookSeries = [kniga1, kniga2, kniga3, kniga4, kniga5, kniga6, kniga7];

for (var i = 0; i < bookSeries.length; i++) {
  console.log(i + 1 + "book: " + bookSeries[i].bookName);
}

const tell1 = {
  Name: "Samsung SM-A057 Galaxy A05s",
  Color: "Black",
  Available: true,
  Price: 10999,
};
console.log(tell1);
const tell2 = {
  Name: "Samsung SM-A057 Galaxy A05s",
  Color: "Green",
  Available: true,
  Price: 10999,
};
console.log(tell2);
const tell3 = {
  Name: "Samsung SM-A155 Galaxy A15 4/128",
  Color: "Yellow",
  Available: false,
  Price: 12999,
};
console.log(tell3);
const tell4 = {
  Name: "Xiaomi Redmi A3 3/64GB",
  Color: "Blue",
  Available: true,
  Price: 6999,
};
console.log(tell4);

const Telefoni = [tell1, tell2, tell3, tell4];

for (var i = 0; i < Telefoni.length; i++) {
  if (Telefoni[i].Available == true) {
    console.log(
      `${Telefoni[i].Name} ${Telefoni[i].Color} proizvodot e dostapen.`
    );
  } else if (Telefoni[i].Available == false) {
    console.log(
      `${Telefoni[i].Name}  ${Telefoni[i].Color} proizvodot ne e dostapen.`
    );
  }
}

for (var i = 0; i < Telefoni.length; i++) {
  console.log(`${Telefoni[i].Name} cini ${Telefoni[i].Price} denari.`);
}

const Kina = {
  imeNaDrzava: "Kina",
  glavenGrad: "Peking",
  najgolemGrad: "Shanghai",
  populacija: 1373110000,
  print: function () {
    console.log(
      `${this.imeNaDrzava}: so Glaven grad: ${this.glavenGrad} ima ${this.populacija} ziteli, a najgolem grad e: ${this.najgolemGrad}`
    );
  },
};
Kina.print();
// console.log(Kina);

const Indija = {
  imeNaDrzava: "Indija",
  glavenGrad: "New Delhi",
  najgolemGrad: "Mumbai",
  populacija: 1279850000,
  print: function () {
    console.log(
      `${this.imeNaDrzava}: so Glaven grad: ${this.glavenGrad} ima ${this.populacija} ziteli, a najgolem grad e: ${this.najgolemGrad}`
    );
  },
};
//console.log(Indija);
Indija.print();

const SAD = {
  imeNaDrzava: "Soedineti Amerikanski Drzavi",
  glavenGrad: "Washington",
  najgolemGrad: "New York",
  populacija: 322203000,
  print: function () {
    console.log(
      `${this.imeNaDrzava}: so Glaven grad: ${this.glavenGrad} ima ${this.populacija} ziteli, a najgolem grad e: ${this.najgolemGrad}`
    );
  },
};
// console.log(SAD);
SAD.print();

const Indonesia = {
  imeNaDrzava: "Indonesia",
  glavenGrad: "Jakarta",
  najgolemGrad: "Jakarta",
  populacija: 255461700,
  print: function () {
    console.log(
      `${this.imeNaDrzava}: so Glaven grad: ${this.glavenGrad} ima ${this.populacija} ziteli, a najgolem grad e: ${this.najgolemGrad}`
    );
  },
};
// console.log(Indonesia);
Indonesia.print();

const Brazil = {
  imeNaDrzava: "Brazil",
  glavenGrad: "Brasilia",
  najgolemGrad: "Sao Paolo",
  populacija: 205170000,
  print: function () {
    console.log(
      `${this.imeNaDrzava}: so Glaven grad: ${this.glavenGrad} ima ${this.populacija} ziteli, a najgolem grad e: ${this.najgolemGrad}`
    );
  },
};
Brazil.print();
//console.log(Brazil);

const drzavi = [Kina, Indija, SAD, Indonesia, Brazil];
for (var i = 0; i < drzavi.length; i++) {
  if (drzavi[i].populacija > 1000000000) {
    console.log(
      `${drzavi[i].imeNaDrzava} ima povekje od bilion ziteli. Ima ${drzavi[i].populacija} ziteli.`
    );
  } else if (drzavi[i].populacija <= 1000000000) {
    console.log(
      `${drzavi[i].imeNaDrzava} ima pomalku od bilion ziteli. Ima ${drzavi[i].populacija} ziteli.`
    );
  }
}

for (var i = 0; i<drzavi.length; i++) {
  console.log(`${drzavi[i].glavenGrad} e glaven grad na ${drzavi[i].imeNaDrzava}` );
}