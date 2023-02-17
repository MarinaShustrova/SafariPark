/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Photos',
      [
        {
          photoUrl:
            'https://images.unsplash.com/photo-1617811469681-4e21c241c6f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '1',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1617938544737-cf7b41829226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '1',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1562512619-e5ed0e495c78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
          animalId: '1',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1420537659459-1e231ca42aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
          animalId: '1',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1617939855346-013c3ffd9f7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '1',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1536766124229-31a2f84a15e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '2',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1635989652226-7f0bdddbc254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '2',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1603696861627-db79cf52fecb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '2',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1643705103385-4c59d18f318d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          animalId: '2',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1673538232178-36b3763f76ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80',
          animalId: '2',
        },

        {
          photoUrl:
            'https://images.unsplash.com/photo-1622228189015-4c515d2b6e3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=355&q=80',
          animalId: '3',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1605477899141-ac050a727db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '3',
        },
        {
          photoUrl:
            'https://plus.unsplash.com/premium_photo-1669749405985-ed92c0f4591f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
          animalId: '3',
        },
        {
          photoUrl:
            'https://plus.unsplash.com/premium_photo-1666434349504-c8b97ba92202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '3',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1603980186209-dcee4ed03804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
          animalId: '3',
        },
        {
          photoUrl:
            'https://images.unsplash.com/flagged/photo-1557650454-65194af63bf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
          animalId: '3',
        },
        {
          photoUrl:
            'https://plus.unsplash.com/premium_photo-1674381524416-33a576d6ca0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '4',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1598403872208-7862e169627a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '4',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80',
          animalId: '4',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1578326626553-39f72c545b07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=498&q=80',
          animalId: '4',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1481464904474-a575a33b44a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
          animalId: '4',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1507461476191-0ed4f9f18533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '4',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1507088164404-020d1e905959?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '5',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1607490703747-0519d2e398a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '5',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1517001562194-ca1237cece44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          animalId: '6',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1568265020850-6d7e9ce0d9d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
          animalId: '6',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1520416140540-399f5b38fdd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          animalId: '6',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1520416140540-399f5b38fdd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          animalId: '6',
        },
        {
          photoUrl:
            'https://plus.unsplash.com/premium_photo-1666238814567-7f076738a865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
          animalId: '7',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1477949858942-6a62ff5e8e19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '7',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1527436553949-ea84cd6cf13c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '7',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1620197368014-e5a28b2101ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '7',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1532714845903-d7b2a053e92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=377&q=80',
          animalId: '8',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1505148230895-d9a785a555fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '8',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1516728778615-2d590ea1855e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '8',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1600521605615-a8d3a23d8262?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
          animalId: '8',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1593580857599-f146a20d4a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
          animalId: '8',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1535082623926-b39352a03fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=891&q=80',
          animalId: '9',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80',
          animalId: '9',
        },
        {
          photoUrl:
            'https://plus.unsplash.com/premium_photo-1666756340142-3523bd857e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
          animalId: '9',
        },
        {
          photoUrl:
            'https://plus.unsplash.com/premium_photo-1666755275570-e4bce99191f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '9',
        },

        {
          photoUrl:
            'https://images.unsplash.com/photo-1577971132997-c10be9372519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '10',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1535940007269-f666929cfcb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80',
          animalId: '10',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1557692507-93283615ee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '10',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1552525474-160d91b976c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '10',
        },

        {
          photoUrl:
            'https://images.unsplash.com/photo-1595961664428-e76d5638e9a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '11',
        },
        {
          photoUrl:
            'https://plus.unsplash.com/premium_photo-1661935933888-766ab510f468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '11',
        },

        {
          photoUrl:
            'https://plus.unsplash.com/premium_photo-1661935933888-766ab510f468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '12',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1570588700763-a8a3a802aa2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
          animalId: '12',
        },

        {
          photoUrl:
            'https://images.unsplash.com/photo-1532199286643-4b8e3f4a2fd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80',
          animalId: '13',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80',
          animalId: '13',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1509273643562-1e5a5f769955?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
          animalId: '13',
        },
        {
          photoUrl:
            'https://images.unsplash.com/flagged/photo-1566220978828-14849ad915d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
          animalId: '13',
        },

        {
          photoUrl:
            'https://images.unsplash.com/photo-1549116553-fb8817f12324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '14',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1547471080-19acba333038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '14',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1619685127973-1d0f61bf25ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          animalId: '14',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1588476270600-ede6e4dc1576?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '15',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1535758447558-77807254caef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80',
          animalId: '15',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1504616516087-fca44d1f8737?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '15',
        },

        {
          photoUrl:
            'https://images.unsplash.com/photo-1504616516087-fca44d1f8737?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '16',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1592670129766-ed2d2a1de098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '16',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1517118828960-de5ea37d8ae6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
          animalId: '17',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1629928487605-53b1b750452c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=381&q=80',
          animalId: '17',
        },

        {
          photoUrl:
            'https://images.unsplash.com/photo-1453259119614-6f02e8d5b25a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '18',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1517500565933-2e82631291d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
          animalId: '18',
        },

        {
          photoUrl:
            'https://images.unsplash.com/photo-1521128371335-c9d171809d8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '19',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1521128371335-c9d171809d8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '19',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1580687774199-51c183723dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '19',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1517035653065-1a1a7a5406f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '20',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1603632076161-5836b146638c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
          animalId: '21',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1611775046271-154cfc7c9b92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '21',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1575540450244-5d034af07d46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
          animalId: '21',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1527720484276-45cc79eb2f56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '22',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1522107992019-d841a73de1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '22',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1513436158476-868ee8782fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          animalId: '22',
        },

        {
          photoUrl:
            'https://images.unsplash.com/photo-1566296524462-e0a341bf65e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
          animalId: '23',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1572285024985-e98b5b3c1d41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          animalId: '23',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1535337829273-24a2ca1ed10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80',
          animalId: '23',
        },

      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photos', null, {});
  },
};
