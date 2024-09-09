export function togglePortal() {
  const portalEl = document.querySelector("#portal");

  if (portalEl?.className === "hidden") {
    portalEl?.classList.remove("hidden");
  } else {
    portalEl?.classList.add("hidden");
  }
}
