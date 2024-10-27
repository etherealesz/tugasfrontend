document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        
        // Hitung increment
        const increment = target / 500; // Kecepatan animasi
  
        if (count < target) {
          // Perbarui angka
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target; // Set angka ke target
        }
      }
      updateCount();
    });
  });