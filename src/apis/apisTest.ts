import { ApisFunction } from '.';

export const apisTestTest: ApisFunction<{}, {}> = (request) => (props) => {
  return request.get('test', props);
};
