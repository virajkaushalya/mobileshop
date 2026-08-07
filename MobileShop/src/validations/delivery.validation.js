export function deliveryValidation(deviceList) {

    let isValid = true;

    for (const device of deviceList) {
        if (!device.isDelivered) return isValid = false;
    }

    return isValid;

}