exports.barns = [
    {
        name: 'Willow Brook Ranch',
        address: {
            streetAddress: '123 Main St',
            city: 'Springfield',
            state: 'VA',
            zip: '12345'
        },
        contact: {
            role: 'Owner',
            contactName: 'Sophia Reynolds',
            phone: '555-789-1234'
        },
        notes: {
            content: 'Use second driveway'
        }
    },
    {
        name: 'Pine Grove Farm',
        address: {
            streetAddress: '456 Side St',
            city: 'Townesville',
            state: 'VA',
            zip: '54321'
        },
        contact: {
          role: 'Barn Manager',
          contactName: 'Emily Smith',
          phone: '555-234-5678'
        },
        notes: {
            content: 'Park behind barn'
        }
    },
    {
        name: 'High Meadows',
        address: {
            streetAddress: '404 West St',
            city: 'Centreville',
            state: 'VA',
            zip: '40404'
        },
        contact: {
          role: 'Vet',
          contactName: 'Joe Martinez',
          phone: '555-876-5432'
        },
        notes: {
            content: 'Send text to owner when leaving for the day!'
        }
    },
];

exports.horses = [
    {
        name: 'Luna',
        age: 21,
        color: 'grey',
        sex: 'mare',
        feed: {
            amFeed: '1 scoop senior',
            amMeds: '1 tab Prascend',
            middayFeed: '1 flake hay',
            pmFeed: '1 scoop senior',
            pmMeds: '1/2 scoop Cosequin',
            nightFeed: '1 flake hay',
 
        },
        turnout: '4',
        blanket: '35-45deg light sheet, <35 heavy',
        importantInfo: 'Do not turn out alone!',
        notes: {
            content: 'Owner requests that hay be given 1 flake at a time, only if no hay is left in stall.'
        }
    },
    {
        name: 'Max',
        age: 8,
        color: 'chestnut',
        sex: 'gelding',
        feed: {
            amFeed: '2 flakes hay, 1 scoop grain',
            amMeds: 'none',
            middayFeed: '1 flake hay',
            pmFeed: '2 flakes hay, 1 scoop grain',
            pmMeds: 'none',
            nightFeed: '1 flake hay',
        },
        turnout: '6',
        blanket: '40-50deg light blanket, <40 heavy',
        importantInfo: 'Prefers to be turned out with a buddy.',
        notes: {
            content: 'Tends to be nervous around loud noises.'
        }
    },
    {
        name: 'Bella',
        age: 10,
        color: 'black',
        sex: 'mare',
        feed: {
            amFeed: '1 flake hay, 1/2 scoop low carb',
            amMeds: '1/2 scoop joint supplement',
            middayFeed: '1 flake hay',
            pmFeed: '1/2 scoop low carb',
            pmMeds: 'none',
            nightFeed: 'none',
        },
        turnout: '8',
        blanket: '45-55deg light blanket, <45 heavy',
        importantInfo: 'Owner requests no turnout if raining and <40deg',
        notes: {
            content: 'Loves carrots!'
        }
    },
    {
        name: 'Orion',
        age: 6,
        color: 'bay',
        sex: 'gelding',
        feed: {
            amFeed: '2 flakes hay, 1 scoop grain',
            amMeds: '1 scoop electrolyte supplement',
            middayFeed: '1 flake hay',
            pmFeed: '2 flakes hay, 1 scoop grain',
            pmMeds: 'none',
            night: '1 flake hay',
        },
        turnout: '5',
        blanket: '35-45deg light sheet, <35 heavy',
        importantInfo: 'Requires extra care during grooming due to sensitive skin.',
        notes: {
            content: 'Owner will be away Dec 21-Jan 1.'
        }
    },
    {
        name: 'Shadow',
        age: 15,
        color: 'black',
        sex: 'gelding',
        feed: {
          amFeed: '2 flakes hay, 1 scoop grain',
          amMeds: '1 scoop joint supplement',
          middayFeed: '1 flake hay',
          pmFeed: '2 flakes hay, 1 scoop grain',
          pmMeds: 'none',
          night: '1 flake hay',
        },
        turnout: '6',
        blanket: '40-50deg light blanket, <40 heavy',
        importantInfo: 'Prefers to be in a quiet environment.',
        notes: {
          content: 'Experienced jumper.'
        }
      },
      {
        name: 'Rosie',
        age: 9,
        color: 'chestnut',
        sex: 'mare',
        feed: {
          amFeed: '2 flakes hay, 1 scoop grain',
          amMeds: '1 scool electrolyte supplement',
          middayFeed: '1 flake hay',
          pmFeed: '2 flakes hay, 1 scoop grain',
          pmMeds: 'none',
          night: '1 flake hay',

        },
        turnout: '5',
        blanket: '35-45deg light sheet, <35 heavy',
        importantInfo: 'Needs regular hoof trimming.',
        notes: {
          content: 'Loves apples as treats!'
        }
      },
      {
        name: 'Spirit',
        age: 12,
        color: 'palomino',
        sex: 'mare',
        feed: {
          amFeed: '1 flake hay, 1 scoop low carb',
          amMeds: '1/2 scoop joint supplement',
          middayFeed: '1 flake hay',
          pmFeed: '1/2 scoop low carb',
          pmMeds: 'none',
          night: 'none',
        },
        turnout: '7',
        blanket: '45-55deg light blanket, <45 heavy',
        importantInfo: 'Needs regular dental check-ups.',
        notes: {
          content: 'Enjoys spending time outdoors.'
        }
      },
      {
        name: 'Thunder',
        age: 6,
        color: 'bay',
        sex: 'gelding',
        feed: {
          amFeed: '2 flakes hay, 1 scoop grain',
          amMeds: 'none',
          middayFeed: '1 flake hay',
          pmFeed: '2 flakes hay, 1 scoop grain',
          pmMeds: 'none',
          night: '1 flake hay',
        },
        turnout: '6',
        blanket: '40-50deg light blanket, <40 heavy',
        importantInfo: 'Needs regular exercise.',
        notes: {
          content: 'Great with children.'
        }
      },
      {
        name: 'Misty',
        age: 10,
        color: 'grey',
        sex: 'mare',
        feed: {
          amFeed: '1 scoop senior',
          amMeds: '1 tab Equioxx',
          middayFeed: '1 flake hay',
          pmFeed: '1 scoop senior',
          pmMeds: '1 scoop Cosequin',
          night: '1 flake hay',
        },
        turnout: '4',
        blanket: '35-45deg light sheet, <35 heavy',
        importantInfo: 'Needs regular grooming.',
        notes: {
          content: 'Enjoys trail rides.'
        }
      },
      {
        name: 'Whisper',
        age: 10,
        color: 'black',
        sex: 'mare',
        feed: {
            amFeed: '3 flakes hay, 1.5 scoops grain',
            amMeds: 'joint supplement',
            middayFeed: '1 flake hay',
            pmFeed: '3 flakes hay, 1 scoop grain',
            pmMeds: 'none',
            nightFeed: '1 flake hay',
        },
        turnout: 4,
        blanket: '45-55deg light blanket, <40 heavy',
        importantInfo: 'Whisper can open stable doors!',
        notes: {
            content: 'Very curious and loves exploring new trails.'
        }
    },
    {
      name: 'Willow',
      age: 8,
      color: 'bay',
      sex: 'gelding',
      feed: {
          amFeed: '2 flakes hay, 1 scoop grain',
          amMeds: 'electrolyte supplement',
          middayFeed: '1 flake hay',
          pmFeed: '2 flakes hay, 1 scoop grain',
          pmMeds: 'none',
          nightFeed: '1 flake hay',
      },
      turnout: 6,
      blanket: '40-50deg light blanket, <40 heavy',
      importantInfo: 'Thunder loves playing with water hoses!',
      notes: {
          content: 'Energetic and enjoys challenging tasks.'
      }
  },
  {
    name: 'Rala',
    age: 15,
    color: 'palomino',
    sex: 'mare',
    feed: {
        amFeed: '2 flakes hay, 1 scoop grain',
        amMeds: 'none',
        middayFeed: '1 flake hay',
        pmFeed: '2 flakes hay, 1 scoop grain',
        pmMeds: 'joint supplement',
        nightFeed: '1 flake hay',
    },
    turnout: 3,
    blanket: '35-45deg light blanket, <35 heavy',
    importantInfo: 'Rala loves solving treat puzzles!',
    notes: {
        content: 'Gentle and patient with new riders.'
    }
},
{
    name: 'Amiga',
    age: 6,
    color: 'chestnut',
    sex: 'mare',
    feed: {
        amFeed: '3 flakes hay, 1.5 scoops grain',
        amMeds: 'electrolyte supplement',
        middayFeed: '1 flake hay',
        pmFeed: '3 flakes hay, 1 scoop grain',
        pmMeds: 'joint supplement',
        nightFeed: '1 flake hay',
    },
    turnout: 2,
    blanket: '50-60deg light blanket, <40 heavy',
    importantInfo: 'Amiga enjoys playing with small animals!',
    notes: {
        content: 'Highly energetic and loves jumping.'
    }
},
{
  name: 'Star',
  age: 12,
  color: 'black',
  sex: 'mare',
  feed: {
      amFeed: '2 flakes hay, 1 scoop grain',
      amMeds: 'none',
      middayFeed: '1 flake hay',
      pmFeed: '2 flakes hay, 1 scoop grain',
      pmMeds: 'electrolyte supplement',
      nightFeed: '1 flake hay',
  },
  turnout: 5,
  blanket: '40-50deg light blanket, <40 heavy',
  importantInfo: 'Midnight Star can do some tricks!',
  notes: {
      content: 'Affectionate and loves attention.'
  }
},
{
  name: 'Phoenix',
  age: 20,
  color: 'gray',
  sex: 'gelding',
  feed: {
      amFeed: '2 flakes hay, 1 scoop grain',
      amMeds: 'joint supplement',
      middayFeed: '1 flake hay',
      pmFeed: '2 flakes hay, 1 scoop grain',
      pmMeds: 'none',
      nightFeed: '1 flake hay',
  },
  turnout: 1,
  blanket: '30-40deg light blanket, <30 heavy',
  importantInfo: 'Phoenix is an excellent jumper!',
  notes: {
      content: 'Calm and enjoys long hacks in the countryside.'
  }
},
{
  name: 'Maggie',
  age: 7,
  color: 'buckskin',
  sex: 'mare',
  feed: {
      amFeed: '2 flakes hay, 1.5 scoops grain',
      amMeds: 'electrolyte supplement',
      middayFeed: '1 flake hay',
      pmFeed: '2 flakes hay, 1.5 scoops grain',
      pmMeds: 'none',
      nightFeed: '1 flake hay',
  },
  turnout: 3,
  blanket: '40-50deg light blanket, <40 heavy',
  importantInfo: 'Maggie enjoys herding other animals!',
  notes: {
      content: 'Eager to please and very loyal.'
  }
},
{
  name: 'Dakota',
  age: 9,
  color: 'roan',
  sex: 'gelding',
  feed: {
      amFeed: '3 flakes hay, 1 scoop grain',
      amMeds: 'none',
      middayFeed: '1 flake hay',
      pmFeed: '3 flakes hay, 1 scoop grain',
      pmMeds: 'joint supplement',
      nightFeed: '1 flake hay',
  },
  turnout: 4,
  blanket: '35-45deg light blanket, <35 heavy',
  importantInfo: 'Dakota loves obstacle courses!',
  notes: {
      content: 'Curious and enjoys investigating new environments.'
  }
},
{
  name: 'Apollo',
  age: 11,
  color: 'dapple gray',
  sex: 'gelding',
  feed: {
      amFeed: '2 flakes hay, 1 scoop grain',
      amMeds: 'none',
      middayFeed: '1 flake hay',
      pmFeed: '2 flakes hay, 1 scoop grain',
      pmMeds: 'joint supplement',
      nightFeed: '1 flake hay',
  },
  turnout: 2,
  blanket: '45-55deg light blanket, <40 heavy',
  importantInfo: 'Apollo excels in dressage!',
  notes: {
      content: 'Very disciplined and focused.'
  }
},
{
  name: 'River',
  age: 14,
  color: 'palomino',
  sex: 'mare',
  feed: {
      amFeed: '3 flakes hay, 1 scoop grain',
      amMeds: 'joint supplement',
      middayFeed: '1 flake hay',
      pmFeed: '3 flakes hay, 1 scoop grain',
      pmMeds: 'none',
      nightFeed: '1 flake hay',
  },
  turnout: 6,
  blanket: '40-50deg light blanket, <40 heavy',
  importantInfo: 'River loves swimming!',
  notes: {
      content: 'Gentle and enjoys leisurely rides.'
  }
},
{
  name: 'Atlas',
  age: 17,
  color: 'chestnut',
  sex: 'gelding',
  feed: {
      amFeed: '2 flakes hay, 1.5 scoops grain',
      amMeds: 'none',
      middayFeed: '1 flake hay',
      pmFeed: '2 flakes hay, 1.5 scoops grain',
      pmMeds: 'electrolyte supplement',
      nightFeed: '1 flake hay',
  },
  turnout: 5,
  blanket: '35-45deg light blanket, <35 heavy',
  importantInfo: 'Atlas enjoys learning new tricks!',
  notes: {
      content: 'Intelligent and curious about everything.'
  }
}
];


// exports.chores = [
//   {
//     chore: 'Feed grain',
//     shift: ['AM', 'PM'],
//     estDuration: 20,
//     estAmount: 30,
//     completed: false,
//   },
//   {
//     chore: 'Feed hay',
//     shift: ['AM', 'Midday', 'PM', 'Night'],
//     estDuration: 10,
//     estAmount: 15,
//     completed: false,
//   },
//   {
//     chore: 'Muck stalls',
//     shift: ['AM', 'Midday', 'PM'],
//     estDuration: 30,
//     estAmount: 45,
//     completed: false,
//   },
//   {
//     chore: 'Turn out',
//     shift: ['AM', 'Midday', 'PM'],
//     estDuration: 10,
//     estAmount: 15,
//     completed: false,
//   },
//   {
//     chore: 'Turn in',
//     shift: ['AM', 'Midday', 'PM'],
//     estDuration: 10,
//     estAmount: 15,
//     completed: false,
//   },
//   {
//     chore: 'Fill water buckets',
//     shift: ['AM', 'Midday', 'PM', 'Night'],
//     estDuration: 15,
//     estAmount: 20,
//     completed: false,
//   },
//   {
//     chore: 'Groom horses',
//     shift: ['AM', 'Midday', 'PM'],
//     estDuration: 20,
//     estAmount: 30,
//     completed: false,
//   },
// ];