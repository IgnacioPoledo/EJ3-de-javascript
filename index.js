const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.getElementById("form");
const container = document.getElementById("container");
const error = document.getElementById("error");
const inputNumber = document.getElementById("input-number");

const init = () => {
  form.addEventListener("submit", searchPizza);
  renderStoredPizza();
};

const searchPizza = (e) => {
  e.preventDefault();

  const pizza = pizzas.find((pizza) => pizza.id == inputNumber.value);

  if (inputNumber.value == "") {
    container.innerHTML = "";
    error.textContent = "Por favor ingrese un numero";
    return;
  }
  if (!pizza) {
    container.innerHTML = "";
    error.textContent = "No existe una pizza con ese numero";
    return;
  }

  localStorage.setItem("lastSearchedPizza", JSON.stringify(pizza));

  if (pizza) {
    error.textContent = "";
    container.innerHTML = `
    <div>
      <h2>${pizza.nombre}</h2>
      <p>${pizza.precio}</p>
      <img src="${pizza.imagen}"/>
    </div>`;
  }
};

const renderStoredPizza = () => {
  const storedPizza = localStorage.getItem("lastSearchedPizza");
  if (storedPizza) {
    const pizza = JSON.parse(storedPizza);
    container.innerHTML = `
      <div>
        <h2>${pizza.nombre}</h2>
        <p>${pizza.precio}</p>
        <img src="${pizza.imagen}"/>
      </div>`;
  }
};

init();
