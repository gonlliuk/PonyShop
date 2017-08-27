import data from '../data/filter-data'
export default () => {
    const {
        colorList,
        kindList,
    } = data

    const generateRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min)

    return Array
        .apply(null, { length: 1000 })
        .map(() => {
            const color = colorList[generateRandomNumber(0, 6)]
            const kind = kindList[generateRandomNumber(0, 3)]
            const isNew = !!generateRandomNumber(0, 1)
            const price = generateRandomNumber(1, 10000)
            return {
                kind,
                color,
                isNew,
                price,
                name: `${color} ${kind}`,
            }
        })
}