import { makeElement } from "./utils";

export default (elWrapper) => {
  let plot;

  const init = (u, opts, data) => {
    plot = u.root.querySelector(".u-over");

    // let ttc = (u.cursortt = document.createElement("div"))
    // ttc.className = "uplotlinechart-tooltip"
    // ttc.textContent = "(x,y)"
    // ttc.style.pointerEvents = "none"
    // ttc.style.position = "absolute"
    u.cursortt = makeElement({
      type: "div",
      content: "(x,y)",
      attributes: {
        class:
          "uplotlinechart-tooltip pointer-events-none text-xs text-navy-100 absolute bg-white-95 border border-navy-20 drop-shadow-lg rounded-lg p-2 z-20 w-32",
      },
    });
    plot.appendChild(u.cursortt);

    const hideTips = () => {
      u.cursortt.style.display = "none";
    };

    const showTips = () => {
      u.cursortt.style.display = null;
    };

    plot.addEventListener("mouseleave", () => {
      if (!u.cursor._lock) {
        hideTips();
      }
    });

    plot.addEventListener("mouseenter", () => {
      showTips();
    });

    hideTips();
  };

  const setCursor = (u) => {
    const { left, top, idx } = u.cursor;

    if (left > elWrapper.offsetWidth / 2) {
      u.cursortt.style.left = `${left - (u.cursortt.offsetWidth + 10)}px`;
    } else {
      u.cursortt.style.left = `${left + 10}px`;
    }

    if (top + u.cursortt.offsetHeight > plot.offsetHeight) {
      u.cursortt.style.top = `${
        plot.offsetHeight - (u.cursortt.offsetHeight + 10)
      }px`;
    } else {
      u.cursortt.style.top = `${top + 10}px`;
    }

    u.series.forEach((seriesItem, index) => {
      let s = u.series[index];

      if (s.show) {
        const tooltipContent = makeElement({
          type: "div",
          class: "flex flex-col",
        });
        for (let i = 1; i < u.series.length; i++) {
          if (u.data[i][idx] !== undefined) {
            const content = makeElement({
              type: "div",
              attributes: {
                class: "flex items-start gap-x-2 mt-2",
              },
              children: [
                {
                  type: "div",
                  attributes: {
                    class: `${u.series[i].class} h-3 w-3 mr-1 align-top inline-block flex-shrink-0 rounded-full`,
                  },
                },
                {
                  type: "span",
                  attributes: {
                    class:
                      "ulc-tooltip-content mr-2 align-top leading-tight text-navy-20 text-xxs",
                  },
                  content: `${u.series[i].label}`,
                },
                {
                  type: "span",
                  attributes: {
                    class:
                      "ulc-tooltip-content align-top ml-auto text-navy-100 text-xxs",
                  },
                  content: `${u.data[i][idx]}%`,
                },
              ],
            });
            tooltipContent.appendChild(content);
          }
        }

        let xVal = u.data[0][idx];
        let convertedDate = new Date(xVal * 1000).toDateString().substring(4);
        const tooltipHeading = makeElement({
          type: "div",
          class: "ulc-tooltip-heading text-md font-black",
          content: convertedDate,
        });
        // u.cursortt.innerHTML = `<div class="ulc-tooltip-heading">${convertedDate}</div>${tooltipContent}`
        u.cursortt.replaceChildren(tooltipHeading, tooltipContent);
      }
    });
  };

  return {
    hooks: {
      init,
      setCursor,
      setScale: [
        (u, key) => {
          // console.log('setScale', key)
        },
      ],
      setSeries: [
        (u, idx) => {
          // console.log('setSeries', idx)
        },
      ],
    },
  };
};
