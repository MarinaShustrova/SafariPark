'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'News',
      [
        {
          title: 'New babies has come!',
          content:
            'Female lions, lionesses, are able to give birth to cubs all year round, usually from the age of about three or four years old.  Pregnancy lasts for around 110 to 120 days.Eventually, when it is time to give birth, lionesses leave their family pride to find a private den in the shelter of bushes, or even a cave',
          image:
            'https://images.unsplash.com/photo-1667377532685-7048d322143e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1137&q=80',
          adminId: '3',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          title: 'Some new rooms will come in the early of the spring!',
          content:
            'Inverdoorn Big 5 Private Game Reserve is just under 2.5 hours’ drive from Cape Town, in the malaria-free Ceres Karoo. The reserve is also home to a successful cheetah conservation project and has made a significant contribution to sustaining the biodiversity of the region.',
          image:
            'https://images.unsplash.com/photo-1667987566780-3b31fa5485c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=730&q=80',
          adminId: '3',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          title: 'New surfing spots!',
          content:
            'Inverdoorn Big 5 Private Game Reserve is just under 2.5 hours’ drive from Cape Town, in the malaria-free Ceres Karoo. The reserve is also home to a successful cheetah conservation project and has made a significant contribution to sustaining the biodiversity of the region.',
          image:
            'https://images.unsplash.com/photo-1566664183497-b513f376e91a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80',
          adminId: '1',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          title: 'Hiking destinations!',
          content:
            'Inverdoorn Big 5 Private Game Reserve is just under 2.5 hours’ drive from Cape Town, in the malaria-free Ceres Karoo. The reserve is also home to a successful cheetah conservation project and has made a significant contribution to sustaining the biodiversity of the region.',
          image:
            'https://images.unsplash.com/photo-1526945870720-88be78ede6e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
          adminId: '2',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          title: 'Pinguins!',
          content:
            ' Inverdoorn Big 5 Private Game Reserve is just under 2.5 hours’ drive from Cape Town, in the malaria-free Ceres Karoo. The reserve is also home to a successful cheetah conservation project and has made a significant contribution to sustaining the biodiversity of the region.',
          image:
            'https://plus.unsplash.com/premium_photo-1661876658038-8d141832b5de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
          adminId: '3',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          title: 'New Menu in our restairant!',
          content:
            'Inverdoorn Big 5 Private Game Reserve is just under 2.5 hours’ drive from Cape Town, in the malaria-free Ceres Karoo. The reserve is also home to a successful cheetah conservation project and has made a significant contribution to sustaining the biodiversity of the region.',
          image:
            'https://images.unsplash.com/photo-1592417817038-d13fd7342605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          adminId: '2',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('News', null, {});
  }
};
