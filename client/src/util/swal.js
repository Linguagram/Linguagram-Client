import swal from 'sweetalert'

export const swalError = (msg) => {
  return swal({
    text: `${msg.response.data.message}`,
    icon: "error",
  })
}

export const swalSuccess = (msg) => {
  return swal({
    text: `${msg}`,
    icon: "success",
  })
}