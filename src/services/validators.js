export const required = value => (value ? undefined : 'Обязательное поле.')

export const maxLength = max => value =>
    value && value.length > max ? `Максимум ${max} символов.` : undefined

export const minLength = min => value =>
    value && value.length < min ? `Минимум ${min} символов.` : undefined

export const number = value =>
    value && isNaN(Number(value)) ? 'Введите номер.' : undefined

export const minValue = min => value =>
    value && value < min ? `Минимальное значение ${min}.` : undefined

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(value)
        ? 'Неверный Email адрес'
        : undefined

export const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Введите 10 цифр'
        : undefined
