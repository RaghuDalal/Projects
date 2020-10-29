function thisMonth(){

    let BirthdayList = [
        {
        Name : "Raju",
        DOB : "2000/10/16"
        },
        {
            Name : "Manoj Bootstrap",
            DOB : "2001/10/27"
        },
        {
            Name : "Krooj Hacker",
            DOB : "2001/11/27"
        },
        {
            Name : "Sandeep Pradhan Bishnoi",
            DOB : "1997/09/27"
        }
    ]

    let today = new Date();
    let month = today.getMonth();
    let result = []
    
    for (let i = 0 ; i<BirthdayList.length ; i++){

        let getDOB = new Date(BirthdayList[i].DOB);
        let getMonth = getDOB.getMonth();
        
        if (month===getMonth){
            
            let name= BirthdayList[i].Name;
            result.push(name);
        }

        document.getElementById('result').innerHTML = result;
    }
}