import axios from 'axios';

export function getItems() {
    const url = 'http://demo1607084.mockable.io/shipping';
    return axios.get(url)
        .then((res, err) => {
            if (err) return err;
            return res;
        });
}