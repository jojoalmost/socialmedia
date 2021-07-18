import photosActionType from "./types";

export const setModalPhoto = (payload) => {
    return {
        type: photosActionType.SET_MODAL_PHOTO,
        payload,
    }
}
