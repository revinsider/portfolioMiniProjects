const wrapper = document.querySelector(".wrapper")
selectBtn = wrapper.querySelector(".select-btn")
searchInput = wrapper.querySelector("input")
const options = document.querySelector(".options")

const countries =[
  "Italy",
  "Belarus",
  "Poland",
  "Germany",
  "Australia",
  "Austria",
  "Bulgary",
  "Poland",
  "Germany",
]

function addCountries(selectedCountry) {
  options.innerHTML = ""
  countries.forEach(country => {
    let isSelected = country == selectedCountry ? "selected" : ''
    let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`
    options.insertAdjacentHTML('beforeend', li)
  });
}
addCountries()

function updateName(selectedEl) {
  searchInput.value = ""
  addCountries(selectedEl.innerText)
  wrapper.classList.remove('active')
  selectBtn.firstElementChild.innerText = selectedEl.innerText
}

searchInput.addEventListener('keyup', () => {
  let arr = [];
  let searchValue = searchInput.value.toLocaleLowerCase()
  arr = countries.filter(data => {
    return data.toLocaleLowerCase().startsWith(searchValue);
  }).map(data => `<li onclick="updateName(this)">${data}</li>`).join('')
  options.innerHTML = arr ? arr : `<p> Oops! Country not found</p>`;
  
})
  
selectBtn.addEventListener('click', () => {
  wrapper.classList.toggle('active')
})