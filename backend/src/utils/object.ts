export const trimObject = (object: { [key: string]: any })  => {
    const keys = Object.keys(object)
    if (keys.length === 0) return object;
    keys.forEach(key => {
        if (!object[key]) return;
        if (typeof object[key] === 'string') {
            object[key] = object[key].trim()
        }
        else if (typeof object[key] === 'object') {
            return trimObject(object[key])
        }
    })
    return object
}
