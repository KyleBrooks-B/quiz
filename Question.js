class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   
  
this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    
this.question = createElement('h3');
this.input2 = createButton("How are you Today?");

this.answer = createElement('h4');
    this.input3 = createInput("Type Answer Here");
  }

  hide(){
    this.title.hide();
   this.input1.hide();
   this.button.hide();
   this.input2.hide();
   this.message.hide();




 }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(250,0);

    
    //Create html() and position() for each question, input and answers.
this.input2.position(350, 200)



    this.input1.position(50, 230);
    this.button.position(190, 300);
this.input3.position(350, 245)
    // Add a mousepressed action when the button is clicked Display the this.message
   
    this.button.mousePressed(()=>{
      
this.message.display("Thank You For Submitting!!")
    })
  
}
  }

