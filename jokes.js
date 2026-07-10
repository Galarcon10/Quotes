// Local array of classic/traditional jokes for the local-array generator
// Same shape as quotesData.js: { quote, author }
// Author is "Anonymous" or "Traditional" since these are classic jokes
// with no single identifiable copyright holder.

const localJokes = [
  {
    quote: "Why don't scientists trust atoms? Because they make up everything.",
    author: "Anonymous",
  },
  {
    quote: "I told my computer I needed a break, and it froze.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the scarecrow win an award? He was outstanding in his field.",
    author: "Traditional",
  },
  { quote: "I used to be a banker, but I lost interest.", author: "Anonymous" },
  {
    quote: "Why don't eggs tell jokes? They'd crack each other up.",
    author: "Anonymous",
  },
  {
    quote: "What do you call fake spaghetti? An impasta.",
    author: "Anonymous",
  },
  {
    quote:
      "I'm reading a book about anti-gravity. It's impossible to put down.",
    author: "Anonymous",
  },
  {
    quote: "Why did the bicycle fall over? It was two tired.",
    author: "Traditional",
  },
  {
    quote: "What do you call a bear with no teeth? A gummy bear.",
    author: "Anonymous",
  },
  {
    quote: "I only know 25 letters of the alphabet. I don't know Y.",
    author: "Anonymous",
  },
  {
    quote: "What do you call cheese that isn't yours? Nacho cheese.",
    author: "Anonymous",
  },
  {
    quote: "Why don't skeletons fight each other? They don't have the guts.",
    author: "Traditional",
  },
  {
    quote: "I used to hate facial hair, but then it grew on me.",
    author: "Anonymous",
  },
  {
    quote: "What did the ocean say to the beach? Nothing, it just waved.",
    author: "Anonymous",
  },
  {
    quote: "Why can't you give Elsa a balloon? Because she'll let it go.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a fish with no eyes? A fsh.",
    author: "Anonymous",
  },
  {
    quote:
      "I would tell you a chemistry joke, but I know I wouldn't get a reaction.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    author: "Traditional",
  },
  {
    quote: "What's orange and sounds like a parrot? A carrot.",
    author: "Anonymous",
  },
  {
    quote: "I'm on a seafood diet. I see food and I eat it.",
    author: "Anonymous",
  },
  {
    quote: "Why did the math book look sad? It had too many problems.",
    author: "Anonymous",
  },
  {
    quote:
      "What do you call a factory that makes okay products? A satisfactory.",
    author: "Anonymous",
  },
  {
    quote: "How do you organize a space party? You planet.",
    author: "Anonymous",
  },
  {
    quote: "Why don't oysters share? Because they're shellfish.",
    author: "Anonymous",
  },
  {
    quote: "I'm friends with 25 letters of the alphabet. I don't know Y.",
    author: "Anonymous",
  },
  {
    quote:
      "What do you call a dinosaur that crashes his car? Tyrannosaurus wrecks.",
    author: "Anonymous",
  },
  {
    quote: "Why did the coffee file a police report? It got mugged.",
    author: "Anonymous",
  },
  {
    quote: "How does a penguin build its house? Igloos it together.",
    author: "Anonymous",
  },
  {
    quote:
      "What did one wall say to the other wall? I'll meet you at the corner.",
    author: "Traditional",
  },
  {
    quote:
      "Why can't your nose be 12 inches long? Because then it'd be a foot.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a can opener that doesn't work? A can't opener.",
    author: "Anonymous",
  },
  {
    quote: "I used to play piano by ear, but now I use my hands.",
    author: "Anonymous",
  },
  {
    quote: "Why did the tomato turn red? Because it saw the salad dressing.",
    author: "Traditional",
  },
  {
    quote: "What do you get when you cross a snowman and a vampire? Frostbite.",
    author: "Anonymous",
  },
  {
    quote:
      "Why don't scientists trust stairs? Because they're always up to something.",
    author: "Anonymous",
  },
  {
    quote:
      "What's the best thing about Switzerland? I don't know, but the flag is a big plus.",
    author: "Anonymous",
  },
  {
    quote: "I have a fear of speed bumps, but I'm slowly getting over it.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a boomerang that doesn't come back? A stick.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a pile of cats? A meowtain.",
    author: "Anonymous",
  },
  {
    quote: "I was going to tell a time-traveling joke, but you didn't like it.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the student eat his homework? Because the teacher said it was a piece of cake.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a sleeping dinosaur? A dino-snore.",
    author: "Anonymous",
  },
  {
    quote: "Why did the picture go to jail? Because it was framed.",
    author: "Traditional",
  },
  {
    quote: "What do you call an alligator in a vest? An investigator.",
    author: "Anonymous",
  },
  {
    quote:
      "I'm terrified of elevators, so I'm going to start taking steps to avoid them.",
    author: "Anonymous",
  },
  {
    quote: "Why don't melons get married? Because they cantaloupe.",
    author: "Anonymous",
  },
  {
    quote:
      "What did the janitor say when he jumped out of the closet? Supplies!",
    author: "Anonymous",
  },
  {
    quote: "Why was the belt arrested? For holding up a pair of pants.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a very small valentine? A valen-tiny.",
    author: "Anonymous",
  },
  {
    quote: "Why did the cookie go to the doctor? Because it felt crummy.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a snowman with a six-pack? An abdominal snowman.",
    author: "Anonymous",
  },
  {
    quote: "How do you make a tissue dance? You put a little boogie in it.",
    author: "Anonymous",
  },
  {
    quote:
      "Why don't seagulls fly over the bay? Because then they'd be bagels.",
    author: "Anonymous",
  },
  {
    quote:
      "What's the difference between a poorly dressed man on a bicycle and a well-dressed man on a tricycle? Attire.",
    author: "Traditional",
  },
  {
    quote: "Why did the stadium get hot after the game? All of the fans left.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a group of disorganized cats? A cat-astrophe.",
    author: "Anonymous",
  },
  { quote: "How does the moon cut his hair? Eclipse it.", author: "Anonymous" },
  {
    quote:
      "Why did the man put his money in the freezer? He wanted cold hard cash.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a pig that does karate? A pork chop.",
    author: "Anonymous",
  },
  {
    quote: "Why did the gym close down? It just didn't work out.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a fish wearing a bowtie? Sofishticated.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the scarecrow become a motivational speaker? He was outstanding in his field.",
    author: "Anonymous",
  },
  {
    quote: "What do you call an elephant that doesn't matter? An irrelephant.",
    author: "Anonymous",
  },
  {
    quote: "Why did the banana go to the doctor? It wasn't peeling well.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a lazy kangaroo? Pouch potato.",
    author: "Anonymous",
  },
  {
    quote: "How do you fix a broken pizza? With tomato paste.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a dog magician? A labracadabrador.",
    author: "Anonymous",
  },
  {
    quote: "Why did the tree go to the dentist? It needed a root canal.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a cow with no legs? Ground beef.",
    author: "Traditional",
  },
  {
    quote: "Why did the light bulb fail its exam? It wasn't very bright.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a nervous javelin thrower? Shakespeare.",
    author: "Anonymous",
  },
  {
    quote: "Why did the calendar feel important? It had a lot of dates.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a fish that needs help with vocals? Auto-tuna.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the baker stop making donuts? He got tired of the hole business.",
    author: "Anonymous",
  },
  {
    quote:
      "What do you call an angry pea? Grump-kin. Wait, that's a pumpkin. It's a grumpea.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the golfer bring an extra pair of socks? In case he got a hole in one.",
    author: "Anonymous",
  },
  {
    quote: "What do you call two crows on a branch? Attempted murder.",
    author: "Anonymous",
  },
  {
    quote: "Why did the smartphone need glasses? It lost all its contacts.",
    author: "Anonymous",
  },
  {
    quote:
      "What do you call a very close-together crowd of people at a Renaissance festival? Medi-eval traffic jam.",
    author: "Anonymous",
  },
  {
    quote:
      "Why don't scientists trust the ocean? It's too unpredictable and full of C's.",
    author: "Anonymous",
  },
  {
    quote:
      "What did the buffalo say to his son when he left for college? Bison.",
    author: "Anonymous",
  },
  {
    quote: "Why did the cookie cry? Because its mom was a wafer so long.",
    author: "Anonymous",
  },
  { quote: "What do you call a fake noodle? An impasta.", author: "Anonymous" },
  {
    quote: "Why don't bicycles talk? They're two tired to say anything.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a pony with a cough? A little hoarse.",
    author: "Traditional",
  },
  {
    quote:
      "Why did the mushroom get invited to all the parties? Because he's a fungi.",
    author: "Anonymous",
  },
  {
    quote:
      "What do you call a dinosaur with an extensive vocabulary? A thesaurus.",
    author: "Anonymous",
  },
  {
    quote: "Why did the tomato blush? Because it saw the salad dressing.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a boomerang that won't come back? A stick.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the man name his dogs Rolex and Timex? Because they were watch dogs.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a snowman in July? A puddle.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the chicken cross the playground? To get to the other slide.",
    author: "Traditional",
  },
  {
    quote: "What do you call a group of musical whales? An orca-stra.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the astronaut break up with his girlfriend? He needed space.",
    author: "Anonymous",
  },
  {
    quote:
      "What do you call a droid that takes the long way around? R2 detour.",
    author: "Anonymous",
  },
  {
    quote: "Why did the barber win the race? He knew a shortcut.",
    author: "Anonymous",
  },
  { quote: "What do you call an old snowman? Water.", author: "Anonymous" },
  {
    quote: "Why did the football coach go to the bank? To get his quarterback.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a bee that can't make up its mind? A maybe.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the computer go to therapy? It had too many bytes of emotional baggage.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a sad strawberry? A blueberry.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the burglar hang up his coat before robbing the bank? He wanted to make a clean getaway.",
    author: "Anonymous",
  },
  {
    quote:
      "What do you call a fish with two knees? A tuna-fish. Wait, a two-knee fish.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the teddy bear say no to dessert? Because it was already stuffed.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a rabbit with fleas? Bugs Bunny.",
    author: "Traditional",
  },
  {
    quote:
      "Why did the karate expert lose his job at the karate shop? He kept breaking things.",
    author: "Anonymous",
  },
  {
    quote: "What do you call an owl who does magic tricks? Hoodini.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the coffee taste like dirt? Because it was ground this morning.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a pig who does karate? A pork chop.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the letter refuse to go to the party? It was already stamped.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a factory worker who's always tired? Iron.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the man run around his bed? Because he was trying to catch up on his sleep.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a cow that plays an instrument? A moo-sician.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the students eat their homework? Because the teacher told them it was a piece of cake.",
    author: "Anonymous",
  },
  {
    quote: "What do you call an alligator who's a detective? An investigator.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the clock get sent to the principal's office? It kept tocking during class.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a very sad cup of coffee? A depresso.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the volcano go to therapy? It had a lot to get off its chest.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a duck that gets all A's? A wise quacker.",
    author: "Anonymous",
  },
  {
    quote: "Why did the ghost go to the party? For the boos.",
    author: "Anonymous",
  },
  {
    quote: "What do you call an ant that fights crime? A vigilANTe.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the man bring a ladder to the bar? He heard the drinks were on the house.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a monkey in a minefield? A baboom.",
    author: "Anonymous",
  },
  {
    quote: "Why did the beach blush? Because the sea weed.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a fish that wears a crown? A king fish.",
    author: "Anonymous",
  },
  {
    quote: "Why did the frog take the bus to work? His car got toad away.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a group of unorganized rabbits? A hare-mess.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the potato win an award? Because it was outstanding in its field.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a nosy pepper? Jalapeno business.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the fisherman put peanut butter in the sea? To go with the jellyfish.",
    author: "Anonymous",
  },
  {
    quote:
      "What do you call a spider who just got a promotion? A web developer.",
    author: "Anonymous",
  },
  {
    quote: "Why did the wheelbarrow need a checkup? It was two tired.",
    author: "Anonymous",
  },
  {
    quote: "What do you call cheese that's sad about being alone? Provolone.",
    author: "Anonymous",
  },
  {
    quote: "Why did the bee get married? Because he found his honey.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a fish that's a great singer? A soul-fish.",
    author: "Anonymous",
  },
  {
    quote: "Why did the tomato win the race? Because it ketchup.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a sleepy dinosaur? A dino-snore.",
    author: "Anonymous",
  },
  {
    quote: "Why did the cow become an astronaut? To visit the moooon.",
    author: "Anonymous",
  },
  {
    quote: "What do you call two spiders who just got married? Newlywebs.",
    author: "Anonymous",
  },
  {
    quote: "Why did the piano get locked out of the house? It lost its keys.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a snowman with a suntan? A puddle.",
    author: "Anonymous",
  },
  {
    quote: "Why did the crab never share? Because he's shellfish.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a book about fish? A tale of the seas.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the octopus win the boxing match? Because it was well-armed.",
    author: "Anonymous",
  },
  { quote: "What do you call a nervous cow? Beef jerky.", author: "Anonymous" },
  {
    quote:
      "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a dog that can tell time? A watchdog.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the orange stop rolling down the hill? It ran out of juice.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a bear stuck in the rain? A drizzly bear.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the skeleton go to the party alone? He had no body to go with him.",
    author: "Anonymous",
  },
  {
    quote:
      "What do you call an apology written in dots and dashes? Re-morse code.",
    author: "Anonymous",
  },
  {
    quote: "Why did the man put his car in the oven? He wanted a hot rod.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a shoe made of a banana? A slipper.",
    author: "Anonymous",
  },
  {
    quote:
      "Why did the tree get in trouble at school? It kept branching out during class.",
    author: "Anonymous",
  },
  {
    quote: "What do you call a raincoat for a duck? A duck-cover.",
    author: "Anonymous",
  },
];

export default localJokes;
