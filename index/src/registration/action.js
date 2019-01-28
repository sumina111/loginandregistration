import {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE
} from './constant';

export function registrationRequest (data){
    return {
        type: REGISTRATION_REQUEST,
        data
    }
}

export function registrationSuccess (user){
    return {
        type: REGISTRATION_SUCCESS,
        user
    }
}

export function registrationFailure (error){
    return {
        type: REGISTRATION_FAILURE,
        error
    }
}