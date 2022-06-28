// // Consegna
// Viene fornita una piccola tabella che rappresenta i membri di un team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto: OK!

// inizializzo un array di oggetti in cui inserisco le immagini e le informazioni dei membri del team

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];
console.log(team);

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// inizializzo una variabile agganciata all'elemento nel container mediante id
const teamWrapper = document.getElementById('team-box');

// creo un ciclo contenente l'array in cui inserisco le varie 'card'

   for (let i = 0; i < team.length; i++) {
   let member = team[i];
   let teamCard = document.createElement('div');
   teamCard.classList.add('col-4');
   let newImage = document.createElement('img');
   newImage.innerHTML = member.image;
   newImage.setAttribute( 'src', `"./img/"${team[i].image}`  );
   let newName = document.createElement('h4');
   newName.innerHTML = member.name;
   let newRole = document.createElement('p');
   newRole.innerHTML = member.role;

//    aggancio gli elementi nell'html con append
    teamWrapper.append(teamCard);
    teamCard.append(newImage);
    teamCard.append(newName);
    teamCard.append(newRole);
    
} 







    

    




