export default class Device {
    deviceId;
    deviceName;
    requestedCnt = 0;
    issuingCnt = 0;
    isDelivered = false;

    constructor(deviceId, deviceName, requestedCnt, issuingCnt, isDelivered) {
        this.deviceId = deviceId;
        this.deviceName = deviceName;
        this.requestedCnt = requestedCnt;
        this.issuingCnt = issuingCnt;
        this.isDelivered = isDelivered;
    }
}
