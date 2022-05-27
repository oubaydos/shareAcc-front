import { useRoutes } from "react-router-dom";
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Home from "./components/Home"
import Main from "./components/OfferList"
import ShareSubscription from "./components/shareSubscription/ShareSubscription";
import NavbarUnauthenticated from "./components/Navbar/NavbarUnauthenticated"
import NavbarAuthenticated from "./components/Navbar/NavbarAuthenticated"
import SearchPage from "./components/searchPage2"
import OfferList from "./components/OfferList";
import OfferCard from "./components/OfferCard";
import OfferOrSubscribe from "./components/offerOrSubscribe";

const ContributorRoutes = () => useRoutes([]);
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
  if(role==="GUEST") return <NavbarUnauthenticated/>

  return <NavbarAuthenticated/>

}
export {getRoutes,getNavbar};
