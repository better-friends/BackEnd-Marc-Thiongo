const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove,
    update,
};


function find() {
  return db('friends');
}
  
function findBy(filter) {
  return db('friends').where(filter);
}
  
async function add(best) {
  const [id] = await db('friends').insert(best);
  
  return findById(id);
}
  
function findById(id) {
  return db('friends')
    .where({id})
    .first();
}
  
function remove(id) {
	return db('friends')
		.where('id', id)
		.del();
}

function update(id, changes) {
	return db('friends')
		.where({ id })
		.update(changes);
}