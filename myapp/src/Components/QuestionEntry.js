import React, { Component } from 'react';
import Modal from './Modal';
import './modal.css';


class QuestionEntry extends React.Component {
	
    constructor(props) {
        super(props);
		
		this.state = {
			query: "state query",
			keyword: "test",
			options: [{'text':'a', 'correct':false, 'selected':true},{'text':'b', 'correct':false, 'selected':true},{'text':'c', 'correct':false, 'selected':true},{'text':'d', 'correct':false, 'selected':true}],
			answer: "answer.md",
			link: "",
			difficulty: "5",
			marked: "0",
			time: "0",
			certification: "AWS",
			image: "",
			
			objectives: require('../objectives.json'),
			
		};
		console.log(this.state.objectives);
    }   
  
  save(){
	 console.log("In save");
	 console.log("" + this.state.query);
	 
	 
	         console.log("COMPONENT DID MOUNT!");
		console.log("About to fetch");
		fetch('http://localhost:8080/question', {
			method: "POST",
			body: JSON.stringify(this.state)
		
		
		})
        .then(res => res.json())
        .then((data) => {
          this.setState({ questions: data })
		  console.log("We got the data");
		  console.log(data);
        })
        .catch(console.log)
	 
  }
  
  optionChangedHandler = (event, index) => {
	  console.log("IN handler");
    //this.state.query = event.target.value;
	//this.setState({query: event.target.value});
	console.log(this.state.options[index].text);
	this.state.options[index].text = event.target.value;
	console.log(this.state.options[index].text);
	this.setState({options: this.state.options});
   // options[0].text = event.target.value;
	//this.state.options = event.target.value;
	
	//this.setState({options:
}


  render() { 
    return (

	

	
	
	
	
			<div class="container">
  <br />

  <div class="card">
    <div class="card-header" id="questionNumber">
      Question
    </div>

    <div class="card-body">
	
	<div class="row">
	<div class="col-8">

      <h3 class="card-title" id="query">
        This is the exam page.
      </h3>



      Query: <input type="text" className="form-control" name="query" value={this.state.query} onChange={(event)=>this.setState({query: event.target.value})}></input><br />

      <input class="form-check-input  option-radio " type="checkbox" name="optionRadios" value="0" checked={this.state.options[0].selected} onClick={()=> this.toggleOption(0)}
      ></input>
      <input type="text" className="form-control" name="optiona" value={this.state.options[0].text} onChange={(event)=>this.optionChangedHandler(event, 0)}></input><br />

      <input class="form-check-input  option-radio " type="checkbox" name="optionRadios" value="0" checked={this.state.options[1].selected} onClick={()=> this.toggleOption(1)}
      ></input>
      <input type="text" className="form-control" name="optionb" value={this.state.options[1].text} onChange={(event)=>this.optionChangedHandler(event, 1)}></input><br />

      <input class="form-check-input  option-radio " type="checkbox" name="optionRadios" value="0" checked={this.state.options[2].selected} onClick={()=> this.toggleOption(2)}
      ></input>
      <input type="text" className="form-control" name="optionc" value={this.state.options[2].text} onChange={(event)=>this.optionChangedHandler(event, 2)}></input><br />

      <input class="form-check-input  option-radio " type="checkbox" name="optionRadios" value="0" checked={this.state.options[3].selected} onClick={()=> this.toggleOption(3)}
      ></input>
      <input type="text" className="form-control" name="optiond" value={this.state.options[3].text} onChange={(event)=>this.optionChangedHandler(event, 3)}></input><br />


      <div>
        <p><a onClick={()=>this.save()}>save</a></p>
      </div>

	</div>
	<div class="col-4">
	
	abc
	{this.state.options[3].text}

			
			
			{this.state.objectives[0].objectives[0].subtopics[0].subtopic}


				  

	

	
	
	</div>

</div>

    </div>
  </div>
</div>

    );
  }
}
 
export default QuestionEntry;
