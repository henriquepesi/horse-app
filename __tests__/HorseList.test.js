import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

const apiMock = new MockAdapter(api);

describe('Main components', () => {
  it('Should load array', async () => {
    apiMock.onGet('horses').reply(['horse-1', 'horse-2']);
  });
});
