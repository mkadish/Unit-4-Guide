var gems = 0;
var wins = 0;
var losses = 0;
var enemy = 0;
var aleph = 0
var bet = 0
var gimel = 0
var dalet = 0
var score = 0;
var turns = 0;
var bonus = 0;
    
function startGame() {
    enemy = Math.floor(Math.random()*101+19);
    $("#RachelRiley").text(enemy);
    $("#scoreboard").html("<center>Your Totals : </center><br>Wins: " + wins + "<br>Losses: " + losses + "<br>Winning %: " + Math.floor(100*(wins/(wins+losses))) + "%<br>Gem Total: " + gems);
    $("#value").html("<center>Current Sum:<br>" + score + "</center>");
    bonus = 0;
    score = 0;
    turns = 0;
    $("#value").html("<center>Current Sum:<br>" + (score) + "</center>");
    aleph = Math.floor(Math.random() * 12 + 1);
    bet = Math.floor(Math.random() * 12 + 1);
    gimel = Math.floor(Math.random() * 12 + 1);
    dalet = Math.floor(Math.random() * 12 + 1);
    console.log("white");
    
    //for (var i=0; i<4; i++){
    //    gems[i] = Math.floor(Math.random()*12+1);
    //   

    $("#gem1").html("<img src= 'assets/images/" + Math.floor(Math.random()*59) +".gif' width='100' height = '100'>");
    $("#gem1").attr("value", aleph);
    $("#gem2").html("<img src= 'assets/images/" + Math.floor(Math.random()*59) +".gif' width='100' height = '100'> <number=");
    $("#gem2").attr("value", bet);
    $("#gem3").html("<img src= 'assets/images/" + Math.floor(Math.random()*59) +".gif' width='100' height = '100'> <number=");
    $("#gem3").attr("value", gimel);
    $("#gem4").html("<img src= 'assets/images/" + Math.floor(Math.random()*59) +".gif' width='100' height = '100'> <number=");
    $("#gem4").attr("value", dalet);   
}

    function turn() {
        turns++;
        $("#value").html("<center>Current Sum:<br>" + (score) + "</center>");
        if (score == enemy) {
            $("#RachelRiley").html("<color=yellow>"+enemy+"<br> VICTORY! </font>" );
            wins++;
            if (turns < 25) {
                bonus = Math.floor((25 - turns)/3)};
                gems = gems + 1 + bonus; 
                console.log("RED");
        //    newgame()
            startGame()
        };
        if (enemy < score) {
            $("#RachelRiley").attr("<color=yellow>"+enemy+"<br> YOU LOSE! </font>" );
            $("#RachelRiley").html("<color=yellow>"+enemy+"<br> YOU LOSE! </font>" );
                losses++;
                //$(".gem").on("click", function() {
               //     console.log("YELLOW" + score + enemy);
            //newgame()}
            console.log("yellow");
            startGame()};
        }
                

    $(".gem").on("click", function() {    
    console.log($(this).attr("value"))
    score = score + parseInt($(this).attr("value"));
    turn();
    })



 //   $.("click", function() {
//$(#"RachelRiley")
//
    
//function newgame() {
  //  $(".gem").on("click", function() {
    //    console.log("black");
      //  startGame();
    //})}

console.log("green");
startGame()

//start of game
//
//four gems appear, each with their own number
//main number shows up

//clickthe buttons raises the number
//
//if victory
// - number is gold, you win appears
//if loss number turns grey, you lose
//
//click to start over