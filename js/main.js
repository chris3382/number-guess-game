let store_random_number = Math.floor(Math.random()*100);
console.log(store_random_number);

const emptyText = 0;
let buttonHits = 0;

function submitGuessed ()
{
    if(buttonHits>=10)
    {
        document.querySelector('#guess-btn').disabled = true;
        document.querySelector('#guessNo').disabled = true;
        document.querySelector("#feedback_content").classList.add("error");
        document.querySelector("#feedback_content").textContent='GAME OVER';
        document.querySelector('#reset-btn').style.display='block';
        return;
    }

    let guessNo = document.querySelector('#guessNo').value;
    document.querySelector('#guessNo').value='';


    if(Number(guessNo) === store_random_number)
    {
        feedbackMsg = document.querySelector('.game-container').appendChild(document.createElement('p'));
        document.querySelector('#guess-btn').disabled = true;
        document.querySelector('#guessNo').disabled = true;
        document.querySelector("#feedback_content").classList.add("success");
        document.querySelector("#feedback_content").textContent='Thats a correct guess!!';
    }
    else
    {
        if(guessNo == '')
        {
            document.querySelector('#prevNo').style.display='block';
            document.querySelector('#prevNo').textContent+=' '+emptyText;
            buttonHits++;
            document.querySelector("#feedback_content").classList.add("error");
            document.querySelector("#feedback_content").textContent='Thats a wrong guess!!';

        }
        else
        {
            document.querySelector('#prevNo').style.display='block';
            document.querySelector('#prevNo').textContent+=' '+guessNo;
            buttonHits++;
            document.querySelector("#feedback_content").classList.add("error");
            document.querySelector("#feedback_content").textContent='Thats a wrong guess!!';
        }

    }

}

function resetGame()
{
    buttonHits=0;
    document.querySelector('#guess-btn').disabled = false;
    document.querySelector('#guessNo').disabled = false;
    document.querySelector("#feedback_content").classList.remove("error");
    document.querySelector("#feedback_content").textContent='';
    document.querySelector('#reset-btn').style.display='none';
    document.querySelector('#prevNo').style.display='none';
    document.querySelector('#prevNo').textContent='Numbers guessed :';

    store_random_number = Math.floor(Math.random()*100);
    console.log(store_random_number);

}