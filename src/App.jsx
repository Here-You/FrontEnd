import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { BASE_PATH } from './constants/path';
import { TravelLayout } from './layout';
import {
  DailyRecordEditPage,
  DailyRecordPage,
  DailyRecordWritePage,
  ErrorPage,
  Home,
  LoginPage,
  MapPage,
  MateLookPage,
  MateManagementPage,
  MatePage,
  MateRuleCheckPage,
  MateSearchPage,
  MyPage,
  MyPageEditPage,
  MyPagePasswordPage,
  MyPageWithdrawPage,
  OnBoardingPage,
  SignUpPage,
  SignatureEditPage,
  SignaturePage,
  SignaturePopularPage,
  SignaturePostPage,
  SignatureRecommendPage,
  SignatureSearchPage,
  SignatureWritePage,
  TravelTypePage,
  TravelTypeResultPage,
} from './pages';
import AppLayout from './pages/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const router = createBrowserRouter([
  {
    path: `${BASE_PATH.BASE}`,
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: `${BASE_PATH.MAP}`,
        element: <MapPage />,
      },
      {
        path: `${BASE_PATH.SIGN_UP}`,
        element: <SignUpPage />,
      },
      {
        path: `${BASE_PATH.LOGIN}`,
        element: <LoginPage />,
      },
      {
        path: `${BASE_PATH.ON_BOARDING}`,
        element: <OnBoardingPage />,
      },
    ],
  },
  {
    path: `${BASE_PATH.DAILYRECORD}`,
    children: [
      {
        element: <DailyRecordPage />,
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <DailyRecordPage /> },
          {
            path: `${BASE_PATH.DAILYRECORD_WRITE}`,
            element: <DailyRecordWritePage />,
          },
          {
            path: `${BASE_PATH.DAILYRECORD_EDIT}`,
            element: <DailyRecordEditPage />,
          },
        ],
      },
    ],
  },
  {
    path: `${BASE_PATH.SIGNATURE}`,
    children: [
      {
        element: <SignaturePage />,
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <SignaturePage /> },
          {
            path: `${BASE_PATH.SIGNATURE_POST_PAGE}`,
            element: <SignaturePostPage />,
          },
          {
            path: `${BASE_PATH.SIGNATURE_WRITE}`,
            element: <SignatureWritePage />,
          },
          {
            path: `${BASE_PATH.SIGNATURE_SEARCH}`,
            element: <SignatureSearchPage />,
          },
          {
            path: `${BASE_PATH.SIGNATURE_EDIT}`,
            element: <SignatureEditPage />,
          },
          {
            path: `${BASE_PATH.SIGNATURE_POPULAR}`,
            element: <SignaturePopularPage />,
          },
          {
            path: `${BASE_PATH.SIGNATURE_RECOMMEND}`,
            element: <SignatureRecommendPage />,
          },
        ],
      },
    ],
  },
  {
    path: `${BASE_PATH.MATE}`,
    children: [
      {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <MatePage /> },

          {
            path: `${BASE_PATH.MATE_MANAGEMENT}`,
            element: <MateManagementPage />,
          },
          {
            path: `${BASE_PATH.MATE_SEARCH}`,
            element: <MateSearchPage />,
          },
          {
            path: `${BASE_PATH.MATE_LOOK}`,
            element: <MateLookPage />,
          },
          {
            path: `${BASE_PATH.MATE_RULE_CHECK_PAGE}`,
            element: <MateRuleCheckPage />,
          },
        ],
      },
    ],
  },
  {
    path: `${BASE_PATH.MY_PAGE}`,
    children: [
      {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <MyPage /> },
          {
            path: `${BASE_PATH.MY_PAGE_EDIT}`,
            element: <MyPageEditPage />,
          },
          {
            path: `${BASE_PATH.MY_PAGE_WITHDRAW}`,
            element: <MyPageWithdrawPage />,
          },
          {
            path: `${BASE_PATH.MY_PAGE_CHANGE_PASSWORD}`,
            element: <MyPagePasswordPage />,
          },
        ],
      },
    ],
  },
  {
    path: `${BASE_PATH.TRAVEL_TYPE}`,
    children: [
      {
        element: <TravelLayout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <TravelTypePage /> },
          {
            path: `${BASE_PATH.TRAVEL_TYPE_RESULT}`,
            element: <TravelTypeResultPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
