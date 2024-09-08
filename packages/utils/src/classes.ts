function getClassString(arg: any) {
  if (typeof arg === 'string' || typeof arg === 'number') {
    return arg.toString()
  }
  let tmp,
    str = ''
  if (typeof arg === 'object') {
    if (Array.isArray(arg)) {
      for (let i = 0; i < arg.length; ++i) {
        tmp = getClassString(arg[i])
        if (tmp) {
          if (str !== '') {
            str += ' '
          }
          str += tmp
        }
      }
    } else {
      for (let key in arg) {
        if (arg[key]) {
          if (str !== '') {
            str += ' '
          }
          str += key
        }
      }
    }
  }
  return str
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export function classes(...args: any[]) {
  let tmp,
    str = ''
  for (let i = 0; i < args.length; ++i) {
    tmp = getClassString(args[i])
    if (tmp) {
      if (str !== '') {
        str += ' '
      }
      str += tmp
    }
  }
  return str
}
