/**
 * Usage
 * **************************
 * const myFunction = () => {
 *   const sheet = SpreadsheetApp.getActiveSheet()
 *   const cell = searchCell(sheet, 'fuga')
 *
 *   console.log(cell)
 *   // [1]
 * }
 * **************************
 */

function searchRow(sheet, value) {
  const cells = sheet.createTextFinder(value).matchEntireCell(true).findAll()

  const rows = cells.map((cell) => {
    Logger.log('セル位置: ' + cell.getA1Notation())
    return cell.getRow()
  })

  return rows
}
