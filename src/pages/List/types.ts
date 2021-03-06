export interface IRouteParams {
  match: {
    params: {
      type: string;
      lineColor: string;
    };
  };
}

export interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}
