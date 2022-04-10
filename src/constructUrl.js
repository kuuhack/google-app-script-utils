/**
 * Usage
 * **************************
 * const myFunction = () => {
 *   const baseUrl = 'https://example.com'
 *   const params = { id: 1, name: 'fuga' }
 *   const url = constructUrl(baseUrl, params)
 *
 *   console.log(url)
 *   // 'https://example.com?id=1&name=fuga'
 * }
 * **************************
 */

function constructUrl(baseUrl, params) {
  const p = { ...params }

  const query = Object.keys(p)
    .reduce((prev, cur) => {
      prev.push(`${cur}=${p[cur]}`)

      return prev
    }, [])
    .join('&')
  Logger.log('constructUrl: ' + `${baseUrl}?${query}`)

  return `${baseUrl}?${query}`
}
