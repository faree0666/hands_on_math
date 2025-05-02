document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("navbar");
  nav.animate(
    [{ transform: "translateY(-50px)" }, { transform: "translateY(0)" }],
    {
      duration: 800,
      easing: "ease-out",
    }
  );

  const footer = document.getElementById("footer");
  footer.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 1000,
    easing: "ease-in",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const facts = document.querySelectorAll(".fact");
  let index = 0;

  setInterval(() => {
    facts.forEach((fact, i) => {
      fact.classList.toggle("active", i === index);
    });
    index = (index + 1) % facts.length;
  }, 4000);
});
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("navbar");
  nav.animate(
    [{ transform: "translateY(-50px)" }, { transform: "translateY(0)" }],
    {
      duration: 800,
      easing: "ease-out",
    }
  );

  const footer = document.getElementById("footer");
  footer.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 1000,
    easing: "ease-in",
  });

  const ageFilter = document.getElementById("age-filter");
  const topicFilter = document.getElementById("topic-filter");
  const typeFilter = document.getElementById("type-filter");
  const resetFiltersBtn = document.getElementById("reset-filters");
  const activityCards = document.querySelectorAll(".activity-card");

  const filterActivities = () => {
    const selectedAge = ageFilter.value;
    const selectedTopic = topicFilter.value;
    const selectedType = typeFilter.value;

    activityCards.forEach((card) => {
      const cardAge = card.getAttribute("data-age");
      const cardTopic = card.getAttribute("data-topic");
      const cardType = card.getAttribute("data-type");

      const ageMatch = selectedAge === "all" || selectedAge === cardAge;
      const topicMatch = selectedTopic === "all" || selectedTopic === cardTopic;
      const typeMatch = selectedType === "all" || selectedType === cardType;

      if (ageMatch && topicMatch && typeMatch) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  };

  // Event listeners for filters
  ageFilter.addEventListener("change", filterActivities);
  topicFilter.addEventListener("change", filterActivities);
  typeFilter.addEventListener("change", filterActivities);

  // Event listener for reset button
  resetFiltersBtn.addEventListener("click", () => {
    ageFilter.value = "all";
    topicFilter.value = "all";
    typeFilter.value = "all";
    filterActivities();
  });

  // Initial filtering when the page loads
  filterActivities();
});

// Existing code for the fact slider (if you still want it)
document.addEventListener("DOMContentLoaded", () => {
  const facts = document.querySelectorAll(".fact");
  let index = 0;

  if (facts.length > 0) {
    setInterval(() => {
      facts.forEach((fact, i) => {
        fact.classList.toggle("active", i === index);
      });
      index = (index + 1) % facts.length;
    }, 4000);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // === Rotating facts ===
  const facts = document.querySelectorAll(".fact");
  if (facts.length) {
    let index = 0;
    setInterval(() => {
      facts.forEach((fact, i) => {
        fact.classList.toggle("active", i === index);
      });
      index = (index + 1) % facts.length;
    }, 4000);
  }

  // === Offerings carousel slider ===
  const track = document.querySelector(".offer-track");
  const prevBtn = document.querySelector(".offer-prev");
  const nextBtn = document.querySelector(".offer-next");
  const paginationContainer = document.querySelector(".offer-pagination");

  if (track && prevBtn && nextBtn && paginationContainer) {
    const cards = Array.from(track.children);
    const cardWidth =
      cards[0].offsetWidth + parseFloat(getComputedStyle(cards[0]).marginRight);
    let currentIndex = 0;

    // Create pagination dots
    cards.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("pagination-dot");
      if (index === 0) {
        dot.classList.add("active");
      }
      dot.addEventListener("click", () => {
        moveToSlide(index);
      });
      paginationContainer.appendChild(dot);
    });

    const dots = Array.from(paginationContainer.children);

    function moveToSlide(index) {
      track.style.transform = `translateX(${-index * cardWidth}px)`;
      // Update active dot
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
      currentIndex = index;
    }

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        moveToSlide(currentIndex - 1);
      } else {
        // Loop to the end (optional)
        // moveToSlide(cards.length - 1);
      }
    });

    nextBtn.addEventListener("click", () => {
      if (currentIndex < cards.length - 1) {
        moveToSlide(currentIndex + 1);
      } else {
        // Loop to the beginning (optional)
        // moveToSlide(0);
      }
    });
  }
});
