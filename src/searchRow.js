/**
 * ## Usage
 *
 * |     | A    | B   | C         |
 * | --- | ---- | --- | --------- |
 * | 1   | name | age | favorite  |
 * | 2   | hoge | 20  | curry     |
 * | 3   | fuga | 30  | chocolate |
 * | 4   | piyo | 40  | coffee    |
 *
 * ```js
 * function myFunction {
 *   const sheet = SpreadsheetApp.getActiveSheet()
 *   const row = searchRow(sheet, 'fuga')
 *
 *   console.log(row)
 *   // [3]
 * }
 * ```
 */

function searchRow(sheet, value) {
  const cells = sheet.createTextFinder(value).matchEntireCell(true).findAll()

  const rows = cells.map((cell) => {
    Logger.log('セル位置: ' + cell.getA1Notation())
    return cell.getRow()
  })

  return rows
}
