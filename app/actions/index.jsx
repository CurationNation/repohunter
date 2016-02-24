import fetch from 'isomorphic-fetch';

export const REQUEST_RESOURCES = 'REQUEST_RESOURCES';
function requestResources(curationProject) {
  return {
    type: REQUEST_RESOURCES,
    curationProject
  };
}

export const RECEIVE_RESOURCES = 'RECEIVE_RESOURCES';
function receiveResources(curationProject, json) {
  return {
    type: RECEIVE_RESOURCES,
    curationProject,
    categories: JSON.parse(json),
    receivedAt: Date.now()
  }
}

export function fetchResources(curationProject) {
  return function (dispatch) {
    dispatch(requestResources(curationProject));

    return fetch(`/${curationProject}`).
    then(response => response.json()).
    then(json => dispatch(receiveResources(curationProject, json)));
  };
}
