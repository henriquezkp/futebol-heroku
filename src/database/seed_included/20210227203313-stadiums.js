'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('stadiums', [{
     name:'Arena Grêmio',
     capacity:60540,
     time_id:1,
     created_at:new Date()
    },
    {
      name:'Beira-Rio',
      capacity:50842,
      time_id:2,
      created_at:new Date()
     },
     {
      name:'Allianz Parque',
      capacity:55000,
      time_id:3,
      created_at:new Date()
     },
     {
      name:'Maracanã',
      capacity:78838,
      time_id:4,
      created_at:new Date()
     },
     {
      name:'Mineirão',
      capacity:62000,
      time_id:5,
      created_at:new Date()
     },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('stadiums', null, {});
  }
};
