!function(){var e=document.querySelector("body"),t=(document.querySelector(".color"),document.querySelector("[data-start]")),o=document.querySelector("[data-stop]"),d=null;o.disabled=!0,t.addEventListener("click",(function(){d=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,o.disabled=!1})),o.addEventListener("click",(function(){clearInterval(d),t.disabled=!1,o.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.022a2ccc.js.map