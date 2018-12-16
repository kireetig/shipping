export const checkCart = (items, selectedItem) => {
    const index = items.indexOf(selectedItem);
    if (index > -1) {
        items.splice(index, 1);
    } else {
        if (selectedItem !== null) {
            items.push(selectedItem);
        }
    }
    return items;
};

export const sortCartPackage = (cartItems) => {
    cartItems.sort((a, b) => {
        const ia = parseInt(a.price);
        const ib = parseInt(b.price);
        if (ia === ib) {
            return 0;
        }
        return ia > ib ? -1 : 1;
    });
    const result = [{
        totalPrice: 0,
        totalWeight: 0,
        name: null,
        arr: []
    }];
    for (let i = 0; i < cartItems.length; i++) {
        let val = null;
        for (let j = 0; j < result.length; j++) {
            if (cartItems[i] !== null) {
                const price = (result[j].totalPrice + parseInt(cartItems[i].price));
                if (price <= 250) {
                    result[j].totalPrice = price;
                    result[j].totalWeight += parseInt(cartItems[i].weight);
                    result[j].name = result[j].name === null ? cartItems[i].name : (result[j].name +', '+ cartItems[i].name);
                    result[j].arr.push(cartItems[i]);
                    cartItems[i] = null;
                    val = 1;
                    break;
                }
            }
        }
        if(val === null){
            result.push({
                totalPrice: parseInt(cartItems[i].price),
                totalWeight: parseInt(cartItems[i].weight),
                name: cartItems[i].name,
                arr: [cartItems[i]]
            });
            cartItems[i] = null;
        }
    }
    console.log(result);
    return result

};
