const test = require('node:test');
const assert = require('node:assert/strict');

const { getRecommendedPlants } = require('./plantRoutes');

test('recommends plants based on category, light, and difficulty', () => {
  const plants = [
    {
      _id: '1',
      name: 'Snake Plant',
      category: 'Indoor Plants',
      light: 'Low to bright indirect light',
      difficulty: 'Easy',
    },
    {
      _id: '2',
      name: 'Rose Plant',
      category: 'Flowering Plants',
      light: 'Bright indirect light',
      difficulty: 'Medium',
    },
    {
      _id: '3',
      name: 'Aloe Vera',
      category: 'Succulents',
      light: 'Bright indirect light',
      difficulty: 'Easy',
    },
  ];

  const result = getRecommendedPlants(plants, {
    category: 'Succulents',
    light: 'Bright indirect light',
    difficulty: 'Easy',
  });

  assert.equal(result.length, 1);
  assert.equal(result[0].name, 'Aloe Vera');
});
