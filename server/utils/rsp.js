import CODE from "./const/code";

export function rspHelper({ type, msg, data, status }) {
  const rsp = {
    code: CODE[type]["code"],
    msg: msg || CODE[type]["msg"],
  };

  if (data) rsp.data = data;
  if (status) rsp.status = status;
  return rsp;
}
