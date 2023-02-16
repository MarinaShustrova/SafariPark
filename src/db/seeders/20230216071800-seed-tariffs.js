'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tariffs',
      [
        {
          title: 'Ambassador Suite',
          description: 'The Suite is the jewel in the crown of Inverdoorn and is a free-standing unit with its own private rooftop terrace. No expense was spared on the interior with a truly magnificent king size bed as the focal point.',
          condition: 'Ideal for a romantic couples safari stay! ',
          price: '250000',
          image:
            'https://images.unsplash.com/photo-1592383809697-4986ac3151c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
        },
        {
          title: 'Ambassador Chalet',
          description: 'Each room is uniquely decorated and makes you feel welcome in the ceres Karoo with wide open windows overlooking the private pool and vast expanse of the reserve. Your safari consultant will advise on the room options based on your requirements.',
          condition: 'Ideal for a romantic couples safari stay!',
          price: '200000',
          image:
          'https://images.unsplash.com/photo-1607712617949-8c993d290809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
        },
        {
          title: 'Tankwa Chalet',
          description: 'They are all shower en-suite and hosts a beautiful veranda overlooking the succulent garden. Your safari consultant will make the best possible room selection based on your requirements.',
          condition: 'The Tankwa chalets can sleep up to two people and can accommodate singles sharing.',
          price: '100000',
          image:
            'https://images.unsplash.com/photo-1570133435529-62359fac701b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        },
        {
          title: 'Family Lodge',
          description: 'Ideal for families / groups of travellers',
          condition: 'Please note that all lodge rooms have a unique and exciting layout that varies in configuration.',
          price: '100',
          image:
            'https://images.unsplash.com/photo-1621295070837-50fec3df9dff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tariffs', null, {});
  }
};
