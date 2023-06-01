

export default function changeFavorite(movie){
    return{
        type: 'SET_FAVORITE',
        payload: movie
    }
}
export function deleteFavorite(movie){
    return{
        type: 'DELETE_FAVORITE',
        payload: movie
    }
}

