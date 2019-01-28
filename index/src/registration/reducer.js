import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILURE} from './constant';

const initialState = ({
    requesting: false,
    success: true,
    response: null,
    errors: null,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    referral_code: ''
});

function registerReducer (state = initialState, action){
    switch (action.type){
        case REGISTRATION_REQUEST:
            return state.merge({
                requesting: true,
                success: false,
                errors: null,
                response: null,
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                referral_code: ''
            });
            
        case REGISTRATION_SUCCESS:
            let newState = {
                ...state,
                requesting: false,
                success: true,
                errors: null,
                first_name: 'first_name',
                last_name: 'last_name',
                email: 'email',
                password: 'password',
                referral_code: 'referral_code'
            };
            return newState;

        case REGISTRATION_FAILURE:
            return state.merge({
                requesting: false,
                success: false,
                errors: action.errors.message,
                response: null
            })

        default:
        return state;
    }
}

export default registerReducer;