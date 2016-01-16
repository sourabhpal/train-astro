Meteor.startup(function() {

  // if there are no polls available
  if (Polls.find().count() === 0) {

    // create sample polls
    var samplePolls = [
      {
        question: 'What is the weather today?',
        choices: [
          { text: 'Is it going to be warm today?', votes: 0 },
          { text: 'Is it going to rain today?', votes: 0 },
          { text: 'What is the low for today?', votes: 0 }
        ]
      },
      {
        question: 'Where can I go for dinner',
        choices: [
          { text: 'I\'m hungry!', votes: 0 },
          { text: 'Can you recommend a good Chinese restaurant?', votes: 0 },
          { text: 'Is there a cafe open nearby?', votes: 0 }
        ]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });
  }

});