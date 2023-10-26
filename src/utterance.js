import createHeader        from './lines/metadata.js'
import createPhonetic      from './lines/phonetic.js'
import createSource        from './lines/source.js'
import createTranscript    from './lines/transcript.js'
import createTranscription from './lines/transcription.js'

export default function convertUtterance(u, { classes, tag }) {

  const classString   = classes.join(` `)
  const header        = createHeader(u.metadata)
  const transcript    = createTranscript(u.transcript)
  const transcription = createTranscription(u.transcription)
  const phonetic      = createPhonetic(u.phonetic)
  const source        = createSource(u.speaker, u.source)

  return `<${ tag } class='${ classString }'>
    ${ header }
    ${ transcript }
    ${ transcription }
    ${ phonetic }
    ${ source }
  </${ tag }>`

}
