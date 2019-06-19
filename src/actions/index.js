import { releasesRef } from '../firebase';

const FETCH_RELEASES = 'FETCH_RELEASES';

export const addRelease = newRelease => async dispatch => {
  releasesRef.push().set(newRelease);
};

export const removeRelease = removeReleaseCandidate => async dispatch => {
  releasesRef.child(removeReleaseCandidate).remove();
};

export const fetchReleases = () => async dispatch => {
  releasesRef.on("value", snapshot => {
    dispatch({
      type: FETCH_RELEASES,
      payload: snapshot.val()
    });
  });
};
