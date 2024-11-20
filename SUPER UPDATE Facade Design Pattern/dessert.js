// Recipe data
const recipes = {
    choclavaCake: {
        name: "Chocolate Lava Cake",
        description: "A decadent cake with a gooey, molten chocolate center.",
        ingredients: "1 cup semi-sweet chocolate chips, ½ cup butter, 1 cup powdered sugar, 2 large eggs, 2 egg yolks, 6 tbsp flour.",
        procedure: "1 - Preheat oven to 425°F (220°C). 2 - Melt chocolate and butter together, stir in sugar, then eggs and flour. 3 - Pour into greased ramekins. 4 - Bake for 12-14 minutes, let cool slightly, then serve warm.",
        imageSrc: "lavacake.jpeg"
    },
    classicTiramisu: {
        name: "Classic Tiramisu",
        description: "An Italian coffee-flavored dessert layered with creamy mascarpone.",
        ingredients: "1 cup espresso, 3 tbsp sugar, 4 egg yolks, 1 cup mascarpone, 1 cup heavy cream, 1 package ladyfingers, cocoa powder for dusting.",
        procedure: "1  - Beat egg yolks with sugar, fold in mascarpone. 2 - Whip cream and fold in, dip ladyfingers in espresso, layer with cream in a dish. 3 - Chill for 4 hours and dust with cocoa powder.",
        imageSrc: "tiramisu.jpeg"
    },
    cheesecakeBites: {
        name: "Strawberry Cheesecake Bites",
        description: "Mini cheesecakes with fresh strawberry topping.",
        ingredients: "1 cup graham cracker crumbs, 3 tbsp butter, 8 oz cream cheese, ¼ cup sugar, 1 egg, 1 tsp vanilla, fresh strawberries.",
        procedure: "1 - Mix crumbs and butter, press into mini muffin tin. 2 - Blend cream cheese, sugar, egg, vanilla, pour onto crust. 3 - Bake at 350°F (175°C) for 15 minutes, then top with strawberries.",
        imageSrc: "cheesecakebites.jpeg"
    },
    lemonBars: {
        name: "Lemon Bars",
        description: "Sweet and tangy lemon bars with a buttery crust.",
        ingredients: "1 cup flour, ½ cup butter, ¼ cup powdered sugar, 1 cup sugar, 2 tbsp flour, 3 eggs, 2 lemons (juiced and zested).",
        procedure: "1 - Mix flour, butter, powdered sugar, press into pan, bake 15 min. 2 - Mix sugar, flour, eggs, lemon juice/zest, pour over crust. 3 - Bake at 350°F (175°C) for 20-25 min.",
        imageSrc: "lemonbars.jpeg"
    },
    peanutButter: {
        name: "Peanut Butter Blossoms",
        description: "Soft peanut butter cookies topped with a Hershey's kiss.",
        ingredients: "1 cup peanut butter, ½ cup sugar, ½ cup brown sugar, 1 egg, Hershey's Kisses.",
        procedure: "1 - Mix peanut butter, sugars, egg. 2 - Form dough balls, bake at 350°F (175°C) for 10 min. 3 - Place a Hershey's Kiss in the center of each cookie.",
        imageSrc: "peanutbutter.jpeg",
    },
    coconutMacaroons: {
        name: "Coconut Macaroons",
        description: "Chewy coconut cookies with a hint of vanilla.",
        ingredients: "2 ½ cups shredded coconut, ⅔ cup sweetened condensed milk, 1 tsp vanilla.",
        procedure: "1 - Preheat oven to 325°F (160°C). 2 - Mix all ingredients, scoop onto baking sheet. 3 - Bake for 15-20 minutes until golden brown.",
        imageSrc: "macaroons.jpeg",
    },
    caramelBrownies: {
        name: "Molten Salted Caramel Brownies",
        description: "Rich brownies with a molten caramel core and a sprinkle of sea salt.",
        ingredients: "1 cup chocolate chips, ½ cup butter, ¾ cup sugar, 2 eggs, ½ cup flour, ¼ cup caramel sauce, sea salt.",
        procedure: "1 - Melt chocolate and butter, add sugar, eggs, flour. 2 - Pour half batter into pan, add caramel, top with remaining batter. 3 - Bake at 350°F (175°C) for 20-25 minutes, sprinkle with sea salt.",
        imageSrc: "brownies.jpeg",
    },
    pineappleCake: {
        name: "Pineapple Upside-Down Cake",
        description: "A tropical cake topped with caramelized pineapples and cherries.",
        ingredients: "1 can pineapple slices, ½ cup brown sugar, ¼ cup butter, 1 box yellow cake mix, maraschino cherries.",
        procedure: "1 - Melt butter with brown sugar in cake pan, layer pineapple and cherries. 2 - Prepare cake mix, pour over pineapple. 3 - Bake at 350°F (175°C) for 40-45 minutes, then invert.",
        imageSrc: "pineapplecake.jpeg",
    },
    appleCrisp: {
        name: "Apple Crisp",
        description: "Warm spiced apples with a crunchy oat topping.",
        ingredients: "5 cups sliced apples, ½ cup sugar, 1 tsp cinnamon, 1 cup oats, ½ cup flour, ½ cup brown sugar, ½ cup butter.",
        procedure: "1 - Toss apples with sugar and cinnamon, place in dish. 2 - Mix oats, flour, sugar, butter; sprinkle over apples. 3 - Bake at 350°F (175°C) for 35-40 min.",
        imageSrc: "applecrisp.jpeg",
    },
    bananaPudding: {
        name: "Banana Pudding Cups",
        description: "Creamy banana pudding with layers of wafers and whipped cream.",
        ingredients: "1 box instant vanilla pudding, 2 cups milk, 3 bananas, vanilla wafers, whipped cream.",
        procedure: "1 - Prepare pudding with milk, layer in cups with banana slices and wafers. 2 - Top with whipped cream. 3 - Chill before serving.",
        imageSrc: "bananapudding.jpeg",
    },
    // Add more recipes here
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