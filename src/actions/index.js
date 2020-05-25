export const RECEIVE_MEMES = 'RECIEVE_MEMES';

function receiveMemes (json) {
    const {memes} = json.data;

    return {
        type: RECEIVE_MEMES,
        payload: {
            memes: memes
        }
    }
}


function fetchMemesJson() {
    return fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
}



export function fetchMemes() {
    return function(dispatch) {
        return fetchMemesJson()
        .then( json => dispatch(receiveMemes(json)))
    }
}