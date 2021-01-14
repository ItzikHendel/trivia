const quizDataArray = [
  {
    question: "Who of the following authors did not receive the Nobel prize?",
    answers: ["Leo Tolstoy", "Isaac Bashevis Singer", "Gabriel García Márquez", "Günter Grass"],
    category: "Literature",
    quote: "Count Lev Nikolayevich Tolstoy (9 September 1828 – 20 November 1910), usually referred to in English as Leo Tolstoy, was a Russian writer who is regarded as one of the greatest authors of all time. He received multiple nominations for Nobel Prize in Literature every year from 1902 to 1906, and nominations for Nobel Peace Prize in 1901, 1902 and 1910, and his miss of the prize is a major Nobel prize controversy.",
    source: "Wikipedia",
    link: "https://en.wikipedia.org/wiki/Leo_Tolstoy"
  },
  {
    question: "Who of the following NBA players does not have spent his entire career with one franchise?",
    answers: ["Dwyane Wade", "Isiah Thomas", "Tim Duncan", "Reggie Miller"],
    category: "Sport",
    quote: "Another era came to an end when Wade signed with his hometown Chicago Bulls in July 2016, after 13 seasons with the Heat. The 2016-17 campaign was a disappointing one, however, as Wade failed to garner an All-Star selection for the first time since his rookie year and the Bulls were bounced in the first round of the playoffs. A trade to Cleveland before the start of 2017-18 reunited Wade with James, but the pair were unable to rekindle the old magic, and Wade was sent back to Miami halfway through the season. No longer a starter, he still helped the Heat finish with a solid 44-38 record and earn a postseason berth.",
    source: "Biography",
    link: "https://www.biography.com/athlete/dwyane-wade"
  },
  {
    question: "Who of the following American citizens have lain in honor in the United States Capitol Rotunda?",
    answers: ["Rosa Parks", "Ruth Bader Ginsburg", "Albert Einstein", "Martin Luther King"],
    category: "History",
    quote: "Four Americans have lain in honor, beginning in 1998. Rosa Parks was the first woman to lie in honor in the United States Capitol.",
    source: "Wikipedia",
    link: "https://en.wikipedia.org/wiki/Lying_in_state"
  },
  {
    question: "Which NBA team has the best record of wins during the regular season?",
    answers: ["Golden State Warriors", "Chicago Bulls", "Los Angeles Lakers", "Boston Celtics"],
    category: "Sport",
    quote: "The 2015–16 Golden State Warriors season was the 70th season of the franchise in the National Basketball Association (NBA), and its 54th in the San Francisco Bay Area.The Warriors entered the season as the defending NBA champions and they set the best ever regular-season record of 73–9, breaking the 1995–96 Chicago Bulls record of 72–10.",
    source: "Wikipedia",
    link: "https://en.wikipedia.org/wiki/2015%E2%80%9316_Golden_State_Warriors_season"
  },
  {
    question: "Which president has nominated Ruth Bader Ginsburg to the Supreme Court of the United States?",
    answers: ["Bill Clinton", "George H.W. Bush", "Barack Obama", "George W. Bush"],
    category: "History",
    quote: "Joan Ruth Bader Ginsburg (March 15, 1933 – September 18, 2020) was an American lawyer and jurist who served as an associate justice of the Supreme Court of the United States from 1993 until her death in September 2020. She was nominated by President Bill Clinton, replacing retiring justice Byron White, and at the time was generally viewed as a moderate consensus-builder.",
    source: "Wikipedia",
    link: "https://en.wikipedia.org/wiki/Ruth_Bader_Ginsburg"
  },
  {
    question: "What is the world’s tallest building?",
    answers: ["Burj Khalifa, Dubai", "Shanghai Tower, Shanghai", "Abraj Al-Bait Clock Tower, Mecca", "Lotte World Tower, Seoul"],
    category: "Geography",
    quote: "Burj Khalifa, Khalifa also spelled Khalīfah, mixed-use skyscraper in Dubai, U.A.E., that is the world’s tallest building, according to all three of the main criteria by which such buildings are judged.",
    source: "Britannica",
    link: "https://www.britannica.com/topic/Burj-Khalifa"
  },
  {
    question: "Who was the first African American actress or actor ever won the Oscar?",
    answers: ["Hattie McDaniel, Gone With the Wind", "Sidney Poitier, Lilies of the Field", "Denzel Washington, Glory", "Noah Cullen, The Defiant Ones"],
    category: "Movies",
    quote: "On February 29, 1940, Gone with the Wind is honored with eight Oscars by the American Academy of Motion Picture Arts and Sciences. An epic Southern romance set during the hard times of the Civil War, the movie swept the prestigious Best Picture, Director, Screenplay, Cinematography, Art Direction, Film Editing, and Actress categories. However, the most momentous award that night undoubtedly went to Hattie McDaniel for her portrayal of “Mammy,” a housemaid and former enslaved woman. McDaniel, who won the Best Supporting Actress Academy Award, was the first African American actress or actor ever to be honored with an Oscar.",
    source: "History",
    link: "https://www.history.com/this-day-in-history/mcdaniel-wins-oscar"
  },
  {
    question: "Who of the following NBA coaches won 3 times in the NBA Coach of the Year Award?",
    answers: ["Gregg Popovich", "Phil Jackson", "Mike D'Antoni", "Hubie Brown"],
    category: "Sport",
    quote: "Gregg Popovich, Don Nelson and Pat Riley have each won the award three times, while Hubie Brown, Mike Budenholzer, Mike D'Antoni, Bill Fitch, Cotton Fitzsimmons, and Gene Shue have each won it twice.",
    source: "Wikipedia",
    link: "https://en.wikipedia.org/wiki/NBA_Coach_of_the_Year_Award"
  },
  {
    question: "Which film won Morgan Freeman the Oscar?",
    answers: ["Million Dollar Baby (2004)", "Street Smart  (1987)", "Driving Miss Daisy (1989)", "The Shawshank Redemption (1994)"],
    category: "Movies",
    quote: " In 1992 he starred along Clint Eastwood in the western revenge film Unforgiven (1992). This would be a first of several collaborations which Eastwood. In 1994, Freeman starred in the prison drama The Shawshank Redemption (1994) for which he received another Academy Award nomination. Freeman also starred in David Fincher's crime thriller Se7en (1995), and Steven Spielberg's historical drama Amistad (1997). Freeman won the Academy Award for Best Supporting Actor for his performance in Clint Eastwood's 2004 sports drama Million Dollar Baby. In 2009 he received his fifth Oscar nomination for playing South African President Nelson Mandela in Eastwood's Invictus (2009). Freeman is also known for his performances in Christopher Nolan's The Dark Knight Trilogy (2005-2012).",
    source: "Wikipedia",
    link: "https://en.wikipedia.org/wiki/Morgan_Freeman#Awards_and_nominations"
  },
  {
    question: "Which President has not won a Nobel Prize?",
    answers: ["Bill Clinton", "Woodrow Wilson", "Barack Obama", "Jimmy Carter"],
    category: "History",
    quote: "Our story starts in 1906 when Theodore Roosevelt became the first President to win a Nobel Peace Prize. Since then, three other Presidents and one Vice President have received the honor. Below is a list of recipients from the White House: President Woodrow Wilson in 1920, for his efforts in ending the First World War and help in creating the League of Nations. President Jimmy Carter in 2002, for his efforts in finding “peaceful solutions to international conflicts, advancing democracy and human rights, and promoting economic and social development. Vice President Al Gore in 2007, for his efforts to obtain and spread knowledge about climate change. President Barack Obama in 2009, for his efforts to strengthen international diplomacy and cooperation.",
    source: "Obamawhitehouse",
    link: "https://obamawhitehouse.archives.gov/blog/2014/12/10/day-history-four-presidents-and-vp-received-nobel-peace-prize"
  },

  
  

  


  


 

  

  


  
];

export default quizDataArray;