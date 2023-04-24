// js file for the planets page
fetch('https://www.swapi.tech/api/planets')
  .then(res => {
    return res.json();
    // extract json file from the response
  })
  .then(data => {
    const planets = data.results; 
    // extract array of planets from response data
    const namesList = document.getElementById('names'); 
    // get reference to <ul> element in the planets.html page
    // loop through the array of planets and name each one
    planets.forEach(planet => {
      const li = document.createElement('li');
      li.innerText = planet.name;
      
      // add click event listener (when you click on the planet, the detailed information pops up)
      li.addEventListener('click', () => {
        fetch(`https://www.swapi.tech/api/planets/${planet.uid}`)
          .then(res => {
            return res.json();
          })
          .then(data => {
            // extract properties of the selected planet from the response data
            const {name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population} = data.result.properties;
            const planetName = document.getElementById('planet-name');
            const planetRotationPeriod = document.getElementById('planet-rotation-period');
            const planetOrbitalPeriod = document.getElementById('planet-orbital-period');
            const planetDiameter = document.getElementById('planet-diameter');
            const planetClimate = document.getElementById('planet-climate');
            const planetGravity = document.getElementById('planet-gravity');
            const planetTerrain = document.getElementById('planet-terrain');
            const planetSurfaceWater = document.getElementById('planet-surface-water');
            const planetPopulation = document.getElementById('planet-population');
            
            // update the planet popup with the planet properties
            planetName.innerText = name;
            planetRotationPeriod.innerText = rotation_period;
            planetOrbitalPeriod.innerText = orbital_period;
            planetDiameter.innerText = diameter;
            planetClimate.innerText = climate;
            planetGravity.innerText = gravity;
            planetTerrain.innerText = terrain;
            planetSurfaceWater.innerText = surface_water;
            planetPopulation.innerText = population;

            const planetPopup = document.getElementById('planet');
            planetPopup.style.display = 'block';
          })
          .catch(error => console.error(error));
      });
      namesList.appendChild(li);
      // add the planet list item to the <ul> element in the planets.html page
    });
  })
  .catch(error => console.error(error));
