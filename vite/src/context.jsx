import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [lis, setLis] = useState([]);

  const url = "http://127.0.0.1:8000/";
  const [onemob, Setmob] = useState({});
  const [id, Setid] = useState(1);
  const [mobiles, setallMobile] = useState([]);
  const [Orderlist, SetOrderlist] = useState({});

  const Register = async (username, emailid, mobile, passwd) => {
    const res = await axios.post(url + "getuser", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: {
        username: username,
        emailid: emailid,
        phone: mobile,
        passwd: passwd,
      },
    });
    if (res.data.alert) {
      alert(res.data.alert);
    } else {
      alert("USER ADDED SUCCESSFULLY");
    }
  };

  const Loguser = async (username, password) => {
    const res = await axios.post(url + "loginuser", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: {
        username: username,
        password: password,
      },
    });
    if (res.data.alert) {
      Setid(0)
    } else {
      Setid(1);
    }
  };

  const Getallmobile = async () => {
    const res = await axios.get(url + "home", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (res.data.alert) {
      alert(res.data.alert);
    } else {
      setallMobile(res.data);
    }
  };

  const Getmobile = async (pname) => {
    const res = await axios.get(url + "getprod", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: {
        name: pname,
      },
    });
    if (res.data.alert) {
      alert(res.data.alert);
    } else {
      Setmob(res.data);
    }
  };

  const Order = async (id, pid) => {
    const res = await axios.get(url + "orderitem", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: {
        id: id,
        pid: pid,
      },
    });
    if (res.data.alert) {
      alert(res.data.alert);
    }
  };

  const GetOrders = async (id) => {
    const res = await axios.get(url + "getorders", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: {
        id: id,
      },
    });
    if (res.data.alert) {
      alert(res.data.alert);
    } else {
      SetOrderlist(res.data);
    }
  };

  return (
    <AppContext.Provider
      value={{
        Register,
        Getmobile,
        Setmob,
        onemob,
        id,
        Order,
        Loguser,
        Getallmobile,
        lis,
        setLis,
        mobiles,
        GetOrders,
        Orderlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
