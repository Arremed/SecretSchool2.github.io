// Function to switch between tabs
function openTab(tabId) {
  // Hide all tab content
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(function(content) {
    content.style.display = 'none';
  });

  // Remove active class from all tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(function(tab) {
    tab.classList.remove('active');
  });

  // Show the content of the clicked tab
  const selectedTab = document.getElementById(tabId);
  selectedTab.style.display = 'block';

  // Add active class to the clicked tab
  const activeTab = document.querySelector(`[onclick="openTab('${tabId}')"]`);
  activeTab.classList.add('active');
}
