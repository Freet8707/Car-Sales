export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const CALC_TOTAL = 'CALC_TOTAL'

export const addFeature = feature => {
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export const removeFeature = feature => {
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}

export const calcTotal = amount => {
    return {
        type: ADD_FEATURE,
        payload: amount
    }
}