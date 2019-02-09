class Carousel {
    constructor(element) {
        this.element = element

        this.images = element.querySelectorAll('img')
        console.log(this.images);
        
        this.right = this.element.querySelector('.right-button')
        this.left = this.element.querySelector('.left-button')
        this.images[0].style.display = 'flex'      
        this.index = 1

        this.right.addEventListener('click', () => this.moveRight());
        this.left.addEventListener('click', () => this.moveLeft());
        
    }

    moveRight() {

        this.images.forEach(img => img.style.display = 'none')

        this.images[this.index].style.display = 'flex'      

        if (this.index === this.images.length - 1) {
            this.index = 0
        } else {
            this.index += 1
        }
        
    }

    moveLeft() {
        
        this.index -= 2
        console.log(this.index);
        
        
        this.images.forEach(img => img.style.display = 'none')
        this.images[this.index].style.display = 'flex'      

    }
}

let carousel = document.querySelector('.carousel');
let obj = new Carousel(carousel)


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/