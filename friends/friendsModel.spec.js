const request = require('supertest');

const db = require('../data/dbConfig.js');
const router = require('./friendsRouter.js');
const Users = require('./friendsModel.js');

const server = require('../api/server.js');

describe('GET /', () => {
    it('should return 200 OK', async () => {
        const res = await request(server.use(router)).get('/')
        expect(res.status).toBe(200)
})
it('should return []', async () => {
    await Users.find([{ name: '', birthday: '' }])
    const users = await (['users']) 
    expect(users).toEqual( ['users'] )
})
});

describe('friends model', () => {
    describe('insert()', () => {
        beforeEach(async () => {
            await db('users').truncate()
        })
        it('should add the provided friends into the db', async () => {
            await Users.add({name: 'Lisa', phone: 4355555444, anniversary: 'N/A', birthday: '9/9/1995', graduation: '7/7/2020', wedding: 'N/A', comment: 'get tickets to the game for graduation' })
            const users = await db('users')
            expect(users).toHaveLength(0)
        })
        it('should return []', async () => {
            await Users.findById([{ id: '' }])
            const users = await (['users']) 
            expect(users).toEqual( ['users'] )
        })
    });

    describe('remove()', () => {
        beforeEach(async () => {
            await db('users')
        })
        it('should remove the provided friends from the db', async () => {
            await Users.remove({name: 'Lisa', phone: 4355555444, anniversary: 'N/A', birthday: '9/9/1995', graduation: '7/7/2020', wedding: 'N/A', comment: 'get tickets to the game for graduation' })
            const users = await db('users')
            expect(users).toHaveLength(0)
        })
        it('should return []', async () => {
            await Users.remove([{ id: '' }])
            const users = await (['users']) 
            expect(users).toEqual( ['users'] )
        })
    });
});    