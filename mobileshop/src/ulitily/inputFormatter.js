export const formatCurrencyInput = (value) => {
    const number = value.replace(/,/g, '');

    if (!number) return '';

    const parts = number.split('.');

    const integerPart = Number(parts[0]).toLocaleString('en-US');

    return parts.length > 1
        ? `${integerPart}.${parts[1]}`
        : integerPart;
};