function calculateAge() {
    let inp = document.getElementById("date");
    let birthDate = new Date(inp.value);
  
    if (!inp.value) {
      document.getElementById("result").innerHTML = "<span>Please select a valid date</span>";
      return;
    }
  
    let currentDate = new Date();
  
    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();
  
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();
  
    let resDay, resMonth, resYear;
  
    resYear = currentYear - birthYear;
  
    if (currentMonth >= birthMonth) {
      resMonth = currentMonth - birthMonth;
    } else {
      resYear--;
      resMonth = 12 + currentMonth - birthMonth;
    }
  
    if (currentDay >= birthDay) {
      resDay = currentDay - birthDay;
    } else {
      resMonth--;
      resDay = getDateInMonth(birthYear, birthMonth) + currentDay - birthDay;
    }
  
    if (resMonth < 0) {
      resMonth = 11;
      resYear--;
    }
  
    let result = "You are ";
  
    if (resYear > 0) {
      result += `<span>${resYear} year${resYear > 1 ? 's' : ''}</span> `;
    }
    if (resMonth > 0) {
      if (resYear > 0) result += "and ";
      result += `<span>${resMonth} month${resMonth > 1 ? 's' : ''}</span> `;
    }
    if (resDay > 0) {
      if (resYear > 0 || resMonth > 0) result += "and ";
      result += `<span>${resDay} day${resDay > 1 ? 's' : ''}</span> `;
    }
    if (resYear === 0 && resMonth === 0 && resDay === 0) {
      result = "You are less than a day old!";
    }
    document.getElementById("result").innerHTML = result;
  }
  
  function getDateInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  