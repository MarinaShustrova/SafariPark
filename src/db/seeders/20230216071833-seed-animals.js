module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Animals',
      [
        {
          name: 'Leopard',
          description: 'Leopards are graceful and powerful big cats closely related to lions, tigers, and jaguars. They live in sub-Saharan Africa, northeast Africa, Central Asia, India, and China. However, many of their populations are endangered, especially outside of Africa.',
          image:
            'https://images.unsplash.com/photo-1554545336-52e7299189c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          categoryId: '1',
        },
        {
          name: 'Leopard',
          description: 'The leopard is so strong and comfortable in trees that it often hauls its kills into the branches. By dragging the bodies of large animals aloft it hopes to keep them safe from scavengers such as hyenas. Leopards can also hunt from trees, where their spotted coats allow them to blend with the leaves until they spring with a deadly pounce.',
          image:
            'https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80',
          categoryId: '1',
        },
        {
          name: 'Leopard',
          description: 'Most leopards are light colored with distinctive dark spots that are called rosettes, because they resemble the shape of a rose. Black leopards, which appear to be almost solid in color because their spots are hard to distinguish, are commonly called black panthers.',
          image:
            'https://images.unsplash.com/photo-1509554031781-83d0bb595146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          categoryId: '1',
        },
        {
          name: 'Buffalo',
          description: 'A pest to ranchers, a prize to hunters, and a temperamental tank to anything that bothers it, African buffalo roam by the thousands in sub-Saharan Africa. ',
          image:
            'https://images.unsplash.com/photo-1603966474815-85d21585ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
          categoryId: '2',
        },
        {
          name: 'Buffalo',
          description: 'African buffalo are hardy critters, able to live and flourish in many habitats—from semi-arid bushland to coastal savannas to lowland rainforests—as long as they’re close to a water source.',
          image:
            'https://images.unsplash.com/photo-1657627068475-5fdac40069c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
          categoryId: '2',
        },
        {
          name: 'Buffalo',
          description: 'Buffalo are often pictured covered in mud with a bird on their back. The mud helps buffalo get rid of ticks and parasites that latch onto their skin.',
          image:
            'https://images.unsplash.com/photo-1598943421302-521e169bc602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          categoryId: '2',
        },
        {
          name: 'Buffalo',
          description: 'Buffalo are considered one of the “big five,” a term grouping them with leopards, rhinoceroses, elephants, and lions as the most dangerous animals to hunt in Africa. ',
          image:
            'https://images.unsplash.com/photo-1645183979830-b7f96b591026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80',
          categoryId: '2',
        },
        {
          name: 'Rhino',
          description: 'Both black and white rhinoceroses are actually gray. They are different not in color but in lip shape. The black rhino has a pointed upper lip, while its white relative has a squared lip. ',
          image:
            'https://images.unsplash.com/photo-1576934714203-a4db4893bc9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          categoryId: '3',
        },
        {
          name: 'Rhino',
          description: 'Except for females and their offspring, black rhinos are solitary. Females reproduce only every two and a half to five years. Their single calf does not live on its own until it is about three years old.',
          image:
            'https://images.unsplash.com/photo-1622227432807-91af5901f941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
          categoryId: '3',
        },
        {
          name: 'Rhino',
          description: 'Black rhinos boast two horns, the foremost more prominent than the other. Rhino horns grow as much as three inches a year, and have been known to grow up to five feet long. Females use their horns to protect their young, while males use them to battle attackers.',
          image:
            'https://plus.unsplash.com/premium_photo-1669749405985-ed92c0f4591f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
          categoryId: '3',
        },
        {
          name: 'Elephant',
          description: 'African elephants are the largest land animals on Earth. ',
          image:
            'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80',
          categoryId: '4',
        },
        {
          name: 'Elephant',
          description: 'African elephants are keystone species, meaning they play a critical role in their ecosystem. Also known as “ecosystem engineers,” elephants shape their habitat in many ways. During the dry season, they use their tusks to dig up dry riverbeds and create watering holes many animals can drink from.',
          image:
            'https://images.unsplash.com/photo-1525552146036-f9ffd5c0b846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          categoryId: '4',
        },
        {
          name: 'Elephant',
          description: 'Elephant ears radiate heat to help keep these large animals cool, but sometimes the African heat is too much. Elephants are fond of water and enjoy showering by sucking water into their trunks and spraying it all over themselves.',
          image:
            'https://images.unsplash.com/photo-1622397575263-856f1258742a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
          categoryId: '4',
        },
        {
          name: 'Elephant',
          description: 'Elephants are matriarchal, meaning they live in female-led groups. The matriarch is usually the biggest and oldest. She presides over a multi-generational herd that includes other females, called cows, and their young. Adult males, called bulls, tend to roam on their own, sometimes forming smaller, more loosely associated all-male groups.',
          image:
            'https://images.unsplash.com/photo-1516786549992-7fc60748b3a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          categoryId: '4',
        },
        {
          name: 'Lion',
          description: 'African lions have been admired throughout history for as symbols of courage and strength. These iconic animals have powerful bodies—in the cat family, they’re second in size only to tigers—and roars that can be heard from five miles away',
          image:
            'https://images.unsplash.com/photo-1586398001762-7ddd311debd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          categoryId: '5',
        },
        {
          name: 'Lion',
          description: 'African lions once roamed most of Africa and parts of Asia and Europe. But the species has disappeared from 94 percent of its historic range and can only be found today in parts of sub-Saharan Africa. ',
          image:
            'https://images.unsplash.com/photo-1674909073110-5aa68607e693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
          categoryId: '5',
        },
        {
          name: 'Lion',
          description: 'Lions are the only cats that live in groups, which are called prides—though there is one population of solitary lions. Prides are family units that may comprise anywhere from two to 40 lions—including up to to three or four males, a dozen or so females, and their young.',
          image:
            'https://images.unsplash.com/photo-1658873159529-7cecffd5e8d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          categoryId: '5',
        },
        {
          name: 'Lion',
          description: 'Today, there are only half as many African lions than there were 25 years ago. The International Union for the Conservation of Nature (IUCN) estimates that fewer than 25,000 lions remain in Africa, which is why the organization classifies them as vulnerable to extinction.',
          image:
            'https://images.unsplash.com/photo-1658873167473-de6fd758647c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          categoryId: '5',
        },
        {
          name: 'Leopard',
          description: 'These nocturnal predators also stalk antelope, deer, and pigs by stealthy movements in the tall grass. When human settlements are present, leopards often attack dogs and, occasionally, people.',
          image:
            'https://images.unsplash.com/photo-1602587557695-9fa83da489c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hhbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '1',
        },
        {
          name: 'Lion',
          description: 'African lions face a variety of threats—most of which can be attributed to humans. Fearing that lions will prey on their livestock, which can be a significant financial blow, ranchers may kill the animals both in retaliation and as a preventative measure, sometimes using pesticides as poison.',
          image:
            'https://images.unsplash.com/photo-1556021081-8fc7a58eea2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          categoryId: '5',
        },
        {
          name: 'Leopard',
          description: 'Female leopards can give birth at any time of the year. They usually have two grayish cubs with barely visible spots.',
          image:
            'https://images.unsplash.com/photo-1510920018318-3b4dfe979e4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          categoryId: '1',
        },
        {
          name: 'Leopard',
          description: 'The mother hides her cubs and moves them from one safe location to the next until they are old enough to begin playing and learning to hunt.',
          image:
            'https://images.unsplash.com/photo-1592999373293-c27500b8c293?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
          categoryId: '1',
        },
        {
          name: 'Leopard',
          description: 'Black leopards, which appear to be almost solid in color because their spots are hard to distinguish, are commonly called black panthers.',
          image:
            'https://images.unsplash.com/photo-1666963341825-c93a87892e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          categoryId: '1',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Animals', null, {});
  },
};
