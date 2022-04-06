# google-apps-script-utils

<p>
  <a href="https://github.com/kuuhack/google-apps-script-utils/actions/workflows/main.yml">
    <img src="https://github.com/kuuhack/google-apps-script-utils/actions/workflows/main.yml/badge.svg" alt="Deployment">
  </a>
  <a href="https://github.com/kuuhack/google-apps-script-utils/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/kuuhack/google-apps-script-utils" alt="MIT License">
  </a>
</p>

## Description

This repository has some functions to help with Google Apps Script

## Usage

### `createObjects`, `createValues`

|     | A    | B   | C         |
| --- | ---- | --- | --------- |
| 1   | name | age | favorite  |
| 2   | hoge | 20  | curry     |
| 3   | fuga | 30  | chocolate |
| 4   | piyo | 40  | coffee    |

```js
const myFunction = () => {
  const sheet = SpreadsheetApp.getActiveSheet()
  const values = sheet.getDataRange().getValues()
  const objects = createObjects_(values)

  console.log(objects)
  // [ { name: 'hoge', age: 20, favorite: 'curry' },
  //   { name: 'fuga', age: 30, favorite: 'chocolate' },
  //   { name: 'piyo', age: 40, favorite: 'coffee' } ]

  console.log(objects.filter((object) => object.name === 'fuga')[0])
  // { name: 'fuga', age: 30, favorite: 'chocolate' }

  const newValues = createValues_(objects)

  console.log(newValues)
  // [ [ 'name', 'age', 'favorite' ],
  //   [ 'hoge', 20, 'curry' ],
  //   [ 'fuga', 30, 'chocolate' ],
  //   [ 'piyo', 40, 'coffee' ] ]

  console.log(newValues.filter((record) => record.includes('fuga'))[0])
  // [ 'fuga', 30, 'chocolate' ]
}
```

### `createObject`

|     | A    | B   |
| --- | ---- | --- |
| 1   | hoge | 10  |
| 2   | fuga | 20  |
| 3   | piyo | 20  |

```js
const myFunction = () => {
  const sheet = SpreadsheetApp.getActiveSheet()
  const values = sheet.getDataRange().getValues()
  const object = createObjects(values)

  console.log(object)
  // { hoge: 10, fuga: 20, piyo: 20 }
}
```

### `createArray`

```js
const myFunction = () => {
  const sheet = SpreadsheetApp.getActiveSheet()
  const array = createArray(sheet)

  console.log(array)
  // [{ hoge: 10, fuga: 20, piyo: 20 }, { hoge: 30, fuga: 40, piyo: 40 }]
}
```

### `constructUrl`

```js
const myFunction = () => {
  const baseUrl = 'https://example.com'
  const params = { id: 1, name: 'fuga' }
  const url = constructUrl(baseUrl, params)

  console.log(url)
  // 'https://example.com?id=1&name=fuga'
}
```

### `searchRow`

|     | A    | B   | C         |
| --- | ---- | --- | --------- |
| 1   | name | age | favorite  |
| 2   | hoge | 20  | curry     |
| 3   | fuga | 30  | chocolate |
| 4   | piyo | 40  | coffee    |

```js
const myFunction = () => {
  const sheet = SpreadsheetApp.getActiveSheet()
  const row = searchRow(sheet, 'fuga')

  console.log(row)
  // [3]
}
```
