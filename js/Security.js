class Security {

    constructor(){

        // Add code to create the input and button elements
        this.button1.mousePressed(() => {
            if(system.authenticiate(accessCode1, this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++
            }
        })

    }

    display(){
        // Add code to make the buttons function as expected
        this.access1 = createInput("Code1");
        this.access1.position(100,90);
        this.access1.style('background', 'white');

        this.button1 = createButton('Check');
        this.button1.position(100, 120);
        this.button1.style('background', 'lightgrey');

        authenticiate(actualCode, enteredCode){
            if(actualCode === enteredCode)
            return true
            else
            return false

            if (score === 3){
                clear();
                background(bg2);
                fill("black");
                textSize(40);
                text("TREASURE UNLOCKED", 250, 200);
            }
    }

    }
    
}