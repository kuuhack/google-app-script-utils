/**
 * Usage
 * **************************
 * const myFunction = () => {
 *   const uri = new URI('http://www.example.com:8080/files-tmb/1234/abc.png?key=val')
 *   console.log('href = %s', uri.href())
 *   console.log('host = %s', uri.host())
 *   console.log('hostname = %s', uri.hostname())
 *   console.log('origin = %s', uri.origin())
 *   console.log('password = %s', uri.password())
 *   console.log('pathname = %s', uri.pathname())
 *   console.log('port = %s', uri.port())
 *   console.log('protocol = %s', uri.protocol())
 *   console.log('search = %s', uri.search())
 *
 *   // href = http://www.example.com:8080/files-tmb/1234/abc.png?key=val
 *   // host = www.example.com:8080
 *   // hostname = www.example.com
 *   // origin = http://www.example.com:8080
 *   // password =
 *   // pathname = /files-tmb/1234/abc.png
 *   // port = 8080
 *   // protocol = http
 *   // search = ?key=val
 * }
 * **************************
 */

eval(
  UrlFetchApp.fetch(
    'https://rawgit.com/medialize/URI.js/gh-pages/src/URI.js'
  ).getContentText()
)

// Get the URL protocol (eg. 'https' or 'http')
function urlProtocol(url) {
  return console.log(`urlProtocol = %s`, URI(url).protocol())
}

// Get the URL hostname (eg. 'example.com')
function urlHostname(url) {
  return console.log(`urlHostname = %s`, URI(url).hostname())
}

// Get the whole URL path (eg. '/some/directory/filename.png')
function urlPath(url) {
  return console.log(`urlPath = %s`, URI(url).path())
}

// Get the URL path array (eg. ['some', 'directory', 'filename.png'])
function pathArray(url) {
  return console.log(
    `pathArray = %s`,
    URI(url).pathname().split('/').filter(Boolean)
  )
}

// Get the URL directory (eg. '/some/directory')
function urlDirectory(url) {
  return console.log(`urlDirectory = %s`, URI(url).directory())
}

// Get the URL file name (eg. 'filename.png')
function urlFilename(url) {
  return console.log(`urlFilename = %s`, URI(url).filename())
}

// Get the URL query string (eg. 'this=1&that=2')
// If a query string parameter is provided as the second argument
// then the function will return the value of that parameter
function urlQuery(url, param) {
  if (param !== undefined) {
    const queryMap = URI(url).query(true)
    return queryMap[param]
  }

  return console.log(`urlQuery = %s`, URI(url).query())
}

// Get the URL hash (eg. '#section-two')
function urlHash(url) {
  return console.log(`urlHash = %s`, URI(url).hash())
}

// Check to see if a URL is a fully qualified URL
function urlIsUrl(url) {
  return console.log(`urlIsUrl = %s`, URI(url).is('url'))
}

// Check to see if a URL is a fully qualified IP Address
function urlIsIp(url) {
  return console.log(`urlIsIp = %s`, URI(url).is('ip'))
}

// Test function to ensure that each of the above functions do what they are supposed to do.
function testURI() {
  const url =
    'https://example.com/some/test/page.html?this-is=helpful&it=works#rad'
  const funcs = [
    urlProtocol,
    urlHostname,
    urlDirectory,
    urlPath,
    pathArray,
    urlFilename,
    urlQuery,
    urlHash,
    urlIsUrl,
    urlIsIp,
  ]

  // Check that each function returns the expected value
  funcs.map((test) => {
    test(url)
  })

  // Extra check to see that the urlQuery function works with a query parameter argument
  // console.log(`${urlQuery} = %s`, urlQuery(url, 'it'))
  urlQuery(url, 'it')
}
