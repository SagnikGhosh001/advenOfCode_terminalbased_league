import AsciiTable from "npm:ascii-table";

const dbg = (x) => console.log(x) || x;

const getLeaguedata = async () => {
  const data = await Deno.readTextFile("./leagueListStep11.txt");
  return eval(`${data}`);
};

const session = "";

const getJsonData = async () => {
  const res = await fetch(
    "https://adventofcode.com/2019/leaderboard/private/view/829678.json",
    {
      headers: {
        "Cookie": `session=${session}`,
      },
    },
  );

  if (res.ok) {
    return await res.json();
  }

  const data = await Deno.readTextFile("./dummyData.json");
  return JSON.parse(data);
};

const displayOneLeague = (leagues, extractData) => {
  const table = new AsciiTable().setHeading(
    "memberId",
    "Name",
    "Score",
    "Stars",
  );

  for (const league of leagues) {
    table.addRow(
      league,
      extractData[league][0],
      extractData[league][2],
      "٭".repeat(extractData[league][1]),
    );
  }

  table.sort((a, b) => b[2] - a[2]);

  console.log(table.toString());
};

const display = (leagues, extractData) =>
  leagues.forEach((league, i) => {
    console.log(`League: ${i + 1}`.padStart(27));
    displayOneLeague(league, extractData);
    console.log();
  });

const extractData = (members) => {
  const data = {};

  for (const memberId in members) {
    data[memberId] = [
      members[memberId].name,
      members[memberId].stars,
      members[memberId].local_score,
    ];
  }

  return data;
};

const main = async () => {
  const data = await getJsonData();
  console.log("\t".repeat(2), "year: ", data.event);
  console.log();
  const extractedData = extractData(data.members);
  const leagues = await getLeaguedata();
  display(leagues, extractedData);
};

main();
