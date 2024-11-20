/// Recipe data
const recipes = {
    meatballCasserole: {
        name: "Meatball Casserole",
        description: "A delicious meatball casserole with a rich tomato sauce.",
        ingredients: "Meatballs, Tomato Sauce, Mozzarella, Parmesan, Pasta, Eggs, Onion, Milk, Worcestershire sauce, Salt, Pepper.",
        procedure: "1 - Mix in a large baking dish stir together uncooked pasta, marinara sauce, water, milk, spices and meatballs. 2 - Bake and cover tightly with aluminum foil and bake at 425 degrees F for 40 minutes. 3 - Stir and check the pasta—we want it to be al dente (firm, but almost perfectly cooked). 4 - If it’s still too hard, cover the dish and return to the oven for a few minutes. 5 - Add cheese and sprinkle mozzarella over the top and bake uncovered at 425 degrees for 5-10 more minutes or until cheese is melted and bubbly. 6 - Serve and allow to cool for at least 15 minutes before serving, to allow the sauce to thicken up.",
        imageSrc: "meatball.jpg"
    },
    honeyGarlicChicken: {
        name: "Honey-Garlic Chicken",
        description: "Sweet and savory chicken with a honey-garlic glaze.",
        ingredients: "6 chicken thighs bone in or out with or without skin, ¼ teaspoon salt to season, 2 teaspoons garlic powder to season, 6 cloves garlic crushed, ⅓ cup honey, ¼ cup water or chicken broth, 2 tablespoons rice wine vinegar or apple cider vinegar or any white vinegar, 1 tablespoon soy sauce, ¼ teaspoon pepper to season",
        procedure: "1 - Season chicken with salt, pepper and garlic powder; set aside. 2 - Heat a pan or skillet over medium high heat; sear chicken thigh fillets or breast fillets on both sides until golden and cooked through.  FOR BONE IN THIGHS: 1 - Reduce heat after searing on both sides, cover skillet with a lid and continue cooking until the chicken is cooked through, while turning every 5 minutes until done. Alternatively, see notes for oven method. 2 - Drain most of the excess oil from the pan, leaving about 2 tablespoons of pan juiced for added flavour. FOR SAUCE: 1 - When chicken is done and cooked through, arrange chicken skin-side up in the pan (if cooking with skin); add the garlic between the chicken and fry until fragrant (about 30 seconds). 2 - Add the honey, water, vinegar and soy sauce. 3 - Increase heat to medium-high and continue to cook until the sauce reduces down and thicken slightly (about 3-4 minutes). 4 - Garnish with parsley and serve over vegetables, rice, pasta or with a salad.",
        imageSrc: "hgchicken.jpg"
    },
    chickenNachos: {
        name: "Chicken Nachos",
        description: "Loaded nachos topped with flavorful chicken, cheese, and toppings.",
        ingredients: "Chicken, Tortilla Chips, Cheese, Jalapeños, Sour Cream, Salsa, Guacamole.",
        procedure: "1 - Preheat oven to 350°F (175°C). 2 - Spread tortilla chips on a baking sheet. 3 - Sprinkle shredded chicken and cheese on top. Add jalapeños and other toppings as desired. 4 - Bake for 10-15 minutes until cheese is melted. 5 - Serve with sour cream, salsa, and guacamole.",
        imageSrc: "cnachos.jpeg"
    },
    panSearedSteak: {
        name: "Pan-Seared Strip Steaks",
        description: "If you're a steak-lover, this Pan-Seared Strip Steak is for you!",
        ingredients: "Steaks, Salt, Pepper, Oil, Butter, Thyme, Garlic",
        procedure: "1 - Let the steaks sit at room temperature for 30 minutes. 2 - Season the steaks with salt and pepper. 3 -  Heat oil in a heavy cast-iron skillet over high heat. 4 - Add the steaks to the pan and cook until browned, about 3 minutes per side. 5 - Reduce heat to medium-low and add butter, thyme, and garlic to the pan. 6 - Tilt the pan toward you to pool the butter and baste the steaks. 7 - Remove the steaks from the pan and cover loosely with foil. 8 - Let the steaks rest for 10 minutes. 9 - Cut the steaks diagonally across the grain into thin slices ",
        imageSrc: "stripsteak.jpg",
    },
    hamCarbonara: {
        name: "Ham Carbonara With Peas",
        description: "This recipe elevates ham and peas into a decadent pasta dinner!",
        ingredients: "3 oz. Parmigiano-Reggiano cheese grated (about 3/4 cup) plus more for garnish,  3 oz. pecorino Romano cheese grated (about 3/4 cup),  7 large egg yolks, 1/2 tsp., black pepper, 1 (16-oz.) pkg. spaghetti, 2 Tbsp. olive oil, 8 oz. leftover Honey-Glazed Ham. Diced (about 1 1/2 cups), 1 cup fresh or frozen sweet peas, 1 medium shallot thinly sliced (about 1/3 cup), 2 tsp. finely chopped garlic (from 2 cloves), 1/2 cup chopped fresh mixed tender herbs (such as basil. tarragon. and/or chives) plus leaves for garnish",
        procedure: "1 - Bring a medium pot of salted water to a boil over high. 2 - Whisk together cheeses, egg yolks, and pepper in a medium bowl until combined; set aside. 3 - Add pasta to boiling water; cook, stirring occasionally, until pasta is cooked according to package directions for al dente, 7 to 8 minutes. 4 - Drain pasta in a colander over a bowl, reserving 1 cup of the cooking water. Return drained pasta to pot, and let cool 3 minutes. 5 - While pasta cooks, heat oil in a large nonstick skillet over medium-high. 6 - Add ham; cook, stirring every 2 minutes, until browned, about 6 minutes. 7 - Add peas, shallot, and garlic; cook, stirring occasionally, until peas are just tender, about 2 minutes. Remove from heat. 8 - Ladle 1/3 cup of the reserved cooking water into egg mixture; whisk until blended. 9 - Whisk in another 1/3 cup cooking water to loosen the egg mixture. 10 - Quickly and gently toss egg mixture into cooked pasta so eggs don’t scramble. 11 - Continue tossing gently until cheeses are melted and a creamy sauce forms and coats pasta, about 1 minute. 12 - Add chopped fresh herbs and ham mixture; toss gently to combine. 13 - Divide pasta mixture among 4 plates. 14 - Garnish with additional herb leaves and grated cheese.",
        imageSrc: "carbonara.jpg",
    },
    steakDiane: {
        name: "Steak Diane",
        description: "Perfect for an elegant meal.",
        ingredients: "Steak, Butter, Broth, Dijon mustard, Worcestershire sauce, Shallot, Cognac, Heavy cream, Salt, Pepper",
        procedure: "1 - Even out the steaks: Cover the steaks with parchment paper and press down to an even 1-inch thickness with your hand or a meat mallet (don’t whack it, just press). 2 - Season both sides with salt and pepper. 3 - Whisk the sauce ingredients: In a glass measuring cup, whisk together the broth, Dijon mustard, Worcestershire sauce. 4 - Sear the steaks: In a medium pan over medium high heat, melt the butter or heat the oil. 5 - Once hot, add the steaks and sear on both sides for about 3 to 4 minutes each (medium rare). 6 - Remove to a plate. 7 - Sauté the shallots: Add the shallots to the pan and sauté until tender, about 2 minutes. 8 - Stir in the cognac to deglaze the pan, then cook until most of it has evaporated. 9 - Cook the sauce Diane: Add the broth mixture to the pan and cook until slightly thicker, about 3 minutes. 10 - Stir in the heavy cream and continue to cook until thickened, 2 to 3 minutes more.",
        imageSrc: "sdiane2.jpg",
    },
    ovenBakedDrumsticks: {
        name: "Oven-Baked Chicken Drumsticks",
        description: "A perfect dinner idea that can be flavored with any of your favorite seasonings.",
        ingredients: "1 tsp smoked paprika, 1/2 tsp garlic powder, 1/4 tsp onion powder, 1/8 tsp cayenne pepper, 1/4 tsp dried oregano, 1/2 tsp salt, 1/4 tsp freshly cracked black pepper, 1.75 lbs. chicken drumsticks (6 pieces), 2 Tbsp cooking oil",
        procedure: "1 - Preheat the oven to 425ºF. 2 - Combine the smoked paprika, garlic powder, onion powder, cayenne pepper, oregano, salt, and pepper in a bowl. 3 - Place the chicken drumsticks in a bowl and drizzle the cooking oil over top. 4 - Sprinkle the prepared seasoning over the drumsticks, then toss until they're evenly coated in oil and spices. 5 - Place the seasoned drumsticks on a baking sheet with enough space around each so they're not touching. 6 - You can line the baking sheet with foil or parchment for easier cleanup, if desired. 7 - Transfer the chicken to the oven and bake for 40 minutes, or until they reach an internal temperature of 175ºF, flipping the drumsticks once half-way through. 8 - Serve hot.",
        imageSrc: "bakedchicken.jpg",
    },
    porkChops: {
        name: "Smothered Pork Chops",
        description: "A perfect dish that’s so easy to whip up, flavor-filled, and extra extra cozy!",
        ingredients: "Pork chops, Olive oil, All-purpose flour, Chicken stock, Salt, Pepper, Garlic powder, Smoked paprika",
        procedure: "1 - Season the pork chops and season the chops with salt/pepper- to taste, along with the garlic powder and smoked paprika on all sides. 2 - Dredge the chops and add the flour into a shallow dish. Dip each pork chop into the flour, coating well on all sides, and then shake off excess flour. 3 - Pan-fry the pork chops in a large skillet, heat the butter/olive oil over medium heat. 4 - Add the pork chops into the skillet and cook the pork chops until a nice brown sear/crust appears. 5 - Then set the fried pork chops aside. 6 - Sauté the onions and add the onions into the skillet and sauté, stirring often. 7 - Then add in the garlic and continue stirring until fragrant, about 1 minute. 8 - Prepare the gravy and sprinkle the flour into the skillet. 9 - Stir the flour into the onion mixture until all the flour begins to dissolve. 10 - Add in the fresh thyme and pour in the stock and scrape up any bits on the bottom of the pan. 11 - Stir in the heavy cream to bring the gravy together and allow the mixture to come up to a simmer. 12 - Then taste the gravy and adjust it to your preference by adding more salt/pepper (or other seasonings), if desired. 13 - Bring the smothered pork chops together. Add in the pork chops and spoon the gravy over them. 14 - Let the chops simmer in the gravy and the gravy will thicken nicely, take on a deeper color, and meld with the pork chops. 15 - Serve and remove from heat and let the dish cool for 5 minutes. 16 - Serve these smothered pork chops immediately alongside your favorite sides like mashed potatoes, rice, veggies, or other desired side items. Enjoy!",
        imageSrc: "sporkchops2.jpg",
    },
    parmesanChicken: {
        name: "Parmesan Crusted Chicken",
        description: "Such a tasty and exciting way to prepare otherwise bland chicken!",
        ingredients: "Boneless skinless chicken breast, Olive oil, All-purpose flour, Eggs, Italian seasoning, Garlic powder, Panko bread crumbs, Salt, Pepper",
        procedure: "1 - Cut and flatten chicken breasts: Butterfly and split each chicken breasts into two portions, making four pieces total. 2 - Cover chicken with plastic wrap and pound each piece to an even 1/4-inch thickness with the flat side of a meat mallet. 3 - Mix flour and seasonings: In one shallow dish add flour, Italian seasoning and garlic powder and whisk to blend. 4 - Blend eggs: In a second shallow dish whisk eggs together until blended. 5 - Mix panko and parmesan: In a third shallow dish, toss together panko and parmesan. 6 - Dredge chicken flour and egg: Season chicken cutlets with salt and pepper on each side. 7 - Then working with one at a time, dredge both sides in flour mixture, transfer to eggs and dredge both sides, lift and let excess run of. 8 - Coat in parmesan mixture: Transfer to panko parmesan mixture, coat both sides while pressing mixture in to coat well. 9 - Heat oil in pan: Heat 1/4 cup olive in a 12-inch heavy non-stick skillet over medium heat. 10 - Cook chicken until browned: Add two breasts to preheated skillet and let cook until golden brown on bottom, about 4 minutes (if needed reduce burner temperature slightly if you find it’s browning too quickly). 11 - Flip and continue to cook until golden brown on bottom and center registers 165 degrees on an instant read thermometer, about 4 minutes longer. 12 - Rest chicken on paper towels: Transfer to a plate lined with paper towels to drain, leaving oil in skillet. Add remaining 2 Tbsp oil to skillet and repeat cooking process with remaining two chicken breasts. 13 - Garnish and serve: Serve warm with lemon wedges and garnished with parsley if desired.",
        imageSrc: "pcchicken.jpeg",
    },
    fishSticks: {
        name: "Crunchy Potato Chip-Crusted Fish Sticks",
        description: "Bring everyone to the table with this crispy fish dish.",
        ingredients: "1 pound tilapia or any white fish cut into strips, 1 1/2 cups finely crushed potato chips, 1/2 cup all purpose flour, 1 teaspoon salt, 1/2 teaspoon cayenne pepper, 1/4 teaspoon black pepper, 1 egg fresh parsley",
        procedure: "1 - Preheat oven to 450 F In a bowl, beat the egg. 2 - Add the fish and coat all the fish. Put the potato chips, all purpose flour, salt, cayenne pepper and black pepper in a large bowl. 3 - Stir and remove each piece of fish from the egg, and dredge through the crumbs, pressing gently to adhere. 4 - Place on a prepared baking sheet and repeat with all fish strips and you may need to use two pans to avoid overcrowding your fish then lightly spray the fish with cooking spray. 5 - Bake for 10-12 minutes. 6 - Serve warm and garnish with chopped parsley.",
        imageSrc: "cpcfishsticks.jpeg",
    },
};


// Function to display recipe details
function showRecipe(recipeKey) {
    const recipe = recipes[recipeKey];
    if (recipe) {
        // Split ingredients into an array by comma and space
        const ingredientsList = recipe.ingredients.split(", ").map(item => `<li>${item}</li>`).join("");

        // Split procedure into steps by commas and spaces
        const procedureSteps = recipe.procedure.split(". ").map(step => `<li>${step.trim()}.</li>`).join("");

        document.getElementById("detail-box").innerHTML = `
            <div id="recipeContent" style="text-align: center;">
                <h2>${recipe.name}</h2>
                <p><em>${recipe.description}</em></p>
                <div class="image">
                    <img src="${recipe.imageSrc}" alt="${recipe.name}" style="max-width:100%; height:auto;">
                </div>
                <h3>INGREDIENTS:</h3>
                <!-- Justified ingredients list, centered -->
                <ul style="list-style-type: none; padding: 0; margin: 0 auto; width: 80%; text-align: justify;">
                    ${ingredientsList}
                </ul>

                <h3>PROCEDURE:</h3>
                <!-- Justified procedure steps, centered -->
                <ul style="list-style-type: none; padding: 0; margin: 0 auto; width: 80%; text-align: justify;">
                    ${procedureSteps}
                </ul>
            </div>
        `;
    }
}