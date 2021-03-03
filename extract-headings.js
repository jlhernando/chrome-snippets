function getHeadings() {
  var headingsArr = Array.from(
    document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  )
  var headings = headingsArr.map((h) => {
    const obj = { heading: h.innerText, tag: h.tagName }
    return obj
  })
  console.table(headings)
  return `There are ${headings.length} headings`
}
getHeadings()
