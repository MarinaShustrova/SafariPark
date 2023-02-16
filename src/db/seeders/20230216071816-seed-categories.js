'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: 'Lions',
        },
        {
          title: 'Buffaloes',
        },
        {
          title: 'Rhinos',
        },
        {
          title: 'Elephants',
        },
        {
          title: 'Leopards',
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
