
(function(){

    var index = 1;
    function Slider () {
        this.container = document.querySelector('.before-slider__container');
        this.slidecontainer = document.querySelector('.before-slides');
        this.slides = document.querySelectorAll('.before-slides__car');
        this.btn = document.querySelectorAll('.before-slider__prev-next');
        this.size = this.container.clientWidth
        this.changePosition();
        this.carousel();
    
    };
    Slider.prototype.changePosition = function(){
        var size = this.size;
        this.slidecontainer.style.transform = 'translateX(' + (-index * size) + 'px)';
        
    }
    Slider.prototype.carousel = function (){
        var i, len = this.btn.length;

        for(i = 0; i < len; i += 1){
            this.btn[i].addEventListener('click', Slider[this.btn[i].id].bind(null, this))
        }
    }

    Slider.prev = function(container){
        container.slidecontainer.style.transition = 'transform 0.3s ease-in-out';
        var size = container.size;
        index <= 0 ? false : index--
        container.slidecontainer.style.transform = 'translateX(' + (-index * size) + 'px)';
        container.loop()
    };

    Slider.next = function(container){
        container.slidecontainer.style.transition = 'transform 0.3s ease-in-out';
        var len = container.slides.length, size = container.size;
        index >= len - 1 ? false : index++        
        container.slidecontainer.style.transform = 'translateX(' + (-index * size) + 'px)';
        container.loop()
    }
    Slider.prototype.loop = function() {
        var instance = this;
        var size = this.size;
        this.slidecontainer.addEventListener('transitionend', function(){
            instance.slides[index].id === 'first_clone' ? index = 1 : index;
            instance.slides[index].id === 'last_clone' ? index = instance.slides.length -2 : index;
            instance.slidecontainer.style.transition = 'none';
            instance.slidecontainer.style.transform = 'translateX(' + (-index * size) + 'px)';

        })
    }
 
    new Slider()
})()


//Menu
function openCloseMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('menu_active')
}

document.querySelector('.menu-button').addEventListener('click', openCloseMenu)





function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

animateCSS('.offer', 'slideInUp')