class calculatorHead extends HTMLElement
{

    render(){

        let  firstBtn = this.getAttribute("button1") || "";
        let  secondBtn = this.getAttribute("button2")|| "";;
        let  thirdBtn = this.getAttribute("button3")|| "";;
        let  fourthBtn = this.getAttribute("button4")|| "";;
        
        this.innerHTML = `
        <div class="row flex-container">
                    <div id="AC" class="btn bg-lightgray ">
                    ${firstBtn}
                    </div>
                    <div id="INVERT" class="btn bg-lightgray">
                    ${secondBtn}
                    </div>
                    <div id="PERCENTAGE" class="btn bg-lightgray">
                    ${thirdBtn}
                    </div>
                    <div class="btn bg-orange OP">
                        ${fourthBtn}
                    </div>
        </div>
        `


    }



    connectedCallback()
    {
        this.render();
    }
}




class calculatorRow extends HTMLElement
{

    render(){

        let  firstBtn = this.getAttribute("button1") || "";
        let  secondBtn = this.getAttribute("button2")|| "";;
        let  thirdBtn = this.getAttribute("button3")|| "";;
        let  fourthBtn = this.getAttribute("button4")|| "";;
        
        this.innerHTML = `
        <div class="row flex-container">
                    <div class="btn ">
                    ${firstBtn}
                    </div>
                    <div class="btn">
                    ${secondBtn}
                    </div>
                    <div class="btn">
                    ${thirdBtn}
                    </div>
                    <div class="btn bg-orange OP">
                        ${fourthBtn}
                    </div>
        </div>
        `


    }



    connectedCallback()
    {
        this.render();
    }
}


class calculatorBottom extends HTMLElement
{

    render(){

        let  firstBtn = this.getAttribute("button1") || "";
        let  secondBtn = this.getAttribute("button2")|| "";;
        let  thirdBtn = this.getAttribute("button3")|| "";;
        
        
        this.innerHTML = `
        <div class="row grid grid-structer ">
                    <div class="btn zero-button">
                    ${firstBtn}
                    </div>
                    <div class="btn">
                    ${secondBtn}
                    </div>
                    <div id="EQ" class="btn bg-orange">
                    ${thirdBtn}
                    </div>
                    
        </div>
        `


    }



    connectedCallback()
    {
        this.render();
    }
}

customElements.define("calculator-head",calculatorHead);
customElements.define("calculator-row", calculatorRow);
customElements.define("calculator-bottom", calculatorBottom);
