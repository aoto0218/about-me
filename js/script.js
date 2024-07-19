document.addEventListener('DOMContentLoaded', function() {
    const chatElements = document.querySelectorAll('.chat > div, .chat > img');
    
    function checkScroll() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
  
      chatElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        
        // 表示開始位置（画面の下から20%）
        const showTrigger = scrollY + windowHeight * 0.8;
  
        // 要素が表示範囲内にある場合
        if (elementTop < showTrigger && elementTop > scrollY) {
          element.classList.add('show');
        }
      });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // 初期表示時にも実行
  });

document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.bio-table tr');
    
    function checkScroll() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
  
      rows.forEach(row => {
        const rect = row.getBoundingClientRect();
        const rowTop = rect.top;
        const rowBottom = rect.bottom;
        
        // 表示開始位置（画面の下から10%）
        const showTrigger = windowHeight * 0.9;
  
        // 要素が表示範囲内にある場合
        if (rowTop < showTrigger && rowBottom > 0) {
          row.classList.add('show');
        } 
        // 要素が画面外に出た場合
        else {
          row.classList.remove('show');
        }
      });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // 初期表示時にも実行
});

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.like-image-container');
    
    containers.forEach(container => {
        const trigger = container.querySelector('.like-image-trigger');
        
        trigger.addEventListener('click', function() {
            container.classList.toggle('flipped');
        });
    });
});