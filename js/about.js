document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        
        const increment = target / 500;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      }
      updateCount();
    });
  });

  document.getElementById('teamSearch').addEventListener('input', function() {
    let searchValue = this.value.toLowerCase();
    let teamCards = document.querySelectorAll('#teamMembers .team-card');
    
    teamCards.forEach(card => {
      let name = card.getAttribute('data-name').toLowerCase();
      if (name.includes(searchValue)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });