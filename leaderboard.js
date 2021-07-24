'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

export function climbingLeaderboard(ranked, player) {
    if(ranked.length === 0 && player.length === 0) {
        return [];
    }
    else if(ranked.length !== 0 && player.length === 0) {
        return [];
    }
    else if(ranked.length === 0 && player.length !== 0) {
        let result = [];
        for (let i = 0; i < player.length; i++) {
            result.push(1);
        }
        return result;
    }
    else {
        let result = [];
        ranked = ranked.filter(function(item, pos) {
            return ranked.indexOf(item) == pos;
        })
        player.map(playerScore => {
            if (ranked.indexOf(playerScore) !== -1) {
                result.push(ranked.indexOf(playerScore) + 1);
            }
            else {
                if (playerScore < ranked[ranked.length - 1]) {
                    result.push(ranked.length + 1);
                }
                else {
                    for(let i = 0; i < ranked.length; i++) {
                      if (playerScore > ranked[i]) {
                            result.push(i + 1);
                            break;
                       }
                       else {
                             continue;
                         }
                     }
                }
            }
        });
        return result;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rankedCount = parseInt(readLine().trim(), 10);

    const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

    const playerCount = parseInt(readLine().trim(), 10);

    const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

    const result = climbingLeaderboard(ranked, player);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
