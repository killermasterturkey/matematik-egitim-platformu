import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Toplama from "../pages/toplama/page";
import Cikarma from "../pages/cikarma/page";
import Carpma from "../pages/carpma/page";
import Bolme from "../pages/bolme/page";
import Karisik from "../pages/karisik/page";
import Testler from "../pages/testler/page";
import MiniOyunlar from "../pages/mini-oyunlar/page";
import CarpimTablosu from "../pages/carpim-tablosu/page";
import HikayeliProblemler from "../pages/hikayeli-problemler/page";
import Kesirler from "../pages/kesirler/page";
import OndalikSayilar from "../pages/ondalik-sayilar/page";
import Geometri from "../pages/geometri/page";
import SaatZaman from "../pages/saat-zaman/page";
import ParaHesaplama from "../pages/para-hesaplama/page";
import OlcuBirimleri from "../pages/olcu-birimleri/page";

// Sınıf bazlı müfredat sayfaları
import SiniflarPage from "../pages/siniflar/SiniflarPage";
import GradePage from "../pages/siniflar/GradePage";
import ThemePage from "../pages/siniflar/ThemePage";
import TopicPage from "../pages/siniflar/TopicPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  // Sınıf bazlı müfredat route'ları
  {
    path: "/siniflar",
    element: <SiniflarPage />,
  },
  {
    path: "/sinif/:grade",
    element: <GradePage />,
  },
  {
    path: "/sinif/:grade/tema/:temaId",
    element: <ThemePage />,
  },
  {
    path: "/sinif/:grade/konu/:konuId",
    element: <TopicPage />,
  },
  {
    path: "/toplama",
    element: <Toplama />,
  },
  {
    path: "/cikarma",
    element: <Cikarma />,
  },
  {
    path: "/carpma",
    element: <Carpma />,
  },
  {
    path: "/bolme",
    element: <Bolme />,
  },
  {
    path: "/karisik",
    element: <Karisik />,
  },
  {
    path: "/testler",
    element: <Testler />,
  },
  {
    path: "/mini-oyunlar",
    element: <MiniOyunlar />,
  },
  {
    path: "/carpim-tablosu",
    element: <CarpimTablosu />,
  },
  {
    path: "/hikayeli-problemler",
    element: <HikayeliProblemler />,
  },
  {
    path: "/kesirler",
    element: <Kesirler />,
  },
  {
    path: "/ondalik-sayilar",
    element: <OndalikSayilar />,
  },
  {
    path: "/geometri",
    element: <Geometri />,
  },
  {
    path: "/saat-zaman",
    element: <SaatZaman />,
  },
  {
    path: "/para-hesaplama",
    element: <ParaHesaplama />,
  },
  {
    path: "/olcu-birimleri",
    element: <OlcuBirimleri />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
