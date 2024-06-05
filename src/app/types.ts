export type Message = {
  header: string;
  subHeader: string;
  message: string;
  attribute: {
    icon: string;
    value: string;
  }[];
};

export type ContactModel = {
  name: string;
  email: string;
  tel: string;
  message: string;
};

export type Recruit = {
  message: string;
  recruit: {
    type: string;
    items: {
      key: string;
      value: string;
    }[];
  }[];
};

// endpoint: https://api.v5.tipsys.me/thirdparty/concent/mail
export interface IRequestRdlaboMail {
  from: string;
  name: string;
  message: string;
}
