export function emailValidation(email) {

    if (!email) return {
        validationStatus: false,
        errorMessage: 'Email is required'
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(email)) return {
        validationStatus: false,
        errorMessage: 'Enter valid email address'
    };

    return {
        validationStatus: true,
        errorMessage: '',
    }

}


export function passwordValidation(password) {
    if (!password) {
        return {
            validationStatus: false,
            errorMessage: "Password is required",
        };
    }

    if (password.length < 8) {
        return {
            validationStatus: false,
            errorMessage: "Password must be at least 8 characters long",
        };
    }

    if (!/[a-z]/.test(password)) {
        return {
            validationStatus: false,
            errorMessage: "Password must contain at least one lowercase letter",
        };
    }

    if (!/[A-Z]/.test(password)) {
        return {
            validationStatus: false,
            errorMessage: "Password must contain at least one uppercase letter",
        };
    }

    if (!/\d/.test(password)) {
        return {
            validationStatus: false,
            errorMessage: "Password must contain at least one number",
        };
    }

    if (!/[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\;/']/.test(password)) {
        return {
            validationStatus: false,
            errorMessage: "Password must contain at least one special character",
        };
    }

    return {
        validationStatus: true,
        errorMessage: "",
    };
}