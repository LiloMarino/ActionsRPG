import spellData from "./data/spells-phb.json";

const transformSpell = (spell) => {
  return {
    nome: spell.name,
    nivel: spell.level,
    escola: spell.school,
    tempo_de_conjuracao: {
      quantidade: spell.time[0].number,
      unidade: spell.time[0].unit,
    },
    componentes: {
      verbal: spell.components.v || false,
      somatico: spell.components.s || false,
      material: spell.components.m || false,
      materialTipo: spell.components.m
        ? spell.components.m.materialType : "",
    },
    alcance:
      `${spell.range.distance.amount} ${spell.range.distance.type}` || "",
    duracao: {
      tipo: spell.duration[0].type,
      concentracao: spell.duration[0].concentration || false,
      ate: spell.duration[0].upTo || false,
      quantidade: spell.duration[0].amount || 0,
      unidade: spell.duration[0].unit || "",
    },
    descricao: spell.entries.join(" "),
  };
};
const transformedSpells = spellData.spell.map((spell) => transformSpell(spell));
console.log(transformedSpells)

