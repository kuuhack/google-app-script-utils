/**
 * Usage
 *
 * |     | A    | B   | C         |
 * | --- | ---- | --- | --------- |
 * | 1   | name | age | favorite  |
 * | 2   | hoge | 20  | curry     |
 * | 3   | fuga | 30  | chocolate |
 * | 4   | piyo | 40  | coffee    |
 *
 * ***********************************
 * const myFunction = () => {
 *   const sheet = SpreadsheetApp.getActiveSheet()
 *   const values = sheet.getDataRange().getValues()
 *   const objects = createObjects(values)
 *
 *   console.log(objects)
 *   //   [ { name: 'hoge', age: 20, favorite: 'curry' },
 *   //     { name: 'fuga', age: 30, favorite: 'chocolate' },
 *   //     { name: 'piyo', age: 40, favorite: 'coffee' } ]
 *
 *   console.log(objects.filter((object) => object.name === 'fuga')[0])
 *   //  { name: 'fuga', age: 30, favorite: 'chocolate' }
 *
 *   const newValues = createValues(objects)
 *
 *   console.log(newValues)
 *   //   [ [ 'name', 'age', 'favorite' ],
 *   //     [ 'hoge', 20, 'curry' ],
 *   //     [ 'fuga', 30, 'chocolate' ],
 *   //     [ 'piyo', 40, 'coffee' ] ]
 *
 *   console.log(newValues.filter((record) => record.includes('fuga'))[0])
 *   //  [ 'fuga', 30, 'chocolate' ]
 * }
 * ***********************************
 */

function createObjects(values) {
  const headers = values.shift()
  const objects = []

  for (const record of values) {
    const object = {}

    for (const [i, header] of headers.entries()) {
      object[header] = record[i]
    }
    objects.push(object)
  }

  return objects
}

function createValues(objects) {
  const headers = Object.keys(objects[0])
  const values = [headers]

  for (const object of objects) {
    const record = []

    for (const header of headers) {
      record.push(object[header])
    }
    values.push(record)
  }

  return values
}
