
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('friends').insert([
    {name: 'Lucy', phone: 9990042199, anniversary: 'N/A', birthday: '7/29/1990', graduation: '6/18/2019', wedding: 'N/A', comment: 'set up a surprise party' },
    {name: 'Brendan', phone: 9968966999, anniversary: 'N/A', birthday: '4/10/1998', graduation: '11/9/2020', wedding: 'N/A', comment: 'get him a new headset' },
    {name: 'Leslie', phone: 4344444444, anniversary: 'N/A', birthday: '9/16/1995', graduation: '7/9/2020', wedding: 'N/A', comment: 'get tickets to the game for birthday' },
  ]);
};
