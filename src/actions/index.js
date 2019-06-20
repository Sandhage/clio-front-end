import { releasesRef } from '../firebase';

export const FETCH_RELEASES = 'FETCH_RELEASES';

export const addRelease = newRelease => async dispatch => {
  releasesRef.push().set(newRelease);
};

export const removeRelease = removeRelease => async dispatch => {
  releasesRef.child(removeRelease).remove();
};

export const fetchReleases = () => async dispatch => {
  releasesRef.on("value", snapshot => {
    dispatch({
      type: FETCH_RELEASES,
      payload: snapshot.val()
    });
  });
};
