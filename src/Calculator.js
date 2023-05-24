class Calculator{
    constructor(){
        this.Reset()
    }

    Calculate(input) {
        if (this.resetOnInput) {
            this.Reset()
        }

        if (input === "RESET") {
            this.Reset()
        } else if (input === "DEL") {
            this.Delete()
        } else if (input === "+" || input === "-" || input === "x" || input === "/") {
            this.operation = input
            this.storedVal = this.currentVal
            this.clearOnInput = true
        } else if (input === "=") {
            this.Equals()
        } else if (input === ".") {
            this.Decimal()
        } else {
            if(this.clearOnInput){
                this.Clear()
            }
            if(Number(this.currentVal) === 0 && this.decimalBuffer === false) {
                this.currentVal = input
            } else {
                if(this.decimalBuffer) {
                    this.currentVal += '.'
                    this.decimalBuffer = false
                }
                this.currentVal += input
            }
        }
    }

    Reset() {
        this.currentVal = '0'
        //Value to be operated on
        this.storedVal = false
        //Operation done on stored value
        this.operation = false
        //Reset() called on next input in most cases
        this.resetOnInput = false
        //Clear() will be called on next input in most cases, leaving operation and stored value intact
        this.clearOnInput = false
        //Will insert a decimal before next num if true
        this.decimalBuffer = false
        //For repeat '=' presses
        this.repeatValue = false
    }

    Clear() {
        this.currentVal = 0
        this.clearOnInput = false
        this.decimalBuffer = false
        this.repeatValue = false
    }

    Delete() {
        if(this.resetOnInput){
            this.Reset()
        } else if (this.clearOnInput) {
            this.Clear()
        } else {
            let numArr = String(this.currentVal)
            numArr = numArr.split('')
            numArr.pop()
            
            if (numArr[numArr.length - 1] === ".") {
                numArr.pop()
            }

            if (numArr.length > 0) {
                this.currentVal = numArr.join('')
            } else {
                this.currentVal = '0'
            }
        }
    }

    Equals() {
        if (!(this.storedVal && this.operation)) {
            return
        }

        if (this.repeatValue) {
            if (this.operation === "+") {
                this.currentVal = Number(this.currentVal) + this.repeatValue
            } else if (this.operation === "-") {
                this.currentVal = Number(this.currentVal) - this.repeatValue
            } else if (this.operation === "x") {
                this.currentVal = Number(this.currentVal) * this.repeatValue
            } else if (this.operation === "/") {
                this.currentVal = Number(this.currentVal) / this.repeatValue
            }
            this.clearOnInput = true
            return
        }

        this.repeatValue = Number(this.currentVal)

        if (this.operation === "+") {
            this.currentVal = Number(this.storedVal) + Number(this.currentVal)
        } else if (this.operation === "-") {
            this.currentVal = Number(this.storedVal) - Number(this.currentVal)
        } else if (this.operation === "x") {
            this.currentVal = Number(this.storedVal) * Number(this.currentVal)
        } else if (this.operation === "/") {
            if(Number(this.currentVal) === 0) {
                this.currentVal = "DIVIDE BY 0"
                this.resetOnInput = true
                return
            }

            this.currentVal = Number(this.storedVal) / Number(this.currentVal)
            this.clearOnInput = true
        }
    }

    Decimal() {
        if(Number(this.currentVal) % 1 === 0){
            const numArr = String(this.currentVal).split('')

            console.log(numArr)
            numArr.forEach((e) => {
                if (e === ".") {
                    return
                }
            })
            this.decimalBuffer = true
        }
    }
}

export default Calculator