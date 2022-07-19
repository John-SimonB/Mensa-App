import db from './indexDB.js';

export async function saveDataInIndexDB(mensa) {
  if (mensa) {
    if (db.testData);
    db.testData.put({ datakey: mensa.id, mensa }).then(() => {});
    
  }
}


export async function getDataFromIndexDB(id) {
    
    const testData = await db.testData
    .where('datakey')
    .equals(id)
    .toArray(); 
  if (testData && testData.length > 0) {
    return  testData[0];
  }
  return null;
}


export async function getAllDataFromIndexDB() {
    var testArray=[]
    const testData = await db.testData.each(data => {
        testArray.push(data.mensa)

    })
    if (testArray && testArray.length > 0) {
        return  testArray;
      }      
  return null;
}


