'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('times', [{
      name: 'Grêmio FBPA',
      fundation: 1903,
      state: 'RS',
      city: 'Porto Alegre',
      created_at: new Date(),
    },
    {
      name:'SC Internacional', 
      fundation: 1909, 
      state: 'RS', 
      city: 'Porto Alegre',
      created_at: new Date(),
    },
    {
      name:'SE Palmeiras', 
      fundation: 1914, 
      state: 'SP', 
      city: 'São Paulo',
      created_at: new Date(),
    },
    {
      name:'CR Flamengo', 
      fundation: 1895, 
      state: 'RJ', 
      city: 'Rio de Janeiro',
      created_at: new Date(),
    },
    {
      name:'Atlético Mineiro', 
      fundation: 1908, 
      state: 'MG', 
      city: 'Belo Horizonte',
      created_at: new Date(),
    },
    {
      name:'Esporte Clube Juventude', 
      fundation: 1913, 
      state: 'RS', 
      city: 'Caxias do Sul',
      created_at: new Date(),
    },
    {
      name:'Sociedade Esportiva e Recreativa Caxias do Sul', 
      fundation: 1935, 
      state: 'RS', 
      city: 'Caxias do Sul',
      created_at: new Date(),
    },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('times', null, {});

  }
};
