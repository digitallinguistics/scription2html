import dlx2html                   from '../../src/index.js'
import { parseFragment as parse } from 'parse5'
import prettier                   from 'prettier'
import scription2dlx              from '@digitallinguistics/scription2dlx'

/**
 * A light wrapper/currying for scription2dlx -> dlx2html -> parse5
 */
export default async function convertAndParse(scription, options) {

  const data      = scription2dlx(scription)
  const html      = dlx2html(data, options)
  const dom       = parse(html)
  const formatted = await prettier.format(html, { parser: `html` })

  return { data, dom, html: formatted }

}
