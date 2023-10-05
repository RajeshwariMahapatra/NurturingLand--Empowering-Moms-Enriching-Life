import React, { useState } from 'react';
import "./Recipe.css"

const ingredientToNutritionMap = {
    apple: { calories: 95, sugar: 19 },
    banana: { calories: 105, sugar: 14 },
    orange: { calories: 62, sugar: 12 },
    spinach: { calories: 23, sugar: 0.4 },
    chicken: { calories: 335, sugar: 0 },
    egg: { calories: 68, sugar: 0.6 },
    broccoli: { calories: 55, sugar: 1.5 },
    tomato: { calories: 18, sugar: 2.6 },
    carrot: { calories: 41, sugar: 4.7 },
    cucumber: { calories: 16, sugar: 1.9 },
    lettuce: { calories: 5, sugar: 0.9 },
    potato: { calories: 130, sugar: 0.8 },
    rice: { calories: 130, sugar: 0.1 },
    pasta: { calories: 131, sugar: 0.8 },
    bread: { calories: 79, sugar: 1.4 },
    salmon: { calories: 206, sugar: 0 },
    yogurt: { calories: 61, sugar: 4.7 },
    milk: { calories: 42, sugar: 5 },
    cheese: { calories: 113, sugar: 0.5 },
    avocado: { calories: 160, sugar: 0.7 },
    // Add more ingredients as needed
  };
  

const RecipeAnalyzer = () => {
  const [recipe, setRecipe] = useState('');
  const [nutritionInfo, setNutritionInfo] = useState(null);

  const analyzeRecipe = () => {
    const ingredients = recipe.toLowerCase().split('\n');
    let totalCalories = 0;
    let totalSugar = 0;

    ingredients.forEach(ingredient => {
      if (ingredientToNutritionMap[ingredient]) {
        totalCalories += ingredientToNutritionMap[ingredient].calories;
        totalSugar += ingredientToNutritionMap[ingredient].sugar;
      }
    });

    const goodFactors = [];
    const badFactors = [];

    // Determine good and bad factors based on calories and sugar
    if (totalCalories <= 200) {
      goodFactors.push('Low calorie content');
    } else {
      badFactors.push('High calorie content');
    }

    if (totalSugar <= 10) {
      goodFactors.push('Low sugar content');
    } else {
      badFactors.push('High sugar content');
    }

    setNutritionInfo({
      totalCalories,
      totalSugar,
      goodFactors,
      badFactors
    });
  };

  return (
    <div className='box-recipe'>
        <h2>Analyze your recipe &#127857;</h2>
      <textarea
        rows="10"
        cols="50"
        placeholder="Enter recipe here"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
      />
   <button
  onClick={analyzeRecipe}
  style={{
    padding: '10px',
    backgroundColor: '#793698',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
  }}
>
  Analyze Recipe
</button>


      {nutritionInfo && (
        <div className='box-recipe'>
          <h2>Recipe Analysis</h2>
          <p>Calories: {nutritionInfo.totalCalories}</p>
          <p>Sugar: {nutritionInfo.totalSugar}g</p>

          <h3>Good Factors</h3>
          <ul>
            {nutritionInfo.goodFactors.map((factor, index) => (
              <li key={index}>{factor}</li>
            ))}
          </ul>

          <h3>Bad Factors</h3>
          <ul>
            {nutritionInfo.badFactors.map((factor, index) => (
              <li key={index}>{factor}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeAnalyzer;
