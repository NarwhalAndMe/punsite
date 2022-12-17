function generateText() {
  const puns = [
  "Why was the math book sad? Because it had too many problems.",
  "Why couldn't the bicycle stand up by itself? Because it was two-tired.",
  "Why was the computer cold? Because it left its Windows open.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why couldn't the leopard play hide and seek? Because he was always spotted.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why was the cat sitting on the computer? It wanted to keep an eye on the mouse.",
  "Why did the apple go out with a fig? Because it couldn't find a date.",
  "Why did the cookie go to therapy? It was feeling crumbly.",
  "Time flies like an arrow; fruit flies like a banana.",
  "I used to be a baker, but I couldn't make enough dough.",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "I'm going to start a band called 'The Lettuce Turnips.' We're going to be a big hit because we're a real bunch of greens.",
  "I don't trust people who do acupuncture. They're back stabbers.",
  "I'm terrible at math, but I hear that calculus is derivative.",
  "I'm not a vegetarian because I love animals. I'm a vegetarian because I hate plants.",
  "I used to play piano by ear, but now I use hands.",
  "I'm trying to organize a hide and seek competition, but it's really hard to find good players. They're always hiding.",
  "I used to be a baker, but I couldn't make enough dough.",
  "Why did the programmer quit his job? Because he didn't get arrays.",
  "My girl friend was complaining that I care more about programming than her. 'I told her,Trust me baby, in the array of my interests you are [1].'",
  "I finally discovered why my program kept crashing: I had a pointer that walked off the end of a char array. It entered uncharred territory.",
  "['Hip', 'Hip'] Hip Hip Array",
  "What did the reddit user say after detonating a bomb inside a bank? EDIT: Wow! This blew up! Thanks for the gold!",
  "I got fired from my job at the bank today. An old lady came in and asked me to check her balance, so I pushed her over.",
  "In the middle of a bank robbery, a guy with no arms walks right in and says Dont shoot. Im unarmed.",
  "I was sitting in the courtroom the other day and my phone started to die. Luckily I brought my mobile power bank. Anyways, I was charged with battery.",
  "An elastic band runs into a bank with a gun.'Nobody move, this is a rubbery!'",
  "What did the big flower say to the little flower? 'Hey, bud!'"
  ];
  const randomNumber = Math.floor(Math.random() * puns.length);
  const text = puns[randomNumber];
  document.getElementById("text").innerHTML = text;
  console.log(text);
}
