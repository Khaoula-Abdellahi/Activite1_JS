const personnes = [
    { nom: "ALAMI", age: 33, estMember: true },
    { nom: "FATIHI", age: 24, estMember: false },
    { nom: "RAJI", age: 45, estMember: true },
    { nom: "RAMI", age: 37, estMember: false }
    ];

const membres = personnes.filter(member => member.estMember).map(member => member.nom)

console.log(membres)