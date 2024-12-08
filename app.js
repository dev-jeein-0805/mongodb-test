const { MongoClient } = require('mongodb');
const uri = `mongodb://localhost:27017/`;
const client = new MongoClient(uri);

async function run(){
    const database = client.db('firstDB');
    const users = database.collection('users');

    // test 1
    // const userData = await users.insertOne({ name: 'snoopy', age: 85 });
    // console.log('result', userData);

    // test 2 
    // const userList = [{name: '철수', age: 50}, {name: '영희', age: 60}]
    // const userListResult = await users.insertMany(userList);
    // console.log('result', userListResult);

    // test 3
    // const findUser = await users.find({}).toArray();
    // console.log('result', findUser);

    // test 4
    // const findUser = await users.find({ age: {$gt: 20 } });
    // console.log('result', findUser);

    // test 5
    // const updateUser = await users.updateOne(
    //     { name: 'snoopy' }, 
    //     { $set: { age: 15 } })
    // ;
    // console.log('result', updateUser);

    // test 6
    // const deleteUsers = await users.deleteMany({ age: { $gt: 20 }});
    // console.log('result', deleteUsers);

    // test 7
    const userData = await users
        .find({ name: 'snoopy' })
        .project({ name: 1, _id: 0 })
        .toArray();
    console.log('userData', userData);

run();