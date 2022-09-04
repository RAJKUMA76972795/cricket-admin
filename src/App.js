import React , {useState,useEffect} from 'react';
import './App.css';
import Header from './component/Header';
import Menu from './component/Menu';

import MasterDetails from './pages/MasterDetails/MasterDetails';
import ClientDetails from './pages/MasterDetails/ClientDetails';
import ClientDetailsAddNew from './pages/MasterDetails/ClientDetailsAddNew';
import ClientLimit from './pages/MasterDetails/ClientLimit';

import Home from './pages/DashBoard/Home';

import SportsBetting from './pages/SportsBetting/SportsBetting';
import SportDetails from './pages/SportsBetting/SportDetails';
import CompleteGame from './pages/SportsBetting/CompleteGame';

import BlockMarket from './pages/BlockMarket/BlockMarket';

import Ledger from './pages/Ledger/Ledger';
import AllClientLedger from './pages/Ledger/AllClientLedger';
import ClientPlusMinus from './pages/Ledger/ClientPlusMinus';
import MyLedger from './pages/Ledger/MyLedger';

import ClientLedger from './pages/CashTranscation/ClientLedger';

import ProfitLossReport from './pages/ProfitLossReport/ProfitLossReport';

import Reports from './pages/Reports/Reports';
import AccountStatement from './pages/Reports/AccountStatement';
import AccountStatementClient from './pages/Reports/AccountStatementClient';
import CommissionReport from './pages/Reports/CommissionReport';
import DeletedBets from './pages/Reports/DeletedBets';
import LoginReport from './pages/Reports/LoginReport';

import Settings from './pages/Settings/Settings';
import CasinoHistory from './pages/Settings/CasinoHistory';
import ChangePassword from './pages/Settings/ChangePassword';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Marquee from './component/Marquee';
import Footer from './component/Footer';


function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [ismenuNavigatorVisible, setIsmenuNavigatorVisible] = useState(window.innerWidth>960?true:false);

  useEffect(() => {
    if(window.innerWidth>960){
      setIsmenuNavigatorVisible(false);
      setIsMenuVisible(true);
    }
    else{
      setIsmenuNavigatorVisible(true);
      setIsMenuVisible(false);
    }
  },[window.innerWidth])
  
  return (
    <BrowserRouter>
    <div className="App">
      <Header setIsMenuVisible={setIsMenuVisible} isMenuVisible={isMenuVisible} setIsmenuNavigatorVisible={setIsmenuNavigatorVisible} ismenuNavigatorVisible={ismenuNavigatorVisible}/>
      <div className="container">
      {isMenuVisible?<Menu className="menu"/>:""}
      <div className="total-content">
        <Marquee/>
      <Routes>
      <Route path="/" element={<Home className="main-content"/>}/>


      <Route path="/masterdetails" element={<MasterDetails className="main-content"/>}/>
      <Route path="/masterdetails/clientdetails" element={<ClientDetails className="main-content"/>}/> 
      <Route path="/masterdetails/clientdetailsaddnew" element={<ClientDetailsAddNew className="main-content"/>}/>
      <Route path="/masterdetails/clientlimit" element={<ClientLimit className="main-content"/>}/> 

      <Route path="/sportbetting" element={<SportsBetting className="main-content"/>}/>
      <Route path="/sportbetting/sportdetails" element={<SportDetails className="main-content"/>}/>
      <Route path="sportbetting/completegame" element={<CompleteGame className="main-content"/>}/> 

      <Route path="/blockmarket" element={<BlockMarket className="main-content"/>}/> 

      <Route path="/ledger" element={<Ledger className="main-content"/>}/> 
      <Route path="/ledger/allclientledger" element={<AllClientLedger className="main-content"/>}/> 
      <Route path="/ledger/clientplusminus" element={<ClientPlusMinus className="main-content"/>}/> 
      <Route path="/ledger/myledger" element={<MyLedger className="main-content"/>}/> 

      <Route path="/clientledger" element={<ClientLedger className="main-content"/>}/>

      <Route path="/profitlossreport" element={<ProfitLossReport className="main-content"/>}/>

      <Route path="/reports" element={<Reports className="main-content"/>}/>
      <Route path="/reports/commissionreport" element={<CommissionReport className="main-content"/>}/>
      <Route path="/reports/deletedbets" element={<DeletedBets className="main-content"/>}/>
      <Route path="/reports/accountstatementclient" element={<AccountStatementClient className="main-content"/>}/>
      <Route path="/reports/loginreport" element={<LoginReport className="main-content"/>}/>
      <Route path="/reports/accountstatement" element={<AccountStatement className="main-content"/>}/>

      <Route path="/settings" element={<Settings className="main-content"/>}/>
      <Route path="/settings/casinohistory" element={<CasinoHistory className="main-content"/>}/>
      <Route path="/settings/changepassword" element={<ChangePassword className="main-content"/>}/>
      <Route path="/navigateicon" element={<Marquee className="main-content"/>}/>

      </Routes>
      </div>
      </div>
      {/* <Header/> */}
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
