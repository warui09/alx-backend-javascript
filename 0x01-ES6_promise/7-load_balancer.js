export default function loadBalancer(chinaDownload, USDownload) {
  return chinaDownload().
    .then((chinaValue) => USDownload())
}
