import Shop from "../model/Shop";

export const visitPayments = [
    {
        id: "1",
        shopId: "12dsa31s",
        shopName: "ABC Mobile",
        cash: 45000,
        cheques: [
            {number: "001245", amount: 70000},
            {number: "001246", amount: 50000},
        ],
    },
    {
        id: "2",
        shopId: "87kas12",
        shopName: "GenXT Mobiles",
        cash: 28000,
        cheques: [
            {number: "774210", amount: 42000},
        ],
    },
    {
        id: "3",
        shopId: "55msa82",
        shopName: "City Cell House",
        cash: 16000,
        cheques: [],
    },
];


export const visitingShopsList = [
    new Shop("101", "Sunrise Mart", "12 Main Street, Colombo", "0711111222", true),
    new Shop("102", "Green Valley Stores", "45 Temple Road, Kandy", "0711111333", true),
    new Shop("103", "City Choice Super", "78 Galle Road, Galle", "0711111444", true),
    new Shop("104", "Fresh Corner", "23 Station Road, Kurunegala", "0711111555", false),
    new Shop("105", "Family Grocery", "56 Market Street, Negombo", "0711111666", false),
    new Shop("106", "Ocean View Shop", "91 Beach Road, Matara", "0711111777", false),
    new Shop("107", "Lucky Traders", "14 Hospital Road, Anuradhapura", "0711111888", false),
    new Shop("108", "Daily Needs", "67 Lake Road, Badulla", "0711111999", false),
    new Shop("109", "Royal Mini Mart", "39 High Level Road, Maharagama", "0711112000", false),
    new Shop("110", "Prime Retail Hub", "88 New Town Road, Jaffna", "0711112111", false),
];
