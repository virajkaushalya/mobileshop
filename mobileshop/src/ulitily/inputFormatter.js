export const formatCurrencyInput = (value) => {
    const number = value.replace(/,/g, '');

    if (!number) return '';

    const parts = number.split('.');

    const integerPart = Number(parts[0]).toLocaleString('en-US');

    return parts.length > 1
        ? `${integerPart}.${parts[1]}`
        : integerPart;
};


export const formatChequeNumberInput = (value) => {
    // Keep only digits
    const digits = value.replace(/\D/g, '');

    if (!digits) return '';

    const chequeNumber = digits.slice(0, 6);
    const bankNumber = digits.slice(6);

    return bankNumber
        ? `${chequeNumber}-${bankNumber}`
        : chequeNumber;
};


export const formatCurrency = (amount = 0) => (
    `Rs. ${Number(amount).toLocaleString("en-LK", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`
);

/**
 * First process to get only digit, in case if number contains '-' or spaces. e.g. 071-2345-123 (these numbers will still format)
 * then it process to format the given number
 **/
export const formatMobileNumber = ({mobileNumber}) => {
    if (!mobileNumber) return "No mobile number";

    const number = String(mobileNumber).replace(/\D/g, "");

    if (number.length === 10 && number.startsWith("07")) {
        return `(${number.slice(0, 3)}) ${number.slice(3, 6)} ${number.slice(6)}`;
    }

    return mobileNumber;
};