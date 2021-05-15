
export const isValidImage = (value) => {
    if (!value) return true
    if (typeof value !== 'string') return false

    const validFormats = ['png', 'jpeg', 'jpg', 'svg']
    const extention = value.split('.').pop()
    return validFormats.includes(extention)     

    return false
}