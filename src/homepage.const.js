export const homepage = {
  companyName: "ABCD",
  navigation: [
    {
      title: 'Home',
      link: '/',
    }, {
      title: 'Blog',
      link: '/blog',
    }, {
      title: 'Movies',
      link: '/movies',
    }, {
      title: 'Kontakt',
      link: '#kontakt',
    }, {
      title: 'Api',
      link: '/api',
    },
  ],
  contactDetails: {
    phone: '+48123123123',
    email: "kontakt@example.com",
    address: {
      street: 'ul. abc 11/2',
      city: 'Poznan',
      country: 'Poland',
      postcode: '80-123'
    }
  },
  hero: {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    subtitle: 'In nec lorem quis turpis tincidunt tempor. Sed sodales lobortis turpis, nec faucibus',
    button: "Read more",
    images: [
      require('./images/1.jpg'),
      require('./images/2.jpg'),
      require('./images/3.jpg'),
    ]
  },
  CTA: {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    subtitle: 'Phasellus nisi sem, laoreet pulvinar pellentesque quis, laoreet eget elit. Ut non placerat est. Vivamus molestie libero ac lacinia vehicula.',
    button: "Read more",
    background: require('./images/1.jpg'),
    opacity: 0.2,
  },
  ourServices: {
    title: 'Our service.',
    service: [
      {
        title: 'Lorem ipsum dolor.',
        subtitle: 'Phasellus nisi sem, laoreet pulvinar pellentesque quis',
        icon: require('./images/calculator-solid.svg'),
      }, {
        title: 'Lorem ipsum dolor.',
        subtitle: 'Phasellus nisi sem, laoreet pulvinar pellentesque quis',
        icon: require('./images/caravan-solid.svg'),
      }, {
        title: 'Lorem ipsum dolor.',
        subtitle: 'Phasellus nisi sem, laoreet pulvinar pellentesque quis',
        icon: require('./images/chart-pie-solid.svg'),
      }
    ]
  },
  ourProjects: {
    title: 'Our projects.',
    service: [
      {
        title: 'Lorem ipsum dolor.',
        category: 'Phasellus nisi',
        background: require('./images/1.jpg'),
      }, {
        title: 'Lorem ipsum dolor.',
        category: 'laoreet',
        background: require('./images/2.jpg'),
      }, {
        title: 'Lorem ipsum dolor.',
        category: 'nisi',
        background: require('./images/3.jpg'),
      }, {
        title: 'Lorem ipsum dolor.',
        category: 'laoreet',
        background: require('./images/1.jpg'),
      }, {
        title: 'Lorem ipsum dolor.',
        category: 'laoreet',
        background: require('./images/2.jpg'),
      }, {
        title: 'Lorem ipsum dolor.',
        category: 'Phasellus nisi',
        background: require('./images/3.jpg'),
      }
    ]
  },
  CTA2: {
    title: 'Lorem ipsum dolor sit !!',
    button: "Read more",
    backgroundColor: '#343a40',
  },
  blogs: {
    title: "Check out our posts",
    posts: [
      {
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem quis turpis tincidunt tempor. Sed sodales lobortis turpis, nec faucibus magna aliquam non. Pellentesque vitae tincidunt turpis. Proin metus libero, scelerisque eu nisi ac, bibendum tincidunt nibh. Vivamus viverra, metus non luctus auctor, neque diam dapibus metus, sit amet gravida arcu ante a sem. Vivamus id lorem sed tortor congue egestas eu ut est. Vestibulum mauris massa, dignissim semper imperdiet vel, suscipit semper turpis. Phasellus nisi sem, laoreet pulvinar pellentesque quis, laoreet eget elit. Ut non placerat est. Vivamus molestie libero ac lacinia vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sagittis, augue quis dignissim viverra, libero enim sodales neque, vel aliquam nunc elit in dui.',
        image: require('./images/3.jpg'),
        date: "2020-06-26T14:46:19.918Z",
        author: "admin",
        avatar: require('./images/user-tie-solid.svg'),
        category: 'testing',
        tags: [
          'Lorem',
          'ipsum',
          'dolor',
          'sit',
          'amet'
        ]
      }, {
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem quis turpis tincidunt tempor. Sed sodales lobortis turpis, nec faucibus magna aliquam non. Pellentesque vitae tincidunt turpis. Proin metus libero, scelerisque eu nisi ac, bibendum tincidunt nibh. Vivamus viverra, metus non luctus auctor, neque diam dapibus metus, sit amet gravida arcu ante a sem. Vivamus id lorem sed tortor congue egestas eu ut est. Vestibulum mauris massa, dignissim semper imperdiet vel, suscipit semper turpis. Phasellus nisi sem, laoreet pulvinar pellentesque quis, laoreet eget elit. Ut non placerat est. Vivamus molestie libero ac lacinia vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sagittis, augue quis dignissim viverra, libero enim sodales neque, vel aliquam nunc elit in dui.',
        image: require('./images/3.jpg'),
        date: "2020-06-26T14:46:19.918Z",
        author: "admin",
        avatar: require('./images/user-tie-solid.svg'),
        category: 'testing',
        tags: [
          'Lorem',
          'ipsum',
          'dolor',
          'sit',
          'amet'
        ]
      }, {
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem quis turpis tincidunt tempor. Sed sodales lobortis turpis, nec faucibus magna aliquam non. Pellentesque vitae tincidunt turpis. Proin metus libero, scelerisque eu nisi ac, bibendum tincidunt nibh. Vivamus viverra, metus non luctus auctor, neque diam dapibus metus, sit amet gravida arcu ante a sem. Vivamus id lorem sed tortor congue egestas eu ut est. Vestibulum mauris massa, dignissim semper imperdiet vel, suscipit semper turpis. Phasellus nisi sem, laoreet pulvinar pellentesque quis, laoreet eget elit. Ut non placerat est. Vivamus molestie libero ac lacinia vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sagittis, augue quis dignissim viverra, libero enim sodales neque, vel aliquam nunc elit in dui.',
        image: require('./images/3.jpg'),
        date: "2020-06-26T14:46:19.918Z",
        author: "admin",
        avatar: require('./images/user-tie-solid.svg'),
        category: 'testing',
        tags: [
          'Lorem',
          'ipsum',
          'dolor',
          'sit',
          'amet'
        ]
      }, {
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem quis turpis tincidunt tempor. Sed sodales lobortis turpis, nec faucibus magna aliquam non. Pellentesque vitae tincidunt turpis. Proin metus libero, scelerisque eu nisi ac, bibendum tincidunt nibh. Vivamus viverra, metus non luctus auctor, neque diam dapibus metus, sit amet gravida arcu ante a sem. Vivamus id lorem sed tortor congue egestas eu ut est. Vestibulum mauris massa, dignissim semper imperdiet vel, suscipit semper turpis. Phasellus nisi sem, laoreet pulvinar pellentesque quis, laoreet eget elit. Ut non placerat est. Vivamus molestie libero ac lacinia vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sagittis, augue quis dignissim viverra, libero enim sodales neque, vel aliquam nunc elit in dui.',
        image: require('./images/3.jpg'),
        date: "2020-06-26T14:46:19.918Z",
        author: "admin",
        avatar: require('./images/user-tie-solid.svg'),
        category: 'testing',
        tags: [
          'Lorem',
          'ipsum',
          'dolor',
          'sit',
          'amet'
        ]
      }, {
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem quis turpis tincidunt tempor. Sed sodales lobortis turpis, nec faucibus magna aliquam non. Pellentesque vitae tincidunt turpis. Proin metus libero, scelerisque eu nisi ac, bibendum tincidunt nibh. Vivamus viverra, metus non luctus auctor, neque diam dapibus metus, sit amet gravida arcu ante a sem. Vivamus id lorem sed tortor congue egestas eu ut est. Vestibulum mauris massa, dignissim semper imperdiet vel, suscipit semper turpis. Phasellus nisi sem, laoreet pulvinar pellentesque quis, laoreet eget elit. Ut non placerat est. Vivamus molestie libero ac lacinia vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sagittis, augue quis dignissim viverra, libero enim sodales neque, vel aliquam nunc elit in dui.',
        image: require('./images/3.jpg'),
        date: "2020-06-26T14:46:19.918Z",
        author: "admin",
        avatar: require('./images/user-tie-solid.svg'),
        category: 'testing',
        tags: [
          'Lorem',
          'ipsum',
          'dolor',
          'sit',
          'amet'
        ]
      }, {
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem quis turpis tincidunt tempor. Sed sodales lobortis turpis, nec faucibus magna aliquam non. Pellentesque vitae tincidunt turpis. Proin metus libero, scelerisque eu nisi ac, bibendum tincidunt nibh. Vivamus viverra, metus non luctus auctor, neque diam dapibus metus, sit amet gravida arcu ante a sem. Vivamus id lorem sed tortor congue egestas eu ut est. Vestibulum mauris massa, dignissim semper imperdiet vel, suscipit semper turpis. Phasellus nisi sem, laoreet pulvinar pellentesque quis, laoreet eget elit. Ut non placerat est. Vivamus molestie libero ac lacinia vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sagittis, augue quis dignissim viverra, libero enim sodales neque, vel aliquam nunc elit in dui.',
        image: require('./images/3.jpg'),
        date: "2020-06-26T14:46:19.918Z",
        author: "admin",
        avatar: require('./images/user-tie-solid.svg'),
        category: 'testing',
        tags: [
          'Lorem',
          'ipsum',
          'dolor',
          'sit',
          'amet'
        ]
      }, {
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem quis turpis tincidunt tempor. Sed sodales lobortis turpis, nec faucibus magna aliquam non. Pellentesque vitae tincidunt turpis. Proin metus libero, scelerisque eu nisi ac, bibendum tincidunt nibh. Vivamus viverra, metus non luctus auctor, neque diam dapibus metus, sit amet gravida arcu ante a sem. Vivamus id lorem sed tortor congue egestas eu ut est. Vestibulum mauris massa, dignissim semper imperdiet vel, suscipit semper turpis. Phasellus nisi sem, laoreet pulvinar pellentesque quis, laoreet eget elit. Ut non placerat est. Vivamus molestie libero ac lacinia vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sagittis, augue quis dignissim viverra, libero enim sodales neque, vel aliquam nunc elit in dui.',
        image: require('./images/3.jpg'),
        date: "2020-06-26T14:46:19.918Z",
        author: "admin",
        avatar: require('./images/user-tie-solid.svg'),
        category: 'testing',
        tags: [
          'Lorem',
          'ipsum',
          'dolor',
          'sit',
          'amet'
        ]
      }, {
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem quis turpis tincidunt tempor. Sed sodales lobortis turpis, nec faucibus magna aliquam non. Pellentesque vitae tincidunt turpis. Proin metus libero, scelerisque eu nisi ac, bibendum tincidunt nibh. Vivamus viverra, metus non luctus auctor, neque diam dapibus metus, sit amet gravida arcu ante a sem. Vivamus id lorem sed tortor congue egestas eu ut est. Vestibulum mauris massa, dignissim semper imperdiet vel, suscipit semper turpis. Phasellus nisi sem, laoreet pulvinar pellentesque quis, laoreet eget elit. Ut non placerat est. Vivamus molestie libero ac lacinia vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sagittis, augue quis dignissim viverra, libero enim sodales neque, vel aliquam nunc elit in dui.',
        image: require('./images/3.jpg'),
        date: "2020-06-26T14:46:19.918Z",
        author: "admin",
        avatar: require('./images/user-tie-solid.svg'),
        category: 'testing',
        tags: [
          'Lorem',
          'ipsum',
          'dolor',
          'sit',
          'amet'
        ]
      },
    ],
  },
  contact: {
    title: 'Lets Get In Touch!',
    subtitle: 'Phasellus nisi sem, laoreet pulvinar pellentesque quis, laoreet eget elit. Ut non placerat est. Vivamus molestie libero ac lacinia vehicula.',
    phoneIcon: require('./images/phone-solid.svg'),
    envelopeIcon: require('./images/envelope-solid.svg'),
  }

}