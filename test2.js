// 문제 5.
// status가 'A’이고 qty가 50인 데이터를 찾아라
const data = db.collection('inventory').find({ status: 'A', qty: 50 }).toArray();

// 문제 6. 쿼리 $in 사용해보기 (Matches any of the values specified in an array.)
// status가 A 또는 B인 데이터를 찾자
const data = db.collection('inventory').find({ status: { $in: ["A", "B"] } }).toArray();

// 문제 7. $lt
// status가 A이고 qty가 30보다 작은 데이터를 찾자
// $lt : Matches values that are less than a specified value.
const data = db.collection('inventory').find({ status: 'A', qty: { $lt: 30 }}).toArray();

// 문제 8. $or
// status가 A이거나 qty가 30보다 작은 데이터를 찾자
const data = db.collection('inventory').find({ $or: [{ status: 'A' }, { qty: { $lt: 30 } }] }).toArray();

// 문제 9. nested field
// size 에 uom이 in 인 데이터를 찾자
const data = db.collection('inventory').find({ 'size.uom': 'in' }).toArray();

// 문제 10.
// size에 h가 10을 초과하는 데이터를 찾자
const data = db.collection('inventory').find({ 'size.h': { $gt: 10 } }).toArray();