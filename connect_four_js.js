var P_one = prompt("Player one: Enter your name and you will be blue!")

var P_two = prompt("Player two: Enter your name and you will be red!")

var rows = $('tr')
var cols = $('td')

$('#P_name').text(P_one + ", it is your turn, please pick a column and drop a blue chip")

count = [35, 35, 35, 35, 35, 35, 35]

    $('td').click(function() {
        var text = $('#P_name').text()
        var spl = text.split(',')
        var name1 = spl[0]

            var index = (cols.index(this))%7;
            c = count[index];
            cell = cols[index + c];


            console.log($(this));

            if(name1 === P_one){
            $('#P_name').text(P_two + ", it is your turn, please pick a column and drop a red chip")
            $(cell).css('background', 'rgb(86, 151, 255)')
            count[index] = count[index] - 7;

            }
            else if(name1 === P_two) {
                $('#P_name').text(P_one + ", it is your turn, please pick a column and drop a blue chip")
                $(cell).css('background', 'rgb(237, 45, 73)')
                count[index] = count[index] - 7;

            }


            for(var i=35; i<42; i++){
                for(var j=i; j<i+3;){
                    if(($(cols[j]).css('background') === $(cols[j+1]).css('background')) && ($(cols[j+1]).css('background-color') != "rgb(128, 128, 128)") )
                    {
                    j++;

                    if(j === i+3){   //to be removed
                        console.log("j is 3");
                        $('#P_name').text(name1 + " won the game! To restart, Refresh the page")
                        break
                    }

                    }
                    else {
                        break
                    }
                }


            }

            for(var i=28; i<35; i++){
                for(var j=i; j<i+3;){
                    if(($(cols[j]).css('background') === $(cols[j+1]).css('background')) && ($(cols[j+1]).css('background-color') != "rgb(128, 128, 128)") )
                    {
                    j++;

                    if(j === i+3){   //to be removed
                        console.log("j is 3");
                        $('#P_name').text(name1 + " won the game! To restart, Refresh the page")
                        break
                    }

                    }
                    else {
                        break
                    }
                }


            }

            for(var i=21; i<28; i++){
                for(var j=i; j<i+3;){
                    if(($(cols[j]).css('background') === $(cols[j+1]).css('background')) && ($(cols[j+1]).css('background-color') != "rgb(128, 128, 128)") )
                    {
                    j++;

                    if(j === i+3){   //to be removed
                        console.log("j is 3");
                        $('#P_name').text(name1 + " won the game! To restart, Refresh the page")
                        break
                    }

                    }
                    else {
                        break
                    }
                }


            }

            for(var i=14; i<21; i++){
                for(var j=i; j<i+3;){
                    if(($(cols[j]).css('background') === $(cols[j+1]).css('background')) && ($(cols[j+1]).css('background-color') != "rgb(128, 128, 128)") )
                    {
                    j++;

                    if(j === i+3){   //to be removed
                        console.log("j is 3");
                        $('#P_name').text(name1 + " won the game! To restart, Refresh the page")
                        break
                    }

                    }
                    else {
                        break
                    }
                }


            }

            for(var i=7; i<14; i++){
                for(var j=i; j<i+3;){
                    if(($(cols[j]).css('background') === $(cols[j+1]).css('background')) && ($(cols[j+1]).css('background-color') != "rgb(128, 128, 128)") )
                    {
                    j++;

                    if(j === i+3){   //to be removed
                        console.log("j is 3");
                        $('#P_name').text(name1 + " won the game! To restart, Refresh the page")
                        break
                    }

                    }
                    else {
                        break
                    }
                }


            }

            for(var i=0; i<7; i++){
                for(var j=i; j<i+3;){
                    if(($(cols[j]).css('background') === $(cols[j+1]).css('background')) && ($(cols[j+1]).css('background-color') != "rgb(128, 128, 128)") )
                    {
                    j++;

                    if(j === i+3){   //to be removed
                        console.log("j is 3");
                        $('#P_name').text(name1 + " won the game! To restart, Refresh the page")
                        break
                    }

                    }
                    else {
                        break
                    }
                }


            }
        })
