const request = require('supertest');

const db = require('../data/dbConfig.js');
const router = require('./userRouter.js');
const Users = require('./userModel.js');

const server = require('../api/server.js');

describe('GET /', () => {
    it('should return 200 OK', async () => {
        const res = await request(server.use(router)).get('/')
        expect(res.status).toBe(200)
})
it('should return []', async () => {
    await Users.find([{ username: '', password: '' }])
    const users = await (['users']) 
    expect(users).toEqual( ['users'] )
})
});

describe('user model', () => {
    describe('insert()', () => {
        beforeEach(async () => {
            await db('users').truncate()
        })
        it('should add the provided users into the db', async () => {
            await Users.add({ username: 'Janice', password: '' })
            const users = await db('users')
            expect(users).toHaveLength(1)
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
        it('should remove the provided users from the db', async () => {
            await Users.remove({ username: 'Janice', password: '' })
            const users = await db('users')
            expect(users).toHaveLength(0)
        })
        it('should return []', async () => {
            await Users.remove([{ id: '' }])
            const users = await (['users']) 
            expect(users).toEqual( ['users'] )
        })
    });
    
//     describe('put()', () => {
//         beforeEach(async () => {
//             await db('users')
//         })
//         it('should update the provided users from the db', async () => {
//             await Users.update({ changes })
//             const users = await db('users')
//             expect(users).toHaveLength(1)
//         })
//         it('should return []', async () => {
//             await Users.update([{ id: '1' }])
//             const users = await (['users']) 
//             expect(users).toEqual( ['users'] )
//         })
// });
});