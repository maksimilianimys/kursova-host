(()=>{const e={openModalBtns:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),focusableElements:'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'};let t,a;function o(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),e.modal.classList.contains("is-hidden")?l(!1):t.focus()}function l(o){const l=e.modal.querySelectorAll(e.focusableElements);t=l[0],a=l[l.length-1],o?l.forEach((e=>{e.removeAttribute("tabindex")})):l.forEach((e=>{e.setAttribute("tabindex","-1")}))}l(!1),e.openModalBtns.forEach((e=>{e.addEventListener("click",(()=>{o(),l(!0),t.focus()}))})),e.closeModalBtn.addEventListener("click",o),e.modal.addEventListener("click",(t=>{t.target===e.modal&&o()})),document.addEventListener("keydown",(l=>{e.modal.classList.contains("is-hidden")||("Escape"===l.key?o():"Tab"===l.key&&function(e){e.shiftKey?document.activeElement===t&&(e.preventDefault(),a.focus()):document.activeElement===a&&(e.preventDefault(),t.focus())}(l))}))})();const daySelect=document.getElementById("day_select"),hourSelect=document.getElementById("hour_select"),weekdayHours=[{value:"11",text:"11:00"},{value:"12",text:"12:00"},{value:"13",text:"13:00"},{value:"14",text:"14:00"},{value:"15",text:"15:00"},{value:"16",text:"16:00"},{value:"17",text:"17:00"},{value:"18",text:"18:00"},{value:"19",text:"19:00"},{value:"20",text:"20:00"},{value:"21",text:"21:00"}],weekendHours=[{value:"14",text:"14:00"},{value:"15",text:"15:00"},{value:"16",text:"16:00"},{value:"17",text:"17:00"},{value:"18",text:"18:00"},{value:"19",text:"19:00"},{value:"20",text:"20:00"}];function updateHours(){const e=daySelect.value;hourSelect.innerHTML='<option value="" disabled selected>Select hour</option>';("saturday"===e||"sunday"===e?weekendHours:weekdayHours).forEach((e=>{const t=document.createElement("option");t.value=e.value,t.textContent=e.text,hourSelect.appendChild(t)}))}function closeModal(){document.querySelector(".backdrop").classList.add("is-hidden")}daySelect.addEventListener("change",updateHours),document.querySelector(".backdrop").addEventListener("click",(function(e){e.target===this&&closeModal()}));