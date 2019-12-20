export default function login(
  state = {
    log: false,
    email: '',
    password: '',
  },
  action,
) {
  switch (action.type) {
    case 'LOG_IN':
      if (!state.log) {
        return {
          log: true,
          email: action.email,
          password: action.password,
        };
      }
      if (state.log) {
        return {
          log: false,
          email: '',
          password: '',
        };
      }
      break;
    default:
      return state;
  }
}
