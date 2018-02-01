function happyHolidays(){
  var greeting = "Happy holidays!"
  return greeting
}

function happyHolidaysTo(name){
  var greeting = "Happy holidays"
  return `${greeting}, ${name}!`
}

happyHolidayTo(Amma)

function happyHolidayTo(holiday, name){
  var greeting = "Happy"
  return `${greeting} ${holiday}, ${name}!`
}

happyHolidayTo(Birthday, Amma)

function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`
}

