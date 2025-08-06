export const handleDentrixBooking = () => {
  const container = document.getElementById("dentrix-frame-container");
  if (!container) return;

  // Clear any existing iframe
  container.innerHTML = "";

  const iframe = document.createElement("iframe");
  iframe.src =
    "https://bookit.dentrixascend.com/soe/new/dental?pid=ASC2000000000212&mode=externalLink";
  iframe.style.width = "100%";
  iframe.style.minWidth = "600px";
  iframe.style.height = "600px";
  iframe.style.border = "none";

  container.appendChild(iframe);
};
