
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('family').insert([
    {name: 'Matthew', phone: 9999999999, anniversary: '2/8/2019', birthday: '4/7/1989', graduation: '5/6/2019', wedding: '4/8/2020', comment: 'Please remember to buy a gift' },
    {name: 'Kelly', phone: 8888888888, anniversary: '4/9/2019', birthday: '6/8/1991', graduation: '5/24/2019', wedding: 'N/A', comment: 'They will be away for a month after graduation, set up a surprise party' },
    {name: 'Michelle', phone: 7777777777, anniversary: '5/23/2019', birthday: '12/4/1998', graduation: '6/15/2019', wedding: 'N/A', comment: 'Remember to invite grandparents' },
  ]);
};
