export default function createTranscription(data, { targetLang }) {

  const lang = targetLang ? `lang='${ targetLang }'` : ``
  let html = ``

  for (const ortho in data) {
    const txn = data[ortho]
    html += `<span class=w-txn data-ortho='${ ortho }' ${ lang }>${ txn }</span>\n`
  }

  return html

}
