import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_PATH } from '@/constants/path';

export const mateLookHandlers = [
  http.get(`${baseURL}${API_PATH.MATE_LOOK}`, (req, res, ctx) => {
    const mates = [];

    return HttpResponse.json(mates);
  }),
];
