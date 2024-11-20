// Recipe data
const recipes = {
    greekSalad: {
        name: "Greek Salad",
        description: "A refreshing Mediterranean salad with a tangy dressing.",
        ingredients: "1 cucumber, 1 pint cherry tomatoes, 1 green bell pepper, 1/2 red onion, 1/2 cup Kalamata olives, 1/2 cup feta cheese, 3 tbsp olive oil, 1 tbsp red wine vinegar, salt, pepper, oregano.",
        procedure: "1 - Chop vegetables, toss with olives and feta. 2 - Whisk olive oil, vinegar, salt, pepper, and oregano. 3 - Pour over salad and mix.",
        imageSrc: "greek.jpeg",
    },
    caesarSalad: {
        name: "Caesar Salad",
        description: "Classic Caesar salad with crisp romaine and creamy dressing.",
        ingredients: "1 head romaine lettuce, 1/2 cup croutons, 1/4 cup grated Parmesan, 1/4 cup Caesar dressing.",
        procedure: "1 - Chop lettuce, toss with croutons and Parmesan. 2 - Drizzle with Caesar dressing, mix well. 3 - Serve immediately.",
        imageSrc: "caesar.jpeg",
    },
    capreseSalad: {
        name: "Caprese Salad",
        description: "A simple Italian salad with fresh tomatoes, mozzarella, and basil.",
        ingredients: "2 large tomatoes, 1 ball fresh mozzarella and fresh basil leaves, 2 tbsp olive oil,balsamic glaze,salt and pepper.",
        procedure: "1 - Slice tomatoes and mozzarella, layer with basil on a plate. 2 - Drizzle with olive oil and balsamic glaze. 3 - Season with salt and pepper.",
        imageSrc: "caprese.jpeg",
    },
    waldorfSalad: {
        name: "Waldorf Salad",
        description: "A sweet and crunchy salad with apples, grapes, and walnuts.",
        ingredients: "2 apples, 1 cup grapes, 1/2 cup celery, 1/2 cup walnuts, 1/4 cup mayonnaise, 1 tbsp lemon juice, salt.",
        procedure: "1 - Chop apples, grapes, and celery, toss with walnuts. 2 - Mix mayonnaise and lemon juice, pour over salad, toss, and season with salt.",
        imageSrc: "waldorf.jpeg",
    },
    cobbSalad: {
        name: "Cobb Salad",
        description: "A hearty salad loaded with protein and veggies.",
        ingredients: "2 cups chopped romaine, 1 cooked chicken breast, 2 hard-boiled eggs, 1/2 avocado, 1/4 cup bacon bits, 1/4 cup blue cheese, 1/2 cup cherry tomatoes, 2 tbsp ranch dressing.",
        procedure: "1 - Arrange ingredients in rows over romaine, drizzle with ranch dressing and mix before serving.",
        imageSrc: "cobb.jpeg",
    },
    quinoaSalad: {
        name: "Quinoa Salad",
        description: "A healthy, protein-packed salad with colorful veggies.",
        ingredients: "1 cup cooked quinoa, 1/2 cucumber, 1/2 bell pepper, 1/4 cup cherry tomatoes, 1/4 cup feta, 2 tbsp olive oil, 1 tbsp lemon juice, salt, pepper.",
        procedure: "1 - Chop veggies, mix with quinoa and feta. 2 - Whisk olive oil and lemon juice, pour over salad. 3 - Season with salt and pepper.",
        imageSrc: "quinoa.jpg",
    },
    tacoSalad: {
        name: "Taco Salad",
        description: "A zesty, Mexican-inspired salad with seasoned beef and tortilla chips.",
        ingredients: "1 lb ground beef, 1 packet taco seasoning, 4 cups chopped romaine, 1 cup cherry tomatoes, 1/2 cup shredded cheddar, 1/4 cup black beans, 1/4 cup corn, crushed tortilla chips, 2 tbsp salsa, sour cream.",
        procedure: "1 - Cook beef with taco seasoning, layer over romaine with veggies, cheese, and chips. 2 - Top with salsa and sour cream.",
        imageSrc: "taco.jpg",
    },
    fruitSalad: {
        name: "Fruit Salad",
        description: "A refreshing mix of seasonal fruits, perfect for summer.",
        ingredients: "1 cup strawberries, 1 cup blueberries, 1 cup pineapple, 1 cup grapes, 1 tbsp honey, 1 tbsp lime juice.",
        procedure: "1 - Chop fruits, toss in a bowl with honey and lime juice. 2 - Chill before serving.",
        imageSrc: "fruit.jpg",
    },
    ssSalad: {
        name: "Spinach and Strawberry Salad",
        description: "A sweet and savory salad with spinach, strawberries, and nuts.",
        ingredients: "4 cups baby spinach, 1 cup sliced strawberries, 1/4 cup crumbled feta, 1/4 cup sliced almonds, 2 tbsp balsamic vinaigrette.",
        procedure: "1 - Toss spinach with strawberries, feta, and almonds. 2 - Drizzle with balsamic vinaigrette and serve.",
        imageSrc: "spinachstrawberry.jpg",
    },
    chickpeaSalad: {
        name: "Chickpea Salad",
        description: "A protein-rich, Mediterranean-inspired salad with chickpeas and veggies.",
        ingredients: "1 can chickpeas (drained), 1/2 cucumber, 1 bell pepper, 1/4 red onion, 1/4 cup feta, 2 tbsp olive oil, 1 tbsp lemon juice, salt, pepper.",
        procedure: "1 - Chop veggies, mix with chickpeas and feta. 2 - Whisk olive oil and lemon juice, pour over salad. 3 - Season with salt and pepper.",
        imageSrc: "chickpea.jpg",
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