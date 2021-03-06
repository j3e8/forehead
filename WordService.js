app.service("WordService", function() {
  var WordService = {};

  WordService.categories = {
    'animals': [
      'pig', 'horse', 'goat', 'cow', 'chicken', 'duck',
      'cat', 'mouse', 'dog', 'donkey', 'rat', 'ferret',
      'alligator', 'zebra', 'crocodile', 'elephant', 'ostrich',
      'giraffe', 'hippopotamus', 'cheetah', 'lion', 'tiger', 'bear',
      'snake', 'lizard', 'wolf', 'deer', 'mountain lion', 'parakeet',
      'parrot', 'whale', 'octopus', 'trout', 'crayfish', 'lobster',
      'crab', 'eel', 'shark', 'spider', 'praying mantis', 'squirrel',
      'chipmunk', 'owl', 'eagle', 'rabbit', 'kangaroo', 'koala bear',
      'sloth', 'monkey', 'hawk', 'falcon', 'goose', 'caterpillar', 'butterfly',
      'moth', 'worm', 'beetle', 'cricket', 'clown fish', 'swordfish', 'squid',
      'panther', 'coyote', 'fox', 'moose', 'elk', 'antelope', 'polar bear',
      'penguin', 'rhinoceros', 'mongoose', 'turtle', 'weasel', 'mink', 'urchin',
      'narwal', 'manatee', 'jaguar', 'hamster', 'gerbil', 'guinea pig', 'mountain goat',
      'sheep', 'potato bug', 'salmon', 'starfish', 'clam', 'daddy long legs', 'robin',
      'pelican', 'bee', 'cricket', 'cockroach', 'scorpion', 'snail', 'centipede',
      'black widow', 'gecko', 'iguana', 'rattlesnake', 'king cobra', 'boa', 'tortoise',
      'frog', 'tree frog', 'newt', 'salamander', 'catfish', 'flamingo', 'blue jay',
      'pheasant', 'vulture', 'bald eagle', 'swan', 'pigeon', 'toucan', 'anteater',
      'panda bear', 'armadillo', 'hedgehog', 'otter', 'hyena', 'meerkat', 'warthog',
      'gazelle', 'camel', 'tasmanian devil', 'lemur', 'gorilla', 'orangutan', 'opossum',
      'porcupine', 'seal', 'sea lion', 'wallaby', 'kangaroo rat'
    ],
    'around the house': [
      'computer', 'lamp','phone','window','door','table','piano','closet',
      'sink','refrigerator','freezer','desk','night stand','coffee table',
      'chair','sofa','loveseat','recliner','television','light switch','counter',
      'microwave','bed','bedroom','family room','living room','front door',
      'backyard','couch','shelf','blinds','curtains','drapes','carpet','tile',
      'wall','ceiling','porch','deck','roof','shingles','rain gutter','window',
      'sliding door','shower','bathtub','toilet','bathroom','mirror','kitchen',
      'cabinet','credenza','chandelier','pillow','pencil','eraser','scissors',
      'knife','fork','spoon','thongs','spatula','slotted spoon','grill','fire pit',
      'oven','pantry','salt','pepper','frying pan','Wii','electric outlet','vacuum',
      'hanger','dishwasher','washing machine','dryer','hair dryer','brush','toothbrush',
      'toothpaste','laptop','smart phone','soap','shampoo','conditioner','glass cleaner',
      'paper towel','toilet paper','tissue','cotton swabs','Band Aid','towel',
      'shirt','pants','dress','skirt','shoes','socks','belt','suspenders','necktie',
      'bowtie','hat','teddy bear','ceiling fan','light bulb','cupboard','ice cream maker',
      'rug','stool','step ladder','stairs','door knob','decorations','quilt','blanket',
      'toys'
    ],
    'food': [
      'hamburger', 'cheeseburger', 'french fries', 'potatoes', 'turkey', 'chicken', 'ham', 'steak',
      'popcorn', 'candy corn', 'snickers', 'fish', 'twix', 'pizza', 'water', 'soda', 'diet coke',
      'milk', 'orange juice', 'apple juice', 'popcorn chicken', 'mashed potatoes', 'sweet potato',
      'celery', 'broccoli', 'lettuce', 'spinach', 'cabbage', 'brussels sprouts', 'mushroom', 'sausage',
      'bacon', 'pancake', 'waffle', 'jam', 'butter', 'syrup', 'peanut butter', 'bread', 'roll',
      'carrot', 'green beans', 'black beans', 'pinto beans', 'asparagus', 'cauliflower', 'corn',
      'corn on the cob', 'goldfish', 'sprite', 'chips', 'barbecue chips', 'potato chips', 'egg', 'toast', 'cereal',
      'oatmeal', 'salt', 'pepper', 'omelet', 'carmel', 'chocolate', 'potato', 'ice cream', 'cookies', 'gummy bears',
      'fish sticks', 'chicken nuggets', 'chocolate chips', 'cheese', 'fruit', 'peach', 'banana', 'plum',
      'apple pie', 'sandwich', 'mayonnaise', 'orange', 'apple', 'coconut', 'kiwi', 'canteloupe', 'watermelon',
      'apricot', 'raspberry', 'blueberry', 'strawberry', 'grape', 'grapefruit', 'onion', 'tomato', 'orange chicken',
      'pork chop', 'roast', 'potato chips', 'crackers', 'cheese', 'chocolate milk', 'popsicle'
    ],
    'actions': [
      'picking your nose', 'doing a pull-up', "solving a Rubik's Cube", 'jumping on a trampoline', 'fishing',
      'sleeping', 'eating', 'doing jumping jacks', 'choking', 'flying', 'swimming', 'singing',
      'jumping rope', 'playing basketball', 'playing baseball', 'playing the drums', 'riding a horse',
      'driving a car', 'running', 'dancing', 'doing ballet', 'boxing', 'doing karate or taekwondo',
      'watching tv', 'reading', 'skipping', 'lifting weights', 'surfing', 'sneezing', 'washing hands',
      'taking a selfie', 'riding a bike', 'flossing', 'throwing up', 'tying shoes', 'getting dressed',
      'playing football', 'playing soccer', 'golfing', 'playing hopscotch', 'playing video games',
      'climbing a ladder', 'shopping', 'making a sandwich', 'building a campfire', 'mailing a letter',
      'playing ping pong', 'shaking hands', 'doing a cartwheel', 'swimming', 'rowing a boat', 'canoeing',
      'doing a somersault',
      'doing the worm', 'playing video games', 'flossing', 'grandpa', 'walking', 'backflip',
      'sitting down', 'playing the piano', 'running', 'walking off a cliff',
      'dabbing', 'fishing', 'go home', 'being crazy', 'handstand', 'skipping', 'turn off the lights',
      'eating cheese', 'doing the splits', 'singing'
    ],
    /*
    'miscellaneous': [
      'car', 'truck', 'train', 'airplane'
    ],
    */
    'colors': [
      'blue','red','green','yellow','orange','purple','violet','fuschia',
      'lavender','mauve','gold','silver','goldenrod','persimmon','coral',
      'pink','salmon','white','black','gray','taupe','puce','turquoise',
      'teal','emerald','strawberry','crimson','navy','smoke','off-white',
      'sea foam','sea green','chartreuse','ebony','almond','ivory','baby blue',
      'sky blue','hot pink','neon green','olive','mustard'
    ],
    /*
    'popular songs': [
      'Twinkle Twinkle Little Star', 'Popcorn Popping', 'Give Said the Little Stream', 'Thunder'
    ],
    */
    'animated movies': [
      'Snow White and the Seven Dwarfs','Pinocchio','Fantasia','Dumbo','Bambi',
      'The Three Caballeros','Cinderella','Alice in Wonderland','Peter Pan',
      'Lady and the Tramp','Sleeping Beauty','One Hundred and One Dalmations',
      'The Sword in the Stone','The Jungle Book','The Aristocats','Robin Hood',
      'The Rescuers','The Fox and the Hound','Oliver & Company','The Little Mermaid',
      'DuckTales the Movie','The Rescuers Down Under','Beauty and the Beast','Aladdin',
      'The Lion King','A Goofy Movie','Pocahontas',
      'Toy Story','James and the Giant Peach','The Hunchback of Notre Dame','Hercules',
      'Mulan',"A Bug's Life",'Tarzan','Toy Story 2','Fantasia 2000','The Tigger Movie',
      "The Emperor's New Groove","Atlantis: The Lost Empire",'Monsters, Inc.','Lilo & Stitch',
      'Treasure Planet',"Piglet's Big Movie",'Finding Nemo','Brother Bear','The Incredibles',
      'Chicken Little','Cars','Meet the Robinsons','Ratatouille','WALL-E','Tinker Bell','Bolt',
      'Up','The Princess and the Frog','Toy Story 3','Tangled','Gnomeo and Juliet','Cars 2',
      'Winnie the Pooh','Brave','Wreck-It Ralph','Monsters University','Planes','Frozen',
      'Big Hero 6','Inside Out','The Good Dinosaur','Zootopia','Finding Dory','Moana',
      'Cars 3','Epic','Rise of the Guardians','Shrek','Madagascar','Kung Fu Panda',
      'Over the Hedge','Flushed Away','Monsters vs. Aliens','How to Train Your Dragon',
      'Megamind','Puss in Boots','The Croods','Turbo','Mr. Peabody & Sherman','Trolls',
      'Captain Underpants','Despicable Me','Minions','Sing!','Coco'
    ],
    'Disney Characters': [
      'Jafar', 'Aladdin', 'Jasmine', 'Genie', 'Abu', 'Sultan', 'Iago', 'Magic Carpet',
      'Cinderella', 'Price Charming', 'Gus Gus', 'Lady Tremaine (evil stepmother)',
      'Drizella', 'Anastasia', 'Fairy Godmother', 'Snow White', 'Dopey', 'Doc', 'Grumpy',
      'Bashful', 'Sleepy', 'Sneezy', 'Happy', 'The Evil Queen', 'Bambi', 'Thumper', 'Pinocchio',
      'Gepetto', 'Jiminy Cricket', 'Figaro (Pinocchio)', 'Cleo (Pinocchio)', 'Monstro',
      'Stromboli', 'Honest John (Pinocchio)', 'Mickey Mouse', 'Minnie Mouse', 'Donald Duck', 'Goofy',
      'Pluto', 'Dumbo', 'Alice', 'Queen of Hearts', 'Mad Hatter', 'White Rabbit', 'Cheshire Cart',
      'Tweedledum', 'Tweedldee', 'Peter Pan', 'Wendy', 'Captain Hook', 'Mr. Smee', 'Tic Toc Croc',
      'Michael (Peter Pan)', 'John (Peter Pan)', 'Tiger Lily', 'Tinkerbell', 'Lady (Lady and the Tramp)',
      'The Tramp', 'Trusty (Lady and the Tramp)', 'Jock (Lady and the Tramp)', 'Aurora', 'Prince Phillip',
      'Maleficent', 'Flora', 'Fauna', 'Merryweather', 'King Stefan', 'Cruella de Vil', 'Pongo',
      'Perdita', 'Roger (101 Dalmatians)', 'Anita (101 Dalmatians)', 'Jasper', 'Horace', 'Madam Mim',
      'Archimedes', 'Sir Ector', 'Sir Kay', 'Arthur', 'Merlin', 'Mowgli', 'Baloo', 'Shere Khan',
      'Bagheera', 'Kaa', 'King Louie', "Thomas O'Malley (Aristocats)", 'Duchess (Aristocats)',
      'Robin Hood', 'Little John', 'Sir Hiss', 'Friar Tuck', 'King John', 'Lady Kluck', 'Nutsy (Robin Hood)',
      'Trigger (Robin Hood)', 'Winnie the Pooh', 'Tigger', 'Eeyore', 'Rabbit (Winnie the Pooh)',
      'Owl (Winnie the Pooh)', 'Kanga', 'Roo', 'Piglet', 'Christopher Robin', 'Madame Medusa (Rescuers)',
      'Bianca (Rescuers)', 'Penny (Rescuers)', 'Bernard (Rescuers)', 'Tod (Fox and the Hound)',
      'Copper (Fox and the Hound)', 'Oliver', 'Dodger (Oliver and Company)', 'Tito (Oliver and Company)',
      'Ariel', 'Ursula', 'Prince Eric', 'Sebastian', 'Flounder', 'Flotsam', 'Jetsam', 'King Tritan',
      'Scuttle', 'Max (The Little Mermaid)', 'Cody (Rescuers Down Under)', 'Joanna (Rescuers Down Under)',
      'McLeach (Rescuers Down Under)', 'Beast', 'Belle', 'Gaston', 'LeFou', 'Lumière', 'Mrs. Potts',
      'Cogsworth', 'Chip', 'Maurice (Beauty and the Beast)', 'Simba', 'Nala', 'Scar', 'Mufasa',
      'Rafiki', 'Zazu', 'Pumbaa', 'Timon', 'Pocahontas', 'John Smith', 'Woody', 'Buzz Lightyear',
      'Sid (Toy Story)', 'Slinky Dog (Toy Story)', 'Andy (Toy Story)', 'Mr. Potato Head',
      'Jessie (Toy Story 2)', 'Zurg (Toy Story 2)', 'Stinky Pete', 'Hamm (Toy Story)', 'Rex (Toy Story)',
      'Esmeralda', 'Quasimodo', 'Megara (Hercules)', 'Hercules', 'Phil (Hercules)', 'Mulan',
      'Mushu', 'Flik', 'Princess Atta', 'Heimlich', "Hopper (A Bug's Life)", 'Tarzan', 'Jane',
      'Kala', 'Clayton (Tarzan)', 'Yzma', 'Kronk', 'Kuzco', 'Pacha', 'Princess Kida (Atlantis)',
      'Milo (Atlantis)', 'Sully', 'Mike Wazowski', 'Boo', 'Randall (Monsters Inc.)', 'Roz (Monsters, Inc.)',
      'Lilo', 'Stitch', 'Jim Hawkins (Treasure Planet)', 'Nemo', 'Marlin', 'Crash (Finding Nemo)',
      'Dory', 'Mr. Incredible', 'Elastigirl', 'Syndrome', 'Frozone', 'Dash', 'Violet (The Incredibles)',
      'Chicken Little', 'Lightning McQueen', 'Mater', 'Luigi (Cars)', 'Doc Hudson', 'Sally Carrera (Cars)',
      'Lewis (Meet the Robinsons)', 'Goob/Michael Yagoobian (Meet the Robinsons)', 'Linguini', 'Gusteau',
      'Collette (Ratatouille)', 'Remy', 'WALL-E', 'Tiana', 'Prince Naveen', 'Mama Odie',
      'Ray (The Princess and the Frog)', 'Lots-o (Toy Story 3)', 'Rapunzel', 'Flynn Rider', 'Gothel (Tangled)',
      'Maximus', 'Gnomeo', 'Juliet (Gnomeo & Juliet)', 'Finn McMissile', 'Merida', 'Queen Elinor',
      'King Fergus', 'Silvermist', 'Vidia', 'Iridessa', 'Rosetta', 'Queen Clarion', 'Ralph (Wreck-It Ralph)',
      'Fix-It Felix', 'Vanellope von Schweetz', 'Dusty Crophopper', 'Elsa', 'Anna (Frozen)', 'Olaf', 'Kristoff',
      'Sven (Frozen)', 'Hans (Frozen)', 'Fawn (Tinkerbell)', 'Baymax', 'Hiro (Big Hero 6)', 'Joy (Inside Out)',
      'Bing Bong', 'Riley (Inside Out)', 'Disgust', 'Sadness', 'Anger', 'Fear', 'Judy Hopps',
      'Nick Wilde (Zootopia)', 'Chief Bogo', 'Mayor Lionheart', 'Assistant Mayor Bellwether',
      'Gazelle (Zootopia)', 'Moana', 'Hei Hei', 'Maui', 'Hector (Coco)', 'Miguel (Coco)', 'Dante (Coco)'
    ],
    /*'Valiant 10': [
      'gold plates', 'Joseph Smith', 'Emma Smith', 'Martin Harris', 'Moroni',
      'Hill Cumorah', 'fireplace', 'beans', 'sealed book', 'Egyptian',
      'Urim and Thummim', 'Joseph Smith History', 'floorboards', 'Pennsylvania',
      'Professor Anthon', 'translate', 'Book of Mormon', 'gold', 'buried', 'angel',
      'vision', 'sacred grove', 'angry mob', 'Alvin Smith', 'farm', 'preparation', 'Nephi',
      'Bible', 'apostasy', 'restoration', 'New York', 'Lucy Mack Smith', 'prayer',
      'scriptures', 'church', 'prophet', 'apostle', 'revelation', 'Mormon', 'Nephites',
      'Lamanites', 'Joseph Smith Sr.', 'hidden', 'protect', 'blessing', 'persecution',
      'steal', 'wooden box', 'loft', 'barrel', 'safe', 'languages', 'characters', 'money',
      'Isaiah', 'danger', 'obedience', 'certificate'
    ],*/
    /*
    'Book of Mormon': [
      'Nephi', 'Lehi', 'Mormon', 'Moroni', 'Jacob', 'Laman', 'Lemuel', 'Sam', 'Joseph',
      'Sariah', 'Bountiful', 'temple', 'Desolation', 'Ether', 'Brother of Jared', 'River Sidon',
      'Zarahemla'
    ]
    */
  };


  return WordService;
});
