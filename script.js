let dob = document.querySelector(".dob");
let ageCalc = document.querySelector(".calc");
let errorOutput = document.querySelector(".error");
let years = document.querySelector(".years");
let months = document.querySelector(".months");
let days = document.querySelector(".days");

ageCalc.addEventListener("click", () => {
  let birthDate = dob.value;
  let splitdob = birthDate.split("-");
  let y1 = Number(splitdob[0]);
  let m1 = Number(splitdob[1]);
  let d1 = Number(splitdob[2]);
  let todaydate = new Date();
  let d2 = todaydate.getDate();
  let m2 = 1 + todaydate.getMonth();
  let y2 = todaydate.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;

  let inputDate = new Date(birthDate);
  if (inputDate > todaydate) {
    errorOutput.innerHTML = "Please enter a valid date";
    years.innerHTML = `<div>-</div>Years`;
    months.innerHTML = `<div>-</div>Months`;
    days.innerHTML = `<div>-</div>Days`;
  } else {
    years.innerHTML = `<div>${y}</div>Years`;
    months.innerHTML = `<div>${m}</div>Months`;
    days.innerHTML = `<div>${d}</div>Days`;
  }
});
