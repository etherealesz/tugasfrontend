document.addEventListener("DOMContentLoaded", function () {
    const modalHTML = `
      <div class="modal fade" id="subscriptionModal" tabindex="-1" aria-labelledby="subscriptionModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-dark">
              <h5 class="modal-title" id="subscriptionModalLabel">Subscribe to Lifestyle Vibes</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-dark">
              <form id="subscriptionForm">
                <div class="mb-3">
                  <label for="nameInput" class="form-label">Full Name</label>
                  <input type="text" class="form-control" id="nameInput" required>
                </div>
                <div class="mb-3">
                  <label for="emailInput" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="emailInput" required>
                </div>
                <div class="mb-3">
                  <label for="subscriptionType" class="form-label">Subscription Type</label>
                  <select class="form-select" id="subscriptionType" required>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                    <option value="lifetime">Lifetime</option>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary w-100">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  });