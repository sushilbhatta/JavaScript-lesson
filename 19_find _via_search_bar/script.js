console.log("hlellpo");

const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];
getData();
filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  //get 50 user's  data  from api
  const res = await fetch("https://randomuser.me/api?results=50");
  const data = await res.json();

  //   ininattly dont show element
  result.innerHTML = "";
  data.results.forEach((user) => {
    // create html element
    const li = document.createElement("li");
    // push that list item into the empty array
    listItems.push(li);
    // change the content of that element accordilgly
    li.innerHTML = `<img src="${user.picture.large}" alt="${user.name.first}"/>
    <div class="user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>${user.location.country},${user.location.city}</p>
    </div>`;
    // append the child li to ul
    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  // Your code here
  //   console.log(searchTerm);
  listItems.forEach((item) => {
    // console.log(item.innerText);
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
