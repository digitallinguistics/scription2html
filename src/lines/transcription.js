import addEmphasis from '../utilities/addEmphasis.js'

export default function createTranscription(data) {

  let html = ``

  for (const ortho in data) {
    const txn = data[ortho]
    html += `<p class=txn data-ortho='${ ortho }'>${ addEmphasis(txn) }</p>`
  }

  return html

}
