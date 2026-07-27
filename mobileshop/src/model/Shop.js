export default class Shop {
    shopId;
    shopName;
    address;
    contactNumber;
    isVisitCompleted = false;

    constructor(shopId, shopName, address, contactNumber, isVisitCompleted) {
        this.shopId = shopId;
        this.shopName = shopName;
        this.address = address;
        this.contactNumber = contactNumber;
        this.isVisitCompleted = isVisitCompleted;
    }
}
