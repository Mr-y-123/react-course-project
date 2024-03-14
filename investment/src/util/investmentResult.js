export function calculationInvestments({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
},result) {
    
    let investmentValue=initialInvestment

    for(let i=0;i<duration;i++){
        const interestEarnInYear=investmentValue*(expectedReturn/100)
        investmentValue+=interestEarnInYear+annualInvestment
        result.push({
            year:i+1,
            interest:interestEarnInYear,
            valueEndOfYear:investmentValue,
            annualInvestment:annualInvestment
        })
    }

}
