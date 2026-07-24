export const formatCurrencyInput = (value) => {
    const number = value.replace(/,/g, '');

    if (!number) return '';

    const parts = number.split('.');

    const integerPart = Number(parts[0]).toLocaleString('en-US');

    return parts.length > 1
        ? `${integerPart}.${parts[1]}`
        : integerPart;
};

export const formatCurrency = (amount = 0) => (
    `Rs. ${Number(amount).toLocaleString("en-LK", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`
);