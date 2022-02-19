"use strict";

// Dom elements

const findBtn = document.querySelector("#findNameBtn");
const maleName = document.querySelector(".male-name");
const femaleName = document.querySelector(".female-name");
const maleDesc = document.querySelector(".male-desc");
const femaleDesc = document.querySelector(".female-desc");

const males = {
  Kaan: "Hükümdar,imparator",
  Ahmet: "Göklerde övülen",
  Mehmet: "Yerde ve gökte övülen",
  Zeki: "Anlama,kavrama yeteneği üst düzey olan",
  Murat: "Dilek,istek,beklenti",
  Melih: "Şirin ve sevimli",
  Gökhan: "Göklerin Hakanı",
  Tolga: "Miğfer,Savaş başlığı",
};
const females = {
  Zeynep: "Babasının süsü,ziyneti",
  Ayse: "Refah içinde bulunan,zengin kimse",
  Meryem: "İbadete düşkün insan",
  Zeliha: "Su perisi",
  Fatma: "Çocuğunu sütten kesen kadın",
  Büsra: "Müjde,sevinçli haber",
  Raziye: "Razı olan kimse",
  Kübra: "En büyük,büyükler büyüğü",
};

let randomElement;
// Functions
defaultName();

findBtn.addEventListener("click", function () {
  randomElement = Math.floor(Math.random() * 7) + 1;
  maleName.textContent = setName(males);
  maleDesc.textContent = setDescription(males);
  femaleName.textContent = setName(females);
  femaleDesc.textContent = setDescription(females);
});

function setName(obj) {
  const keys = Object.keys(obj);
  const key = keys[randomElement];
  return key;
}

function setDescription(obj) {
  const values = Object.values(obj);
  const value = values[randomElement];
  return value;
}

function defaultName() {
  maleName.textContent = "";
  femaleName.textContent = "";
  maleDesc.textContent = "";
  femaleDesc.textContent = "";
}
