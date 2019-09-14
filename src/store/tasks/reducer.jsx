import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  POST_TASKS_REQUEST,
  POST_TASKS_SUCCESS,
  POST_TASKS_FAILURE,
  TOOGLE_REVERSE_ORDER,
} from '../constants';

const initState = {
  tasks: {},
  originOrder: [],
  sortOrder: [],
  loading: true,
  error: null,
};

const updateTasksList = (state = initState, {type, payload}) => {
  switch (type) {
    case FETCH_TASKS_REQUEST:
    case POST_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_TASKS_SUCCESS:
    case POST_TASKS_SUCCESS:
      const list = [];
      const tasks = {};
      payload.forEach((el) => {
        tasks[el.id] = el;
        list.push(el.id);
      });
      return {
        ...state,
        loading: false,
        tasks: tasks,
        originOrder: list,
        sortOrder: list,
      };

    case FETCH_TASKS_FAILURE:
    case POST_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case TOOGLE_REVERSE_ORDER:
      return {
        ...state,
        sortOrder: [...state.sortOrder].reverse(),
      }

    default:
      return state;
  }
};

export default updateTasksList;