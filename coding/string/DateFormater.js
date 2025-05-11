var reformatDate = function (date) {
  let month = "";
  let obj = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  let parts = date.split(" ");
  let day = parts[0].replace(/\D/g, ""); // Remove non-digit characters
  let monthAbbr = parts[1];
  let year = parts[2];

  if (day.length === 1) {
    day = "0" + day;
  }

  let monthNumber = obj[monthAbbr];

  let format = `${year}-${monthNumber}-${day}`;
  console.log(format);
};

const date = "20th Oct 2052";
reformatDate(date); // Output: "2052-10-20"
