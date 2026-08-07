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


export function usernameValidation(username) {

    if (!username) {
        return {
            validationStatus: false,
            errorMessage: "Username is required",
        };
    }

    const value = username.trim();

    if (value.length < 3) {
        return {
            validationStatus: false,
            errorMessage: "Username must be at least 3 characters long",
        };
    }

    if (value.length > 30) {
        return {
            validationStatus: false,
            errorMessage: "Username cannot exceed 30 characters",
        };
    }

    if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        return {
            validationStatus: false,
            errorMessage: "Username can only contain letters, numbers, and underscores",
        };
    }

    if (/^\d/.test(value)) {
        return {
            validationStatus: false,
            errorMessage: "Username cannot start with a number",
        };
    }

    return {
        validationStatus: true,
        errorMessage: "",
    };
}


export function passwordValidation(password) {

    // TODO: Remove below return section
    return {
        validationStatus: true,
        errorMessage: "",
    }; // To here | remove

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