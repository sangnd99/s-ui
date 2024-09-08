/**
 * Deeply merge two or more objects
 * @param  {...object} objects - Objects to merge
 */
export function deepMerge(...objects: any) {
  let target: any = {}
  const merge = (obj: any) => {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) {
          target[prop] = deepMerge(target[prop], obj[prop])
        } else if (typeof obj[prop] === 'object' && Array.isArray(obj[prop])) {
          target[prop] = [...(target[prop] || []), ...(obj[prop] || [])]
        } else {
          target[prop] = obj[prop]
        }
      }
    }
  }
  objects.forEach((object: any) => merge(object))
  return target
}
