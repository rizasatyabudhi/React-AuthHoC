import { CHANGE_AUTH } from '../actions/types';

// By default, our user is not logged id (false)

export default function (state = false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
  }

  return state;
}

