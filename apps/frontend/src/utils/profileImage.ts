export const stringHashToColour = function (str) {
  if (!str) {
    return ''
  }
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  let colour = ''
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff
    colour += value.toString(16)
  }
  return colour
}

export const defaultImageUrl = (name: string | undefined, id: string | undefined) =>
  `https://avatar.oxro.io/avatar.svg?name=${name}&background=${stringHashToColour(id)}`
