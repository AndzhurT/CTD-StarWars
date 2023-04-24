// js file for the characters page
fetch('https://www.swapi.tech/api/people')
  .then(res => {
    return res.json();
    // extract json file from the response
  })
  .then(data => {
    const characters = data.results; 
    // extract array of characters from response data
    const namesList = document.getElementById('names'); 
    // get reference to <ul> element in the characters.html page
    // loop through the array of character and name each one
    characters.forEach(character => {
      const li = document.createElement('li');
      li.innerText = character.name;

      // add click event listener (when you click on the planet, the detailed information pops up)
      li.addEventListener('click', () => {
        fetch(`https://www.swapi.tech/api/people/${character.uid}`)
          .then(res => {
            return res.json();
          })
          .then(data => {
            // extract properties of the selected character from the response data
            const {name, height, mass, hair_color, skin_color, eye_color, gender, birth_year, homeworld} = data.result.properties;
            const peopleName = document.getElementById('people-name');
            const peopleHeight = document.getElementById('people-height');
            const peopleMass = document.getElementById('people-mass');
            const peopleHairColor = document.getElementById('people-hair-color');
            const peopleSkinColor = document.getElementById('people-skin-color');
            const peopleEyeColor = document.getElementById('people-eye-color');
            const peopleGender = document.getElementById('people-gender');
            const peopleBirthYear = document.getElementById('people-birth-year');
            const peopleHomeworld = document.getElementById('people-homeworld');

            // update the character popup with the character properties
            peopleName.innerText = name;
            peopleHeight.innerText = height;
            peopleMass.innerText = mass;
            peopleHairColor.innerText = hair_color;
            peopleSkinColor.innerText = skin_color;
            peopleEyeColor.innerText = eye_color;
            peopleGender.innerText = gender;
            peopleBirthYear.innerText = birth_year;
            peopleHomeworld.innerText = homeworld;

            const peoplePopup = document.getElementById('people');
            peoplePopup.style.display = 'block';
          })
          .catch(error => console.error(error));
      });
      namesList.appendChild(li);
      // add the character list item to the <ul> element in the characters.html page
    });
  })
  .catch(error => console.error(error));