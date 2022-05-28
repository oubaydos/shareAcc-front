import { useRoutes } from "react-router-dom";
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Home from "./components/Home"
import Main from "./components/Offer/OfferList"
import ShareSubscription from "./components/shareSubscription/ShareSubscription";
import ChoosePlan from "./components/shareSubscription/ChoosePlan";
import NavbarUnauthenticated from "./components/Navbar/NavbarUnauthenticated"
import NavbarAuthenticated from "./components/Navbar/NavbarAuthenticated"
import SearchPage from "./components/searchPage2"
import OfferList from "./components/Offer/OfferList";
import OfferCard from "./components/OfferCard";
import OfferOrSubscribe from "./components/offerOrSubscribe";
import  Subscriptions  from "./components/Subscriptions"
import OfferDetails from "./components/Offer/OfferDetails";

const ContributorRoutes = () => useRoutes([
    { path: "/", element: <Home /> },
    {path: "/subscription/new", element: <ShareSubscription/>},
    {path: "/subscription/new/:id/plans", element: <ChoosePlan />},
    {path: "/subscription/new/:id/:planChoice/credentials", element: <OfferDetails/>}
]);
const GuestRoutes = () =>
  useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/offer", element: <Main /> },
    { path: "/share-subscription", element: <ShareSubscription /> },
    { path: "/marketplace",element : <SearchPage/>},
    { path: "/marketplace/list/:provider",element : <OfferList/>},
    { path: "/offer-card",element : <OfferCard/>},
    { path: "/offer-or-subscribe",element : <OfferOrSubscribe/>},
    { path: "/dashboard",element : <Subscriptions/>},
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
const getNavbar = (role)=>{
  console.log(role);
  if(role==="ADMIN" || role==="CONTRIBUTOR") return <NavbarAuthenticated/>
  else if (role==="GUEST") return <NavbarUnauthenticated/>
  return <div></div>

}
export {getRoutes,getNavbar};
