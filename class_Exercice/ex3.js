const inscriptions = [
    { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS' },
    { id: 11, nom: 'RAJI', filiere: 'DEVOWFS' },
    { id: 12, nom: 'NAJI', filiere: 'DEVOWFS' },
    { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS' }
];



const pureAppendInscription = (newInscription, inscriptions) => {
    return [...inscriptions, newInscription];
};


const nouvelleInscription = { id: 14, nom: 'ABDELLAHI', filiere: 'DEVOWFS' };
const nouvellesInscriptions = pureAppendInscription(nouvelleInscription, inscriptions);

console.log(nouvellesInscriptions);
console.log(inscriptions); 
