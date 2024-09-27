let inscriptions = [
    { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS' },
    { id: 11, nom: 'RAJI', filiere: 'DEVOWFS' },
    { id: 12, nom: 'NAJI', filiere: 'DEVOWFS' },
    { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS' }
    ];
// 1
function pureInsert(id, nom, filiere, position){
    let nouvelleInscription = { id: id, nom: nom, filiere: filiere }
    const newInscriptions = [...inscriptions];
    newInscriptions.splice(position, 0, nouvelleInscription)
    return newInscriptions
}
// console.log(pureInsert(12, 'BOUIH', 'DEVOFS201', 2))
//2
function pureDeleteByPosition(index, position){
    const newInscriptions = [...inscriptions];
    newInscriptions.splice(index, position)
    return newInscriptions

}
// console.log(pureDeleteByPosition(2, 0))

//3
function pureDelteById(id){
    const newInscriptions = inscriptions.filter(function(inscription){return inscription.id != id})
    return newInscriptions
}
//console.log(pureDelteById(10))

//4
function pureUpdateByPosition(id, nom, filiere, position){
    const newInscriptions = [...inscriptions];
    newInscriptions[position] = {id, nom, filiere}
    return newInscriptions
}
//console.log(pureUpdateByPosition(10, 'ABDELLAHI', 'DEV202', 0))

//5
function pureUpdateById(id, nom, filiere){
    const newInscriptions = inscriptions.map(function(inscription) {
        if (inscription.id === id) {
            return { id: id, nom: nom, filiere: filiere };
        }
        return inscription;
    });
    return newInscriptions;
};
//console.log(pureUpdateById(10, 'ABDELLAHI', 'DEV'))