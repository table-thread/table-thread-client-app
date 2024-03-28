// import pdf from 'html-pdf';

import moment from 'moment-timezone';
import dayjs from 'dayjs';
import nodemailer from 'nodemailer';
import axios from 'axios';

import endPoints from '@/ApiHandler/AppConfig';
import NetworkOps from '@/ApiHandler/NetworkOps';
import ToastComponent from '@/component/Toast/Toast';

export const debounce = (func: any, wait: any) => {
  let timeout: any;

  return function executedFunction(...args: any) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const isEmpty = (value: any) => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
}


export const getTotalValue = (data: any, key: any) => {
  const total: any = data.reduce((total: any, item: any) => total + item[key], 0)
  return Number(total).toFixed(2)
}


export const ret_ifEmpty = (value: any): any => {
  if (isEmpty(value)) {
    return "_";
  } else {
    return value;
  }
}

export const formateMobileNo = (value: any) => {
  let fromateMobile = ""
  if ((value.length === 13) && (value[0] === "+")) {
    fromateMobile = value.substring(3)
  } else if (value.length === 12) {
    fromateMobile = value.substring(2);
  } else {
    fromateMobile = value
  }

  // return  fromateMobile ?  `+91-${fromateMobile.slice(0, 5)}-${fromateMobile.slice(5)}` : null
  return fromateMobile ? `+91-${fromateMobile}` : null

}

export const decimalTwo = (value: any): any => {
  if (isEmpty(value)) {
    return "_";
  } else {
    return Number(value).toFixed(2);
  }
}

export const noDecimal = (value: any): any => {
  if (isEmpty(value)) {
    return "_";
  } else {
    return Number(value).toFixed(0);
  }
}

export const getToken = () => {
  const checking: any = localStorage.getItem('userData');
  if (isEmpty(checking)) {
    window.location.replace('/login');
  } else {
    return JSON.parse(checking);
  }
}

//date oprations

export const toddmmyy = (value: string) => {
  const momentTime: any = moment(value).tz("Asia/Calcutta");
  return momentTime.format('DD-MM-YYYY');
}

export const removeDateRest = (value: string) => {
  if (isEmpty(value)) {
    return "_";
  } else if (value.includes('T')) {
    const momentTime: any = value.split("T00:00:00.000Z");
    const toDateFormat: any = moment(momentTime[0]).tz("Asia/Calcutta");
    return toDateFormat.format('DD-MM-YYYY');
  } else {
    return value
  }
}

export const addDateRest = (value: string) => {
  if (isEmpty(value)) {
    return "";
  } else {
    return `${value}T00:00:00.000Z`;
  }
}


export const ddmmyyyyToyyyymmdd = (val: string) => {
  return isEmpty(val) ? "" : dayjs(val, 'DD-MM-YYYY').format('YYYY-MM-DD');
}


export const yyyymmddToddmmyyyy = (val: string) => {
  return isEmpty(val) ? "" : dayjs(val, 'YYYY-MM-DD').format('DD-MM-YYYY');
}


export const removeFilePath = (value: string) => {

  const fullCompleteName: any = value;
  const findIndex = fullCompleteName.indexOf("/");
  if (findIndex == -1) {
    return value;
  } else {
    const afterSplit: any = value.split("/");
    return afterSplit[afterSplit.length - 1];
  }

}


export const filterSelectItem = (List: any, value: any) => {
  for (let item of List) {
    if (item?.label === value) {
      // const itemIdenx = List.indexOf(item)
      // console.log("this is fiter voucher details " , List , {label : List[itemIdenx]?.label , value : List[itemIdenx]?.value} )
      // return {label : List[itemIdenx]?.label , value : List[itemIdenx]?.value}
      return item
    }
  }
}


export const removeplus91 = (value: string) => {
  if ((value.length === 13) && (value[0] === "+")) {
    return value.substring(3)
  } else if (value.length === 12) {
    return value.substring(2);
  }
  return value;
}
