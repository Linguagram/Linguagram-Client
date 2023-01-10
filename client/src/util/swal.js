import swal from 'sweetalert'

export const swalErrorStr = (msg) => {
  return swal({
    text: `${msg}`,
    icon: "error",
  })
}

export const swalError = (msg) => {
  return swalErrorStr(msg.response.data.message);
}

export const swalSuccess = (msg) => {
  return swal({
    text: `${msg}`,
    icon: "success",
  })
}
