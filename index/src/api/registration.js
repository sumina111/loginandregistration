function submitRegistration(registration) {
    console.log('asdasd');

    return fetch("http://www.xclassets.com/api/customer",
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                first_name: registration.first_name,
                last_name: registration.last_name,
                email: registration.email,
                password: registration.password,
                confirm_password: registration.confirm_password,
                referral_code: registration.referral_code
            })

            })
            .then(res => res.json())
            .then(res => {
                console.log('inside registration', res)
                return res.data;
            });
        
}

export default submitRegistration