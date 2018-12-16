export const checkCart = (items, selectedItem) => {
    const index = items.indexOf(selectedItem);
    if (index > -1) {
        items.splice(index, 1);
    } else {
        items.push(selectedItem);
    }
};

export const sortCartPackage = (cartItems) => {
    cartItems.sort((a, b) => {
        if (a.weight < b.weight) {
            return -1
        } else if (a.weight > b.weight) {
            return 1
        } else {
            return 0
        }
    });

};
