function calculate(){

    //Input Value
    let dob = document.getElementById('date').value;

    //Storing Today's Date
    let today = new Date();

    //Passing Input value to get Birth Date
    let birthDate = new Date(dob);

    //Calculating Age
    let age = today.getFullYear() - birthDate.getFullYear();

    //Calculating Month
    let m = today.getMonth() - birthDate.getMonth();

    //Checking the condition if the Birthday Month is the same but Date has not come
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    //Output Age
    document.getElementById('result').innerHTML = age;

}