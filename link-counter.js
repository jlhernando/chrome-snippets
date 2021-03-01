// Author: Jose Luis Hernando | @jlhernando
function getLinks() {
  var anchorsArr = Array.from(document.getElementsByTagName('a'))
  var domain = window.location.origin
  var empty = 0
  var external = 0
  var internal = 0
  var linkList = anchorsArr.map(function (link) {
    if (link.href.length === 0) {
      empty++
    } else if (link.href.includes(domain)) {
      internal++
    } else if (!link.href.match(/^${domain}/)) {
      external++
    }
    return link.href
  })
  var linkCSV = linkList.join('\n').replace(/#.*/g, '')

  // Credit to isherwood & Default (https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side)
  var link = window.document.createElement('a')
  link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURI(linkCSV))
  link.setAttribute('download', 'link_data.csv')
  link.click()
  return `There are ${linkList.length} links on this page: ${empty} empty, ${internal} internal, ${external} external`
}
getLinks()
