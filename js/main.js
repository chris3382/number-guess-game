let store_random_number = Math.floor(Math.random()*100);
console.log(store_random_number);

const emptyText = 0;
let buttonHits = 0;
let feedbackMsg ='';

function submitGuessed ()
{
    if(buttonHits>=10)
    {
        document.querySelector('#guess-btn').disabled = true;
        document.querySelector('#guessNo').disabled = true;
        feedbackMsg = document.querySelector('.game-container').appendChild(document.createElement('p'));
        feedbackMsg.textContent = `Game Over`;
    }

    let guessNo = document.querySelector('#guessNo').value;
    document.querySelector('#guessNo').value='';


    if(Number(guessNo) === store_random_number)
    {
        feedbackMsg = document.querySelector('.game-container').appendChild(document.createElement('p'));
        feedbackMsg.textContent = `${store_random_number} is the correct guess!!`;
        document.querySelector('#guess-btn').disabled = true;
        document.querySelector('#guessNo').disabled = true;
    }
    else
    {
        if(guessNo == '')
        {
            document.querySelector('#prevNo').style.display='block';
            document.querySelector('#prevNo').textContent+=' '+emptyText;
            feedbackMsg = document.querySelector('.game-container').appendChild(document.createElement('p'));
            feedbackMsg.textContent = `Wrong Answer`;
            buttonHits++;

        }
        else
        {
            document.querySelector('#prevNo').style.display='block';
            document.querySelector('#prevNo').textContent+=' '+guessNo;
            feedbackMsg = document.querySelector('.game-container').appendChild(document.createElement('p'));
            feedbackMsg.textContent = `Wrong Answer`;
            buttonHits++;
        }

    }

}