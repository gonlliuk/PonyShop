export default () => {
    const colorList = [
        'Красный',
        'Оранжевый',
        'Желтый',
        'Зеленый',
        'Голубой',
        'Синий',
        'Фиолетовый',
    ]

    const kindList = [
        'Земной пони',
        'Единорог',
        'Пегас',
        'Аликорн',
    ]

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