const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

const Pokedex = [
  {
    Numero: 493,
    Nome: "Arceus",
    Tipo: "Normal",
    Image: "../img/Arceus-493.png",
    Descricao:
      "According to the legends of Sinnoh, this Pokémon emerged from an egg and shaped all there is in this world.",
    Altura: "3.2 ",
    Peso: "320 ",
    Categoria: "Alpha",
    Habilidade:
      "Changes the Pokémon's type to match the Plate or Z-Crystal it holds.",
  },
  {
    Numero: 250,
    Nome: "Ho-Oh",
    Tipo: "Fire",
    Image: "../img/Ho-Oh-250.png",
    Descricao:
      "feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.",
    Altura: "3.8 ",
    Peso: "199 ",
    Categoria: "Rainbow",
    Habilidade:
      "By putting pressure on the opposing Pokémon, it raises their PP usage.",
  },
  {
    Numero: "150",
    Nome: "Mewtwo",
    Tipo: "Psychic",
    Image: "../img/Mewtwo-150.png",
    Descricao:
      "Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different.",
    Altura: "2.0 ",
    Peso: "122 ",
    Categoria: "Genetic",
    Habilidade:
      "By putting pressure on the opposing Pokémon, it raises their PP usage.",
  },
];

let = message = "";

//rota de arquivos

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

//menu principal com mensagem 5 S

app.get("/", (req, res) => {
  setTimeout(() => {
    message = "";
  }, 5000);
  res.render("index", { Pokedex, message });
});

// Database

app.get("/database", (req, res) => {
  res.render("database");
});

//Pokemon view

app.get("/pokeview/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = Pokedex[id];
  res.render("pokeview", { pokemon, Pokedex });
});

app.post("/New", (req, res) => {
  const {
    Numero,
    Nome,
    Tipo,
    Image,
    Descricao,
    Altura,
    Peso,
    Categoria,
    Habilidade,
  } = req.body;

  const novo = {
    Numero: Numero,
    Nome: Nome,
    Tipo: Tipo,
    Image: Image,
    Descricao: Descricao,
    Altura: Altura,
    Peso: Peso,
    Categoria: Categoria,
    Habilidade: Habilidade,
  };

  Pokedex.push(novo);

  message = `${Nome}  =>  this Pokemon was included!`;
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Server running on   ==>   http://localhost:${port}`)
);
