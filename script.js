async function fetchApartments() {
  const selectedCity = document.querySelector(
    'input[name="city"]:checked'
  ).value;
  const response = await fetch(
    `http://localhost:5000/apartments?city=${selectedCity}`
  );
  const data = await response.json();

  const apartmentsDiv = document.getElementById("apartments");
  apartmentsDiv.innerHTML = "";

  data.forEach((apartment) => {
    const apartmentInfo = document.createElement("p");
    apartmentInfo.textContent = `${apartment.name} - Price: $${apartment.price}, Area: ${apartment.area} sq.m`;
    apartmentsDiv.appendChild(apartmentInfo);
  });
}
