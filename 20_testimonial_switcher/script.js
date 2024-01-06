const testimonialContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");
// Function to fetch JSON data asynchronously
async function fetchData() {
  try {
    //fetch data from an api
    const res = await fetch("./data.json");
    const data = await res.json(); //convert the response into json form,
    console.log(data);
    // setting index to 1 because the first render should be static
    let idx = 1;
    function updateTestimonial() {
      const { name, position, photo, text } = data[idx]; // json distructuring

      testimonial.innerHTML = text;
      userImage.src = photo;
      username.innerHTML = name;
      role.innerHTML = position;
      idx++;
      if (idx > data.length - 1) {
        // after last testimonial , the  first testimonimal shound render
        idx = 0;
      }
    }
    setInterval(updateTestimonial, 10000);
  } catch (error) {
    console.error("Error fetching JSON:", error);
  }
}

// Call the async function
fetchData();
