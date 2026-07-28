export function shopRequestValidation(requestData) {

    if (!requestData && requestData.length < 5) return {
        status: false,
        error: "This field is required",
    };

    return {
        status: true,
        error: ""
    };

}

export function userRemarkValidation(remarkData) {

    if (!remarkData && remarkData.length < 5) return {
        status: false,
        error: "This field is required",
    };

    return {
        status: true,
        error: ""
    };
}

export function cashReceiveValidation(cashData) {

    const amount = Number(cashData);

    if (
        cashData === "" ||
        cashData === null ||
        cashData === undefined ||
        Number.isNaN(amount) ||
        amount < 0
    ) return {
        status: false,
        error: "Please enter valid amount",
    }

    return {
        status: true,
        error: ""
    }

}

export function chequeNumberValidation(chequeNumberData) {

    // Validate cheque number
    if (!chequeNumberData) {
        return {
            status: false,
            error: "Please enter Cheque Number",
        };
    }

    const chequeNumberRegex = /^\d{6}-\d+$/;
    if (!chequeNumberRegex.test(chequeNumberData)) {
        return {
            status: false,
            error: "Invalid cheque number format",
        };
    }

    return {
        status: true,
        error: "",
    };

}

export function chequeAmountValidation(chequeAmountData) {

    // Validate amount
    if (!chequeAmountData) {
        return {
            status: false,
            error: "Enter Amount",
        };
    }

    const amount = Number(
        chequeAmountData.replace(/,/g, '')
    );
    if (Number.isNaN(amount) || amount <= 0) {
        return {
            status: false,
            error: "Invalid amount",
        };
    }

    return {
        status: true,
        error: "",
    };

}

export function chequeImageValidation(chequeImage) {

    // Validate image
    if (!chequeImage || !chequeImage.uri) {
        return {
            status: false,
            error: "Please attach cheque image",
        };
    }

    return {
        status: true,
        error: "",
    };

}