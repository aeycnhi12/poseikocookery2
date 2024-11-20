// Recipe data
const recipes = {
    cfries: {
        name: "Cheese Fries",
        description: "Quick, easy and a surefire hit at your next gameday potluck or family gathering.",
        ingredients: "1 package (28 ounces) frozen steak fries, 1 can (10-3/4 ounces) condensed cheddar cheese soup undiluted 1/4 cup 2% milk, 1/2 teaspoon garlic powder, 1/4 teaspoon onion powder Paprika",
        procedure: "1 - Arrange the steak fries in a single layer in 2 greased 15x10x1-inches baking pans and bake at 450° for 15-18 minutes or until tender and golden brown. 2 - Meanwhile, in a small saucepan, combine the soup, milk, garlic powder and onion powder; heat through and drizzle over fries; sprinkle with paprika.",
        imageSrc: "fries.jpg"
    },
    glazedMeatballs: {
        name: "Orange-Glazed Meatballs",
        description: "Extremely tasty and so very easy.",
        ingredients: "1 package (22 ounces) frozen fully cooked Angus beef meatballs, 1 jar (12 ounces) orange marmalade, 1/4 cup orange juice 3 green onions. chopped. divided, 1 jalapeno pepper. seeded and chopped",
        procedure: "1 - Prepare meatballs according to package directions. 2 - In a small saucepan, heat the marmalade, orange juice, half the green onions, and the jalapeno. 3 - Place meatballs in a serving dish; pour glaze over the top and gently stir to coat. 4 - Garnish with remaining green onions.",
        imageSrc: "meatballs.jpg",
    },
    springRoll: {
        name: "Crispy Spring Roll",
        description: "Such a great appetizer to have waiting in the freezer!",
        ingredients: "3 cups coleslaw mix (about 7 ounces), 3 green onions chopped, 1 tablespoon soy sauce, 1 teaspoon sesame oil, 1 pound boneless skinless chicken breasts, 1 teaspoon seasoned salt, 2 packages (8 ounces each) cream cheese softened, 1 package (24 to 28 each) spring roll wrappers, thawed Oil for deep-fat frying, Sweet chili sauce it's optional",
        procedure: "1 - Toss coleslaw mix, onions, soy sauce and sesame oil; let stand while cooking chicken and in a saucepan, bring 4 cups water to a boil and reduce heat to maintain a simmer then Add chicken; cook, covered, until a thermometer inserted in chicken reads 165°, 15-20 minutes then remove chicken; cool slightly, finely chop chicken; toss with seasoned salt. 2 - In a large bowl, mix cream cheese and chili sauce; stir in chicken and coleslaw mixture, with a corner of a spring roll wrapper facing you, place about 2 tablespoons filling just below center of wrapper and Fold bottom corner over filling; moisten remaining edges with water.Fold side corners toward center over filling; roll up tightly, pressing tip to seal, repeat. 3 - In a cast-iron Dutch oven or electric skillet, heat oil to 375°, fry spring rolls, a few at a time, until golden brown, 6-8 minutes, turning occasionally and drain on paper towels, if desired, serve with sweet chili sauce.",
        imageSrc: "springroll.jpg",
    },
    chickWings: {
        name: "Sweet Chicken Wings",
        description: "You'll have fantastic appetizers ready when your guests arrive.",
        ingredients: "12 chicken wings (about 3 pounds), 1/2 teaspoon salt, divided Dash pepper 1-1/2 cups ketchup, 1/4 cup packed brown sugar, 1/4 cup red wine vinegar, 2 tablespoons Worcestershire sauce, 1 tablespoon Dijon mustard, 1 teaspoon minced garlic, 1 teaspoon liquid smoke it's optional",
        procedure: "1 - Using a sharp knife, cut through the 2 wing joints; discard wingtips.Sprinkle chicken with a dash of salt and pepper.Broil 4-6 in.from the heat until golden brown, 6-8 minutes on each side.Transfer to a greased 5-qt.slow cooker. 2 - Combine the ketchup, brown sugar, vinegar, Worcestershire sauce, mustard, garlic, liquid smoke if desired and remaining salt; pour over wings and toss to coat. 3 - Cover and cook on low until chicken is tender, 2-3 hours If desired, top with jalapenos, onion and sesame seeds to serve.",
        imageSrc: "chickwings.jpg",
    },
    deviledEggs: {
        name: "Deviled Eggs",
        description: "Classic version for an easy party treat.",
        ingredients: "12 large hard-boiled eggs peeled, ⅓ cup mayonnaise, 1 tablespoon pickle relish, 1 teaspoon Dijon mustard, 1 teaspoon yellow mustard, 1 teaspoon apple cider vinegar, ½ teaspoon salt, ¼ teaspoon ground black pepper, 1 teaspoon ground paprika",
        procedure: "1 - Slice eggs in half lengthwise and remove yolks and place yolks in a medium bowl and set whites aside. 2 - Mash yolks with a fork and add mayonnaise, relish, Dijon, yellow mustard, vinegar, salt, and pepper; stir until well combined and smooth and transfer to a large zip-top bag. 3 - Arrange egg whites on a tray then snip off the bottom corner of the zip-top bag and fill each white with about 1½ to 2 teaspoons filling and sprinkle with paprika.",
        imageSrc: "eggs.jpeg",
    },
    cheeseBalls: {
        name: "Cheese Balls",
        description: "Festive and fancy, but still so easy, make a cheese ball for your next gathering.",
        ingredients: "16 ounces cream cheese softened, 2 cups freshly grated sharp cheddar cheese (avoid pre-shredded cheese), 2 green onion , chopped, 1 teaspoon Worcestershire sauce, 1 teaspoon hot pepper sauce, 1 teaspoon dried parsley flakes, 1/2 teaspoon garlic powder, 1/2 teaspoon dried oregano leaves, dash freshly ground black pepper, 2/3 cup pecans finely chopped",
        procedure: "1 - Place cream cheese in a mixing bowl and mix until smooth.Add cheese, green onion, Worcestershire sauce, hot sauce, parley, garlic powder, oregano and pepper and mix well to combine. 2 - Use a rubber spatula to scrape the sides of the bowl and gather the mixture into one lump. Lightly grease your hands and form the mixture into a round ball. 3 - Place the pecans on a plate.Hold the cheese ball in one hand and use the other hand to scoop the pecans onto the outside of the ball, pressing them in gently and turning the ball to coat all sides. 4 - Cover the cheeseball in cling wrap and refrigerate for about 1 hour to allow it to firm up and take it out of the refrigerator about 20 minutes before serving to allow it to soften just slightly. Serve with crackers, pretzels, vegetables or anything else you'd love to dip in cheese!",
        imageSrc: "cheeseballs.jpg",
    },
    tunameltNachos: {
        name: "Tuna Melt Nachos",
        description: "You are really going to love these.",
        ingredients: "1 (5.5 ounce) jar tuna packed in olive oil drained, 1 small rib celery diced, 1/4 teaspoon freshly ground black pepper, 1 pinch cayenne pepper, 1/3 cup mayonnaise or to taste, 24 corn tortilla chips, 1/2 cup pickled jalapeno rings, 6 cherry tomatoes sliced, 3 ounces Monterey Jack cheese grated, 3 ounces sharp Cheddar cheese grated, 1/4 cup sliced green onions",
        procedures: "1 - Break up tuna in a bowl with a fork into small flakes.Add celery, black pepper, cayenne, and mayonnaise.Mix well, cover, and refrigerate until needed. 2 - Preheat the oven to 475 degrees F (245 degrees C).Line a sheet pan with foil, and space chips out evenly on the pan.Top each chip with a generous rounded teaspoon tuna salad. 3 - Place a jalapeno ring on top of tuna, followed by a slice of tomato, pressing down lightly as you do. Top with cheese, piling it as high as possible in the middle of each nacho.Use any extra cheese to cover exposed areas of chips. 4 - Bake in the preheated oven until cheese is melted and the edges of chips are turning golden brown, 5 to 8 minutes.Alternately, preheat the oven’s broiler and broil nachos for just a few minutes until cheese melts and chip edges are golden. 5 - Scatter green onions over the top, and serve immediately.",
        imageSrc: "tunanachos.jpg",
    },
    homePizza: {
        name: "Homemade Pizza",
        description: "Perfect for a family night or dinner with friends.",
        ingredients: "For the dough:  2 1/4 teaspoons active dry yeast, 1 teaspoon sugar, 1 1/2 cups warm water, 3 1/2 cups all-purpose flour, 2 tablespoons olive oil, 1 teaspoon salt, For the sauce:  1 cup tomato sauce, 1 teaspoon dried oregano, 1 teaspoon garlic powder, 1/2 teaspoon salt, Toppings:  1 1/2 cups shredded mozzarella cheese Fresh basil leaves (optional) Olive oil (for drizzling)",
        procedure: "1 - Prepare the dough: In a bowl, dissolve the sugar and yeast in warm water and let it sit for 5-10 minutes until foamy. Add flour, olive oil, and salt, mixing until a dough forms. Knead for 7-10 minutes, then let it rise in a warm place for 1-2 hours or until doubled in size. 2 - Prepare the sauce: In a small saucepan, combine tomato sauce, oregano, garlic powder, and salt. Simmer on low heat for about 10 minutes, stirring occasionally. 3 - Assemble the pizza: Preheat your oven to 475°F (245°C). Roll out the dough on a floured surface to your desired thickness. Transfer to a pizza stone or baking sheet. Spread the sauce over the dough, sprinkle with cheese, and add any other toppings you prefer. 4 - Bake: Bake in the oven for 10-12 minutes, or until the crust is golden and the cheese is bubbly and slightly browned. Drizzle with olive oil and garnish with fresh basil before serving.",
        imageSrc: "pizza.jpeg",
    },
    bugleBites: {
        name: "Peanut Butter Bugle Bites",
        description: "This snack is both fun to make and irresistible to eat, especially for kids or as a quick party treat!",
        ingredients: "1 (7.5 oz) bag Bugles chips (original flavor), 1 cup creamy peanut butter, 1/3 cup powdered sugar, 1 cup chocolate chips (milk or semi-sweet), 2 tsp water (for peanut butter mixture optional)",
        procedure: "1 - Sort the Bugles, selecting those with larger openings for stuffing. 2 - Mix the peanut butter and powdered sugar, adding a bit of water if needed to achieve a thick yet pipeable consistency. 3 - Pipe the peanut butter into the Bugles. 4 - Melt the chocolate chips and dip the tip of each stuffed Bugle into the chocolate. 5 - Place on wax paper to set. 6 - Once the chocolate has hardened, store the Bugle bites in an airtight container",
        imageSrc: "peanutbites.jpeg",
    },
    sausageBalls: {
        name: "Doritos Sausage Balls",
        description: "A crunchy, cheesy twist on classic sausage balls, perfect for snacking or party appetizers.",
        ingredients: "1 lb ground sausage, 1 ½ cups shredded cheddar cheese, 1 ½ cups crushed Doritos (any flavor you prefer), 1 cup Bisquick mix, ¼ cup milk",
        procedure: "1 - Preheat oven to 350°F (175°C). 2 - In a large bowl, mix sausage, cheddar cheese, crushed Doritos, Bisquick mix, and milk until well combined. 3 - Roll the mixture into 1-inch balls and place them on a greased baking sheet. 4 - Bake for 20-25 minutes or until golden brown and cooked through. 5 - Let cool slightly before serving.",
        imageSrc: "sausageballs.jpeg",
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
