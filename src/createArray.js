/**
 * Usage
 * **************************
 *  const myFunction = () => {
 *  const sheet = SpreadsheetApp.getActiveSheet()
 *  const array = createArray(sheet)
 * 
 *  console.log(array)
 *  // { hoge: 10, fuga: 20, piyo: 20 }
 *  }
 * **************************
 */

const createArray = (sheet) => {
  const values = sheet.getDataRange().getValues()
  const objects = createObjects(values)
  Logger.log('Index Length: ' + objects.length)

  return objects
}
