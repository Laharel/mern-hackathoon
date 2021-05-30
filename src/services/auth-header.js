

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.access) {
        return { 
            'Content-Type': 'application/json',
            'Authorization': 'JWT ' + user.access,

            // 'accept': 'application/json' 
        };
    } else {
        return {};
    }
}