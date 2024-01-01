import { expect }         from 'chai'
import findElementByClass from './utilities/findElementByClass.js'
import { getTextContent } from '../node_modules/@web/parse5-utils/src/index.js'
import parse              from './utilities/convertAndParse.js'

describe(`words`, function() {

  it(`renders one HTML word per linguistic word`, async function() {

    const scription = `
    waxdungu qasi
    waxt-qungu qasi
    day-one    man
    one day a man
    `

    const { dom }        = await parse(scription)
    const wordsContainer = findElementByClass(dom, `words`)
    const wordItems      = wordsContainer.childNodes.filter(node => node.tagName === `li`)

    expect(wordItems).to.have.length(2)

  })

  it(`does not return a words element if there are no words lines`, async function() {

    const scription = `
    waxdungu qasi
    one day a man
    `

    const { dom }        = await parse(scription)
    const wordsContainer = findElementByClass(dom, `words`)

    expect(wordsContainer).to.not.exist

  })

  it(`word transcription`, async function() {

    const scription = `
    \\w-mod  waxdungu   qasi
    \\w-swad wašdungu   ʔasi
    \\m      waxt-qungu qasi
    \\gl     day-one    man
    \\tln    one day a man
    `

    const { dom, html }           = await parse(scription)
    const wordsContainer          = findElementByClass(dom, `words`)
    const [firstWord, secondWord] = wordsContainer.childNodes.filter(node => node.tagName === `li`)

    const firstText  = getTextContent(firstWord)
    expect(firstText).to.include(`waxdungu`)
    expect(firstText).to.include(`wašdungu`)

    const secondText = getTextContent(secondWord)
    expect(secondText).to.include(`qasi`)
    expect(secondText).to.include(`ʔasi`)

  })

})