import createHeader        from './lines/metadata.js'
import createLiteral       from './lines/literal.js'
import createPhonetic      from './lines/phonetic.js'
import createSource        from './lines/source.js'
import createTimespan      from './lines/timespan.js'
import createTranscript    from './lines/transcript.js'
import createTranscription from './lines/transcription.js'
import createTranslation   from './lines/translation.js'

export default function convertUtterance(u, options) {

  const { classes, tag } = options

  const classString   = classes.join(` `)
  const header        = createHeader(u.metadata, options)
  const literal       = createLiteral(u.literal, options)
  const phonetic      = createPhonetic(u.phonetic, options)
  const source        = createSource(u.speaker, u.source)
  const timespan      = createTimespan(u.startTime, u.endTime)
  const transcript    = createTranscript(u.transcript, options)
  const transcription = createTranscription(u.transcription, options)
  const translation   = createTranslation(u.translation, options)

  return `<${ tag } class='${ classString }'>
    ${ header }
    ${ transcript }
    ${ transcription }
    ${ phonetic }
    ${ translation }
    ${ literal }
    ${ source }
    ${ timespan }
  </${ tag }>`

}
