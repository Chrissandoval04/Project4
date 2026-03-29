const shapes = document.querySelectorAll(".floating-shape");
const infoPanel = document.getElementById("infoPanel");
const panelTitle = document.getElementById("panelTitle");
const insightList = document.getElementById("insightList");
const panelTags = document.getElementById("panelTags");
const closeBtn = document.getElementById("closeBtn");

shapes.forEach(shape => {
  shape.addEventListener("click", function () {
    const groupIndex = shape.getAttribute("data-group");
    const group = insightGroups[groupIndex];

    panelTitle.textContent = group.title;

    insightList.innerHTML = "";
    group.insights.forEach(insight => {
      const item = document.createElement("div");
      item.classList.add("insight-item");
      item.innerHTML = `
        <h3>${insight.title}</h3>
        <p>${insight.text}</p>
      `;
      insightList.appendChild(item);
    });

    panelTags.innerHTML = "";
    group.tags.forEach(tag => {
      const tagEl = document.createElement("span");
      tagEl.classList.add("tag");
      tagEl.textContent = `#${tag}`;
      panelTags.appendChild(tagEl);
    });

    infoPanel.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", function () {
  infoPanel.classList.add("hidden");
});