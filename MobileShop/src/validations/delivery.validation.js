export function deliveryValidation(deviceList) {

    let isValid = true;

    for (const device of deviceList) {
        if (device.isDelivered) isValid = false;
    }

    return isValid;

}