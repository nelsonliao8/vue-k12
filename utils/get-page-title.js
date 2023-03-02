/*
 * @Author: nelson
 * @Date: 2020-10-29 21:45:29
 */

const title = 'K12 School Friends'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
