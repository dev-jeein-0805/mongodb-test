// Update 데이터 수정하기
// 문제 11. updateOne
// students 컬렉션에 해당 데이터를 넣자
// [   
//     { _id: 1, test1: 95, test2: 92, test3: 90, modified: new Date("01/05/2020") },   
//     { _id: 2, test1: 98, test2: 100, test3: 102, modified: new Date("01/05/2020") },   
//     { _id: 3, test1: 95, test2: 110, modified: new Date("01/04/2020") } 
// ]
// id가 3인 학생에게 test3 의 점수를 98로 세팅하자

await db.collection('students').insertMany(
    [   
        { _id: 1, test1: 95, test2: 92, test3: 90, modified: new Date("01/05/2020") },   
        { _id: 2, test1: 98, test2: 100, test3: 102, modified: new Date("01/05/2020") },   
        { _id: 3, test1: 95, test2: 110, modified: new Date("01/04/2020") } 
    ]
).toArray();

const data = db.collection('students').updateOne(
    { _id: 3 },
    [ { $set: { "test3": 98 } } ]
)

// 정답
db.students.updateOne( { _id: 3 }, [ { $set: { "test3": 98 } } ] )

// 문제 12. updateMany
// 모든데이터의 test1의 점수를 0으로 세팅하고 status:"modified"라는 필드를 추가해라

db.students.updateMany(
    { },
    [ { $set: { status: "modified", test1: 0 } } ]
)

// Delete 데이터 삭제하기
// 문제 13. deleteOne
// test2점수가 92점인 학생을 삭제하자

db.students.deleteOne({ test2: 92 })

// 문제 14. deleteMany
// test1의 점수가 0인 학생들을 삭제하자
db.students.deleteMany({ test1: 0 })

