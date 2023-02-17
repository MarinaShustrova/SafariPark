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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Sodales neque sodales ut etiam sit amet nisl purus. Erat nam at lectus urna duis convallis convallis tellus. Ullamcorper a lacus vestibulum sed.',
          image:
            'https://images.unsplash.com/photo-1667377532685-7048d322143e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1137&q=80',
          adminId: '3',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          title: 'Some new rooms will come in the early of the spring!',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam. Erat velit scelerisque in dictum non. Magna sit amet purus gravida. Quis viverra nibh cras pulvinar mattis nunc sed.',
          image:
            'https://images.unsplash.com/photo-1667987566780-3b31fa5485c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=730&q=80',
          adminId: '3',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          title: 'New surfing spots!',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat sed lectus vestibulum mattis ullamcorper velit. Purus faucibus ornare suspendisse sed nisi lacus sed. Ac odio tempor orci dapibus ultrices. Volutpat sed cras ornare arcu dui vivamus.',
          image:
            'https://images.unsplash.com/photo-1566664183497-b513f376e91a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80',
          adminId: '1',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          title: 'Hiking destinations!',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a. Tellus id interdum velit laoreet id donec ultrices tincidunt. Posuere morbi leo urna molestie at elementum eu facilisis. Cras tincidunt lobortis feugiat vivamus at augue eget.',
          image:
            'https://images.unsplash.com/photo-1526945870720-88be78ede6e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
          adminId: '2',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          title: 'Pinguins!',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Tincidunt ornare massa eget egestas purus. Vitae tempus quam pellentesque nec nam aliquam sem et tortor.',
          image:
            'https://plus.unsplash.com/premium_photo-1661876658038-8d141832b5de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
          adminId: '3',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          title: 'New Menu in our restairant!',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
