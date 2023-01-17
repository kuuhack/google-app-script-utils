/**
 * ## Usage
 *
 * ```js
 * function myFunction() {
 *   const sheet = SpreadsheetApp.getActiveSheet()
 *   const values = sheet.getDataRange().getValues()
 *   const object = createObject(values)
 *
 *   console.log(object)
 *   //  { hoge: 10, fuga: 20, piyo: 20 }
 * }
 * ```
 */
function createObject(values) {
  const object = {}

  values.map((item) => {
    object[item[0]] = item[1]
  })

  console.log(object)
  return object
}
