const recipes = [
    {
        id: 'garlic-rice',
        name: 'Garlic Rice',
        imgName: 'garlic-rice.jpg',
        cookTime: '15 mins',
        cookTimeInMins: 15,
        desc: 'Garlic-y & soy-sauce-y, perfect for those days when plain rice feels just a little too boring.',
        ingredients: [
            ['100g pork belly', '1 shallot', '4 cloves garlic', '1 cup cooked rice'],
            ['20g butter', '40ml soy sauce', '8g sugar']
        ],
        instructions: [
            'Sear diced pork on low until brown and crisped on the outside. The fat should be mostly rendered out.',
            'Add in butter, diced shallots, and sugar. Sauté until shallots are translucent.',
            'Turn the heat to high, allow pan to heat up, and add in the pre-loosened rice. Add in soy sauce and minced garlic.',
            'Stir fry for about 2 mins and serve.',
        ]
    },
    {
        id: 'beef-noodle',
        name: '牛肉面',
        imgName: 'beef-noodle.jpg',
        cookTime: '1 hr',
        cookTimeInMins: 60,
        desc: 'Warm and soupy noodles are one of my common cravings, these noodles are one of my go-tos.',
        ingredients: [
            ['1lb beef chuck', '1 onion', '2 tomatoes', '1 carrot (optional)'],
            ['70ml soy sauce', '70ml dark soy', '70ml cooking wine', '3 bay leaves', '10ml tomato paste (optional)']
        ],
        instructions: [
            'Cube beef into about 3cm cubes, they will shrink in the cooking proccess. Sear beef just until browned on the outside and remove.',
            'Sauté roughly diced onions until translucent, then add in diced carrots, tomates, bay leaves, and a pinch of sugar. Sauté for about 2 mins.',
            'Return beef to the pot, and add in the soy sauce, dark soy sauce, and cooking wine.',
            'Cover with just enough water to submerge, and pressure cook on high for 30 mins.',
            'Taste the soup, reduce and salt as necessary. Serve with rice or noodles.'
        ]
    },
    {
        id: 'bolognese',
        name: 'Bolognese',
        imgName: 'bolognese.jpg',
        cookTime: '45 mins',
        cookTimeInMins: 45,
        desc: 'A sacrilegious "bolognese" sauce. Perfect if you like sauces that are a little sweet.',
        ingredients: [
            ['100g pork belly', '100g gorund beef', '1 large onion', '4 cloves garlic', '1 carrot', '4 stalks celery', '2 large tomatoes'],
            ['20g tomato paste', '15g ketchup', 'oregano', 'thyme', 'basil', '3 bay leaves']
        ],
        instructions: [
            'Sear finely diced pork belly on low until crisped and fat has rendered out. Sauté diced onions until translucent, then add in garlic. Add in ground beef, and cook until browned. Remove all and set aside.',
            'Add in finely diced carrots and celery. Add in tomato paste, ketchup, oregano, thyme, basil, and salt. Sauté for about 3 mins',
            'Return meat to pot. Add in diced tomatoes, and sauté 2 mins. Add in bay leaves and 100 ml water, pressure on cook on high for 20 mins.',
            'Once cooked, adjust taste with salt and sugar if necessary, reduce if needed. Serve with any pasta.'
        ]
    },
    {
        id: 'nian-gao',
        name: '炒年糕',
        imgName: 'niangao.jpg',
        cookTime: '30 mins',
        cookTimeInMins: 30,
        desc: 'So incredibly 香，such incredible texture. Best way to eat pork belly in my opinion.',
        ingredients: [
            ['200g 年糕s', '1 onion', '100g pork belly', '5 bulbs 上海青/油菜', '1/2 a carrot'],
            ['soy sauce', 'oyster sauce', 'sugar', 'cornstarch']
        ],
        instructions: [
            'Slice pork, and marinate with a small amount of soy sauce, oyster sauce, sugar, and cornstarch.',
            'Soak 年糕 in cold water, and use hands to break apart any pieces that are stuck together. Dice onions and cut carrots into thin 丝儿.',
            'Sear pork until browned, and fat has begun to render. Add in onions and continue to cook until pork is almost crisp. Add in carrots, and sauté another 2 mins.',
            'Drain the 年糕 and add in. Add in a little bit of soy sauce, oyster sauce, and salt. Cook until 年糕 starts to soften.',
            'Add in roughly cooked vegetables, and cook until 年糕 reaches desired texture.'
        ]
    },
    {
        id: 'alfredo',
        name: 'Chicken Alfredo',
        imgName: 'alfredo.jpg',
        cookTime: '25 mins',
        cookTimeInMins: 25,
        desc: 'Creamy, savory, cheesy. A thick and saucy pasta with a ton of flavor.',
        ingredients: [
            ['2pcs chicken thighs', '1 shallot', '3 cloves garlic', '150ml heavy cream', '1 egg yolk'],
            ['parmesean', 'oregano', 'parsley', 'black pepper']
        ],
        instructions: [
            'Cook pasta al dente, in thoroughly salted water. Whatever pasta choice is fine, be sure to save cup of pasta water.',
            'Cook shallots in oil until translucent, then add garlic. Sear diced chicken until browned, it doesn\'t need to be fully cooked through.',
            'Add in cream, oregano, salt, and pepper. Put heat on low until slightly bubbling. Add pasta into the sauce, along with about 75ml of pasta water. Stir until thickened.',
            'Remove from heat and let cool slightly. Stir in parmesean, and egg yolks.',
            'Season with salt and pepper as necessary, and top with parsley.'
        ]
    },
    {
        id: 'chicken-noodle',
        name: 'Chicken Noodle',
        imgName: 'chicken-noodle.jpg',
        cookTime: '40 mins',
        cookTimeInMins: 40,
        desc: 'Warm and soupy, made for cold days or days when you have a cold.',
        ingredients: [
            ['3pcs bone-in chicken thighs', '1 large carrot', '4 stalks celery', '1 onion', '300ml chicken stock/bone broth', 'elbow pastas'],
            ['oregano', 'thyme', 'basil', '2 bay leaves']
        ],
        instructions: [
            'Sear chicken until browned, then remove. Sauté chopped onions until translucent.',
            'Add in diced carrots, celery, and seasoning. There should be about the same amount of both. Sauté for 3 mins.',
            'Return chicken, and add in chicken broth until everything is submerged. Pressure cook on high for 20 mins.',
            'Once done, adjust taste as needed with salt and sugar. Keep on a boil and cook pastas until ready.',
        ]
    },
    {
        id: 'lu-rou-fan',
        name: '卤肉饭',
        imgName: 'luroufan.jpg',
        cookTime: '40 mins',
        cookTimeInMins: 40,
        desc: 'One of the best ways to eat rice, much easier to make than you think!',
        ingredients: [
            ['300g pork belly', '1 large onion', '3 hard boiled eggs'],
            ['50ml soy sauce','50ml dark soy sauce', '50ml cooking wine']
        ],
        instructions: [
            'Cut onions into thin strips, and cook with oil until they are crispy and brown. Be sure to stir often to avoid burning. Remove and dice into smaller pieces.',
            'Dice pork belly into 1cm or less cubes, sear until browned. Add in onions and small amount of sugar. Sauté 1 min.',
            'Add in soy sauce, dark soy sauce, and cooking wine. Add in peeled eggs.',
            'Add in just enough water to cover the pork, and pressure cook on high for 20 mins. Once done, reduce as necessary. Serve with rice and 上海青/油菜.',
        ]
    },
    {
        id: 'teriyaki-chicken',
        name: 'Teriyaki Chicken',
        imgName: 'teriyaki-chicken.jpg',
        cookTime: '20 mins',
        cookTimeInMins: 20,
        desc: 'Quick and simple, tried and true. Never pay more than $6 for this dish at a restaurant.',
        ingredients: [
            ['3pcs chicken thigh', '1 shallot', '4 cloves garlic'],
            ['50ml soy sauce', '10g brown sugar', '30ml cornstarch slurry']
        ],
        instructions: [
            'With oil in pan, sauté diced shallots until translucent, then add in minced garlic.',
            'Turn heat to high and add in chicken. Sear until browned on the outside, doesn\'t need to be fully cooked.',
            'Add in soy sauce, sugar, and cornstarch slurry. Cook until thickened.',
            'Top with sesame seeds and serve with rice and any vegetable.',
        ]
    },
    {
        id: 'tomato-soup',
        name: 'Tomato Soup',
        imgName: 'tomato-soup.jpg',
        cookTime: '45 mins',
        cookTimeInMins: 45,
        desc: 'My favorite soup. An amazing combo of salty, sweet, and sour, with perfectly tender beef.',
        ingredients: [
            ['300g beef chuck', '2 large tomatoes', '1 large carrot', '4 stalks celery', '1 onion'],
            ['20ml tomato paste', 'oregano', 'thyme', 'basil']
        ],
        instructions: [
            'With beef cut into roughly 3cm wide cubes, sear until browned on the outside. Remove beef and sauté roughly diced onions until translucent.',
            'Add diced carrots and celery, there should be roughly the same amount of both. Add in tomato paste and sauté about 3 mins.',
            'Add in roughly diced tomatoes, along with spices. Sauté another 3 mins.',
            'Cover with water and pressure cook on high for 30 mins. Once done, keep on a boil and optionally add in cabbage leaves.',
            'Season with black pepper, and add salt and sugar to adjust taste as necessary.'
        ]
    },
    {
        id: 'thai-beef-salad',
        name: 'Thai Beef Salad',
        imgName: 'thai-beef-salad.jpg',
        cookTime: '30 mins',
        cookTimeInMins: 30,
        desc: 'Classic thai flavors paired with a good steak and fresh greens. ',
        ingredients: [
            ['lime juice', 'lime zest', 'sugar', 'olive oil', 'fish sauce', 'thai chili', 'cilantro', 'garlic', 'salt'],
            ['steak of your choice', 'salt', 'pepper'],
            ['salad greens', 'cucumber', 'cilantro', 'red onion', 'green onions', 'mint']
        ],
        instructions: [
            'Finely chop cilantro, chili, and mince garlic. Make the sauce by combining all the ingredients.',
            'Sear steak to desired done-ness, and set aside to rest.',
            'Prep salad ingredients and toss with some sauce, thinly slice steak and place on top, then drizzle with more sauce.'
        ]
    },
    {
        id: 'french-roll',
        name: 'French Roll',
        imgName: 'french-roll.jpg',
        cookTime: '2.5 hrs',
        cookTimeInMins: 150,
        desc: 'Basically individual mini baguettes for those that can\'t eat a whole baguette in one go.',
        ingredients: [
            ['100g bread flour', '60g water', '2g yeast', '1g salt', '1g sugar'],
        ],
        instructions: [
            'Mix all ingredients together and let rest for 15 minutes.',
            'Knead dough for 5 minutes, if the dough is too sticky you can wet your fingers first.',
            'Let proof for 2 hours in warm and humid environment (35-40 degrees celcius).',
            'Shape into rolls of desired size, and cut across the top to vent.',
            'Bake at 175 with some boiling water in a seperate pan. Remove water after 10 mins and finish baking until golden brown.'
        ]
    },
    {
        id: 'milk-bread',
        name: 'Milk Bread',
        imgName: 'milk-bread.jpg',
        cookTime: '2.5 hrs',
        cookTimeInMins: 150,
        desc: 'So soft. So buttery. Absolutely declicious when served with even more butter.',
        ingredients: [
            ['60g milk', 'pinch of sugar', '2g yeast'],
            ['170g bread flour', '2g salt', '15g sugar', '1 egg'],
            ['35g room temperature butter', 'egg wash']
        ],
        instructions: [
            'Add yeast and a pinch of sugar to warm milk and let sit for around 10 mins, until yeast gets foamy.',
            'Mix together flour, salt, sugar, egg, and milk until well combined. Knead for 10 mins until smooth.',
            'Add in cubed butter, and knead together until all combined. Cover and let proof for 1 hour',
            'Gently knead dough again to get rid of air bubbles, and shape into doughballs of roughly 35g each.',
            'Cover and let rise again for another hour. Once proofed, they should spring back slowly when poked.',
            'Brush gently with egg wash and bake at 175˚C for about 25 minutes until golden brown.'
        ]
    },
    {
        id: 'pineeapple-bread',
        name: '菠萝包',
        imgName: 'pineapple-bread.jpg',
        cookTime: '2.5 hrs',
        cookTimeInMins: 150,
        desc: 'A Hong Kong classic. Crispy top, soft bread, thick slab of butter. So good.',
        ingredients: [
            ['1 egg yolk', '30g sugar', '30g room temperature butter', '55g cake flour', '1g baking powder']
        ],
        instructions: [
            'Make the dough according to the milk bread recipe, shape into around 50g dough balls, and begin proofing for the second time after shaping.',
            'Combine all ingredients and cover in saran wrap to shape into a log, and refridgerate.',
            'Cut log into discs, and gently roll out into circles, and placed atop proofed bread dough.',
            'Brush top with egg wash and bake at 175˚C for about 35 minutes until golden brown.'
        ]
    },
    {
        id: 'creme-brulee',
        name: 'Crème Brûlée',
        imgName: 'creme-brulee.jpg',
        cookTime: '2 hrs',
        cookTimeInMins: 120,
        desc: 'Simple ingredients turned into one decadant creamy dessert. I actually like it better without the sugar on top.',
        ingredients: [
            ['1 egg yolk', '160g cream', '15g sugar', 'vanilla'],
            ['extra sugar for crust']
        ],
        instructions: [
            'Heat cream and vanilla extra until hot, but not boiling. Meanwhile whisk together egg and sugar until well combined.',
            'Slowly pour heated cream into the egg mixture while mixing and keep mixing until combined.',
            'Pour into ramekin and skim any bubbles or foam that have formed on top. Boil water for a water bath and bake at 165˚C for 45 miuntil set, but still a little jiggly.',
            'Cool in the fridge for at least 2 hours before covering top with sugar, and caramelizing using a blow torch.'
        ]
    },
    {
        id: 'pound-cake',
        name: 'Pound Cake',
        imgName: 'pound-cake.jpg',
        cookTime: '1.5hrs',
        cookTimeInMins: 90,
        desc: 'A simple, no frills, buttery cake. So good butter is really the key to a delicious cake here.',
        ingredients: [
            ['113g room temp butter', '130g sugar', '2 eggs', '109g cake flour', 'pinch of salt', 'vanilla']
        ],
        instructions: [
            'Mix butter until creamy and smooth. Add sugar and beat until light and fluffy.',
            'In another bowl, mix together eggs, vanilla, and salt until well combined. Slowly add this into the creamed butter and mix until combined.',
            'Slowly fold flour in to mixture using a spatula. Pour into lined pan, and knock a few times to get rid of air bubbles. Bake at 175˚C for 45 minutes.'
        ]
    },
    {
        id: 'croissants',
        name: 'Croissants',
        imgName: 'croissants.jpg',
        cookTime: '6hrs',
        cookTimeInMins: 360,
        desc: 'Yields two mini croissants. A lot of fuss for just a couple of bites, but totally worth it in my humble opinion. Croissants baking is also the most divine smell one could possibly smell.',
        ingredients: [
            ['24g water', '1g yeast', '42g bread flour', '5g sugar', '1g salt', '4g melted butter'],
            ['23g cold butter', 'egg wash']
        ],
        instructions: [
            'Mix yeast, warm water, and a pinch of sugar to wake the yeast. Let sit about 10 mins until foamy.',
            'Form cold butter into approx 4cm x 4cm square and refridgerate.',
            'Mix flour, sugar, salt, melted butter, and yeast mixure until dough forms. Cover and let sit for 15 mins.',
            'Knead dough for a few minutes until gluten develops, then cover and refridgerate for 2 hours',
            'Roll dough out into square approx 7cm x 7cm. Diamond-ly place butter square in middle, and wrap and cover with the dough. Pinch seams close and begin laminating process.',
            'Letter fold three times, while maintaing cold pliable butter temperature, returning to fridge whenever necessary.',
            'After final fold, roll out to long rectangle, and cug diagonally length-wise. Trim closed edges, and roll into croissants.',
            'Brush with egg wash, and proof for 2 hours. Brush with egg wash again, and bake at 175˚C for about 15 minutes until golden brown.'
        ]
    },
    {
        id: 'crepes',
        name: 'Crêpes',
        imgName: 'crepes.jpg',
        cookTime: '30 mins',
        cookTimeInMins: 30,
        desc: 'I think these are so much better than pancakes. The thin but chewy texture with a crispy edge is amazing.',
        ingredients: [
            ['14g melted butter', '42g flour', '1g salt', '5g sugar', '60g milk', '40g water', '1 egg', 'vanilla']
        ],
        instructions: [
            'Whisk everything until well combined. If you have time, let sit for at least 30 minutes, or overnight in the fridge.',
            'Make in nonstick pan over medium heat. Swirl the pan to spread evenly and thin.',
            'Yeah, that\'s pretty much it.'
        ]
    },
    {
        id: 'chiffon-cake',
        name: 'Chiffon Cake',
        imgName: 'chiffon-cake.jpg',
        cookTime: '1.5hrs',
        cookTimeInMins: 90,
        desc: 'No idea if this is actually "chiffon" cake, but nevertheless, it\'s a fluffy, eggy, not-to-sweet, simple, light cake.',
        ingredients: [
            ['2 egg whites', '20g sugar', '1/8 tsp cream of tartar'],
            ['2 egg yolks', '29g milk', '17g neutral oil', '38g cake flour']
        ],
        instructions: [
            'Make meringue with egg whites and sugar, adding in sugar a little at a time.',
            'Mix egg yolks, milk, and oil. Then fold in flour.',
            'Add a little meringue into flour mixture and fold to combine. Then pour this mixture into the meringue and fold together.',
            'Bake at 170˚C for about an hour, until golden brown on top.'
        ]
    },
    {
        id: 'burger-buns',
        name: 'Burger Buns',
        imgName: 'burger-buns.jpg',
        cookTime: '2.5 hrs',
        cookTimeInMins: 150,
        desc: 'So soft. So buttery. Absolutely declicious when served with even more butter.',
        ingredients: [
            ['8g bread flour', '16g milk', '16g water'],
            ['100g bread flour', '10g sugar', '3g yeast', '2g salt', '3g honey', '35g milk'],
            ['15g room temperature butter', 'egg wash']
        ],
        instructions: [
            'Make tangzhong by mixing flour, milk, and water, and heating over low heat until it becomes a paste. Set aside to cool',
            'Mix flour, sugar, yeast, salt, honey, milk, and tangzhong, then knead until dough is formed. Let rest for 15 minutes.',
            'Add in cubed room temperature butter and continue kneading for ten minutes. Let dough proof for about an hour and a half.',
            'Shape dough in to round balls, then cover and let proof again for another 45 mins. Shape again, brush with egg wash, and bake at 170˚C for 20 minutes.'
        ]
    },
]

export default recipes