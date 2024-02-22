document.addEventListener("DOMContentLoaded", function() {
    var marqueeContent = document.querySelector('.marquee-content');
    var images = document.querySelectorAll('.punctuation');
    var iphoneGif = document.querySelector('.iphonegif');
    var title = document.querySelector('.title');
    var button = document.querySelector('.button');

    function makeImagesFloat() {
        images.forEach(img => {
            const x = Math.random() * (window.innerWidth - img.clientWidth);
            const y = Math.random() * window.innerHeight * 0.1; // Adjust as needed
            const scale = 0.3 + Math.random() * 0.3; // Adjust scale if needed
            const rotation = -5 + Math.random() * 10; // Adjust rotation if needed
    
            // Ensure a smooth transition by applying a transition property if not already set
            img.style.transition = 'transform 5s ease-in-out, opacity 2s ease-in-out';
    
            img.style.transform = `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotation}deg)`;
        });
    }
    

    function showTitleAndButton() {
        title.style.display = 'block'; // 타이틀을 보이게 함
        button.style.display = 'block'; // 버튼을 보이게 함
        setTimeout(() => {
            title.style.opacity = '1'; // 부드러운 투명도를 1로 설정하여 타이틀을 나타나게 함
            button.style.opacity = '1'; // 부드러운 투명도를 1로 설정하여 버튼을 나타나게 함
        }, 100); // 100밀리초 후에 fade-in 효과 시작
    }

    // Check if the device width is 375px (iPhone width)
    if (window.innerWidth === 375) {
        // Set the viewport height to 667px
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, height=667');
    }

    function handleAnimationEnd() {
        // Start moving images right after they become visible
        makeImagesFloat();

        // Softly fade in the images
        images.forEach(img => {
            img.style.opacity = 0; // Ensure images start from invisible
            setTimeout(() => {
                img.style.opacity = 1;
            }, 100); // Start fading in shortly after
        });

        // Continuously re-randomize positions every 5 seconds for smooth movement
        setInterval(makeImagesFloat, 5000);
    }

    // Initially hide images, title, and button
    images.forEach(img => {
        img.style.opacity = 0;
    });
    title.style.display = 'none'; // 타이틀 숨김
    title.style.opacity = '0'; // 투명도를 0으로 설정하여 나타나지 않게 함
    title.style.transition = 'opacity 2s ease-in-out'; // 부드러운 fade-in 효과를 위한 transition
    button.style.display = 'none'; // 버튼 숨김
    button.style.opacity = '0'; // 투명도를 0으로 설정하여 나타나지 않게 함
    button.style.transition = 'opacity 2s ease-in-out'; // 부드러운 fade-in 효과를 위한 transition

    // Listen for the marquee animation to end
    marqueeContent.addEventListener('animationend', handleAnimationEnd);

    // GIF가 5초 후에 숨김
    setTimeout(function() {
        iphoneGif.style.display = 'none';
        setTimeout(showTitleAndButton, 100); // 100밀리초 후에 타이틀과 버튼을 나타나게 함
    }, 5000); // 5초 후에 실행

    function updateClock() {
        var now = new Date();
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var month = months[now.getMonth()];
        var date = now.getDate();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 시간을 12 시간으로 설정
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        var timeString = month + ' ' + date + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        document.getElementById('clock').textContent = timeString;
        setTimeout(updateClock, 1000); // 1 초마다 시계 업데이트
    }
    updateClock(); // 페이지가 로드 될 때 시계 업데이트 시작
    
    
    
});
