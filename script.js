function showContent(tabId) {
    const tabs = ['volta', 'Proxima']; // Corrigido para os IDs corretos
    tabs.forEach(tab => {
      const content = document.getElementById(tab);
      const tabElement = document.getElementById(tabId); // Corrigido para tabId
      
      if (tab === tabId) {
        content.style.display = 'block';
        tabElement.style.backgroundColor = '#ddd';
      } else {
        content.style.display = 'none';
        tabElement.style.backgroundColor = '#f1f1f1';
      }
    });
  }