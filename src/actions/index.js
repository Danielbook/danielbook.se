export const UPDATE_ACTIVE = 'UPDATE_ACTIVE';

export function updateActive(payload) {
  return {
    type: UPDATE_ACTIVE,
    payload,
  };
}
