import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { BASE_PATH } from './constants/path';
import { TravelLayout } from './layout';
import {
  DailyRecordEditPage,
  DailyRecordListPage,
  DailyRecordPage,
  DailyRecordWritePage,
  ErrorPage,
  ExplorePage,
  Home,
  JourneyDetailPage,
  LoginPage,
  MainPage,
  MapDetailPage,
  MapPage,
  MateLookPage,
  MateManagementPage,
  MatePage,
  MateRuleCheckPage,
  MateRuleDetailCheckPage,
  MateRuleEditPage,
  MateRuleWritePage,
  MateSearchPage,
  MyPage,
  MyPageEditPage,
  Notification,
  OnBoardingPage,
  Redirect,
  SignUpPage,
  SignatureEditPage,
  SignaturePage,
  SignaturePostPage,
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
        path: `${BASE_PATH.MAP_JOURNEY_DETAIL}`,
        element: <JourneyDetailPage />,
      },
      {
        path: `${BASE_PATH.MAP_DETAIL}`,
        element: <MapDetailPage />,
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
      {
        path: `${BASE_PATH.NOTIFICATION_PAGE}`,
        element: <Notification />,
      },
    ],
  },
  {
    path: `${BASE_PATH.DAILY_RECORD}`,
    children: [
      {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <DailyRecordPage /> },
          {
            path: `${BASE_PATH.DAILY_RECORD_LIST}`,
            element: <DailyRecordListPage />,
          },
          {
            path: `${BASE_PATH.DAILY_RECORD_WRITE}`,
            element: <DailyRecordWritePage />,
          },
          {
            path: `${BASE_PATH.DAILY_RECORD_EDIT}`,
            element: <DailyRecordEditPage />,
          },
        ],
      },
    ],
  },
  {
    path: `${BASE_PATH.LOGIN}`,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: `${BASE_PATH.SNS_LOGIN_REDIRCT}`,
            element: <Redirect />,
          },
        ],
      },
    ],
  },
  {
    path: `${BASE_PATH.SIGNATURE}`,
    children: [
      {
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
            path: `${BASE_PATH.SIGNATURE_EDIT}`,
            element: <SignatureEditPage />,
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
            path: `${BASE_PATH.MATE_RULE_CHECK}`,
            element: <MateRuleCheckPage />,
          },
          {
            path: `${BASE_PATH.MATE_RULE_DETAIL_CHECK}`,
            element: <MateRuleDetailCheckPage />,
          },
          {
            path: `${BASE_PATH.MATE_RULE_DETAIL_EDIT}`,
            element: <MateRuleEditPage />,
          },
          {
            path: `${BASE_PATH.MATE_RULE_WRITE}`,
            element: <MateRuleWritePage />,
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
  {
    path: `${BASE_PATH.EXPLORE}`,
    children: [
      {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [{ index: true, element: <ExplorePage /> }],
      },
    ],
  },
  {
    path: `${BASE_PATH.MAIN_PAGE}`,
    children: [
      {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [{ index: true, element: <MainPage /> }],
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
