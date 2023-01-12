export const SOCKET_EVENTS = {
  CONNECTION: "connect",
  DISCONNECT: "disconnect",
  IDENTIFY: "identify",
  ERROR: "error",

  ONLINE: "user_online",
  OFFLINE: "user_offline",

  MESSAGE: "message",
  MESSAGE_EDIT: "message_edit",
  MESSAGE_DELETE: "message_delete",

  // STATUS: "status", // dijadiin satu sama user update
  USER_UPDATE: "user_update",

  GROUP_CREATE: "group_create",
  GROUP_JOIN: "group_join",
  GROUP_LEAVE: "group_leave",
  GROUP_DELETE: "group_delete",
  GROUP_UPDATE: "group_update",

  FRIEND_REQUEST: "friend_request",
  FRIEND_REQUEST_DELETE: "friend_request_delete",
  FRIEND_REQUEST_ACCEPT: "friend_request_accept",

  CALL: "call",
  CALL_CONNECT: "call_connect",
  ACCEPT_CALL: "accept_call",
  CALL_ACCEPT: 'call_accepted',

  SCHEDULE: "schedule",
  SCHEDULE_CANCEL: "schedule_cancel",
}

