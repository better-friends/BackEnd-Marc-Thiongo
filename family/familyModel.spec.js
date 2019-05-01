const request = require('supertest');

const db = require('../data/dbConfig.js');
const router = require('./familyRouter.js');
const Users = require('./familyModel.js');

const server = require('../api/server.js');

describe('GET /', () => {
    it('should return 200 OK', async () => {
        const res = await request(server.use(router)).get('/')
        expect(res.status).toBe(200)
})
it('should return []', async () => {
    await Users.find([{ name: '', wedding: '' }])
    const users = await (['users']) 
    expect(users).toEqual( ['users'] )
})
});

describe('family model', () => {
    describe('insert()', () => {
        beforeEach(async () => {
            await db('users').truncate()
        })
        it('should add the provided members into the db', async () => {
            await Users.add({ name: 'Alice', phone: 7777777888, anniversary: '4/8/2019', birthday: '6/9/1991', graduation: '5/20/2019', wedding: 'N/A', comment: 'They will be away for a month after graduation, set up a surprise party' })
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
        it('should remove the provided members from the db', async () => {
            await Users.remove({name: 'Alice', phone: 7777777888, anniversary: '4/8/2019', birthday: '6/9/1991', graduation: '5/20/2019', wedding: 'N/A', comment: 'They will be away for a month after graduation, set up a surprise party' })
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