var arr = [
    "Ali", "Ahmed", "Areeba", "Ayan", "Amna",
    "Bilal", "Bushra", "Bakhtawar", "Basit", "Beenish",
    "Christopher", "Caroline", "Claire", "Caleb", "Chloe",
    "Daniyal", "Dua", "Danish", "Dania", "David",
    "Ehsan", "Emma", "Emily", "Elias", "Emaan",
    "Faizan", "Fatima", "Farah", "Fawad", "Fiza",
    "Ghulam", "Ghazala", "Gabriel", "Grace", "George",
    "Hamza", "Hania", "Hassan", "Hina", "Hoorain",
    "Ibrahim", "Iqra", "Irfan", "Imran", "Isla",
    "Junaid", "Javeria", "James", "Jasmine", "Jacob",
    "Kashif", "Komal", "Khadija", "Kevin", "Kiran",
    "Laila", "Laiba", "Liam", "Layla", "Leo",
    "Muneeb", "Maryam", "Mehreen", "Mansoor", "Maira",
    "Nimra", "Nida", "Noman", "Noor", "Nathan",
    "Omar", "Olivia", "Owais", "Oscar", "Opal",
    "Palwasha", "Peter", "Parveen", "Perry", "Paul",
    "Qasim", "Quratulain", "Qasim", "Quincy", "Qamar",
    "Rizwan", "Rania", "Rehan", "Rachel", "Rameen",
    "Saad", "Sara", "Sana", "Sufyan", "Sameer",
    "Tariq", "Tania", "Tahir", "Talia", "Thomas",
    "Umer", "Urooj", "Usman", "Uzma", "Umair",
    "Vicky", "Victor", "Victoria", "Violet", "Vince",
    "Waleed", "Warda", "Waqar", "Walter", "Wania",
    "Xander", "Xara", "Xenia", "Xavier", "Ximena",
    "Yasir", "Yusra", "Yusuf", "Yasmeen", "Yasir",
    "Zain", "Zara", "Zoha", "Zubair", "Zeeshan"
];

var btn = document.querySelectorAll("button");
var resultDiv = document.querySelector(".result");


for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (event) => {
        var arr2 = []

        for (var j = 0; j < arr.length; j++) {
            if (event.target.innerHTML == arr[j][0]) {
                arr2.push(arr[j])
                console.log(arr[j])
            }
        }

        if (arr2.length > 0) {
            var randomIndex = Math.floor(Math.random() * arr2.length);
            console.log(arr2);
            var selectedName = arr2[randomIndex];
            resultDiv.innerHTML = "Selected Name: " + selectedName;
            var utterance = new SpeechSynthesisUtterance(selectedName);
            speechSynthesis.speak(utterance);
        } else {
            resultDiv.innerHTML = "No names found!";
        }
    })
}