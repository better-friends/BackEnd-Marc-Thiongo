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
  return db('family');
}
  
function findBy(filter) {
  return db('family').where(filter);
}
  
async function add(member) {
  const [id] = await db('family').insert(member);
  
  return findById(id);
}
  
function findById(id) {
  return db('family')
    .where({id})
    .first();
}
  
function remove(id) {
	return db('family')
		.where('id', id)
		.del();
}

function update(id, changes) {
	return db('family')
		.where({ id })
		.update(changes);
}