const league = [{
  "5388984": "Pradip",
  "5367439": "Jeniffer",
  "5371344": "Adithyan",
  "5388710": "Ibrahim",
  "5388581": "Som",
}, {
  "5370303": "Samiran",
  "5389032": "Gautham",
  "5388823": "Priyanshu",
  "5386456": "Haider",
  "5388527": "Dinesh",
}, {
  "5388598": "Nikhil",
  "5366372": "Deepak",
  "5364970": "Himanshu",
  "5363592": "Sagnik",
  "5368261": "Abhay",
  "5368028": "Shivang",
}, {
  "5368329": "Haji",
  "5389287": "khasim",
  "5366843": "Javed",
  "5385856": "Dilli",
  "5388872": "Sandip",
  "5388883": "Aniruddha",
}, {
  "5388127": "Lavkush",
  "5388599": "Rahul",
  "5388792": "Vikas",
  "5388814": "Nitesh",
  "5388622": "Pradipta",
}, {
  "5369036": "Umar",
  "5388847": "Sivaji",
  "5370327": "Hem Pradeep",
  "5368887": "Rafiya",
  "5368046": "Jyothi Praveen",
  "5389643": "Chiranjeevi",
}, {
  "5387872": "Yash",
  "5387844": "Amisha",
  "5368411": "Paulami",
  "5389519": "Sanket",
  "5388833": "Oiendrila",
}, {
  "5390110": "Bhargavi",
  "5369661": "Adarsh",
  "5369727": "Vismaya",
  "5387967": "Rashmika",
  "5388665": "Ayush",
  "5371678": "Athul",
}, {
  "5388618": "Nandini",
  "5367331": "Jayanth",
  "5388596": "Charitha",
  "5388295": "Kiranmai",
  "5388538": "Mohanthi",
  "5388593": "Karthik",
}, {
  "5388300": "SIRI",
  "5388812": "Gopi",
  "5388573": "Vivek",
  "5388584": "Ajoy",
  "5388498": "Sidhartha",
}, {
  "5367943": "Santo",
}];

const leagueArray = [];
for (let i = 0; i < league.length; i++) {
  leagueArray.push(Object.keys(league[i]));
}

console.log(leagueArray);
