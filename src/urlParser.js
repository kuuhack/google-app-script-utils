/**
 * ## Usage
 *
 * ```js
 * function myFunction() {
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
 * ```
 */

eval(
  UrlFetchApp.fetch(
    'https://rawgit.com/medialize/URI.js/gh-pages/src/URI.js'
  ).getContentText()
)

// Get the URL protocol (eg. 'https' or 'http')
function urlProtocol(url) {
  const protocol = URI(url).protocol()
  console.log(`urlProtocol = %s`, protocol)

  return protocol
}

// Get the URL hostname (eg. 'example.com')
function urlHostname(url) {
  const hostname = URI(url).hostname()
  console.log(`urlHostname = %s`, hostname)

  return hostname
}

// Get the whole URL path (eg. '/some/directory/filename.png')
function urlPath(url) {
  const path = URI(url).pathname()
  console.log(`urlPath = %s`, path)

  return path
}

// Get the URL path array (eg. ['some', 'directory', 'filename.png'])
function pathArray(url) {
  const path = URI(url).pathname().split('/').filter(Boolean)
  console.log(`pathArray = %s`, path)

  return path
}

// Get the URL directory (eg. '/some/directory')
function urlDirectory(url) {
  const directory = URI(url).directory()
  console.log(`urlDirectory = %s`, directory)

  return directory
}

// Get the URL file name (eg. 'filename.png')
function urlFilename(url) {
  const filename = URI(url).filename()
  console.log(`urlFilename = %s`, filename)

  return
}

// Get the URL query string (eg. 'this=1&that=2')
// If a query string parameter is provided as the second argument
// then the function will return the value of that parameter
function urlQuery(url, param) {
  if (param !== undefined) {
    const queryMap = URI(url).query(true)
    return queryMap[param]
  }
  const query = URI(url).query()
  console.log(`urlQuery = %s`, query)

  return query
}

// Get the URL hash (eg. '#section-two')
function urlHash(url) {
  const hash = URI(url).hash()
  console.log(`urlHash = %s`, hash)

  return hash
}

// Check to see if a URL is a fully qualified URL
function urlIsUrl(url) {
  const bool = URI(url).is('url')
  console.log(`urlIsUrl = %s`, bool)

  return bool
}

// Check to see if a URL is a fully qualified IP Address
function urlIsIp(url) {
  const bool = URI(url).is('ip')
  console.log(`urlIsIp = %s`, bool)

  return
}
