const cardsContainer = document.querySelector('.cards');

async function persons() {

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const responseData = await response.json();

    responseData.forEach(user => {

      const card = document.createElement('div');
      card.classList.add('card');

      const cardImg = document.createElement('div');
      cardImg.classList.add('card-img');

      const cardInfo = document.createElement('div');
      cardInfo.classList.add('card-info');


      const avatarImg = document.createElement('img');
      avatarImg.src = `https://robohash.org/${user.id}`;
      cardImg.appendChild(avatarImg);


      const name = document.createElement('p');
      name.textContent = `Name: ${user.name}`;
      cardInfo.appendChild(name);

      const username = document.createElement('p');
      username.textContent = `Username: ${user.username}`;
      cardInfo.appendChild(username);

      const email = document.createElement('p');
      email.textContent = `Email: ${user.email}`;
      cardInfo.appendChild(email);


      card.appendChild(cardImg);
      card.appendChild(cardInfo);

      cardsContainer.appendChild(card);

    });

  } catch (error) {
    console.error('Error', error);
  }
}
persons();