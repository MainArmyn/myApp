import logo from './logo.svg';
import Header from './components/HeaderComponent_v2';
import './App.css';
import Footer from './components/FooterComponent_v2';
import Products from './components/ProductsComponent_v2';
import ShopList from './components/ShopsComponent_v2';
import Videos from './components/VideosComponent_v2';
import MainComponent from './components/MainComponent';
import Answers from './components/AnswersComponent_v2';
import VariationsFormComponent from './components/VariationsFormComponent';
import RequestForm from './components/HelpFormComponent_v2';
import Help from './components/HelpComponent_v2';
import Design from './components/DesignComponent_v2';
import Phone from './components/PhoneComponent_v2';
import OrderListComponent from './components/OrderListComponent';
import InfoShop from './components/InfoShopComponent_v2';
import OrderInformationComponent from './components/OrderInformationComponent';
import BannerForm from './components/BannerFormComponent_v2';
import BannersComponent from './components/BannersComponent_v2';
import Action from './components/ActionComponent_v2';
import ProductBaseInfoFormComponent from './components/ProductBaseInfoFormComponent';
import NewBanner from './components/NewBannerComponent_v2';
import PinInput from 'react-pin-input';
import {v4 as uuid} from "uuid";
import { useState } from 'react';
import VariationsInfoFormComponent from './components/VariationsInfoFormComponent';
//import Tooltips from './components/ToolTipComponent';
function App() {
  let data = [{photos: [logo,logo,logo],name: "very good and soft wdqwdqwd",price: "2500",salePrice: "1000",category: "hoodieqwdwqd"},{photos: [],name: "very good and soft wdqwdqwd",price: "2500",salePrice: "1000",category: "hoodieqwdwqd"}];
  let shops = [{name: "botiq",qr: logo,href: "yandex.com"},{name: "botiq",qr: logo,href: "yandex.com",status: "Active"},{name: "botiq",qr: logo,href: "yandex.com"}];
  const [test,setTest] = useState();
  let dataTest = [{id: "3443t",status: false,text: "Дорогой предприниматель, Добро пожаловать в мир онлайн-торговли! Здесь идеи становятся витринами, а клики мыши – реальностью. Твой кабинет – твоя мастерская успеха. Создавай уникальные магазины, наполняй их лучшими продуктами, завоевывай сердца клиентов. Твои усилия – кирпичи в фундаменте бизнеса. Мы поддерживаем твои страсти и смелые идеи. За экранами – реальные истории успеха. Создавай незабываемые впечатления. Пусть твой кабинет станет местом, где рождаются уникальные предложения, а каждый заказ – повод для гордости. С нетерпением ждем, как ты преображаешь виртуальные полки в сокровищницы. С наилучшими пожеланиями, команда Botique."}
  ,{id: "3411t",status: false,text: "Дорогой предприниматель, Добро пожаловать в мир онлайн-торговли! Здесь идеи становятся витринами, а клики мыши – реальностью. Твой кабинет – твоя мастерская успеха. Создавай уникальные магазины, наполняй их лучшими продуктами, завоевывай сердца клиентов. Твои усилия – кирпичи в фундаменте бизнеса. Мы поддерживаем твои страсти и смелые идеи. За экранами – реальные истории успеха. Создавай незабываемые впечатления. Пусть твой кабинет станет местом, где рождаются уникальные предложения, а каждый заказ – повод для гордости. С нетерпением ждем, как ты преображаешь виртуальные полки в сокровищницы. С наилучшими пожеланиями, команда Botique."},{id: "3443t",status: true,text: "Дорогой предприниматель, Добро пожаловать в мир онлайн-торговли! Здесь идеи становятся витринами, а клики мыши – реальностью. Твой кабинет – твоя мастерская успеха. Создавай уникальные магазины, наполняй их лучшими продуктами, завоевывай сердца клиентов. Твои усилия – кирпичи в фундаменте бизнеса. Мы поддерживаем твои страсти и смелые идеи. За экранами – реальные истории успеха. Создавай незабываемые впечатления. Пусть твой кабинет станет местом, где рождаются уникальные предложения, а каждый заказ – повод для гордости. С нетерпением ждем, как ты преображаешь виртуальные полки в сокровищницы. С наилучшими пожеланиями, команда Botique."},{id: "3443t",status: true,text: "Дорогой предприниматель, Добро пожаловать в мир онлайн-торговли! Здесь идеи становятся витринами, а клики мыши – реальностью. Твой кабинет – твоя мастерская успеха. Создавай уникальные магазины, наполняй их лучшими продуктами, завоевывай сердца клиентов. Твои усилия – кирпичи в фундаменте бизнеса. Мы поддерживаем твои страсти и смелые идеи. За экранами – реальные истории успеха. Создавай незабываемые впечатления. Пусть твой кабинет станет местом, где рождаются уникальные предложения, а каждый заказ – повод для гордости. С нетерпением ждем, как ты преображаешь виртуальные полки в сокровищницы. С наилучшими пожеланиями, команда Botique."}];
  dataTest.forEach(el => {el.id = uuid(); el.title = "dqwdqwdqwdqwdqwd"});
  return (
    <div>
        <ProductBaseInfoFormComponent/>
        <VariationsFormComponent/>
        <VariationsInfoFormComponent/>
        </div>
    
  );
}

export default App;
