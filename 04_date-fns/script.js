import {
  format,
  fromUnixTime,
  getUnixTime,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from "date-fns"
const datePickerButton = document.querySelector(".date-picker-button")

const datePicker = document.querySelector(".date-picker")

const datePickerHeadertext = document.querySelector(".current-month")

const previousMonthButton = document.querySelector(".prev-month-button")

const nextMonthButton = document.querySelector(".next-month-button")

const dateGrid = document.querySelector(".date-picker-grid-dates")

let currentDate = new Date()

//open the calander with current date displayed in calander
datePickerButton.addEventListener("click", (e) => {
  //triger the btn
  datePicker.classList.toggle("show") //add or remove the class show when btn clicked.
  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate) //convert the current date time stamp into orginal format
  currentDate = selectedDate
  setUpDatePicker(selectedDate) //called function with current date time stamp as the input value.
})

//this will set date to the homepage btn
function setDate(date) {
  datePickerButton.innerText = format(date, "MMMM do,yyyy") //this will format the date as we want.
  datePickerButton.dataset.selectedDate = getUnixTime(date) //this will convert the date into timestamp(eg . 2020-feb-6 into 30303200)
}

//this fn will help to set the date in calnder top
function setUpDatePicker(selectedDate) {
  datePickerHeadertext.innerText = format(currentDate, "MMMM - yyyy") //formating date
  setUpDate(selectedDate)
}
function setUpDate(selectedDate) {
  const firstWeekStart = startOfWeek(startOfMonth(currentDate))
  const lastWeekEnd = endOfWeek(endOfMonth(currentDate))
  const dates = eachDayOfInterval({ start: firstWeekStart, end: lastWeekEnd })
  dateGrid.innerHTML = ""
  dates.forEach((date) => {
    const dateElement = document.createElement("button")
    dateElement.classList.add("date")
    dateGrid.appendChild(dateElement)
    dateElement.innerText = date.getDate()
    if (!isSameMonth(date, currentDate)) {
      dateElement.classList.add("date-picker-other-month-date")
    }
    if (isSameDay(date, currentDate)) {
      dateElement.classList.add("selected")
    }
    dateElement.addEventListener("click", () => {
      setDate(date)
      datePicker.classList.remove("show")
    })
  })
}

//fn defn
nextMonthButton.addEventListener("click", () => {
  currentDate = addMonths(currentDate, 1)
  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
  setUpDatePicker(selectedDate)
})

previousMonthButton.addEventListener("click", () => {
  currentDate = subMonths(currentDate, 1)
  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
  setUpDatePicker(selectedDate)
})

setDate(new Date())

//we need current time to dynamically change .
// we got the current time in our date-picker btn
//to use this date picker btn  everywhere we need we can either make this avaliabe gl0bally or
// we can use get getUnixTime and fromUnixTime function
