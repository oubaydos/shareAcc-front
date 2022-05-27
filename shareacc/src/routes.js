import { useRoutes } from "react-router-dom";
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Home from "./components/Home"
import Main from "./components/Offer/OfferList"
import ShareSubscription from "./components/shareSubscription/ShareSubscription";
import ChoosePlan from "./components/shareSubscription/ChoosePlan";

const ContributorRoutes = () => useRoutes([
    { path: "/", element: <Home /> },
    {path: "/subscription/new", element: <ShareSubscription/>},
    {path: "/subscription/new/:id/plans", element: ({id}) => <ChoosePlan id={id} />}
]);
const GuestRoutes = () =>
  useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/offer", element: <Main /> },
  ]);
const AdminRoutes = () => useRoutes([]);

const getRoutes = (role) => {
  switch (role) {
    case "CONTRIBUTOR":
      return <ContributorRoutes />;
    case "ADMIN":
      return <AdminRoutes />;
    case "GUEST":
      return <GuestRoutes />;
    default:
        return <GuestRoutes />;
    //   return <Loading />;
  }
};
export default getRoutes;
