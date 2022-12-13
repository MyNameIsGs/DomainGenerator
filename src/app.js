
//⬇⬇⬇ Options ⬇⬇⬇
let pronoun = ['the','our'];
let adj = ['great', 'big','little' ];
let noun = ['jogger','racoon'];
let topLvldomain = ['.com','.net','.co','.mx','.tv']

//⬇⬇⬇ Code ⬇⬇⬇
for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
            for (let t = 0; t < topLvldomain.length; t++) {
                console.log (`${pronoun[p]}${adj[a]}${noun[n]}${topLvldomain[t]}`)
            }
        }
    }    
}