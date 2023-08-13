
export const SET_USER = 'SET_USER';
export const FETCH_DATA = "FETCH_DATA";

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"

export const setUser = (user) => {
    // console.log(user, "action")
    return {
        type: SET_USER,
        payload: user,
    };
};
export const fetchData = () => ({
    type: FETCH_DATA
});
export const fetchDataGet = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
})

