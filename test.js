// Create 데이터 생성하기
// 문제 1. inserttOne
// inventory 라는 컬렉션에
// {  item: 'canvas',  
//     qty: 100,  
//     tags: ['cotton'],  
//     size: { h: 28, w: 35.5, uom: 'cm' } 
// }
// 이 데이터 하나를 넣어보자

// 문제 2. insertMany
// inventory 컬렉션에
//  [ 
//     { item: 'journal', qty: 25, tags: ['blank', 'red'], size: { h: 14, w: 21, uom: 'cm' } }, 
//     { item: 'mat', qty: 85, tags: ['gray'], size: { h: 27.9, w: 35.5, uom: 'cm' } }, 
//     { item: 'mousepad', qty: 25, tags: ['gel', 'blue'], size: { h: 19, w: 22.85, uom: 'cm' } } 
// ]
// 해당 어레이를 넣어보자

// Read 데이터 읽어오기
// 문제3. find
// inventory에 저장된 모든 데이터를 읽어오자

// 문제 4.
// inventory에 해당데이터를 먼저 넣고
// [  
//     { item: 'journal', qty: 25, size: { h: 14, w: 21, uom: 'cm' }, status: 'A' },  
//     { item: 'notebook', qty: 50, size: { h: 8.5, w: 11, uom: 'in' }, status: 'A' }, 
//     { item: 'paper', qty: 100, size: { h: 8.5, w: 11, uom: 'in' }, status: 'D' },  
//     { item: 'planner', qty: 75, size: { h: 22.85, w: 30, uom: 'cm' }, status: 'D' },  
//     { item: 'postcard', qty: 45, size: { h: 10, w: 15.25, uom: 'cm' }, status: 'A' } 
// ]
// status가 D인 데이터를 찾아라

const { MongoClient } = require('mongodb');
const uri = `mongodb://localhost:27017/`;
const client = new MongoClient(uri);

async function run() {
    const database = client.db('examDB');
    const inventories = database.collection('inventory');

    // 문제 1
    // const itemData = await inventories.insertOne(
    //     {  item: 'canvas',  
    //         qty: 100,  
    //         tags: ['cotton'],  
    //         size: { h: 28, w: 35.5, uom: 'cm' } 
    //     }
    // )
    // console.log('result', itemData);

    // 정답
    // await db.collection('inventory').insertOne({
    //     item: 'canvas',
    //     qty: 100,
    //     tags: ['cotton'],
    //     size: { h: 28, w: 35.5, uom: 'cm' }
    //   });

    // 문제 2
    // const itemList =  [ 
    //     { item: 'journal', qty: 25, tags: ['blank', 'red'], size: { h: 14, w: 21, uom: 'cm' } }, 
    //     { item: 'mat', qty: 85, tags: ['gray'], size: { h: 27.9, w: 35.5, uom: 'cm' } }, 
    //     { item: 'mousepad', qty: 25, tags: ['gel', 'blue'], size: { h: 19, w: 22.85, uom: 'cm' } } 
    // ]
    // const itemListResult = await inventories.insertMany(itemList);
    // console.log('result', itemListResult);

    // 문제 3
    // const itemList = await inventories.find({}).toArray();
    // console.log(itemList);

    // 문제 4
    const itemList = [  
        { item: 'journal', qty: 25, size: { h: 14, w: 21, uom: 'cm' }, status: 'A' },  
        { item: 'notebook', qty: 50, size: { h: 8.5, w: 11, uom: 'in' }, status: 'A' }, 
        { item: 'paper', qty: 100, size: { h: 8.5, w: 11, uom: 'in' }, status: 'D' },  
        { item: 'planner', qty: 75, size: { h: 22.85, w: 30, uom: 'cm' }, status: 'D' },  
        { item: 'postcard', qty: 45, size: { h: 10, w: 15.25, uom: 'cm' }, status: 'A' } 
    ]
    const itemListResult = await inventories.insertMany(itemList);
    const statusD = await inventories.find({ status: 'D' }).project({_id: 0}).toArray();
    console.log('statusD', statusD);

}

run();