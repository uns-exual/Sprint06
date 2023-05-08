const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const calendar = document.getElementById("calendar");

 
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();


  const caption = `${monthsOfYear[currentMonth]} ${currentYear}`;
  calendar.createCaption().innerText = caption;


  const headerRow = calendar.insertRow();
  daysOfWeek.forEach((day) => {
    const th = document.createElement("th");
    th.innerText = day;
    headerRow.appendChild(th);
  });


  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  let date = 1;
  for (let i = 0; i < 6; i++) {
    const row = calendar.insertRow();
    for (let j = 0; j < 7; j++) {
      const cell = row.insertCell();
      if (i === 0 && j < firstDayOfWeek) {
        
        cell.innerText = "";
      } else if (date > daysInMonth) {
        
        cell.innerText = "";
      } else {
       
        cell.innerText = date;
        if (date === currentDay) {
          cell.classList.add("today");
        }
        date++;
      }
    }
  }
  function testSite() {
    location.href = 'testing.html'
}


