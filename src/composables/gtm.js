// https://fullstack-tutorials.com/quasar-framework/quasar-framework-google-tag-manager-and-analytics-setup-for-an-spa-website
import { uid } from "quasar";

function logEvent(category, action, label, value) {
  if (!localStorage.cid) {
    localStorage.cid = uid();
  }
  dataLayer.push({
    event: "customEvent",
    category: category,
    action: action,
    label: label,
    value: value,
    cid: this.getCid(),
  });
}

function logPage(path) {
  // Here you can preprocess the path, if needed
  if (!localStorage.cid) {
    localStorage.cid = uid();
  }
  dataLayer.push({
    event: "customPageView",
    path: path,
    cid: localStorage.cid,
  });
}
export { logEvent, logPage };
