// Author: Jose Luis Hernando | @jlhernando
function getHeadings() {
  var headingsArr = Array.from(
    document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  )
  var headings = headingsArr.map((h) =>
    console.log(`"${h.innerText}" as an ${h.tagName}`)
  )
  return `There are ${headings.length} headings`
}
getHeadings()
